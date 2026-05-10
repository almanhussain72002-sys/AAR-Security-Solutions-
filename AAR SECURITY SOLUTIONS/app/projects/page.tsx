import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured AAR Security Solutions projects for CCTV, access control, automation, fire alarm, and networking systems."
};

export default function ProjectsPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Projects"
            title="Representative project stories."
            text="Use these as polished placeholders until you add real client case studies and site photographs."
          />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            ["Residential CCTV + Smart Lock", "A connected home security upgrade with HD surveillance, mobile monitoring, and keyless entry."],
            ["Commercial Access Control", "Biometric access and entry management for a growing office with restricted zones."],
            ["Apartment Boom Barrier", "Vehicle access automation with structured entry control and guard-friendly operation."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-[20px] bg-white p-7 shadow-[0_14px_55px_rgba(10,42,102,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Featured</p>
              <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/64">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
