import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="glass-card group overflow-hidden rounded-[20px] transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-premium"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-mist">
        <Image
          src={service.image}
          alt={`${service.title} by AAR Security Solutions`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover brightness-[0.82] contrast-[1.08] saturate-[1.05] transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-white">{service.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/64">{service.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
          Explore service <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
