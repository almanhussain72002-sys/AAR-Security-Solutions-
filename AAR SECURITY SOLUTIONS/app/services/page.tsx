import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CCTV, smart door locks, home automation, access control, fire alarm, networking, smart guard patrol, and IT infrastructure services by AAR Security Solutions."
};

export default function ServicesPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Services"
            title="Security, automation, networking, and smart infrastructure in one place."
            text="Choose individual solutions or build a complete connected security ecosystem for your property."
          />
        </div>
      </section>
      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
