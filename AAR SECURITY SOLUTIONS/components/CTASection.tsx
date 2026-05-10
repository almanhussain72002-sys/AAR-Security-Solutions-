import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { whatsappUrl } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-blue-sheen py-16 text-white md:py-24">
      <div className="section-shell grid items-center gap-8 md:grid-cols-[1.2fr_auto]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/66">Free consultation</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Get a security plan designed around your property, budget, and growth.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
            Book a site inspection for CCTV, smart locks, access control, automation, networking, fire alarm, or guard
            smart guard patrol solutions in Mangalore and Karnataka.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <ButtonLink href="/request-quote" variant="secondary">
            Get Free Site Inspection
          </ButtonLink>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/12"
          >
            <MessageCircle size={18} />
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
