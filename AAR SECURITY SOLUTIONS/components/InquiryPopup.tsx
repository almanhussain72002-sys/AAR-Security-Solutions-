"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { InquiryForm } from "@/components/InquiryForm";

const SESSION_KEY = "aar-inquiry-popup-closed";

export function InquiryPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = window.scrollY / scrollable;
      if (progress >= 0.35 && progress <= 0.45) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/62 px-4 backdrop-blur-2xl fade-in" role="dialog" aria-modal="true">
      <div className="glass-card relative w-full max-w-2xl rounded-[28px] p-6 md:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close inquiry form"
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white transition hover:bg-electric/20"
        >
          <X size={18} />
        </button>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Free site inspection</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Secure your property with a tailored AAR solution.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/62">
          Tell us what you need. Our team will help you choose the right security, automation, or networking setup.
        </p>
        <div className="mt-6">
          <InquiryForm compact />
        </div>
      </div>
    </div>
  );
}
