import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AAR Security Solutions for CCTV, smart locks, automation, fire alarm, networking, and security services in Mangalore."
};

export default function ContactPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Contact"
            title="Start with a free site inspection."
            text="Share your requirement and location. We will help you plan the right system."
          />
        </div>
      </section>
      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-card rounded-[24px] p-8">
            <h2 className="text-2xl font-semibold">AAR Security Solutions</h2>
            <p className="mt-3 text-white/64">{company.tagline}</p>
            <div className="mt-8 space-y-3 text-sm text-white/70">
              <p>Phone: {company.phone}</p>
              <p>Location: {company.location}</p>
              <p>Coverage: Mangalore and Karnataka</p>
            </div>
          </div>
          <div className="glass-card rounded-[24px] p-5 md:p-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
