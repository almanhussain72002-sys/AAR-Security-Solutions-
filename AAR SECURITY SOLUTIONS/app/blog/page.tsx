import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Security tips, CCTV guidance, smart lock advice, and home automation insights from AAR Security Solutions."
};

const posts = [
  ["How to Choose CCTV Cameras for Your Home in Mangalore", "A practical guide to coverage, night vision, storage, and mobile viewing."],
  ["Smart Door Locks: What to Check Before Installation", "Door compatibility, access modes, emergency backup, and daily convenience."],
  ["Why Apartments Need Integrated Boom Barrier and CCTV Systems", "How vehicle access control and surveillance improve accountability."]
];

export default function BlogPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Blog" title="Security insights for modern properties." />
        </div>
      </section>
      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {posts.map(([title, text]) => (
            <Link
              key={title}
              href="/contact"
              className="glass-card group rounded-[20px] p-7 transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-premium"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Guide</p>
              <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/64">{text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                Talk to AAR <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
