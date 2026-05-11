import type { Metadata } from "next";
import { Building2, Factory, GraduationCap, Home, Hotel, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Security solutions for homes, apartments, offices, warehouses, commercial buildings, retail, hotels, factories, schools, and institutions in Karnataka."
};

const industries: { title: string; Icon: LucideIcon; text: string }[] = [
  { title: "Homes & Villas", Icon: Home, text: "Smart locks, CCTV, video door phones, automation, and Wi-Fi coverage." },
  { title: "Apartments", Icon: Building2, text: "Boom barriers, CCTV, access control, fire alarm, and smart patrol monitoring." },
  { title: "Offices", Icon: Store, text: "Biometric access, IT infrastructure, networking, conference rooms, and surveillance." },
  { title: "Hotels & Hospitality", Icon: Hotel, text: "Access control, CCTV, Wi-Fi, intercom, and operational safety systems." },
  { title: "Factories & Warehouses", Icon: Factory, text: "Perimeter CCTV, boom barriers, fire alarms, networking, and patrol tracking." },
  { title: "Schools & Institutions", Icon: GraduationCap, text: "Campus CCTV, access control, fire alarm, networking, and support." }
];

export default function IndustriesPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Security systems shaped around each property type."
              text="Every villa, school, factory, and commercial building needs a different coverage plan. AAR designs around the site."
            />
            <div className="pdf-blue-bar mx-auto mt-8" aria-hidden="true" />
          </Reveal>
        </div>
      </section>
      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, Icon, text }) => (
            <Reveal key={title}>
              <div className="glass-card h-full rounded-[20px] p-7">
                <Icon className="text-electric" size={32} />
                <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/64">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
