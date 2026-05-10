import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, Factory, Home, Hotel, Shield, Sparkles, Wifi } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { InquiryForm } from "@/components/InquiryForm";
import { InquiryPopup } from "@/components/InquiryPopup";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { company, whatsappUrl } from "@/lib/constants";

const trustBadges = ["Free site inspection", "Mangalore & Karnataka", "AMC support", "Smart technology expertise"];
const industries = [
  { name: "Homes & Villas", icon: Home },
  { name: "Apartments", icon: Building2 },
  { name: "Offices", icon: Wifi },
  { name: "Retail & Hotels", icon: Hotel },
  { name: "Factories", icon: Factory },
  { name: "Institutions", icon: Shield }
];

export default function HomePage() {
  return (
    <main>
      <InquiryPopup />
      <section className="premium-gradient min-h-screen pb-16 pt-32 md:pt-36">
        <div className="section-shell grid min-h-[calc(100vh-160px)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="fade-up">
            <p className="inline-flex rounded-full border border-electric/20 bg-white/70 px-4 py-2 text-sm font-semibold text-navy shadow-sm">
              Premium security and smart technology company in Karnataka
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl xl:text-[78px]">
              Smart Security Solutions for Modern Homes & Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/66 md:text-xl">
              End-to-end security, automation, surveillance, networking, and smart technology solutions across Mangalore
              and Karnataka.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-quote">Get Free Site Inspection</ButtonLink>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-electric/40 hover:text-navy hover:shadow-premium"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-[#EAF2FF] shadow-premium fade-in">
            <Image
              src="/images/home-hero-security.jpg"
              alt="Premium smart security installation by AAR Security Solutions"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-6">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-3 rounded-2xl bg-mist px-4 py-4">
              <BadgeCheck className="text-electric" size={20} />
              <span className="text-sm font-semibold text-ink/76">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Services"
            title="One partner for every layer of protection."
            text="From CCTV installation in Mangalore to smart locks, fire alarms, networking, and smart guard patrol, AAR Security Solutions builds integrated systems that feel simple to use."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/services" variant="secondary">
              View All Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="Why AAR"
            title="Premium planning, neat execution, and reliable after-sales support."
            text="We design security systems around real property conditions, not generic packages. Every recommendation is made for better visibility, access, uptime, and ease of maintenance."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Local Mangalore support",
              "Clean professional installation",
              "Integrated smart systems",
              "Remote monitoring setup",
              "Transparent recommendations",
              "AMC and upgrade support"
            ].map((item) => (
              <div key={item} className="rounded-[18px] bg-white p-5 shadow-[0_12px_45px_rgba(10,42,102,0.06)]">
                <CheckCircle2 className="text-electric" size={22} />
                <p className="mt-4 font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Industries" title="Built for homes, businesses, and institutions." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, icon: Icon }) => (
              <Link
                key={name}
                href="/industries"
                className="group rounded-[20px] border border-black/6 bg-white p-7 shadow-[0_14px_55px_rgba(10,42,102,0.07)] transition hover:-translate-y-1 hover:shadow-premium"
              >
                <Icon className="text-navy" size={30} />
                <h3 className="mt-5 text-xl font-semibold">{name}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                  Explore fit <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Projects" title="Featured security transformations." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Apartment CCTV Upgrade", "Multi-camera surveillance with remote viewing and clean NVR setup."],
              ["Office Access Control", "Biometric entry, attendance visibility, and restricted area control."],
              ["Villa Smart Automation", "Smart lighting, security, door lock, and Wi-Fi coverage integration."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-[20px] bg-white p-7 shadow-[0_14px_55px_rgba(10,42,102,0.07)]">
                <Sparkles className="text-electric" size={24} />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            align="left"
            eyebrow="Testimonials"
            title="Trusted by property owners who want a clean, reliable setup."
            text="Replace these testimonials with real client reviews once available."
          />
          <div className="grid gap-5">
            {[
              "AAR planned the camera locations properly and completed the setup neatly.",
              "The smart lock and video door phone installation made our home entry much easier.",
              "Their team explained the options clearly and helped us choose the right system."
            ].map((quote) => (
              <blockquote key={quote} className="rounded-[20px] border border-black/6 bg-white p-6 shadow-[0_14px_55px_rgba(10,42,102,0.06)]">
                <p className="text-lg leading-8 text-ink/74">"{quote}"</p>
                <footer className="mt-4 text-sm font-semibold text-navy">AAR Customer</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="FAQ" title="Clear answers before your site inspection." />
          <div className="mx-auto mt-10 grid max-w-3xl gap-4">
            {[
              ["Do you work outside Mangalore?", "Yes. We serve Mangalore and other locations across Karnataka depending on the project scope."],
              ["Can you integrate CCTV with mobile viewing?", "Yes. We configure remote viewing and explain how to monitor your system securely."],
              ["Do you provide warranty and support?", "Yes. Warranty depends on selected products, and AMC support is available for long-term maintenance."]
            ].map(([q, a]) => (
              <details key={q} className="rounded-[18px] bg-white p-6 shadow-[0_14px_55px_rgba(10,42,102,0.06)]">
                <summary className="cursor-pointer text-lg font-semibold text-ink">{q}</summary>
                <p className="mt-3 text-sm leading-6 text-ink/64">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Book your free site inspection.</h2>
            <p className="mt-5 text-lg leading-8 text-ink/64">
              Phone: {company.phone}
              <br />
              Location: {company.location}
            </p>
          </div>
          <div className="rounded-[24px] bg-mist p-5 md:p-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
