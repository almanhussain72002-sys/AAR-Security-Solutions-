import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Factory,
  Home,
  Hotel,
  MessageCircle,
  Shield,
  Store,
  Wifi
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { InquiryForm } from "@/components/InquiryForm";
import { InquiryPopup } from "@/components/InquiryPopup";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { company, whatsappUrl } from "@/lib/constants";

const profileHighlights = [
  "Integrated security",
  "Automation",
  "Networking",
  "Ongoing support"
];

const process = [
  ["01", "Free site inspection", "We study your property, risk areas, entry points, wiring routes, and coverage needs."],
  ["02", "System design", "You get a clear recommendation for cameras, access, automation, networking, and safety systems."],
  ["03", "Professional installation", "Our team handles neat mounting, cabling, configuration, testing, and handover."],
  ["04", "AMC and upgrades", "We keep your systems healthy with maintenance, troubleshooting, and upgrade planning."]
];

const industries = [
  { name: "Homes & Villas", icon: Home, text: "CCTV, smart locks, automation, video door phones, and Wi-Fi." },
  { name: "Apartments", icon: Building2, text: "Boom barriers, visitor systems, surveillance, fire alarm, and patrol monitoring." },
  { name: "Offices", icon: Wifi, text: "Access control, biometrics, networking, IT infrastructure, and conference rooms." },
  { name: "Retail & Hotels", icon: Hotel, text: "Customer-area surveillance, Wi-Fi, intercom, and operational security." },
  { name: "Factories & Warehouses", icon: Factory, text: "Perimeter coverage, vehicle control, fire alarm, and guard patrol tracking." },
  { name: "Commercial Buildings", icon: Store, text: "Integrated access, CCTV, safety, networking, and support under one plan." }
];

const whyChoose = [
  "Free Site Inspection",
  "Professional Installation",
  "Premium Products",
  "Customized Solutions",
  "Local Mangalore Support",
  "AMC & Upgrade Support",
  "End-to-End Service",
  "Clear Project Ownership"
];

export default function HomePage() {
  return (
    <main>
      <InquiryPopup />
      <section className="premium-gradient min-h-screen overflow-hidden pb-16 pt-28 md:pt-36">
        <div className="section-shell grid min-h-[calc(100vh-130px)] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <p className="eyebrow-pill inline-flex rounded-full px-4 py-2 text-sm font-semibold">
              AAR Security Solutions | Mangalore, Karnataka
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl xl:text-[82px]">
              Smart Security. Complete Protection.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/70 md:text-2xl">
              Built to protect what matters. Designed to work without failure.
            </p>
            <div className="pdf-blue-bar mt-8" aria-hidden="true" />
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              AAR Security Solutions provides end-to-end security, automation, and technology solutions for homes,
              apartments, offices, warehouses, and commercial buildings.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get Free Site Inspection</ButtonLink>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10 hover:shadow-premium"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-electric/20 blur-3xl" aria-hidden="true" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] border border-white/12 bg-mist shadow-premium">
              <Image
                src="/images/home-hero-security.jpg"
                alt="Luxury property with integrated smart security systems"
                fill
                priority
                className="object-cover brightness-[0.78] contrast-[1.12] saturate-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/35 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dark-section border-y border-white/8 py-6">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {profileHighlights.map((badge) => (
            <div key={badge} className="glass-card flex items-center gap-3 rounded-2xl px-4 py-4">
              <BadgeCheck className="text-electric" size={20} />
              <span className="text-sm font-semibold text-white/76">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Introduction"
              title="Protecting what matters most."
              text="Integrated security, automation, networking, and support for modern properties. Every system is planned around real site conditions, clean installation, and dependable long-term use."
            />
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {[
              "Homes and villas",
              "Apartments and gated communities",
              "Offices and commercial buildings",
              "Warehouses and industrial sites"
            ].map((item) => (
              <div key={item} className="profile-cell rounded-[18px] p-6">
                <Shield className="text-electric" size={24} />
                <p className="mt-5 text-lg font-semibold text-white">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Services Overview"
              title="Security, automation, IT, and ongoing support delivered as one coordinated service."
              text="From CCTV and smart access to fire safety, networking, and AMC maintenance, AAR builds systems that work together instead of standing alone."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={Math.min(index * 0.03, 0.18)}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/services" variant="secondary">
              View Complete Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading eyebrow="Detailed Services" title="Capabilities built for modern properties." />
          </Reveal>
          <div className="mt-12 grid overflow-hidden rounded-[24px] border border-white/10 md:grid-cols-2">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="profile-cell p-6">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{service.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading eyebrow="Our Process" title="A clean path from inspection to long-term support." />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {process.map(([number, title, text]) => (
              <Reveal key={number}>
                <div className="glass-card h-full rounded-[22px] p-6">
                  <span className="text-sm font-semibold text-electric">{number}</span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading eyebrow="Industries We Serve" title="Built around the property, not a template." />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, icon: Icon, text }) => (
              <Link
                key={name}
                href="/industries"
                className="glass-card group rounded-[20px] p-7 transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-premium"
              >
                <Icon className="text-electric" size={30} />
                <h3 className="mt-5 text-xl font-semibold">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                  View solutions <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why Choose AAR"
              title="Premium execution with clear project ownership."
              text="The profile promise is simple: site-first recommendations, professional installation, local support, and service accountability after handover."
            />
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div key={item} className="profile-cell rounded-[18px] p-5">
                <CheckCircle2 className="text-electric" size={22} />
                <p className="mt-4 font-semibold text-white">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection />

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Let's secure your space, the right way.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              Book your free site inspection today. We will help you choose the right CCTV, access control, automation,
              fire safety, networking, or AMC plan.
            </p>
            <div className="mt-8 grid gap-4 text-sm font-semibold text-white/74 sm:grid-cols-3">
              <span>Phone: +91 {company.phone}</span>
              <span>Location: {company.location}</span>
              <span>Email: {company.email}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="glass-card rounded-[24px] p-5 md:p-8">
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
