import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceBySlug, services } from "@/data/services";
import { company, whatsappUrl } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} in Mangalore`,
    description: `${service.excerpt} Contact AAR Security Solutions for ${service.title.toLowerCase()} in Mangalore and Karnataka.`,
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
    description: service.excerpt
  };

  return (
    <main className="pt-[var(--header-height)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="premium-gradient py-16 md:py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">AAR Service</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-6xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-white/64">{service.excerpt}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-quote">Get Free Site Inspection</ButtonLink>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10 hover:shadow-premium"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-white/12 bg-mist shadow-premium">
            <Image src={service.image} alt={`${service.title} installation`} fill priority className="object-cover brightness-[0.82] contrast-[1.08] saturate-[1.05]" />
          </div>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-3">
          {[
            ["Benefits", service.benefits],
            ["Ideal For", service.idealFor],
            ["Process", service.process]
          ].map(([title, items]) => (
            <div key={title as string} className="glass-card rounded-[22px] p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">{title as string}</h2>
              <div className="mt-6 grid gap-4">
                {(items as string[]).map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-electric" size={18} />
                    <p className="text-sm leading-6 text-white/68">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-section-alt py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="FAQ" title={`Questions about ${service.title}`} />
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

      <section className="dark-section py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Inquiry CTA</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Plan your {service.title.toLowerCase()} setup.</h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              Share your location and property type. AAR Security Solutions will help you choose the right configuration
              for Mangalore or Karnataka projects.
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
