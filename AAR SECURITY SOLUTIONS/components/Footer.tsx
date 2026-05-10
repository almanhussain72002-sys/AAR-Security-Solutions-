import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { company, socialLinks } from "@/lib/constants";
import { services } from "@/data/services";

const iconMap = {
  Instagram,
  Facebook,
  "X/Twitter": Twitter,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle
};

export function Footer() {
  return (
    <footer className="bg-[#07101F] text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/aar-logo.png"
            alt="AAR Security Solutions logo"
            width={190}
            height={190}
            className="mb-5 h-14 w-auto rounded-lg object-contain"
          />
          <p className="text-2xl font-semibold">{company.name}</p>
          <p className="mt-2 text-white/64">{company.tagline}</p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((item) => {
              const Icon = iconMap[item.label as keyof typeof iconMap];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition hover:border-electric hover:bg-electric"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/44">Services</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            {services.slice(0, 8).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/44">Contact</h2>
          <div className="mt-5 space-y-3 text-sm text-white/72">
            <p>Phone: {company.phone}</p>
            <p>Location: {company.location}</p>
            <p>
              Services: CCTV, Smart Locks, Home Automation, Access Control, Boom Barriers, Fire Alarm, Networking,
              Smart Guard Patrol, IT Infrastructure.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-2 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} AAR Security Solutions. All rights reserved.</p>
          <p>Built for fast lead generation across Mangalore and Karnataka.</p>
        </div>
      </div>
    </footer>
  );
}
