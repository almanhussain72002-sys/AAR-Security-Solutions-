"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navItems, whatsappUrl } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#05070D]/75 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <div className="section-shell flex h-[var(--header-height)] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <Image
            src="/aar-logo-wide.png"
            alt="AAR Security Solutions logo"
            width={220}
            height={92}
            priority
            className="h-12 w-auto rounded-lg object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-white/72 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white hover:drop-shadow-[0_0_18px_rgba(10,132,255,0.5)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/request-quote"
            className="rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-electric/60 hover:bg-electric/10"
          >
            Request Quote
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#0071E3]"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-xl lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#05070D]/95 px-4 pb-6 shadow-premium backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-xl flex-col gap-1 pt-2">
            {[...navItems, { label: "Request Quote", href: "/request-quote" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-white/86 transition hover:bg-white/8"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
