export type ServiceSolution = {
  title: string;
  description: string;
  image: string;
};

export type Service = {
  title: string;
  slug: string;
  image: string;
  tagline: string;
  excerpt: string;
  overview: string;
  solutions: ServiceSolution[];
  idealFor: string[];
  process: string[];
  gallery: string[];
  imagePrompt: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
};

const usage = [
  "Homes",
  "Apartments",
  "Offices",
  "Shops",
  "Warehouses",
  "Schools",
  "Colleges",
  "Commercial Buildings"
];

const process = [
  "Site Inspection",
  "Requirement Analysis",
  "Product Selection",
  "Installation",
  "Configuration",
  "User Training",
  "AMC Support"
];

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

const serviceImage = (name: string) => `/images/services/${name}.jpg`;

const gallery = (...images: string[]) => images.map(serviceImage);

export const services: Service[] = [
  {
    title: "CCTV & Surveillance Systems",
    slug: "cctv-surveillance-systems",
    image: serviceImage("cctv-surveillance"),
    tagline: "Complete visibility for every critical corner.",
    excerpt:
      "High-definition CCTV design, installation, remote viewing, and recording solutions for homes, offices, apartments, and commercial properties.",
    overview:
      "AAR Security Solutions plans CCTV systems around real blind spots, entry points, lighting conditions, storage needs, and mobile monitoring requirements. We install clean camera layouts with DVR, NVR, IP, Wi-Fi, night vision, and remote viewing options so your property stays visible day and night.",
    solutions: [
      { title: "Dome Cameras", description: "Discreet indoor and ceiling-mounted cameras for clean coverage.", image: serviceImage("cctv-surveillance") },
      { title: "Bullet Cameras", description: "Weather-ready outdoor cameras for gates, compound walls, and perimeters.", image: serviceImage("solar-cctv") },
      { title: "IP Cameras", description: "Network-based cameras with sharper detail and scalable recording.", image: serviceImage("networking-wifi") },
      { title: "Wi-Fi Cameras", description: "Flexible wireless camera options for homes and small offices.", image: serviceImage("home-automation") },
      { title: "PTZ Cameras", description: "Pan, tilt, and zoom coverage for larger sites and open areas.", image: serviceImage("boom-barrier") },
      { title: "DVR / NVR Setup", description: "Reliable recording, backup planning, and storage configuration.", image: serviceImage("computers-it-infrastructure") },
      { title: "Remote Mobile Viewing", description: "Secure mobile access for live view, playback, and alerts.", image: serviceImage("smart-door-lock") },
      { title: "Solar CCTV", description: "Off-grid camera coverage for outdoor and remote locations.", image: serviceImage("solar-cctv") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("cctv-surveillance", "solar-cctv", "networking-wifi", "boom-barrier", "home-automation", "amc-technical-support"),
    imagePrompt:
      "Ultra-realistic premium night photograph of CCTV cameras protecting a luxury villa and commercial building, dark Apple-style lighting, electric blue security glow, sharp architectural composition, no text, no logo.",
    benefits: ["HD and IP camera options", "Remote mobile viewing", "Night vision and motion alerts", "Clean cabling and secure storage"],
    faqs: baseFaqs("CCTV"),
    keywords: ["CCTV installation in Mangalore", "CCTV installation in Karnataka", "security solutions in Mangalore"]
  },
  {
    title: "Smart Door Locks",
    slug: "smart-door-locks",
    image: serviceImage("smart-door-lock"),
    tagline: "Premium keyless entry with control you can trust.",
    excerpt:
      "Premium smart lock installation with fingerprint, PIN, RFID, mobile app, and emergency key access options.",
    overview:
      "We help you choose the right smart lock based on door type, usage pattern, access level, and finish. AAR Security Solutions handles compatibility checks, neat fitting, user setup, emergency access guidance, and handover training.",
    solutions: [
      { title: "Fingerprint Locks", description: "Fast biometric access for homes, offices, and private rooms.", image: serviceImage("smart-door-lock") },
      { title: "PIN Access", description: "Secure numeric access for family, staff, and visitors.", image: serviceImage("access-control-biometrics") },
      { title: "RFID Locks", description: "Card-based access for apartments, offices, and rental spaces.", image: serviceImage("video-door-phone-intercom") },
      { title: "Mobile App Locks", description: "Control access and records from supported mobile apps.", image: serviceImage("home-automation") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("smart-door-lock", "access-control-biometrics", "home-automation", "video-door-phone-intercom", "cctv-surveillance", "amc-technical-support"),
    imagePrompt:
      "Ultra-realistic close-up of a luxury smart digital door lock on a premium wooden door, fingerprint access, subtle blue LED glow, dark elegant interior, Apple-style product photography.",
    benefits: ["Keyless entry", "Fingerprint and PIN access", "Visitor access control", "Premium door hardware"],
    faqs: baseFaqs("smart door lock"),
    keywords: ["Smart door lock installation", "home security Mangalore", "AAR Security Solutions"]
  },
  {
    title: "Home Automation",
    slug: "home-automation",
    image: serviceImage("home-automation"),
    tagline: "Lighting, comfort, security, and control in one elegant system.",
    excerpt:
      "Elegant automation for lighting, curtains, climate, entertainment, security, and voice-controlled smart homes.",
    overview:
      "AAR Security Solutions designs practical home automation that feels simple to use every day. We connect lighting, curtains, AC, scenes, smart switches, security, and app control into a clean system that matches your lifestyle and property.",
    solutions: [
      { title: "Lighting Automation", description: "Scenes, schedules, dimming, and smart switch control.", image: serviceImage("home-automation") },
      { title: "Curtain Control", description: "Motorized curtains with app, remote, and scene integration.", image: serviceImage("smart-door-lock") },
      { title: "Security Integration", description: "CCTV, smart locks, and sensors working with your smart home.", image: serviceImage("cctv-surveillance") },
      { title: "Voice and App Control", description: "Easy control for daily routines and family use.", image: serviceImage("networking-wifi") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("home-automation", "smart-door-lock", "cctv-surveillance", "networking-wifi", "video-door-phone-intercom", "conference-room-solutions"),
    imagePrompt:
      "Ultra-realistic luxury living room at night with smartphone controlling lights, curtains, climate, and security systems, dark modern interior, blue smart-home glow, premium architectural photography.",
    benefits: ["App and voice control", "Smart scenes", "Energy-efficient routines", "Seamless security integration"],
    faqs: baseFaqs("home automation"),
    keywords: ["Home automation in Mangalore", "smart home Karnataka", "security company in Karnataka"]
  },
  {
    title: "Access Control & Biometrics",
    slug: "access-control-biometrics",
    image: serviceImage("access-control-biometrics"),
    tagline: "Only the right people enter the right spaces.",
    excerpt:
      "Secure entry management with biometric readers, RFID cards, attendance tools, and door access control.",
    overview:
      "We build access control systems for offices, schools, apartments, gyms, and facilities that need identity-based entry. From biometric readers and magnetic locks to reports and user enrollment, every system is installed for reliability and accountability.",
    solutions: [
      { title: "Fingerprint Access", description: "Fast biometric entry with user-based control.", image: serviceImage("access-control-biometrics") },
      { title: "Face Recognition", description: "Touchless identity verification for modern entrances.", image: serviceImage("video-door-phone-intercom") },
      { title: "RFID Card Access", description: "Card and tag entry for staff, residents, and members.", image: serviceImage("smart-door-lock") },
      { title: "Attendance Reports", description: "Cleaner attendance and entry logs for management.", image: serviceImage("computers-it-infrastructure") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("access-control-biometrics", "smart-door-lock", "video-door-phone-intercom", "computers-it-infrastructure", "networking-wifi", "amc-technical-support"),
    imagePrompt:
      "Ultra-realistic corporate office entrance with biometric fingerprint and facial recognition access terminal, glass doors, dark luxury interior, electric blue technology accents.",
    benefits: ["Controlled access", "Attendance reports", "Multi-door support", "Audit-friendly logs"],
    faqs: baseFaqs("access control"),
    keywords: ["Access control system installation", "biometric installation Mangalore", "security solutions in Mangalore"]
  },
  {
    title: "Video Door Phones & Intercom Systems",
    slug: "video-door-phones-intercom",
    image: serviceImage("video-door-phone-intercom"),
    tagline: "Know who is at the door before you open it.",
    excerpt:
      "Video door phone and intercom systems for safer visitor verification and smoother internal communication.",
    overview:
      "AAR Security Solutions installs video door phones and intercom systems for villas, apartments, offices, clinics, and gated properties. We plan indoor monitors, outdoor stations, wiring, gate integration, and user training for simple visitor communication.",
    solutions: [
      { title: "Video Door Phones", description: "Visitor viewing, calling, and door release options.", image: serviceImage("video-door-phone-intercom") },
      { title: "Apartment Intercom", description: "Reliable communication for flats, lobbies, and security desks.", image: serviceImage("access-control-biometrics") },
      { title: "Gate Integration", description: "Connect visitor calls with gate or door release controls.", image: serviceImage("boom-barrier") },
      { title: "Indoor Monitors", description: "Clear screens for visitor confirmation and two-way audio.", image: serviceImage("home-automation") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("video-door-phone-intercom", "access-control-biometrics", "boom-barrier", "home-automation", "smart-door-lock", "cctv-surveillance"),
    imagePrompt:
      "Ultra-realistic premium video door phone and intercom system installed near a luxury villa entrance, indoor monitor visible, dark Apple-style ambience, soft electric blue security glow.",
    benefits: ["Visitor screening", "Two-way audio", "Multi-unit support", "Gate and door integration"],
    faqs: baseFaqs("video door phone and intercom"),
    keywords: ["video door phone Mangalore", "intercom installation Karnataka", "AAR Security Solutions"]
  },
  {
    title: "Networking & Wi-Fi Solutions",
    slug: "networking-wifi-solutions",
    image: serviceImage("networking-wifi"),
    tagline: "Stable connectivity for security, work, and daily operations.",
    excerpt:
      "Reliable networking, structured cabling, routers, access points, mesh Wi-Fi, and enterprise connectivity.",
    overview:
      "Security systems are only as reliable as the network behind them. We design structured cabling, routers, switches, access points, rack layouts, and Wi-Fi coverage so your cameras, offices, homes, and devices stay connected.",
    solutions: [
      { title: "Structured Cabling", description: "Neat LAN cabling for offices, buildings, and camera systems.", image: serviceImage("networking-wifi") },
      { title: "Wi-Fi Access Points", description: "Reliable wireless coverage with planned placement.", image: serviceImage("computers-it-infrastructure") },
      { title: "Network Racks", description: "Organized rack setup with switches, routers, and cable management.", image: serviceImage("networking-wifi") },
      { title: "Secure Router Setup", description: "Professional configuration for stability and safety.", image: serviceImage("cctv-surveillance") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("networking-wifi", "computers-it-infrastructure", "conference-room-solutions", "cctv-surveillance", "home-automation", "amc-technical-support"),
    imagePrompt:
      "Ultra-realistic server rack with organized cables, enterprise switches, routers and Wi-Fi equipment, dark IT room, blue LED lighting, clean Apple-style technology photography.",
    benefits: ["Stable coverage", "Structured cabling", "Secure router setup", "Business-grade access points"],
    faqs: baseFaqs("networking and Wi-Fi"),
    keywords: ["networking Wi-Fi Mangalore", "IT infrastructure Karnataka", "security solutions in Mangalore"]
  },
  {
    title: "Boom Barriers & Automatic Gates",
    slug: "boom-barriers-automatic-gates",
    image: serviceImage("boom-barrier"),
    tagline: "Controlled vehicle access without daily friction.",
    excerpt:
      "Vehicle access systems including boom barriers, automatic gates, RFID entry, remotes, and safety sensors.",
    overview:
      "We install boom barriers and automatic gate systems for apartments, commercial buildings, parking areas, factories, and gated communities. Each setup is planned for vehicle flow, safety sensors, RFID, remotes, and long-term durability.",
    solutions: [
      { title: "Boom Barriers", description: "Fast, controlled vehicle entry for gates and parking areas.", image: serviceImage("boom-barrier") },
      { title: "Automatic Gates", description: "Motorized sliding or swing gate automation.", image: serviceImage("smart-door-lock") },
      { title: "RFID Entry", description: "Resident, staff, or vehicle tag-based access.", image: serviceImage("access-control-biometrics") },
      { title: "Safety Sensors", description: "Photocells, loops, and protection for safer operation.", image: serviceImage("fire-alarm") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("boom-barrier", "access-control-biometrics", "cctv-surveillance", "smart-door-lock", "networking-wifi", "amc-technical-support"),
    imagePrompt:
      "Ultra-realistic modern apartment entrance with automated boom barrier opening for a premium vehicle, security cabin, blue-hour lighting, cinematic premium security brand style.",
    benefits: ["Controlled vehicle entry", "RFID and remote options", "Safety sensor integration", "Durable hardware"],
    faqs: baseFaqs("boom barrier and automatic gate"),
    keywords: ["Boom barrier installation", "automatic gate installation", "security company in Karnataka"]
  },
  {
    title: "Fire Alarm Systems",
    slug: "fire-alarm-systems",
    image: serviceImage("fire-alarm"),
    tagline: "Early warning systems built for serious safety.",
    excerpt:
      "Fire detection, alarm panels, smoke detectors, hooters, manual call points, and safety-ready installation.",
    overview:
      "AAR Security Solutions installs fire alarm systems with smoke detectors, heat detectors, panels, hooters, manual call points, wiring, testing, and maintenance support. We focus on early detection, clean installation, and dependable alerts.",
    solutions: [
      { title: "Smoke Detectors", description: "Early detection for offices, apartments, and commercial areas.", image: serviceImage("fire-alarm") },
      { title: "Fire Alarm Panels", description: "Centralized alert control and zone visibility.", image: serviceImage("computers-it-infrastructure") },
      { title: "Manual Call Points", description: "Emergency activation points for occupants and staff.", image: serviceImage("fire-alarm") },
      { title: "Hooters and Strobes", description: "Audible and visual warning devices for fast response.", image: serviceImage("amc-technical-support") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("fire-alarm", "computers-it-infrastructure", "amc-technical-support", "cctv-surveillance", "networking-wifi", "access-control-biometrics"),
    imagePrompt:
      "Ultra-realistic commercial office ceiling with smoke detectors, fire alarm devices, warning panel and blue-accented dark premium lighting, clean professional interior.",
    benefits: ["Early detection", "Zoned alerts", "Compliance-ready installation", "Periodic maintenance"],
    faqs: baseFaqs("fire alarm system"),
    keywords: ["Fire alarm system installation", "fire safety Mangalore", "AAR Security Solutions"]
  },
  {
    title: "Solar CCTV Systems",
    slug: "solar-cctv-systems",
    image: serviceImage("solar-cctv"),
    tagline: "Security coverage where power and wiring are difficult.",
    excerpt:
      "Solar-powered CCTV solutions for remote sites, farms, construction zones, yards, and outdoor perimeters.",
    overview:
      "Solar CCTV helps protect locations where conventional wiring or power is limited. We plan camera placement, solar panel sizing, battery backup, mounting, network access, and remote monitoring for practical off-grid surveillance.",
    solutions: [
      { title: "Solar Camera Kits", description: "Camera, solar panel, battery, and mounting combinations.", image: serviceImage("solar-cctv") },
      { title: "Remote Monitoring", description: "Mobile access for outdoor and remote property watch.", image: serviceImage("cctv-surveillance") },
      { title: "Construction Site Security", description: "Temporary or long-term monitoring for open sites.", image: serviceImage("boom-barrier") },
      { title: "Perimeter Coverage", description: "Outdoor camera placement for boundaries and open areas.", image: serviceImage("networking-wifi") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("solar-cctv", "cctv-surveillance", "boom-barrier", "networking-wifi", "amc-technical-support", "fire-alarm"),
    imagePrompt:
      "Ultra-realistic solar-powered CCTV camera with solar panel on a remote industrial perimeter, dramatic daylight, clean installation, premium security technology look.",
    benefits: ["Off-grid surveillance", "Battery backup", "Weather-ready cameras", "Remote monitoring"],
    faqs: baseFaqs("solar CCTV"),
    keywords: ["solar CCTV systems", "CCTV installation in Karnataka", "security solutions in Mangalore"]
  },
  {
    title: "AMC & Maintenance Support",
    slug: "amc-maintenance-support",
    image: serviceImage("amc-technical-support"),
    tagline: "Keep your systems healthy after installation.",
    excerpt:
      "Annual maintenance contracts, preventive checks, repairs, upgrades, and technical support for security and IT systems.",
    overview:
      "Security systems need regular checks to stay dependable. Our AMC and maintenance support covers inspections, troubleshooting, camera alignment, network health, firmware checks, backup review, repairs, and upgrade recommendations.",
    solutions: [
      { title: "Preventive Maintenance", description: "Routine checks that reduce downtime and failures.", image: serviceImage("amc-technical-support") },
      { title: "CCTV Health Checks", description: "Camera, recording, storage, and remote-viewing verification.", image: serviceImage("cctv-surveillance") },
      { title: "Network Support", description: "Router, cabling, rack, and access-point troubleshooting.", image: serviceImage("networking-wifi") },
      { title: "Upgrade Planning", description: "Clear recommendations when your system needs improvement.", image: serviceImage("computers-it-infrastructure") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("amc-technical-support", "cctv-surveillance", "networking-wifi", "computers-it-infrastructure", "fire-alarm", "access-control-biometrics"),
    imagePrompt:
      "Ultra-realistic professional technician servicing CCTV and network equipment at a customer site, clean tools, uniform, dark premium lighting, trustworthy corporate photography.",
    benefits: ["Preventive maintenance", "Priority support", "System health checks", "Upgrade recommendations"],
    faqs: baseFaqs("AMC and maintenance support"),
    keywords: ["AMC technical support Mangalore", "CCTV maintenance Karnataka", "AAR Security Solutions"]
  },
  {
    title: "Computers, Printers & IT Infrastructure",
    slug: "computers-printers-it-infrastructure",
    image: serviceImage("computers-it-infrastructure"),
    tagline: "Business-ready IT infrastructure planned with care.",
    excerpt:
      "Computers, printers, peripherals, UPS systems, networking, structured IT setup, and maintenance for growing teams.",
    overview:
      "We help offices, schools, shops, and businesses set up practical IT infrastructure. From computers, printers, UPS, networking, and cabling to configuration and support, AAR Security Solutions keeps your technology organized and dependable.",
    solutions: [
      { title: "Computer Setup", description: "Desktop and laptop setup for offices and institutions.", image: serviceImage("computers-it-infrastructure") },
      { title: "Printer Setup", description: "Printer installation, sharing, and basic network configuration.", image: serviceImage("networking-wifi") },
      { title: "UPS and Power Backup", description: "Power protection for critical security and IT devices.", image: serviceImage("fire-alarm") },
      { title: "Office IT Cabling", description: "Clean cabling and rack planning for growing teams.", image: serviceImage("conference-room-solutions") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("computers-it-infrastructure", "networking-wifi", "conference-room-solutions", "amc-technical-support", "cctv-surveillance", "fire-alarm"),
    imagePrompt:
      "Ultra-realistic modern office workspace with computers, printers, UPS systems and organized IT infrastructure, dark premium corporate environment, subtle blue glow.",
    benefits: ["Reliable IT setup", "Hardware sourcing", "Network integration", "Support-ready infrastructure"],
    faqs: baseFaqs("computers, printers and IT infrastructure"),
    keywords: ["IT infrastructure Mangalore", "computers printers networking Karnataka", "security company in Karnataka"]
  },
  {
    title: "Conference Room & Interactive Display Solutions",
    slug: "conference-room-interactive-display-solutions",
    image: serviceImage("conference-room-solutions"),
    tagline: "Modern meeting rooms for clearer collaboration.",
    excerpt:
      "Interactive displays, video conferencing systems, microphones, speakers, cameras, and clean meeting-room technology setup.",
    overview:
      "AAR Security Solutions creates professional meeting spaces with interactive displays, conference cameras, microphones, speakers, networking, cable management, and user-friendly controls for offices, training rooms, schools, and institutions.",
    solutions: [
      { title: "Interactive Displays", description: "Large smart displays for meetings, training, and classrooms.", image: serviceImage("conference-room-solutions") },
      { title: "Video Conferencing", description: "Camera, microphone, speaker, and display integration.", image: serviceImage("networking-wifi") },
      { title: "Cable Management", description: "Clean installation that keeps the room premium and usable.", image: serviceImage("computers-it-infrastructure") },
      { title: "Room Networking", description: "Reliable network support for hybrid meetings and casting.", image: serviceImage("home-automation") }
    ],
    idealFor: usage,
    process,
    gallery: gallery("conference-room-solutions", "networking-wifi", "computers-it-infrastructure", "home-automation", "amc-technical-support", "access-control-biometrics"),
    imagePrompt:
      "Ultra-realistic executive boardroom with large interactive display, video conferencing camera, premium table, dark corporate interior, electric blue accent lighting.",
    benefits: ["Clear audio and video", "Cable-managed setup", "Hybrid meeting readiness", "Simple controls"],
    faqs: baseFaqs("conference room and interactive display solutions"),
    keywords: ["conference room solutions Mangalore", "interactive display installation", "IT infrastructure Karnataka"]
  }
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
