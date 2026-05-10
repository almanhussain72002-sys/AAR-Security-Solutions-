export const company = {
  name: "AAR Security Solutions",
  tagline: "Smart Security. Complete Protection.",
  phone: "7353842099",
  location: "Mangalore, Karnataka",
  whatsappMessage:
    "Hi AAR Security Solutions, I am interested in your security solutions. Please contact me."
};

export const whatsappUrl = `https://wa.me/91${company.phone}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const socialLinks = [
  // Replace these placeholder URLs with your real social media links.
  { label: "Instagram", href: "https://instagram.com/aarsecuritysolutions" },
  { label: "Facebook", href: "https://facebook.com/aarsecuritysolutions" },
  { label: "X/Twitter", href: "https://x.com/aarsecurity" },
  { label: "LinkedIn", href: "https://linkedin.com/company/aar-security-solutions" },
  { label: "WhatsApp", href: whatsappUrl }
];
