const phone = "7353842099";
const whatsappMessage = "Hello AAR Security Solutions, I would like to know more about your services.";
const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(whatsappMessage)}`;

const usage = ["Homes", "Apartments", "Offices", "Shops", "Warehouses", "Schools", "Colleges", "Commercial Buildings"];
const processSteps = ["Site Inspection", "Requirement Analysis", "Product Selection", "Installation", "Configuration", "User Training", "AMC Support"];
const img = (name) => `assets/images/services/${name}.jpg`;
const gallery = (...items) => items.map(img);

const services = [
  {
    title: "CCTV & Surveillance Systems",
    slug: "cctv-surveillance-systems",
    image: img("cctv-surveillance"),
    tagline: "Complete visibility for every critical corner.",
    description: "High-definition CCTV design, installation, remote viewing, and recording solutions for homes, offices, apartments, and commercial properties.",
    overview: "AAR Security Solutions plans CCTV systems around real blind spots, entry points, lighting conditions, storage needs, and mobile monitoring requirements. We install clean camera layouts with DVR, NVR, IP, Wi-Fi, night vision, and remote viewing options so your property stays visible day and night.",
    benefits: ["HD and IP camera options", "Remote mobile viewing", "Night vision and motion alerts", "Clean cabling and secure storage"],
    solutions: [
      ["Dome Cameras", "Discreet indoor and ceiling-mounted cameras for clean coverage.", img("cctv-surveillance")],
      ["Bullet Cameras", "Weather-ready outdoor cameras for gates, compound walls, and perimeters.", img("solar-cctv")],
      ["IP Cameras", "Network-based cameras with sharper detail and scalable recording.", img("networking-wifi")],
      ["DVR / NVR Setup", "Reliable recording, backup planning, and storage configuration.", img("computers-it-infrastructure")]
    ],
    gallery: gallery("cctv-surveillance", "solar-cctv", "networking-wifi", "boom-barrier", "home-automation", "amc-technical-support"),
    prompt: "Ultra-realistic premium night photograph of CCTV cameras protecting a luxury villa and commercial building, dark Apple-style lighting, electric blue security glow, sharp architectural composition, no text, no logo."
  },
  {
    title: "Smart Door Locks",
    slug: "smart-door-locks",
    image: img("smart-door-lock"),
    tagline: "Premium keyless entry with control you can trust.",
    description: "Premium smart lock installation with fingerprint, PIN, RFID, mobile app, and emergency key access options.",
    overview: "We help you choose the right smart lock based on door type, usage pattern, access level, and finish. AAR Security Solutions handles compatibility checks, neat fitting, user setup, emergency access guidance, and handover training.",
    benefits: ["Keyless entry", "Fingerprint and PIN access", "Visitor access control", "Premium door hardware"],
    solutions: [
      ["Fingerprint Locks", "Fast biometric access for homes, offices, and private rooms.", img("smart-door-lock")],
      ["PIN Access", "Secure numeric access for family, staff, and visitors.", img("access-control-biometrics")],
      ["RFID Locks", "Card-based access for apartments, offices, and rental spaces.", img("video-door-phone-intercom")],
      ["Mobile App Locks", "Control access and records from supported mobile apps.", img("home-automation")]
    ],
    gallery: gallery("smart-door-lock", "access-control-biometrics", "home-automation", "video-door-phone-intercom", "cctv-surveillance", "amc-technical-support"),
    prompt: "Ultra-realistic close-up of a luxury smart digital door lock on a premium wooden door, fingerprint access, subtle blue LED glow, dark elegant interior, Apple-style product photography."
  },
  {
    title: "Home Automation",
    slug: "home-automation",
    image: img("home-automation"),
    tagline: "Lighting, comfort, security, and control in one elegant system.",
    description: "Elegant automation for lighting, curtains, climate, entertainment, security, and voice-controlled smart homes.",
    overview: "AAR Security Solutions designs practical home automation that feels simple to use every day. We connect lighting, curtains, AC, scenes, smart switches, security, and app control into a clean system that matches your lifestyle and property.",
    benefits: ["App and voice control", "Smart scenes", "Energy-efficient routines", "Seamless security integration"],
    solutions: [
      ["Lighting Automation", "Scenes, schedules, dimming, and smart switch control.", img("home-automation")],
      ["Curtain Control", "Motorized curtains with app, remote, and scene integration.", img("smart-door-lock")],
      ["Security Integration", "CCTV, smart locks, and sensors working with your smart home.", img("cctv-surveillance")],
      ["Voice and App Control", "Easy control for daily routines and family use.", img("networking-wifi")]
    ],
    gallery: gallery("home-automation", "smart-door-lock", "cctv-surveillance", "networking-wifi", "video-door-phone-intercom", "conference-room-solutions"),
    prompt: "Ultra-realistic luxury living room at night with smartphone controlling lights, curtains, climate, and security systems, dark modern interior, blue smart-home glow, premium architectural photography."
  },
  {
    title: "Access Control & Biometrics",
    slug: "access-control-biometrics",
    image: img("access-control-biometrics"),
    tagline: "Only the right people enter the right spaces.",
    description: "Secure entry management with biometric readers, RFID cards, attendance tools, and door access control.",
    overview: "We build access control systems for offices, schools, apartments, gyms, and facilities that need identity-based entry. From biometric readers and magnetic locks to reports and user enrollment, every system is installed for reliability and accountability.",
    benefits: ["Controlled access", "Attendance reports", "Multi-door support", "Audit-friendly logs"],
    solutions: [
      ["Fingerprint Access", "Fast biometric entry with user-based control.", img("access-control-biometrics")],
      ["Face Recognition", "Touchless identity verification for modern entrances.", img("video-door-phone-intercom")],
      ["RFID Card Access", "Card and tag entry for staff, residents, and members.", img("smart-door-lock")],
      ["Attendance Reports", "Cleaner attendance and entry logs for management.", img("computers-it-infrastructure")]
    ],
    gallery: gallery("access-control-biometrics", "smart-door-lock", "video-door-phone-intercom", "computers-it-infrastructure", "networking-wifi", "amc-technical-support"),
    prompt: "Ultra-realistic corporate office entrance with biometric fingerprint and facial recognition access terminal, glass doors, dark luxury interior, electric blue technology accents."
  },
  {
    title: "Video Door Phones & Intercom Systems",
    slug: "video-door-phones-intercom",
    image: img("video-door-phone-intercom"),
    tagline: "Know who is at the door before you open it.",
    description: "Video door phone and intercom systems for safer visitor verification and smoother internal communication.",
    overview: "AAR Security Solutions installs video door phones and intercom systems for villas, apartments, offices, clinics, and gated properties. We plan indoor monitors, outdoor stations, wiring, gate integration, and user training for simple visitor communication.",
    benefits: ["Visitor screening", "Two-way audio", "Multi-unit support", "Gate and door integration"],
    solutions: [
      ["Video Door Phones", "Visitor viewing, calling, and door release options.", img("video-door-phone-intercom")],
      ["Apartment Intercom", "Reliable communication for flats, lobbies, and security desks.", img("access-control-biometrics")],
      ["Gate Integration", "Connect visitor calls with gate or door release controls.", img("boom-barrier")],
      ["Indoor Monitors", "Clear screens for visitor confirmation and two-way audio.", img("home-automation")]
    ],
    gallery: gallery("video-door-phone-intercom", "access-control-biometrics", "boom-barrier", "home-automation", "smart-door-lock", "cctv-surveillance"),
    prompt: "Ultra-realistic premium video door phone and intercom system installed near a luxury villa entrance, indoor monitor visible, dark Apple-style ambience, soft electric blue security glow."
  },
  {
    title: "Networking & Wi-Fi Solutions",
    slug: "networking-wifi-solutions",
    image: img("networking-wifi"),
    tagline: "Stable connectivity for security, work, and daily operations.",
    description: "Reliable networking, structured cabling, routers, access points, mesh Wi-Fi, and enterprise connectivity.",
    overview: "Security systems are only as reliable as the network behind them. We design structured cabling, routers, switches, access points, rack layouts, and Wi-Fi coverage so your cameras, offices, homes, and devices stay connected.",
    benefits: ["Stable coverage", "Structured cabling", "Secure router setup", "Business-grade access points"],
    solutions: [
      ["Structured Cabling", "Neat LAN cabling for offices, buildings, and camera systems.", img("networking-wifi")],
      ["Wi-Fi Access Points", "Reliable wireless coverage with planned placement.", img("computers-it-infrastructure")],
      ["Network Racks", "Organized rack setup with switches, routers, and cable management.", img("networking-wifi")],
      ["Secure Router Setup", "Professional configuration for stability and safety.", img("cctv-surveillance")]
    ],
    gallery: gallery("networking-wifi", "computers-it-infrastructure", "conference-room-solutions", "cctv-surveillance", "home-automation", "amc-technical-support"),
    prompt: "Ultra-realistic server rack with organized cables, enterprise switches, routers and Wi-Fi equipment, dark IT room, blue LED lighting, clean Apple-style technology photography."
  },
  {
    title: "Boom Barriers & Automatic Gates",
    slug: "boom-barriers-automatic-gates",
    image: img("boom-barrier"),
    tagline: "Controlled vehicle access without daily friction.",
    description: "Vehicle access systems including boom barriers, automatic gates, RFID entry, remotes, and safety sensors.",
    overview: "We install boom barriers and automatic gate systems for apartments, commercial buildings, parking areas, factories, and gated communities. Each setup is planned for vehicle flow, safety sensors, RFID, remotes, and long-term durability.",
    benefits: ["Controlled vehicle entry", "RFID and remote options", "Safety sensor integration", "Durable hardware"],
    solutions: [
      ["Boom Barriers", "Fast, controlled vehicle entry for gates and parking areas.", img("boom-barrier")],
      ["Automatic Gates", "Motorized sliding or swing gate automation.", img("smart-door-lock")],
      ["RFID Entry", "Resident, staff, or vehicle tag-based access.", img("access-control-biometrics")],
      ["Safety Sensors", "Photocells, loops, and protection for safer operation.", img("fire-alarm")]
    ],
    gallery: gallery("boom-barrier", "access-control-biometrics", "cctv-surveillance", "smart-door-lock", "networking-wifi", "amc-technical-support"),
    prompt: "Ultra-realistic modern apartment entrance with automated boom barrier opening for a premium vehicle, security cabin, blue-hour lighting, cinematic premium security brand style."
  },
  {
    title: "Fire Alarm Systems",
    slug: "fire-alarm-systems",
    image: img("fire-alarm"),
    tagline: "Early warning systems built for serious safety.",
    description: "Fire detection, alarm panels, smoke detectors, hooters, manual call points, and safety-ready installation.",
    overview: "AAR Security Solutions installs fire alarm systems with smoke detectors, heat detectors, panels, hooters, manual call points, wiring, testing, and maintenance support. We focus on early detection, clean installation, and dependable alerts.",
    benefits: ["Early detection", "Zoned alerts", "Compliance-ready installation", "Periodic maintenance"],
    solutions: [
      ["Smoke Detectors", "Early detection for offices, apartments, and commercial areas.", img("fire-alarm")],
      ["Fire Alarm Panels", "Centralized alert control and zone visibility.", img("computers-it-infrastructure")],
      ["Manual Call Points", "Emergency activation points for occupants and staff.", img("fire-alarm")],
      ["Hooters and Strobes", "Audible and visual warning devices for fast response.", img("amc-technical-support")]
    ],
    gallery: gallery("fire-alarm", "computers-it-infrastructure", "amc-technical-support", "cctv-surveillance", "networking-wifi", "access-control-biometrics"),
    prompt: "Ultra-realistic commercial office ceiling with smoke detectors, fire alarm devices, warning panel and blue-accented dark premium lighting, clean professional interior."
  },
  {
    title: "Solar CCTV Systems",
    slug: "solar-cctv-systems",
    image: img("solar-cctv"),
    tagline: "Security coverage where power and wiring are difficult.",
    description: "Solar-powered CCTV solutions for remote sites, farms, construction zones, yards, and outdoor perimeters.",
    overview: "Solar CCTV helps protect locations where conventional wiring or power is limited. We plan camera placement, solar panel sizing, battery backup, mounting, network access, and remote monitoring for practical off-grid surveillance.",
    benefits: ["Off-grid surveillance", "Battery backup", "Weather-ready cameras", "Remote monitoring"],
    solutions: [
      ["Solar Camera Kits", "Camera, solar panel, battery, and mounting combinations.", img("solar-cctv")],
      ["Remote Monitoring", "Mobile access for outdoor and remote property watch.", img("cctv-surveillance")],
      ["Construction Site Security", "Temporary or long-term monitoring for open sites.", img("boom-barrier")],
      ["Perimeter Coverage", "Outdoor camera placement for boundaries and open areas.", img("networking-wifi")]
    ],
    gallery: gallery("solar-cctv", "cctv-surveillance", "boom-barrier", "networking-wifi", "amc-technical-support", "fire-alarm"),
    prompt: "Ultra-realistic solar-powered CCTV camera with solar panel on a remote industrial perimeter, dramatic daylight, clean installation, premium security technology look."
  },
  {
    title: "AMC & Maintenance Support",
    slug: "amc-maintenance-support",
    image: img("amc-technical-support"),
    tagline: "Keep your systems healthy after installation.",
    description: "Annual maintenance contracts, preventive checks, repairs, upgrades, and technical support for security and IT systems.",
    overview: "Security systems need regular checks to stay dependable. Our AMC and maintenance support covers inspections, troubleshooting, camera alignment, network health, firmware checks, backup review, repairs, and upgrade recommendations.",
    benefits: ["Preventive maintenance", "Priority support", "System health checks", "Upgrade recommendations"],
    solutions: [
      ["Preventive Maintenance", "Routine checks that reduce downtime and failures.", img("amc-technical-support")],
      ["CCTV Health Checks", "Camera, recording, storage, and remote-viewing verification.", img("cctv-surveillance")],
      ["Network Support", "Router, cabling, rack, and access-point troubleshooting.", img("networking-wifi")],
      ["Upgrade Planning", "Clear recommendations when your system needs improvement.", img("computers-it-infrastructure")]
    ],
    gallery: gallery("amc-technical-support", "cctv-surveillance", "networking-wifi", "computers-it-infrastructure", "fire-alarm", "access-control-biometrics"),
    prompt: "Ultra-realistic professional technician servicing CCTV and network equipment at a customer site, clean tools, uniform, dark premium lighting, trustworthy corporate photography."
  },
  {
    title: "Computers, Printers & IT Infrastructure",
    slug: "computers-printers-it-infrastructure",
    image: img("computers-it-infrastructure"),
    tagline: "Business-ready IT infrastructure planned with care.",
    description: "Computers, printers, peripherals, UPS systems, networking, structured IT setup, and maintenance for growing teams.",
    overview: "We help offices, schools, shops, and businesses set up practical IT infrastructure. From computers, printers, UPS, networking, and cabling to configuration and support, AAR Security Solutions keeps your technology organized and dependable.",
    benefits: ["Reliable IT setup", "Hardware sourcing", "Network integration", "Support-ready infrastructure"],
    solutions: [
      ["Computer Setup", "Desktop and laptop setup for offices and institutions.", img("computers-it-infrastructure")],
      ["Printer Setup", "Printer installation, sharing, and basic network configuration.", img("networking-wifi")],
      ["UPS and Power Backup", "Power protection for critical security and IT devices.", img("fire-alarm")],
      ["Office IT Cabling", "Clean cabling and rack planning for growing teams.", img("conference-room-solutions")]
    ],
    gallery: gallery("computers-it-infrastructure", "networking-wifi", "conference-room-solutions", "amc-technical-support", "cctv-surveillance", "fire-alarm"),
    prompt: "Ultra-realistic modern office workspace with computers, printers, UPS systems and organized IT infrastructure, dark premium corporate environment, subtle blue glow."
  },
  {
    title: "Conference Room & Interactive Display Solutions",
    slug: "conference-room-interactive-display-solutions",
    image: img("conference-room-solutions"),
    tagline: "Modern meeting rooms for clearer collaboration.",
    description: "Interactive displays, video conferencing systems, microphones, speakers, cameras, and clean meeting-room technology setup.",
    overview: "AAR Security Solutions creates professional meeting spaces with interactive displays, conference cameras, microphones, speakers, networking, cable management, and user-friendly controls for offices, training rooms, schools, and institutions.",
    benefits: ["Clear audio and video", "Cable-managed setup", "Hybrid meeting readiness", "Simple controls"],
    solutions: [
      ["Interactive Displays", "Large smart displays for meetings, training, and classrooms.", img("conference-room-solutions")],
      ["Video Conferencing", "Camera, microphone, speaker, and display integration.", img("networking-wifi")],
      ["Cable Management", "Clean installation that keeps the room premium and usable.", img("computers-it-infrastructure")],
      ["Room Networking", "Reliable network support for hybrid meetings and casting.", img("home-automation")]
    ],
    gallery: gallery("conference-room-solutions", "networking-wifi", "computers-it-infrastructure", "home-automation", "amc-technical-support", "access-control-biometrics"),
    prompt: "Ultra-realistic executive boardroom with large interactive display, video conferencing camera, premium table, dark corporate interior, electric blue accent lighting."
  },
  {
    title: "Security Guard Monitoring & Patrol Systems",
    slug: "security-guard-monitoring-patrol-systems",
    image: img("smart-guard-patrol"),
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
      ["Guard Tour Patrol Systems", "Digital patrol workflows for scheduled rounds and route discipline.", img("smart-guard-patrol")],
      ["RFID/NFC Checkpoint Monitoring", "Checkpoint scans that confirm guard presence at critical locations.", img("access-control-biometrics")],
      ["QR Code Checkpoint Scanning", "Simple mobile scanning for patrol points across buildings and sites.", img("networking-wifi")],
      ["Real-Time Guard Attendance", "Track attendance, shift reporting, and live site activity.", img("computers-it-infrastructure")],
      ["Mobile Patrol Reporting", "Patrol notes, photos, and status updates from the field.", img("smart-guard-patrol")],
      ["Incident Reporting System", "Record incidents quickly with digital proof and supervisor visibility.", img("cctv-surveillance")],
      ["Supervisor Dashboard", "Monitor multiple locations, routes, and exception reports from one place.", img("conference-room-solutions")],
      ["Emergency Alert Support", "Fast alert support for urgent security situations and missed activity.", img("fire-alarm")]
    ],
    gallery: gallery("smart-guard-patrol", "access-control-biometrics", "cctv-surveillance", "networking-wifi", "computers-it-infrastructure", "amc-technical-support"),
    prompt: "Create a premium cinematic image of a professional security guard scanning an RFID/NFC checkpoint inside a modern apartment or commercial building at night. Show a smartphone patrol app screen, subtle blue technology glow, modern security dashboard elements, clean uniform, realistic lighting, dark luxury background, professional corporate security atmosphere, ultra-realistic, high resolution, no cartoon, no cheap stock photo look.",
    customUsage: ["Apartments", "Gated communities", "Warehouses", "Factories", "Offices", "Hospitals", "Schools & colleges", "Construction sites", "Commercial complexes"]
  }
];

function detailCard(title, items) {
  return `<div class="card premium-list"><h3>${title}</h3>${items.map((item) => `<p><span>✓</span>${item}</p>`).join("")}</div>`;
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
          <figure><img src="${service.image}" alt="${service.title} by AAR Security Solutions" loading="lazy"></figure>
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
                <img src="${service.image}" alt="${service.title} installation" loading="lazy">
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
