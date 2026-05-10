export type Service = {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  benefits: string[];
  idealFor: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
};

const baseFaqs = (service: string) => [
  {
    question: `Do you provide ${service} installation in Mangalore?`,
    answer:
      "Yes. AAR Security Solutions handles consultation, site inspection, installation, configuration, and support across Mangalore and nearby Karnataka locations."
  },
  {
    question: "Can I request a free site inspection?",
    answer:
      "Yes. Share your location and requirement through the inquiry form or WhatsApp, and our team will schedule a site assessment."
  },
  {
    question: "Do you offer AMC and technical support?",
    answer:
      "Yes. We provide annual maintenance, troubleshooting, system upgrades, and periodic health checks for installed systems."
  }
];

export const services: Service[] = [
  {
    title: "CCTV & Surveillance Systems",
    slug: "cctv-surveillance-systems",
    image: "/images/services/cctv-surveillance.jpg",
    excerpt:
      "High-definition CCTV design, installation, remote viewing, and recording solutions for homes, offices, apartments, and commercial properties.",
    benefits: ["HD and IP camera options", "Remote mobile viewing", "Night vision and motion alerts", "Clean cabling and secure storage"],
    idealFor: ["Homes", "Apartments", "Retail stores", "Warehouses", "Offices"],
    process: ["Site survey", "Camera placement plan", "Installation and testing", "Mobile app setup", "Support and AMC"],
    faqs: baseFaqs("CCTV"),
    keywords: ["CCTV installation in Mangalore", "CCTV installation in Karnataka", "security solutions in Mangalore"]
  },
  {
    title: "Smart Door Locks",
    slug: "smart-door-locks",
    image: "/images/services/smart-door-lock.jpg",
    excerpt:
      "Premium smart lock installation with fingerprint, PIN, RFID, mobile app, and emergency access options.",
    benefits: ["Keyless entry", "Fingerprint and PIN access", "Visitor access control", "Modern door aesthetics"],
    idealFor: ["Homes", "Villas", "Apartments", "Offices", "Rental properties"],
    process: ["Door compatibility check", "Lock recommendation", "Installation", "User setup", "Access training"],
    faqs: baseFaqs("smart door lock"),
    keywords: ["Smart door lock installation", "home security Mangalore", "AAR Security Solutions"]
  },
  {
    title: "Home Automation",
    slug: "home-automation",
    image: "/images/services/home-automation.jpg",
    excerpt:
      "Elegant automation for lighting, curtains, climate, entertainment, security, and voice-controlled smart homes.",
    benefits: ["App and voice control", "Smart scenes", "Energy convenience", "Seamless security integration"],
    idealFor: ["Luxury homes", "Apartments", "Villas", "Renovations", "New builds"],
    process: ["Lifestyle consultation", "Automation design", "Device installation", "Scene programming", "Handover"],
    faqs: baseFaqs("home automation"),
    keywords: ["Home automation in Mangalore", "smart home Karnataka", "security company in Karnataka"]
  },
  {
    title: "Access Control & Biometrics",
    slug: "access-control-biometrics",
    image: "/images/services/access-control-biometrics.jpg",
    excerpt:
      "Secure entry management with biometric readers, RFID cards, attendance integration, and door access control.",
    benefits: ["Controlled access", "Attendance reports", "Multi-door support", "Audit-friendly logs"],
    idealFor: ["Offices", "Factories", "Schools", "Gyms", "Hospitals"],
    process: ["Entry audit", "Reader selection", "Controller setup", "User enrollment", "Reporting setup"],
    faqs: baseFaqs("access control"),
    keywords: ["Access control system installation", "biometric installation Mangalore", "security solutions in Mangalore"]
  },
  {
    title: "Video Door Phones & Intercom",
    slug: "video-door-phones-intercom",
    image: "/images/services/video-door-phone-intercom.jpg",
    excerpt:
      "Video door phone and intercom systems for safer visitor verification and smoother internal communication.",
    benefits: ["Visitor screening", "Two-way audio", "Multi-unit support", "Gate and door integration"],
    idealFor: ["Apartments", "Villas", "Offices", "Clinics", "Gated properties"],
    process: ["Entry point review", "Device selection", "Wiring and mounting", "Testing", "Resident training"],
    faqs: baseFaqs("video door phone"),
    keywords: ["video door phone Mangalore", "intercom installation Karnataka", "AAR Security Solutions"]
  },
  {
    title: "Networking & Wi-Fi Solutions",
    slug: "networking-wifi-solutions",
    image: "/images/services/networking-wifi.jpg",
    excerpt:
      "Reliable networking, structured cabling, routers, access points, mesh Wi-Fi, and enterprise connectivity.",
    benefits: ["Stable coverage", "Structured cabling", "Secure router setup", "Business-grade access points"],
    idealFor: ["Homes", "Offices", "Hotels", "Schools", "Retail spaces"],
    process: ["Coverage mapping", "Network design", "Cabling", "Configuration", "Speed and stability testing"],
    faqs: baseFaqs("networking and Wi-Fi"),
    keywords: ["networking Wi-Fi Mangalore", "IT infrastructure Karnataka", "security solutions in Mangalore"]
  },
  {
    title: "Boom Barriers & Automatic Gates",
    slug: "boom-barriers-automatic-gates",
    image: "/images/services/boom-barrier.jpg",
    excerpt:
      "Vehicle access systems including boom barriers, automatic gates, RFID entry, remotes, and safety sensors.",
    benefits: ["Controlled vehicle entry", "RFID and remote options", "Safety sensor integration", "Durable hardware"],
    idealFor: ["Apartments", "Commercial buildings", "Factories", "Parking lots", "Gated communities"],
    process: ["Entry assessment", "Hardware sizing", "Foundation and installation", "Access setup", "Testing"],
    faqs: baseFaqs("boom barrier"),
    keywords: ["Boom barrier installation", "automatic gate installation", "security company in Karnataka"]
  },
  {
    title: "Fire Alarm Systems",
    slug: "fire-alarm-systems",
    image: "/images/services/fire-alarm.jpg",
    excerpt:
      "Fire detection, alarm panels, smoke detectors, hooters, manual call points, and safety-ready installation.",
    benefits: ["Early detection", "Zoned alerts", "Code-conscious installation", "Periodic maintenance"],
    idealFor: ["Offices", "Shops", "Apartments", "Warehouses", "Schools"],
    process: ["Risk review", "Device mapping", "Installation", "Panel programming", "Alarm testing"],
    faqs: baseFaqs("fire alarm system"),
    keywords: ["Fire alarm system installation", "fire safety Mangalore", "AAR Security Solutions"]
  },
  {
    title: "Solar CCTV Systems",
    slug: "solar-cctv-systems",
    image: "/images/services/solar-cctv.jpg",
    excerpt:
      "Solar-powered CCTV solutions for remote sites, farms, construction zones, yards, and outdoor perimeters.",
    benefits: ["Off-grid surveillance", "Battery backup", "Weather-ready cameras", "Remote monitoring"],
    idealFor: ["Farms", "Construction sites", "Remote yards", "Open plots", "Industrial perimeters"],
    process: ["Sunlight and site study", "Power sizing", "Mounting", "Network setup", "Monitoring handover"],
    faqs: baseFaqs("solar CCTV"),
    keywords: ["solar CCTV systems", "CCTV installation in Karnataka", "security solutions in Mangalore"]
  },
  {
    title: "Conference Room Solutions",
    slug: "conference-room-solutions",
    image: "/images/services/conference-room-solutions.jpg",
    excerpt:
      "Modern meeting room AV, displays, cameras, microphones, networking, and hybrid collaboration setup.",
    benefits: ["Clear audio and video", "Cable-managed setup", "Hybrid meeting readiness", "Simple controls"],
    idealFor: ["Offices", "Training rooms", "Boardrooms", "Schools", "Institutions"],
    process: ["Room audit", "AV design", "Installation", "Device configuration", "User training"],
    faqs: baseFaqs("conference room technology"),
    keywords: ["conference room solutions Mangalore", "IT infrastructure Karnataka", "AAR Security Solutions"]
  },
  {
    title: "Computers & IT Infrastructure",
    slug: "computers-it-infrastructure",
    image: "/images/services/computers-it-infrastructure.jpg",
    excerpt:
      "Computers, peripherals, servers, networking, structured IT setup, and maintenance for growing businesses.",
    benefits: ["Reliable IT setup", "Hardware sourcing", "Network integration", "Support-ready infrastructure"],
    idealFor: ["Offices", "Schools", "Retail stores", "Clinics", "Small businesses"],
    process: ["Requirement mapping", "Hardware planning", "Installation", "Configuration", "Maintenance support"],
    faqs: baseFaqs("IT infrastructure"),
    keywords: ["IT infrastructure Mangalore", "computers networking Karnataka", "security company in Karnataka"]
  },
  {
    title: "Parking Sensor Lights",
    slug: "parking-sensor-lights",
    image: "/images/services/parking-sensor-lights.jpg",
    excerpt:
      "Motion-based parking lighting solutions that improve safety, visibility, and energy efficiency.",
    benefits: ["Automatic lighting", "Energy savings", "Better parking visibility", "Low-maintenance setup"],
    idealFor: ["Basements", "Apartments", "Commercial parking", "Villas", "Warehouses"],
    process: ["Parking audit", "Sensor placement", "Installation", "Sensitivity setup", "Night testing"],
    faqs: baseFaqs("parking sensor light"),
    keywords: ["parking sensor lights Mangalore", "automation Karnataka", "AAR Security Solutions"]
  },
  {
    title: "Smart Guard Patrol Monitoring System",
    slug: "smart-guard-patrol-monitoring-system",
    image: "/images/services/smart-guard-patrol.jpg",
    excerpt:
      "Smart patrol tracking systems that verify guard rounds, route compliance, missed checkpoints, and alerts.",
    benefits: ["Route verification", "Missed-round alerts", "Digital reports", "Improved site discipline"],
    idealFor: ["Gated communities", "Industrial sites", "Hospitals", "Schools", "Large campuses"],
    process: ["Patrol route design", "Checkpoint tagging", "System setup", "Guard training", "Report review"],
    faqs: baseFaqs("smart guard patrol"),
    keywords: ["Smart Guard Patrol Monitoring System", "smart guard patrol Karnataka", "AAR Security Solutions"]
  },
  {
    title: "AMC & Technical Support",
    slug: "amc-technical-support",
    image: "/images/services/amc-technical-support.jpg",
    excerpt:
      "Annual maintenance contracts, preventive checks, repairs, upgrades, and technical support for security and IT systems.",
    benefits: ["Preventive maintenance", "Priority support", "System health checks", "Upgrade recommendations"],
    idealFor: ["Existing CCTV users", "Offices", "Apartments", "Institutions", "Businesses"],
    process: ["System audit", "AMC plan", "Preventive visits", "Issue resolution", "Upgrade roadmap"],
    faqs: baseFaqs("AMC and technical support"),
    keywords: ["AMC technical support Mangalore", "CCTV maintenance Karnataka", "AAR Security Solutions"]
  }
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
