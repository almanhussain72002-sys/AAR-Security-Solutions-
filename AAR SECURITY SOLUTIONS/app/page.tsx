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
            <p className="eyebrow-pill inline-flex rounded-full px-4 py-2 text-sm font-semibold">
              Premium security and smart technology company in Karnataka
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl xl:text-[78px]">
              Smart Security Solutions for Modern Homes & Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
              End-to-end security, automation, surveillance, networking, and smart technology solutions across Mangalore
              and Karnataka.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-quote">Get Free Site Inspection</ButtonLink>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10 hover:shadow-premium"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-white/12 bg-mist shadow-premium fade-in">
            <Image
              src="/images/home-hero-security.jpg"
              alt="Premium smart security installation by AAR Security Solutions"
              fill
              priority
              className="object-cover brightness-[0.82] contrast-[1.08] saturate-[1.05]"
            />
          </div>
        </div>
      </section>

      <section className="dark-section border-y border-white/8 py-6">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge} className="glass-card flex items-center gap-3 rounded-2xl px-4 py-4">
              <BadgeCheck className="text-electric" size={20} />
              <span className="text-sm font-semibold text-white/76">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
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

      <section className="dark-section-alt py-20 md:py-28">
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
              <div key={item} className="glass-card rounded-[18px] p-5">
                <CheckCircle2 className="text-electric" size={22} />
                <p className="mt-4 font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Industries" title="Built for homes, businesses, and institutions." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, icon: Icon }) => (
              <Link
                key={name}
                href="/industries"
                className="glass-card group rounded-[20px] p-7 transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-premium"
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

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Projects" title="Featured security transformations." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Apartment CCTV Upgrade", "Multi-camera surveillance with remote viewing and clean NVR setup."],
              ["Office Access Control", "Biometric entry, attendance visibility, and restricted area control."],
              ["Villa Smart Automation", "Smart lighting, security, door lock, and Wi-Fi coverage integration."]
            ].map(([title, text]) => (
              <div key={title} className="glass-card rounded-[20px] p-7">
                <Sparkles className="text-electric" size={24} />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <section className="dark-section py-20 md:py-28">
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
              <blockquote key={quote} className="glass-card rounded-[20px] p-6">
                <p className="text-lg leading-8 text-white/74">"{quote}"</p>
                <footer className="mt-4 text-sm font-semibold text-navy">AAR Customer</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="FAQ" title="Clear answers before your site inspection." />
          <div className="mx-auto mt-10 grid max-w-3xl gap-4">
            {[
              ["Do you work outside Mangalore?", "Yes. We serve Mangalore and other locations across Karnataka depending on the project scope."],
              ["Can you integrate CCTV with mobile viewing?", "Yes. We configure remote viewing and explain how to monitor your system securely."],
              ["Do you provide warranty and support?", "Yes. Warranty depends on selected products, and AMC support is available for long-term maintenance."]
            ].map(([q, a]) => (
              <details key={q} className="glass-card rounded-[18px] p-6">
                <summary className="cursor-pointer text-lg font-semibold text-white">{q}</summary>
                <p className="mt-3 text-sm leading-6 text-white/64">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Book your free site inspection.</h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              Phone: {company.phone}
              <br />
              Location: {company.location}
            </p>
          </div>
          <div className="glass-card rounded-[24px] p-5 md:p-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
