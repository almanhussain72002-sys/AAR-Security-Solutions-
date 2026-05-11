import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CCTV, smart door locks, home automation, access control, video door phones, networking, boom barriers, fire alarm, solar CCTV, AMC, IT infrastructure, and conference room solutions by AAR Security Solutions."
};

export default function ServicesPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Security, automation, IT, and ongoing support delivered as one coordinated service."
              text="Choose an individual service or build a complete connected security ecosystem for your home, office, apartment, warehouse, or commercial building."
            />
            <div className="pdf-blue-bar mx-auto mt-8" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={Math.min(index * 0.025, 0.18)}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading eyebrow="Service Detail" title="Every capability mapped to a real property outcome." />
          </Reveal>
          <div className="mt-12 grid overflow-hidden rounded-[24px] border border-white/10 md:grid-cols-2">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="profile-cell p-6">
                <h2 className="text-lg font-semibold text-white">{service.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/58">{service.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                  Open page <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
