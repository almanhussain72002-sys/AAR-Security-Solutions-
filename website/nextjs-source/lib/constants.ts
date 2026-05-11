export const company = {
  name: "AAR Security Solutions",
  tagline: "Smart Security. Complete Protection.",
  phone: "7353842099",
  email: "info@aarsecuritysolutions.com",
  location: "Mangalore, Karnataka",
  whatsappMessage:
    "Hello AAR Security Solutions, I would like to know more about your services."
};

export const whatsappUrl = `https://wa.me/91${company.phone}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" }
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/aarsecuritysolutions" },
  { label: "Facebook", href: "https://www.facebook.com/aarsecuritysolutions" },
  { label: "X/Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "WhatsApp", href: whatsappUrl }
];
