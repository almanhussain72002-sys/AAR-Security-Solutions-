import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { services } from "@/data/services";
import { socialLinks } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aarsecuritysolutions.com"),
  title: {
    default: "AAR Security Solutions | Smart Security. Complete Protection.",
    template: "%s | AAR Security Solutions"
  },
  description:
    "AAR Security Solutions provides CCTV installation, smart door locks, video door phones, access control, biometrics, fire alarms, home automation, networking, Wi-Fi, boom barriers, intercom, and AMC maintenance across Mangalore and Karnataka.",
  keywords: [
    "Security solutions in Mangalore",
    "CCTV installation in Mangalore",
    "CCTV installation in Karnataka",
    "Home automation in Mangalore",
    "Smart door lock installation",
    "Boom barrier installation",
    "Fire alarm system installation",
    "Access control system installation",
    "Security company in Karnataka",
    "AAR Security Solutions"
  ],
  openGraph: {
    title: "AAR Security Solutions",
    description: "Smart Security. Complete Protection. Security and smart technology solutions across Karnataka.",
    url: "https://www.aarsecuritysolutions.com",
    siteName: "AAR Security Solutions",
    images: [{ url: "/images/og-aar-security.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AAR Security Solutions",
    description: "Security, automation, surveillance, networking, and smart technology solutions.",
    telephone: "+917353842099",
    email: "info@aarsecuritysolutions.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN"
    },
    areaServed: ["Mangalore", "Karnataka"],
    url: "https://www.aarsecuritysolutions.com",
    sameAs: socialLinks.filter((item) => item.href && item.href !== "#").map((item) => item.href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AAR Security Solutions Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title
        }
      }))
    }
  };

  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="font-sans">
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
