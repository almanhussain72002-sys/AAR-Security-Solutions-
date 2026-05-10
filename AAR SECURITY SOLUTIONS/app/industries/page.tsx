import type { Metadata } from "next";
import { Building2, Factory, GraduationCap, Home, Hotel, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Industries",
  description: "Security solutions for homes, apartments, offices, retail, hotels, factories, schools, and institutions in Karnataka."
};

const industries: { title: string; Icon: LucideIcon; text: string }[] = [
  { title: "Homes & Villas", Icon: Home, text: "Smart locks, CCTV, video door phones, automation, and Wi-Fi coverage." },
  { title: "Apartments", Icon: Building2, text: "Boom barriers, CCTV, access control, fire alarm, and smart guard patrol." },
  { title: "Retail & Showrooms", Icon: Store, text: "Surveillance, networking, intrusion awareness, and customer-area monitoring." },
  { title: "Hotels & Hospitality", Icon: Hotel, text: "Access control, CCTV, Wi-Fi, intercom, and operational safety systems." },
  { title: "Factories", Icon: Factory, text: "Perimeter CCTV, guard patrol, boom barriers, networking, and fire alarms." },
  { title: "Schools & Institutions", Icon: GraduationCap, text: "Campus CCTV, attendance, access control, fire alarm, and IT infrastructure." }
];

export default function IndustriesPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Industries"
            title="Security systems shaped around each property type."
            text="A villa, school, factory, and commercial building all need different coverage logic. AAR plans around the site."
          />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, Icon, text }) => (
            <div key={title} className="rounded-[20px] bg-white p-7 shadow-[0_14px_55px_rgba(10,42,102,0.08)]">
              <Icon className="text-navy" size={32} />
              <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/64">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
