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
      "bg-navy text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#0071E3] hover:shadow-[0_28px_80px_rgba(10,132,255,0.42)]",
    secondary:
      "border border-white/15 bg-white/6 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10 hover:shadow-premium",
    dark: "bg-white text-[#05070D] hover:-translate-y-0.5 hover:bg-electric hover:text-white hover:shadow-glow"
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
