import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AAR Security Solutions, a premium security and smart technology company serving Mangalore and Karnataka."
};

export default function AboutPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">About AAR</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Security systems designed with the calm precision of modern technology.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/64">
            AAR Security Solutions helps homes, apartments, offices, institutions, and commercial spaces choose,
            install, and maintain security and automation systems that are practical, reliable, and easy to use.
          </p>
        </div>
      </section>
      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            align="left"
            eyebrow="Approach"
            title="Site-first recommendations, premium execution."
            text="We evaluate your property, identify coverage gaps, and recommend systems that fit the real environment rather than forcing one-size packages."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Consultative planning", "Neat installation", "Quality products", "Local support", "AMC readiness", "Conversion-focused communication"].map((item) => (
              <div key={item} className="glass-card rounded-[18px] p-6">
                <CheckCircle2 className="text-electric" />
                <p className="mt-4 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
