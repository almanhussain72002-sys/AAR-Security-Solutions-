import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-navy text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#083076] hover:shadow-[0_22px_55px_rgba(30,144,255,0.32)]",
    secondary:
      "border border-black/10 bg-white text-ink hover:-translate-y-0.5 hover:border-electric/40 hover:text-navy hover:shadow-premium",
    dark: "bg-ink text-white hover:-translate-y-0.5 hover:bg-navy hover:shadow-glow"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
