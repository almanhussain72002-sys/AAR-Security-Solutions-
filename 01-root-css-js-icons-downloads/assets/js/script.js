const phone = "7353842099";
const whatsappMessage = "Hello AAR Security Solutions, I would like to know more about your services.";
const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(whatsappMessage)}`;

const usage = ["Homes", "Apartments", "Offices", "Shops", "Warehouses", "Schools", "Colleges", "Commercial Buildings"];
const processSteps = ["Site Inspection", "Requirement Analysis", "Product Selection", "Installation", "Configuration", "User Training", "AMC Support"];
const img = (name) => `assets/images/services/${name}.jpg`;
const imgPng = (name) => `assets/images/services/${name}.png`;
const gallery = (...items) => items.map(img);

const services = [
  {
    title: "CCTV & Surveillance Systems",
    slug: "cctv-surveillance-systems",
    image: "assets/service-images/cctv-surveillance-systems-cover.webp",
    tagline: "Complete visibility for every critical corner.",
    description: "High-definition CCTV design, installation, remote viewing, and recording solutions for homes, offices, apartments, and commercial properties.",
    overview: "AAR Security Solutions plans CCTV systems around real blind spots, entry points, lighting conditions, storage needs, and mobile monitoring requirements. We install clean camera layouts with DVR, NVR, IP, Wi-Fi, night vision, and remote viewing options so your property stays visible day and night.",
    benefits: ["HD and IP camera options", "Remote mobile viewing", "Night vision and motion alerts", "Clean cabling and secure storage"],
    solutions: [
      ["Dome Cameras", "Indoor ceiling-mounted dome cameras for homes, shops, and offices.", "assets/service-images/cctv-surveillance-systems-dome-cameras.webp"],
      ["Bullet Cameras", "Outdoor bullet cameras overlooking gates, driveways, and perimeters.", "assets/service-images/cctv-surveillance-systems-bullet-cameras.webp"],
      ["IP Cameras", "Network surveillance cameras with sharper detail and scalable coverage.", "assets/service-images/cctv-surveillance-systems-ip-cameras.webp"],
      ["DVR / NVR Setup", "Organized recording and storage equipment for dependable playback.", "assets/service-images/cctv-surveillance-systems-dvr-nvr-setup.webp"],
      ["PTZ Cameras", "High-end rotating cameras for wide-area monitoring and zoom control.", "assets/service-images/cctv-surveillance-systems-ptz-cameras.webp"],
      ["Solar CCTV", "Solar-powered camera coverage for remote and outdoor locations.", "assets/service-images/cctv-surveillance-systems-solar-cctv.webp"],
      ["Mobile Monitoring", "Smartphone live view, playback, and alerts from anywhere.", "assets/service-images/cctv-surveillance-systems-mobile-monitoring.webp"],
      ["AMC & Maintenance", "Technician support, camera cleaning, health checks, and repairs.", "assets/service-images/cctv-surveillance-systems-amc-and-maintenance.webp"]
    ],
    gallery: ["assets/service-images/cctv-surveillance-systems-dome-cameras.webp", "assets/service-images/cctv-surveillance-systems-bullet-cameras.webp", "assets/service-images/cctv-surveillance-systems-ip-cameras.webp", "assets/service-images/cctv-surveillance-systems-dvr-nvr-setup.webp", "assets/service-images/cctv-surveillance-systems-ptz-cameras.webp", "assets/service-images/cctv-surveillance-systems-solar-cctv.webp"],
    prompt: "Ultra-realistic premium night photograph of CCTV cameras protecting a luxury villa and commercial building, dark Apple-style lighting, electric blue security glow, sharp architectural composition, no text, no logo."
  },
  {
    title: "Smart Door Locks",
    slug: "smart-door-locks",
    image: "assets/service-images/smart-door-locks-cover.webp",
    tagline: "Premium keyless entry with control you can trust.",
    description: "Premium smart lock installation with fingerprint, PIN, RFID, mobile app, and emergency key access options.",
    overview: "We help you choose the right smart lock based on door type, usage pattern, access level, and finish. AAR Security Solutions handles compatibility checks, neat fitting, user setup, emergency access guidance, and handover training.",
    benefits: ["Keyless entry", "Fingerprint and PIN access", "Visitor access control", "Premium door hardware"],
    solutions: [
      ["Fingerprint Locks", "Finger-based biometric unlocking for secure everyday access.", "assets/service-images/smart-door-locks-fingerprint-locks.webp"],
      ["PIN Access", "Keypad passcode access for family, staff, and trusted users.", "assets/service-images/smart-door-locks-pin-access.webp"],
      ["RFID Access", "Smart card and tag unlocking for homes, offices, and rentals.", "assets/service-images/smart-door-locks-rfid-access.webp"],
      ["Mobile App Access", "Smartphone-based lock control and access management.", "assets/service-images/smart-door-locks-mobile-app-access.webp"],
      ["Hotel Locks", "Elegant card-based door locks for hospitality and rental spaces.", "assets/service-images/smart-door-locks-hotel-locks.webp"],
      ["Glass Door Locks", "Smart locking options for office glass doors and cabins.", "assets/service-images/smart-door-locks-glass-door-locks.webp"],
      ["Installation & Setup", "Professional fitting, alignment, configuration, and testing.", "assets/service-images/smart-door-locks-installation-and-setup.webp"],
      ["User Training", "Simple handover so every user understands daily operation.", "assets/service-images/smart-door-locks-user-training.webp"]
    ],
    gallery: ["assets/service-images/smart-door-locks-fingerprint-locks.webp", "assets/service-images/smart-door-locks-pin-access.webp", "assets/service-images/smart-door-locks-rfid-access.webp", "assets/service-images/smart-door-locks-mobile-app-access.webp", "assets/service-images/smart-door-locks-hotel-locks.webp", "assets/service-images/smart-door-locks-glass-door-locks.webp"],
    prompt: "Ultra-realistic close-up of a luxury smart digital door lock on a premium wooden door, fingerprint access, subtle blue LED glow, dark elegant interior, Apple-style product photography."
  },
  {
    title: "Home Automation",
    slug: "home-automation",
    image: "assets/service-images/home-automation-cover.webp",
    tagline: "Lighting, comfort, security, and control in one elegant system.",
    description: "Elegant automation for lighting, curtains, climate, entertainment, security, and voice-controlled smart homes.",
    overview: "AAR Security Solutions designs practical home automation that feels simple to use every day. We connect lighting, curtains, AC, scenes, smart switches, security, and app control into a clean system that matches your lifestyle and property.",
    benefits: ["App and voice control", "Smart scenes", "Energy-efficient routines", "Seamless security integration"],
    solutions: [
      ["Smart Lighting", "App-controlled lighting, dimming, and scheduled scenes.", "assets/service-images/home-automation-smart-lighting.webp"],
      ["Curtain Automation", "Motorized curtains with remote, app, and scene control.", "assets/service-images/home-automation-curtain-automation.webp"],
      ["Climate Control", "Smart thermostat and AC control for comfort and efficiency.", "assets/service-images/home-automation-climate-control.webp"],
      ["Voice Control", "Voice assistant support for simple hands-free operation.", "assets/service-images/home-automation-voice-control.webp"],
      ["Scene Programming", "One-touch modes such as Good Night, Away, and Movie.", "assets/service-images/home-automation-scene-programming.webp"],
      ["Security Integration", "Automation connected with CCTV, smart locks, and sensors.", "assets/service-images/home-automation-security-integration.webp"]
    ],
    gallery: ["assets/service-images/home-automation-smart-lighting.webp", "assets/service-images/home-automation-curtain-automation.webp", "assets/service-images/home-automation-climate-control.webp", "assets/service-images/home-automation-voice-control.webp", "assets/service-images/home-automation-scene-programming.webp", "assets/service-images/home-automation-security-integration.webp"],
    prompt: "Ultra-realistic luxury living room at night with smartphone controlling lights, curtains, climate, and security systems, dark modern interior, blue smart-home glow, premium architectural photography."
  },
  {
    title: "Access Control & Biometrics",
    slug: "access-control-biometrics",
    image: "assets/service-images/access-control-biometrics-cover.webp",
    tagline: "Only the right people enter the right spaces.",
    description: "Secure entry management with biometric readers, RFID cards, attendance tools, and door access control.",
    overview: "We build access control systems for offices, schools, apartments, gyms, and facilities that need identity-based entry. From biometric readers and magnetic locks to reports and user enrollment, every system is installed for reliability and accountability.",
    benefits: ["Controlled access", "Attendance reports", "Multi-door support", "Audit-friendly logs"],
    solutions: [
      ["Fingerprint Attendance", "Employee fingerprint scanning for attendance and access.", "assets/service-images/access-control-biometrics-fingerprint-attendance.webp"],
      ["Face Recognition", "Touchless facial recognition for modern entrances.", "assets/service-images/access-control-biometrics-face-recognition.webp"],
      ["RFID Card Access", "Card tapping for staff, residents, and members.", "assets/service-images/access-control-biometrics-rfid-card-access.webp"],
      ["Door Access Controllers", "Controlled office entry with locks, readers, and controllers.", "assets/service-images/access-control-biometrics-door-access-controllers.webp"],
      ["Turnstile Integration", "Secure entry gate integration for high-traffic locations.", "assets/service-images/access-control-biometrics-turnstile-integration.webp"],
      ["Reporting Software", "Attendance dashboard and access logs for supervisors.", "assets/service-images/access-control-biometrics-reporting-software.webp"],
      ["Installation & Support", "Technician configuration, enrollment, testing, and service.", "assets/service-images/access-control-biometrics-installation-and-support.webp"]
    ],
    gallery: ["assets/service-images/access-control-biometrics-fingerprint-attendance.webp", "assets/service-images/access-control-biometrics-face-recognition.webp", "assets/service-images/access-control-biometrics-rfid-card-access.webp", "assets/service-images/access-control-biometrics-door-access-controllers.webp", "assets/service-images/access-control-biometrics-turnstile-integration.webp", "assets/service-images/access-control-biometrics-reporting-software.webp"],
    prompt: "Ultra-realistic corporate office entrance with biometric fingerprint and facial recognition access terminal, glass doors, dark luxury interior, electric blue technology accents."
  },
  {
    title: "Video Door Phones & Intercom Systems",
    slug: "video-door-phones-intercom",
    image: "assets/service-images/video-door-phones-intercom-cover.webp",
    tagline: "Know who is at the door before you open it.",
    description: "Video door phone and intercom systems for safer visitor verification and smoother internal communication.",
    overview: "AAR Security Solutions installs video door phones and intercom systems for villas, apartments, offices, clinics, and gated properties. We plan indoor monitors, outdoor stations, wiring, gate integration, and user training for simple visitor communication.",
    benefits: ["Visitor screening", "Two-way audio", "Multi-unit support", "Gate and door integration"],
    solutions: [
      ["Villa Video Door Phones", "Premium visitor viewing for villas and individual homes.", "assets/service-images/video-door-phones-intercom-villa-video-door-phones.webp"],
      ["Apartment Intercom Systems", "Multi-unit calling panels for apartments and gated buildings.", "assets/service-images/video-door-phones-intercom-apartment-intercom-systems.webp"],
      ["Mobile App Answering", "Receive visitor calls and alerts on supported smartphones.", "assets/service-images/video-door-phones-intercom-mobile-app-answering.webp"],
      ["Gate Unlock Integration", "Remote gate or door release from indoor monitors.", "assets/service-images/video-door-phones-intercom-gate-unlock-integration.webp"],
      ["Night Vision Monitoring", "Clear visitor visibility during low-light and night-time use.", "assets/service-images/video-door-phones-intercom-night-vision-monitoring.webp"],
      ["Installation & Testing", "Neat wiring, device setup, calling tests, and handover.", "assets/service-images/video-door-phones-intercom-installation-and-testing.webp"]
    ],
    gallery: ["assets/service-images/video-door-phones-intercom-villa-video-door-phones.webp", "assets/service-images/video-door-phones-intercom-apartment-intercom-systems.webp", "assets/service-images/video-door-phones-intercom-mobile-app-answering.webp", "assets/service-images/video-door-phones-intercom-gate-unlock-integration.webp", "assets/service-images/video-door-phones-intercom-night-vision-monitoring.webp", "assets/service-images/video-door-phones-intercom-installation-and-testing.webp"],
    prompt: "Ultra-realistic premium video door phone and intercom system installed near a luxury villa entrance, indoor monitor visible, dark Apple-style ambience, soft electric blue security glow."
  },
  {
    title: "Networking & Wi-Fi Solutions",
    slug: "networking-wifi-solutions",
    image: "assets/service-images/networking-wifi-solutions-cover.webp",
    tagline: "Stable connectivity for security, work, and daily operations.",
    description: "Reliable networking, structured cabling, routers, access points, mesh Wi-Fi, and enterprise connectivity.",
    overview: "Security systems are only as reliable as the network behind them. We design structured cabling, routers, switches, access points, rack layouts, and Wi-Fi coverage so your cameras, offices, homes, and devices stay connected.",
    benefits: ["Stable coverage", "Structured cabling", "Secure router setup", "Business-grade access points"],
    solutions: [
      ["Structured Cabling", "Organized rack, patch panel, and LAN cabling for clean networks.", "assets/service-images/networking-wifi-solutions-structured-cabling.webp"],
      ["Enterprise Wi-Fi", "Business-grade access points for stable office and campus coverage.", "assets/service-images/networking-wifi-solutions-enterprise-wi-fi.webp"],
      ["Routers & Firewalls", "Secure routing and firewall setup for safer connectivity.", "assets/service-images/networking-wifi-solutions-routers-and-firewalls.webp"],
      ["Rack Dressing", "Clean cable management, labeling, and equipment arrangement.", "assets/service-images/networking-wifi-solutions-rack-dressing.webp"],
      ["Fiber Networking", "Fiber optic patching and high-speed backbone connectivity.", "assets/service-images/networking-wifi-solutions-fiber-networking.webp"],
      ["Performance Testing", "Coverage, speed, and stability testing after installation.", "assets/service-images/networking-wifi-solutions-performance-testing.webp"]
    ],
    gallery: ["assets/service-images/networking-wifi-solutions-structured-cabling.webp", "assets/service-images/networking-wifi-solutions-enterprise-wi-fi.webp", "assets/service-images/networking-wifi-solutions-routers-and-firewalls.webp", "assets/service-images/networking-wifi-solutions-rack-dressing.webp", "assets/service-images/networking-wifi-solutions-fiber-networking.webp", "assets/service-images/networking-wifi-solutions-performance-testing.webp"],
    prompt: "Ultra-realistic server rack with organized cables, enterprise switches, routers and Wi-Fi equipment, dark IT room, blue LED lighting, clean Apple-style technology photography."
  },
  {
    title: "Intercom Systems",
    slug: "intercom-systems",
    image: "assets/service-images/intercom-systems-cover.webp",
    tagline: "Clear internal communication for apartments, offices, gates, and buildings.",
    description: "Wall-mounted intercom handsets and IP intercom systems for reliable visitor, guard, office, and building communication.",
    overview: "AAR Security Solutions installs intercom systems for apartments, offices, villas, gates, reception desks, and commercial buildings. We plan device placement, cabling, indoor stations, gate communication, guard desk communication, and public announcement integration so communication stays clear and dependable.",
    benefits: ["Clear internal communication", "Gate and guard desk connectivity", "Apartment and office support", "Neat installation and testing"],
    solutions: [
      ["Apartment Intercom", "Residential communication handsets for apartments and building lobbies.", "assets/service-images/intercom-systems-apartment-intercom.webp"],
      ["Office Intercom", "Desk-to-desk and room-to-room communication for office teams.", "assets/service-images/intercom-systems-office-intercom.webp"],
      ["IP Intercom Systems", "Network-based communication panels for modern buildings.", "assets/service-images/intercom-systems-ip-intercom-systems.webp"],
      ["Gate Intercom", "Visitor-to-guard communication at entrances and security cabins.", "assets/service-images/intercom-systems-gate-intercom.webp"],
      ["PA Integration", "Public announcement integration for buildings, offices, and facilities.", "assets/service-images/intercom-systems-pa-integration.webp"]
    ],
    gallery: ["assets/service-images/intercom-systems-apartment-intercom.webp", "assets/service-images/intercom-systems-office-intercom.webp", "assets/service-images/intercom-systems-ip-intercom-systems.webp", "assets/service-images/intercom-systems-gate-intercom.webp", "assets/service-images/intercom-systems-pa-integration.webp"],
    prompt: "Ultra-realistic wall-mounted intercom handset and modern IP intercom panel inside a premium apartment or office corridor, dark charcoal walls, subtle electric blue lighting, clean architectural photography, no text, no logos."
  },
  {
    title: "Boom Barriers & Automatic Gates",
    slug: "boom-barriers-automatic-gates",
    image: "assets/service-images/boom-barriers-automatic-gates-cover.webp",
    tagline: "Controlled vehicle access without daily friction.",
    description: "Vehicle access systems including boom barriers, automatic gates, RFID entry, remotes, and safety sensors.",
    overview: "We install boom barriers and automatic gate systems for apartments, commercial buildings, parking areas, factories, and gated communities. Each setup is planned for vehicle flow, safety sensors, RFID, remotes, and long-term durability.",
    benefits: ["Controlled vehicle entry", "RFID and remote options", "Safety sensor integration", "Durable hardware"],
    solutions: [
      ["Boom Barriers", "Fast vehicle entry control for apartments, offices, and parking areas.", "assets/service-images/boom-barriers-automatic-gates-boom-barriers.webp"],
      ["Sliding Gates", "Motorized sliding gate automation for wide entrances.", "assets/service-images/boom-barriers-automatic-gates-sliding-gates.webp"],
      ["Swing Gates", "Automated swing gate systems for villas and buildings.", "assets/service-images/boom-barriers-automatic-gates-swing-gates.webp"],
      ["RFID Vehicle Access", "Windshield tag access for residents, staff, and vehicles.", "assets/service-images/boom-barriers-automatic-gates-rfid-vehicle-access.webp"],
      ["ANPR Cameras", "License plate recognition support for smarter vehicle access.", "assets/service-images/boom-barriers-automatic-gates-anpr-cameras.webp"],
      ["Safety Sensors", "Obstacle detection and protection for safer gate movement.", "assets/service-images/boom-barriers-automatic-gates-safety-sensors.webp"],
      ["Installation & Maintenance", "Professional fitting, calibration, servicing, and repairs.", "assets/service-images/boom-barriers-automatic-gates-installation-and-maintenance.webp"]
    ],
    gallery: ["assets/service-images/boom-barriers-automatic-gates-boom-barriers.webp", "assets/service-images/boom-barriers-automatic-gates-sliding-gates.webp", "assets/service-images/boom-barriers-automatic-gates-swing-gates.webp", "assets/service-images/boom-barriers-automatic-gates-rfid-vehicle-access.webp", "assets/service-images/boom-barriers-automatic-gates-anpr-cameras.webp", "assets/service-images/boom-barriers-automatic-gates-safety-sensors.webp"],
    prompt: "Ultra-realistic modern apartment entrance with automated boom barrier opening for a premium vehicle, security cabin, blue-hour lighting, cinematic premium security brand style."
  },
  {
    title: "Fire Alarm Systems",
    slug: "fire-alarm-systems",
    image: "assets/service-images/fire-alarm-systems-cover.webp",
    tagline: "Early warning systems built for serious safety.",
    description: "Fire detection, alarm panels, smoke detectors, hooters, manual call points, and safety-ready installation.",
    overview: "AAR Security Solutions installs fire alarm systems with smoke detectors, heat detectors, panels, hooters, manual call points, wiring, testing, and maintenance support. We focus on early detection, clean installation, and dependable alerts.",
    benefits: ["Early detection", "Zoned alerts", "Compliance-ready installation", "Periodic maintenance"],
    solutions: [
      ["Smoke Detectors", "Ceiling-mounted smoke detection for early warning.", "assets/service-images/fire-alarm-systems-smoke-detectors.webp"],
      ["Heat Detectors", "Industrial and high-temperature area detection support.", "assets/service-images/fire-alarm-systems-heat-detectors.webp"],
      ["Manual Call Points", "Red emergency buttons for manual alarm activation.", "assets/service-images/fire-alarm-systems-manual-call-points.webp"],
      ["Fire Alarm Panels", "Central control panels with zone visibility and alerts.", "assets/service-images/fire-alarm-systems-fire-alarm-panels.webp"],
      ["Sounders & Strobes", "Alarm sirens and visual warning devices for fast response.", "assets/service-images/fire-alarm-systems-sounders-and-strobes.webp"],
      ["Testing & Certification", "Technician testing, verification, and safety handover.", "assets/service-images/fire-alarm-systems-testing-and-certification.webp"],
      ["AMC & Maintenance", "Preventive fire alarm service and health checks.", "assets/service-images/fire-alarm-systems-amc-and-maintenance.webp"]
    ],
    gallery: ["assets/service-images/fire-alarm-systems-smoke-detectors.webp", "assets/service-images/fire-alarm-systems-heat-detectors.webp", "assets/service-images/fire-alarm-systems-manual-call-points.webp", "assets/service-images/fire-alarm-systems-fire-alarm-panels.webp", "assets/service-images/fire-alarm-systems-sounders-and-strobes.webp", "assets/service-images/fire-alarm-systems-testing-and-certification.webp"],
    prompt: "Ultra-realistic commercial office ceiling with smoke detectors, fire alarm devices, warning panel and blue-accented dark premium lighting, clean professional interior."
  },
  {
    title: "Solar CCTV Systems",
    slug: "solar-cctv-systems",
    image: "assets/service-images/solar-cctv-systems-cover.webp",
    tagline: "Security coverage where power and wiring are difficult.",
    description: "Solar-powered CCTV solutions for remote sites, farms, construction zones, yards, and outdoor perimeters.",
    overview: "Solar CCTV helps protect locations where conventional wiring or power is limited. We plan camera placement, solar panel sizing, battery backup, mounting, network access, and remote monitoring for practical off-grid surveillance.",
    benefits: ["Off-grid surveillance", "Battery backup", "Weather-ready cameras", "Remote monitoring"],
    solutions: [
      ["Solar Camera Kits", "Camera, solar panel, battery, and mounting combinations.", "assets/service-images/solar-cctv-systems-solar-camera-kits.webp"],
      ["Remote Monitoring", "Mobile access for outdoor and remote property watch.", "assets/service-images/solar-cctv-systems-remote-monitoring.webp"],
      ["Construction Site Security", "Temporary or long-term monitoring for open sites.", "assets/service-images/solar-cctv-systems-construction-site-security.webp"],
      ["Perimeter Coverage", "Outdoor camera placement for boundaries and open areas.", "assets/service-images/solar-cctv-systems-perimeter-coverage.webp"]
    ],
    gallery: ["assets/service-images/solar-cctv-systems-solar-camera-kits.webp", "assets/service-images/solar-cctv-systems-remote-monitoring.webp", "assets/service-images/solar-cctv-systems-construction-site-security.webp", "assets/service-images/solar-cctv-systems-perimeter-coverage.webp"],
    prompt: "Ultra-realistic solar-powered CCTV camera with solar panel on a remote industrial perimeter, dramatic daylight, clean installation, premium security technology look."
  },
  {
    title: "AMC & Maintenance Support",
    slug: "amc-maintenance-support",
    image: "assets/service-images/amc-maintenance-support-cover.webp",
    tagline: "Keep your systems healthy after installation.",
    description: "Annual maintenance contracts, preventive checks, repairs, upgrades, and technical support for security and IT systems.",
    overview: "Security systems need regular checks to stay dependable. Our AMC and maintenance support covers inspections, troubleshooting, camera alignment, network health, firmware checks, backup review, repairs, and upgrade recommendations.",
    benefits: ["Preventive maintenance", "Priority support", "System health checks", "Upgrade recommendations"],
    solutions: [
      ["Preventive Maintenance", "Scheduled inspection for CCTV, access, networking, and safety systems.", "assets/service-images/amc-maintenance-support-preventive-maintenance.webp"],
      ["Troubleshooting", "Fast issue diagnosis for cameras, locks, networks, panels, and devices.", "assets/service-images/amc-maintenance-support-troubleshooting.webp"],
      ["Firmware Updates", "Software upgrades and system updates where supported.", "assets/service-images/amc-maintenance-support-firmware-updates.webp"],
      ["Cleaning & Optimization", "Camera cleaning, angle correction, storage checks, and performance tuning.", "assets/service-images/amc-maintenance-support-cleaning-and-optimization.webp"],
      ["Emergency Support", "Rapid-response service for urgent technical issues.", "assets/service-images/amc-maintenance-support-emergency-support.webp"],
      ["Annual Service Contracts", "Organized AMC plans with periodic visits and documented support.", "assets/service-images/amc-maintenance-support-annual-service-contracts.webp"]
    ],
    gallery: ["assets/service-images/amc-maintenance-support-preventive-maintenance.webp", "assets/service-images/amc-maintenance-support-troubleshooting.webp", "assets/service-images/amc-maintenance-support-firmware-updates.webp", "assets/service-images/amc-maintenance-support-cleaning-and-optimization.webp", "assets/service-images/amc-maintenance-support-emergency-support.webp", "assets/service-images/amc-maintenance-support-annual-service-contracts.webp"],
    prompt: "Ultra-realistic professional technician servicing CCTV and network equipment at a customer site, clean tools, uniform, dark premium lighting, trustworthy corporate photography."
  },
  {
    title: "Computers, Printers & IT Infrastructure",
    slug: "computers-printers-it-infrastructure",
    image: "assets/service-images/computers-printers-it-infrastructure-cover.webp",
    tagline: "Business-ready IT infrastructure planned with care.",
    description: "Computers, printers, peripherals, UPS systems, networking, structured IT setup, and maintenance for growing teams.",
    overview: "We help offices, schools, shops, and businesses set up practical IT infrastructure. From computers, printers, UPS, networking, and cabling to configuration and support, AAR Security Solutions keeps your technology organized and dependable.",
    benefits: ["Reliable IT setup", "Hardware sourcing", "Network integration", "Support-ready infrastructure"],
    solutions: [
      ["Desktop Computers", "Business desktop systems for offices, monitoring desks, schools, and shops.", "assets/service-images/computers-printers-it-infrastructure-desktop-computers.webp"],
      ["Laptops", "Laptop setup, configuration, and support for mobile teams and offices.", "assets/service-images/computers-printers-it-infrastructure-laptops.webp"],
      ["Printers", "Printer installation, sharing, and basic network configuration.", "assets/service-images/computers-printers-it-infrastructure-printers.webp"],
      ["CCTV Monitoring Workstations", "Dedicated workstations for live camera monitoring and playback.", "assets/service-images/computers-printers-it-infrastructure-cctv-monitoring-workstations.webp"],
      ["Office IT Setup", "Complete office technology setup with computers, network, and peripherals.", "assets/service-images/computers-printers-it-infrastructure-office-it-setup.webp"],
      ["Software Installation", "Operating system, drivers, tools, and essential software setup.", "assets/service-images/computers-printers-it-infrastructure-software-installation.webp"],
      ["Hardware Troubleshooting", "Diagnosis and support for computer, printer, UPS, and network issues.", "assets/service-images/computers-printers-it-infrastructure-hardware-troubleshooting.webp"],
      ["IT Support", "Responsive support for daily business IT operations and maintenance.", "assets/service-images/computers-printers-it-infrastructure-it-support.webp"]
    ],
    gallery: ["assets/service-images/computers-printers-it-infrastructure-desktop-computers.webp", "assets/service-images/computers-printers-it-infrastructure-laptops.webp", "assets/service-images/computers-printers-it-infrastructure-printers.webp", "assets/service-images/computers-printers-it-infrastructure-cctv-monitoring-workstations.webp", "assets/service-images/computers-printers-it-infrastructure-office-it-setup.webp", "assets/service-images/computers-printers-it-infrastructure-software-installation.webp"],
    prompt: "Ultra-realistic modern office workspace with computers, printers, UPS systems and organized IT infrastructure, dark premium corporate environment, subtle blue glow."
  },
  {
    title: "Conference Room & Interactive Display Solutions",
    slug: "conference-room-interactive-display-solutions",
    image: "assets/service-images/conference-room-interactive-display-solutions-cover.webp",
    tagline: "Modern meeting rooms for clearer collaboration.",
    description: "Interactive displays, video conferencing systems, microphones, speakers, cameras, and clean meeting-room technology setup.",
    overview: "AAR Security Solutions creates professional meeting spaces with interactive displays, conference cameras, microphones, speakers, networking, cable management, and user-friendly controls for offices, training rooms, schools, and institutions.",
    benefits: ["Clear audio and video", "Cable-managed setup", "Hybrid meeting readiness", "Simple controls"],
    solutions: [
      ["Interactive Displays", "Large smart displays for meetings, training, and classrooms.", "assets/service-images/conference-room-interactive-display-solutions-interactive-displays.webp"],
      ["Conference Room Setup", "Complete premium meeting room layout with display, network, and controls.", "assets/service-images/conference-room-interactive-display-solutions-conference-room-setup.webp"],
      ["Video Conferencing Systems", "Camera, microphone, speaker, and display integration for hybrid meetings.", "assets/service-images/conference-room-interactive-display-solutions-video-conferencing-systems.webp"],
      ["Projectors", "Projection setup for boardrooms, classrooms, and training spaces.", "assets/service-images/conference-room-interactive-display-solutions-projectors.webp"],
      ["Audio Systems", "Speakers, microphones, and clean audio routing for meeting rooms.", "assets/service-images/conference-room-interactive-display-solutions-audio-systems.webp"],
      ["Wireless Presentation", "Cable-free presentation and screen-sharing systems for teams.", "assets/service-images/conference-room-interactive-display-solutions-wireless-presentation.webp"],
      ["Meeting Room Automation", "One-touch meeting scenes for display, audio, lighting, and connectivity.", "assets/service-images/conference-room-interactive-display-solutions-meeting-room-automation.webp"],
      ["Installation & Training", "Professional installation, testing, and user handover for your team.", "assets/service-images/conference-room-interactive-display-solutions-installation-and-training.webp"]
    ],
    gallery: ["assets/service-images/conference-room-interactive-display-solutions-interactive-displays.webp", "assets/service-images/conference-room-interactive-display-solutions-conference-room-setup.webp", "assets/service-images/conference-room-interactive-display-solutions-video-conferencing-systems.webp", "assets/service-images/conference-room-interactive-display-solutions-projectors.webp", "assets/service-images/conference-room-interactive-display-solutions-audio-systems.webp", "assets/service-images/conference-room-interactive-display-solutions-wireless-presentation.webp"],
    prompt: "Ultra-realistic executive boardroom with large interactive display, video conferencing camera, premium table, dark corporate interior, electric blue accent lighting."
  },
  {
    title: "Security Guard Monitoring & Patrol Systems",
    slug: "security-guard-monitoring-patrol-systems",
    image: "assets/service-images/security-guard-monitoring-patrol-systems-cover.webp",
    tagline: "Smarter supervision for safer buildings, sites, and commercial spaces.",
    description: "Digital guard monitoring solutions to track patrol routes, attendance, checkpoints, and incident reports in real time.",
    overview: "AAR Security Solutions provides digital security guard monitoring systems that help apartments, offices, warehouses, factories, hospitals, schools, and commercial buildings track guard movement, attendance, patrol routes, and incident reports. This improves accountability, reduces negligence, and gives management clear real-time visibility.",
    benefits: [
      "Confirms guards are patrolling on time",
      "Tracks missed checkpoints",
      "Improves guard accountability",
      "Provides digital proof of patrol",
      "Helps supervisors monitor multiple sites",
      "Reduces manual paperwork",
      "Improves client confidence",
      "Supports better security operations"
    ],
    solutions: [
      ["Guard Patrol Monitoring", "Digital patrol workflows for scheduled rounds and route discipline.", "assets/service-images/security-guard-monitoring-patrol-systems-guard-patrol-monitoring.webp"],
      ["QR/NFC Patrol Checkpoints", "Checkpoint scanning that confirms guard presence at critical locations.", "assets/service-images/security-guard-monitoring-patrol-systems-qr-nfc-patrol-checkpoints.webp"],
      ["Real-Time Guard Tracking", "Live tracking support for guard movement, attendance, and route activity.", "assets/service-images/security-guard-monitoring-patrol-systems-real-time-guard-tracking.webp"],
      ["Visitor Entry Logs", "Digital entry record support for visitors, staff, and site movement.", "assets/service-images/security-guard-monitoring-patrol-systems-visitor-entry-logs.webp"],
      ["Incident Reporting", "Record incidents quickly with digital proof and supervisor visibility.", "assets/service-images/security-guard-monitoring-patrol-systems-incident-reporting.webp"],
      ["Supervisor Dashboard", "Monitor multiple locations, routes, and exception reports from one place.", "assets/service-images/security-guard-monitoring-patrol-systems-supervisor-dashboard.webp"],
      ["Mobile Patrol App", "Mobile patrol reporting with checkpoints, notes, and updates from the field.", "assets/service-images/security-guard-monitoring-patrol-systems-mobile-patrol-app.webp"],
      ["Security Monitoring Support", "Professional support for monitoring, reports, and better site supervision.", "assets/service-images/security-guard-monitoring-patrol-systems-security-monitoring-support.webp"]
    ],
    gallery: ["assets/service-images/security-guard-monitoring-patrol-systems-guard-patrol-monitoring.webp", "assets/service-images/security-guard-monitoring-patrol-systems-qr-nfc-patrol-checkpoints.webp", "assets/service-images/security-guard-monitoring-patrol-systems-real-time-guard-tracking.webp", "assets/service-images/security-guard-monitoring-patrol-systems-visitor-entry-logs.webp", "assets/service-images/security-guard-monitoring-patrol-systems-incident-reporting.webp", "assets/service-images/security-guard-monitoring-patrol-systems-supervisor-dashboard.webp"],
    prompt: "Create a premium cinematic image of a professional security guard scanning an RFID/NFC checkpoint inside a modern apartment or commercial building at night. Show a smartphone patrol app screen, subtle blue technology glow, modern security dashboard elements, clean uniform, realistic lighting, dark luxury background, professional corporate security atmosphere, ultra-realistic, high resolution, no cartoon, no cheap stock photo look.",
    customUsage: ["Apartments", "Gated communities", "Warehouses", "Factories", "Offices", "Hospitals", "Schools & colleges", "Construction sites", "Commercial complexes"]
  }
];

function detailCard(title, items) {
  return `<div class="card premium-list"><h3>${title}</h3>${items.map((item) => `<p><span>âœ“</span>${item}</p>`).join("")}</div>`;
}

function serviceFaq(serviceTitle) {
  return `
    <details><summary>Do you provide ${serviceTitle} installation in Mangalore?</summary><p>Yes. AAR Security Solutions handles consultation, site inspection, installation, configuration, and support across Mangalore and nearby Karnataka locations.</p></details>
    <details><summary>Can I request a free site inspection?</summary><p>Yes. Share your location and requirement through the inquiry form or WhatsApp, and our team will schedule a site assessment.</p></details>
    <details><summary>Do you offer AMC and technical support?</summary><p>Yes. We provide annual maintenance, troubleshooting, system upgrades, and periodic health checks for installed systems.</p></details>`;
}

function applyWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.setAttribute("href", whatsappUrl);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".nav-links");
  const menu = document.querySelector(".menu-btn");
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector(".close-modal");
  const serviceGrid = document.querySelector("#services-grid");
  const servicePages = document.querySelector("#service-pages");
  const serviceSelects = document.querySelectorAll("select[name='serviceRequired']");

  services.forEach((service) => {
    serviceSelects.forEach((select) => {
      select.insertAdjacentHTML("beforeend", `<option>${service.title}</option>`);
    });
  });

  if (serviceGrid) {
    serviceGrid.innerHTML = services
      .map(
        (service) => `
        <a class="service-card" href="#${service.slug}">
          <figure><img src="${service.image}" alt="${service.title}" loading="lazy"></figure>
          <div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <strong>Open service &rarr;</strong>
          </div>
        </a>`
      )
      .join("");
  }

  if (servicePages) {
    servicePages.innerHTML = services
      .map(
        (service) => `
        <article id="${service.slug}" class="service-page">
          <section class="service-detail-hero">
            <div class="shell service-detail-grid">
              <div>
                <span class="eyebrow">Premium Service Detail</span>
                <h1>${service.title}</h1>
                <h2>${service.tagline}</h2>
                <p>${service.description}</p>
                <div class="hero-actions">
                  <a class="btn btn-primary" href="#request-quote">Get Quote</a>
                  <a class="btn btn-secondary" data-whatsapp target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
                </div>
              </div>
              <div class="service-detail-image">
                <img src="${service.image}" alt="${service.title}" loading="lazy">
              </div>
            </div>
          </section>

          <section class="section">
            <div class="shell split">
              <div class="section-title left">
                <span>Service Overview</span>
                <h2>Designed around your property, not a generic package.</h2>
                <p>${service.overview}</p>
              </div>
              <div class="grid-2">${service.benefits.map((item) => `<div class="check">${item}</div>`).join("")}</div>
            </div>
          </section>

          <section class="section alt">
            <div class="shell">
              <div class="section-title">
                <span>Solutions Offered</span>
                <h2>What we provide for ${service.title.toLowerCase()}.</h2>
                <p>Each option is selected for reliability, clean installation, and long-term support.</p>
              </div>
              <div class="solution-grid">
                ${service.solutions
                  .map(
                    ([title, text, image]) => `
                    <div class="solution-card">
                      <figure><img src="${image}" alt="${title}" loading="lazy"></figure>
                      <div><h3>${title}</h3><p>${text}</p></div>
                    </div>`
                  )
                  .join("")}
              </div>
            </div>
          </section>

          <section class="section">
            <div class="shell">
              <div class="section-title">
                <span>Where It Is Used</span>
                <h2>Built for residential, commercial, and institutional spaces.</h2>
              </div>
              <div class="use-grid">${(service.customUsage || usage).map((item) => `<div class="use-card">${item}</div>`).join("")}</div>
            </div>
          </section>

          <section class="section alt">
            <div class="shell">
              <div class="section-title">
                <span>Our Process</span>
                <h2>A clear process from site inspection to AMC support.</h2>
              </div>
              <div class="process-strip">${processSteps
                .map((step, index) => `<div class="process-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${step}</h3></div>`)
                .join("")}</div>
            </div>
          </section>

          <section class="section">
            <div class="shell">
              <div class="section-title">
                <span>Image Gallery</span>
                <h2>Premium visual direction for this service.</h2>
                <p>These visuals stay connected to the homepage service cards and can be replaced with project photography later.</p>
              </div>
              <div class="gallery-grid">${service.gallery
                .map((image, index) => `<figure><img src="${image}" alt="${service.title} gallery image ${index + 1}" loading="lazy"></figure>`)
                .join("")}</div>
              <details class="prompt-card"><summary>Image generation prompt for this service</summary><p>${service.prompt}</p></details>
            </div>
          </section>

          <section class="section cta">
            <div class="shell cta-grid">
              <div>
                <span class="eyebrow">Get Started</span>
                <h2>Need this solution for your home, office, or building?</h2>
                <p>Contact AAR Security Solutions today.</p>
              </div>
              <div class="cta-actions">
                <a class="btn btn-primary" href="tel:+91${phone}">Call Now</a>
                <a class="btn btn-secondary" data-whatsapp target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a class="btn btn-secondary" href="assets/downloads/AAR-Security-Solutions.vcf" download>Save Contact</a>
              </div>
            </div>
          </section>

          <section class="section alt">
            <div class="shell">
              <div class="section-title">
                <span>FAQ</span>
                <h2>Questions about ${service.title}</h2>
              </div>
              <div class="faq">${serviceFaq(service.title)}</div>
            </div>
          </section>

          <section class="service-back">
            <div class="shell">
              <a class="btn btn-secondary" href="#services">Back to Services</a>
              <a class="btn btn-primary" href="#request-quote">Request Quote</a>
            </div>
          </section>
        </article>`
      )
      .join("");
  }

  applyWhatsAppLinks();

  function syncRoute() {
    const hash = window.location.hash.replace("#", "");
    const pages = document.querySelectorAll(".service-page");
    pages.forEach((page) => page.classList.remove("active"));
    if (hash && services.some((service) => service.slug === hash)) {
      document.body.classList.add("detail-open");
      document.querySelector("main").style.display = "none";
      const page = document.getElementById(hash);
      page?.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.classList.remove("detail-open");
      document.querySelector("main").style.display = "";
    }
  }

  window.addEventListener("hashchange", syncRoute);
  syncRoute();

  window.addEventListener(
    "scroll",
    () => {
      header?.classList.toggle("scrolled", window.scrollY > 18);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress >= 0.35 && progress <= 0.45 && !sessionStorage.getItem("aar-inquiry-popup-closed")) {
        modal?.classList.add("show");
      }
    },
    { passive: true }
  );

  menu?.addEventListener("click", () => nav?.classList.toggle("open"));
  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
  closeModal?.addEventListener("click", () => {
    sessionStorage.setItem("aar-inquiry-popup-closed", "true");
    modal?.classList.remove("show");
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      console.log("AAR inquiry submitted", data);
      form.reset();
      const message = form.querySelector(".form-message");
      if (message) message.style.display = "block";
      if (window.aarTrackLead) window.aarTrackLead();
    });
  });
});

