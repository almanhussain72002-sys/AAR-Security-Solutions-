import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  Home,
  MessageCircle,
  Phone,
  School,
  Store,
  Warehouse,
  BriefcaseBusiness,
  Download,
  ShieldCheck
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceBySlug, services } from "@/data/services";
import { company, whatsappUrl } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const useIcons = [
  Home,
  Building2,
  BriefcaseBusiness,
  Store,
  Warehouse,
  School,
  GraduationCap,
  ShieldCheck
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} in Mangalore | AAR Security Solutions`,
    description: `${service.excerpt} Get premium ${service.title.toLowerCase()} planning, installation, and support in Mangalore and Karnataka.`,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | AAR Security Solutions`,
      description: service.excerpt,
      images: [{ url: service.image }]
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
      telephone: `+91${company.phone}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN"
      }
    },
    areaServed: ["Mangalore", "Karnataka"],
    description: service.excerpt,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: "Mangalore, Karnataka"
    }
  };

  return (
    <main className="pt-[var(--header-height)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="premium-gradient overflow-hidden py-16 md:py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <p className="eyebrow-pill inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
              Premium Service Detail
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-tight text-white md:text-6xl xl:text-7xl">
              {service.title}
            </h1>
            <p className="mt-5 text-2xl font-semibold tracking-tight text-white/84">{service.tagline}</p>
            <div className="pdf-blue-bar mt-7" aria-hidden="true" />
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">{service.excerpt}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-quote">Get Quote</ButtonLink>
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
          <Reveal delay={0.1} className="relative">
            <div className="absolute -inset-7 rounded-[42px] bg-electric/20 blur-3xl" aria-hidden="true" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] border border-white/12 bg-mist shadow-premium">
              <Image
                src={service.image}
                alt={`${service.title} by AAR Security Solutions`}
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover brightness-[0.78] contrast-[1.12] saturate-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/45 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Service Overview"
              title="Designed around your property, not a generic package."
              text={service.overview}
            />
          </Reveal>
          <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="profile-cell rounded-[18px] p-6">
                <CheckCircle2 className="text-electric" size={24} />
                <p className="mt-5 text-lg font-semibold text-white">{benefit}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Solutions Offered"
              title={`What we provide for ${service.title.toLowerCase()}.`}
              text="Each option is selected for reliability, clean installation, and long-term support."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.solutions.map((solution, index) => (
              <Reveal key={solution.title} delay={Math.min(index * 0.03, 0.18)}>
                <article className="glass-card group h-full overflow-hidden rounded-[22px] transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-premium">
                  <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover brightness-[0.75] contrast-[1.1] saturate-[1.06] transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold tracking-tight text-white">{solution.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-white/62">{solution.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading eyebrow="Where It Is Used" title="Built for residential, commercial, and institutional spaces." />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.idealFor.map((place, index) => {
              const Icon = useIcons[index % useIcons.length];
              return (
                <Reveal key={place} delay={Math.min(index * 0.025, 0.16)}>
                  <div className="profile-cell rounded-[18px] p-6">
                    <Icon className="text-electric" size={28} />
                    <h2 className="mt-5 text-lg font-semibold text-white">{place}</h2>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading eyebrow="Our Process" title="A clear process from site inspection to AMC support." />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-7">
            {service.process.map((step, index) => (
              <Reveal key={step} delay={Math.min(index * 0.03, 0.18)}>
                <div className="glass-card h-full rounded-[20px] p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-electric/40 bg-electric/12 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-base font-semibold leading-6 text-white">{step}</h2>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Image Gallery"
              title="Premium visual direction for this service."
              text="These visuals stay connected to the homepage service cards and can be replaced with project photography later."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((image, index) => (
              <Reveal key={`${image}-${index}`} delay={Math.min(index * 0.025, 0.16)}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10 bg-mist shadow-premium">
                  <Image
                    src={image}
                    alt={`${service.title} gallery image ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover brightness-[0.74] contrast-[1.12] saturate-[1.08] transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/30 via-transparent to-transparent" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <details className="glass-card rounded-[22px] p-6">
              <summary className="cursor-pointer text-base font-semibold text-white">Image generation prompt for this service</summary>
              <p className="mt-4 text-sm leading-7 text-white/64">{service.imagePrompt}</p>
            </details>
          </Reveal>
        </div>
      </section>

      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Get Started</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Need this solution for your home, office, or building?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">Contact AAR Security Solutions today.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:+91${company.phone}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-[#0071E3]"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10 hover:shadow-premium"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="/AAR-Security-Solutions.vcf"
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10 hover:shadow-premium"
              >
                <Download size={18} />
                Save Contact
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="glass-card rounded-[24px] p-5 md:p-8">
            <InquiryForm />
          </Reveal>
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title={`Questions about ${service.title}`} />
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="glass-card rounded-[18px] p-6">
                <summary className="cursor-pointer text-lg font-semibold text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-6 text-white/64">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section border-t border-white/10 py-10">
        <div className="section-shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <ButtonLink href="/services" variant="secondary">
            Back to Services
          </ButtonLink>
          <ButtonLink href="/request-quote">
            Request Quote <ArrowRight className="ml-2" size={16} />
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
