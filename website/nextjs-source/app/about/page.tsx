import type { Metadata } from "next";
import { CheckCircle2, Shield } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AAR Security Solutions, a premium security, automation, and technology company serving Mangalore and Karnataka."
};

const values = [
  "Free Site Inspection",
  "Professional Installation",
  "Premium Products",
  "Customized Solutions",
  "Local Mangalore Support",
  "AMC & Upgrade Support",
  "End-to-End Service",
  "Clear Project Ownership"
];

export default function AboutPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell max-w-5xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">About AAR</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Protecting what matters most.
            </h1>
            <div className="pdf-blue-bar mt-8" aria-hidden="true" />
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/66">
              {company.name} provides end-to-end security, automation, and technology solutions for homes, apartments,
              offices, warehouses, and commercial buildings.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Standard"
              title="Integrated security, automation, networking, and support for modern properties."
              text="We plan each project around the site, the people using it, and the level of reliability required. The goal is a clean system that protects without becoming complicated."
            />
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
              <div key={item} className="profile-cell rounded-[18px] p-6">
                <CheckCircle2 className="text-electric" size={22} />
                <p className="mt-4 font-semibold text-white">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            ["Mangalore-first support", "Local response for consultation, installation, handover, and service."],
            ["Complete project ownership", "One team coordinates security, automation, networking, and maintenance."],
            ["Reliable long-term operation", "AMC support and upgrade planning keep your systems ready as your needs grow."]
          ].map(([title, text]) => (
            <Reveal key={title}>
              <div className="glass-card h-full rounded-[22px] p-7">
                <Shield className="text-electric" size={26} />
                <h2 className="mt-5 text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
