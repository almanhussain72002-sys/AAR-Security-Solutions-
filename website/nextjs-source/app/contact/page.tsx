import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { company, whatsappUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AAR Security Solutions for CCTV, smart locks, automation, fire alarm, networking, intercom, and AMC maintenance services in Mangalore."
};

export default function ContactPage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's secure your space, the right way."
              text="Share your requirement and location. We will help you plan the right security, automation, networking, or maintenance system."
            />
            <div className="pdf-blue-bar mx-auto mt-8" aria-hidden="true" />
          </Reveal>
        </div>
      </section>
      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="grid gap-4">
            {[
              { label: "Phone", value: `+91 ${company.phone}`, Icon: Phone },
              { label: "Email", value: company.email, Icon: Mail },
              { label: "Location", value: company.location, Icon: MapPin }
            ].map(({ label, value, Icon }) => (
              <div key={label} className="profile-cell rounded-[20px] p-6">
                <Icon className="text-electric" size={24} />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/42">{label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{value}</p>
              </div>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              WhatsApp AAR Security Solutions
            </a>
          </Reveal>
          <Reveal delay={0.1} className="glass-card rounded-[24px] p-5 md:p-8">
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
