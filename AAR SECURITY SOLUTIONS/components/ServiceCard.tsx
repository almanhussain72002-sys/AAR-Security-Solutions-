import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-[20px] border border-black/6 bg-white shadow-[0_14px_55px_rgba(10,42,102,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-premium"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <Image
          src={service.image}
          alt={`${service.title} by AAR Security Solutions`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{service.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/62">{service.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
          Explore service <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
