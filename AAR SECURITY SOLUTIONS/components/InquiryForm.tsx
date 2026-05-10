"use client";

import { useState } from "react";
import { services } from "@/data/services";

type InquiryFormProps = {
  compact?: boolean;
};

export function InquiryForm({ compact = false }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log("AAR inquiry submitted", payload);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Request failed");
      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "dark-input peer h-12 w-full rounded-2xl px-4 pt-4 text-sm outline-none transition placeholder:text-transparent";
  const labelClass =
    "pointer-events-none absolute left-4 top-1.5 text-[11px] font-medium text-white/46 transition peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-electric";

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
      {[
        ["name", "Name", "text"],
        ["phone", "Phone Number", "tel"],
        ["email", "Email", "email"],
        ["location", "Location", "text"]
      ].map(([name, label, type]) => (
        <label key={name} className="relative block">
          <input className={inputClass} name={name} type={type} placeholder={label} required={name !== "email"} />
          <span className={labelClass}>{label}</span>
        </label>
      ))}

      <label className="relative block">
        <select className={`${inputClass} pt-3 text-white/82`} name="propertyType" defaultValue="">
          <option value="" disabled>
            Property Type
          </option>
          <option>Home</option>
          <option>Apartment</option>
          <option>Office</option>
          <option>Commercial</option>
          <option>Industrial</option>
        </select>
      </label>

      <label className="relative block">
        <select className={`${inputClass} pt-3 text-white/82`} name="serviceRequired" defaultValue="">
          <option value="" disabled>
            Service Required
          </option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </label>

      <label className={`relative block ${compact ? "" : "md:col-span-2"}`}>
        <textarea
          className="dark-input peer min-h-28 w-full rounded-2xl px-4 pt-6 text-sm outline-none transition placeholder:text-transparent"
          name="message"
          placeholder="Message"
        />
        <span className={labelClass}>Message</span>
      </label>

      <div className={`flex flex-col gap-3 ${compact ? "" : "md:col-span-2 md:flex-row md:items-center"}`}>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-7 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#0071E3] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Submitting..." : "Submit Inquiry"}
        </button>
        {status === "success" ? <p className="text-sm font-medium text-emerald-600">Thank you. We will contact you shortly.</p> : null}
        {status === "error" ? <p className="text-sm font-medium text-red-600">Please try again or WhatsApp us directly.</p> : null}
      </div>
    </form>
  );
}
