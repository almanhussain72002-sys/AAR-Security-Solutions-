const phone = "7353842099";
const whatsappMessage =
  "Hi AAR Security Solutions, I am interested in your security solutions. Please contact me.";
const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(whatsappMessage)}`;

const services = [
  {
    title: "CCTV & Surveillance Systems",
    slug: "cctv-surveillance-systems",
    image: "assets/images/services/cctv-surveillance.jpg",
    description:
      "High-definition CCTV design, installation, remote viewing, and recording solutions for homes, offices, apartments, and commercial properties.",
    benefits: ["HD and IP camera options", "Remote mobile viewing", "Night vision and motion alerts", "Clean cabling and secure storage"],
    ideal: ["Homes", "Apartments", "Retail stores", "Warehouses", "Offices"],
    process: ["Site survey", "Camera placement plan", "Installation and testing", "Mobile app setup", "Support and AMC"]
  },
  {
    title: "Smart Door Locks",
    slug: "smart-door-locks",
    image: "assets/images/services/smart-door-lock.jpg",
    description: "Premium smart lock installation with fingerprint, PIN, RFID, mobile app, and emergency access options.",
    benefits: ["Keyless entry", "Fingerprint and PIN access", "Visitor access control", "Modern door aesthetics"],
    ideal: ["Homes", "Villas", "Apartments", "Offices", "Rental properties"],
    process: ["Door compatibility check", "Lock recommendation", "Installation", "User setup", "Access training"]
  },
  {
    title: "Home Automation",
    slug: "home-automation",
    image: "assets/images/services/home-automation.jpg",
    description: "Elegant automation for lighting, curtains, climate, entertainment, security, and voice-controlled smart homes.",
    benefits: ["App and voice control", "Smart scenes", "Energy convenience", "Seamless security integration"],
    ideal: ["Luxury homes", "Apartments", "Villas", "Renovations", "New builds"],
    process: ["Lifestyle consultation", "Automation design", "Device installation", "Scene programming", "Handover"]
  },
  {
    title: "Access Control & Biometrics",
    slug: "access-control-biometrics",
    image: "assets/images/services/access-control-biometrics.jpg",
    description: "Secure entry management with biometric readers, RFID cards, attendance integration, and door access control.",
    benefits: ["Controlled access", "Attendance reports", "Multi-door support", "Audit-friendly logs"],
    ideal: ["Offices", "Factories", "Schools", "Gyms", "Hospitals"],
    process: ["Entry audit", "Reader selection", "Controller setup", "User enrollment", "Reporting setup"]
  },
  {
    title: "Video Door Phones & Intercom",
    slug: "video-door-phones-intercom",
    image: "assets/images/services/video-door-phone-intercom.jpg",
    description: "Video door phone and intercom systems for safer visitor verification and smoother internal communication.",
    benefits: ["Visitor screening", "Two-way audio", "Multi-unit support", "Gate and door integration"],
    ideal: ["Apartments", "Villas", "Offices", "Clinics", "Gated properties"],
    process: ["Entry point review", "Device selection", "Wiring and mounting", "Testing", "Resident training"]
  },
  {
    title: "Networking & Wi-Fi Solutions",
    slug: "networking-wifi-solutions",
    image: "assets/images/services/networking-wifi.jpg",
    description: "Reliable networking, structured cabling, routers, access points, mesh Wi-Fi, and enterprise connectivity.",
    benefits: ["Stable coverage", "Structured cabling", "Secure router setup", "Business-grade access points"],
    ideal: ["Homes", "Offices", "Hotels", "Schools", "Retail spaces"],
    process: ["Coverage mapping", "Network design", "Cabling", "Configuration", "Speed and stability testing"]
  },
  {
    title: "Boom Barriers & Automatic Gates",
    slug: "boom-barriers-automatic-gates",
    image: "assets/images/services/boom-barrier.jpg",
    description: "Vehicle access systems including boom barriers, automatic gates, RFID entry, remotes, and safety sensors.",
    benefits: ["Controlled vehicle entry", "RFID and remote options", "Safety sensor integration", "Durable hardware"],
    ideal: ["Apartments", "Commercial buildings", "Factories", "Parking lots", "Gated communities"],
    process: ["Entry assessment", "Hardware sizing", "Foundation and installation", "Access setup", "Testing"]
  },
  {
    title: "Fire Alarm Systems",
    slug: "fire-alarm-systems",
    image: "assets/images/services/fire-alarm.jpg",
    description: "Fire detection, alarm panels, smoke detectors, hooters, manual call points, and safety-ready installation.",
    benefits: ["Early detection", "Zoned alerts", "Code-conscious installation", "Periodic maintenance"],
    ideal: ["Offices", "Shops", "Apartments", "Warehouses", "Schools"],
    process: ["Risk review", "Device mapping", "Installation", "Panel programming", "Alarm testing"]
  },
  {
    title: "Solar CCTV Systems",
    slug: "solar-cctv-systems",
    image: "assets/images/services/solar-cctv.jpg",
    description: "Solar-powered CCTV solutions for remote sites, farms, construction zones, yards, and outdoor perimeters.",
    benefits: ["Off-grid surveillance", "Battery backup", "Weather-ready cameras", "Remote monitoring"],
    ideal: ["Farms", "Construction sites", "Remote yards", "Open plots", "Industrial perimeters"],
    process: ["Sunlight and site study", "Power sizing", "Mounting", "Network setup", "Monitoring handover"]
  },
  {
    title: "Conference Room Solutions",
    slug: "conference-room-solutions",
    image: "assets/images/services/conference-room-solutions.jpg",
    description: "Modern meeting room AV, displays, cameras, microphones, networking, and hybrid collaboration setup.",
    benefits: ["Clear audio and video", "Cable-managed setup", "Hybrid meeting readiness", "Simple controls"],
    ideal: ["Offices", "Training rooms", "Boardrooms", "Schools", "Institutions"],
    process: ["Room audit", "AV design", "Installation", "Device configuration", "User training"]
  },
  {
    title: "Computers & IT Infrastructure",
    slug: "computers-it-infrastructure",
    image: "assets/images/services/computers-it-infrastructure.jpg",
    description: "Computers, peripherals, servers, networking, structured IT setup, and maintenance for growing businesses.",
    benefits: ["Reliable IT setup", "Hardware sourcing", "Network integration", "Support-ready infrastructure"],
    ideal: ["Offices", "Schools", "Retail stores", "Clinics", "Small businesses"],
    process: ["Requirement mapping", "Hardware planning", "Installation", "Configuration", "Maintenance support"]
  },
  {
    title: "Parking Sensor Lights",
    slug: "parking-sensor-lights",
    image: "assets/images/services/parking-sensor-lights.jpg",
    description: "Motion-based parking lighting solutions that improve safety, visibility, and energy efficiency.",
    benefits: ["Automatic lighting", "Energy savings", "Better parking visibility", "Low-maintenance setup"],
    ideal: ["Basements", "Apartments", "Commercial parking", "Villas", "Warehouses"],
    process: ["Parking audit", "Sensor placement", "Installation", "Sensitivity setup", "Night testing"]
  },
  {
    title: "Smart Guard Patrol Monitoring System",
    slug: "smart-guard-patrol-monitoring-system",
    image: "assets/images/services/smart-guard-patrol.jpg",
    description: "Smart patrol tracking systems that verify guard rounds, route compliance, missed checkpoints, and alerts.",
    benefits: ["Route verification", "Missed-round alerts", "Digital reports", "Improved site discipline"],
    ideal: ["Gated communities", "Industrial sites", "Hospitals", "Schools", "Large campuses"],
    process: ["Patrol route design", "Checkpoint tagging", "System setup", "Guard training", "Report review"]
  },
  {
    title: "AMC & Technical Support",
    slug: "amc-technical-support",
    image: "assets/images/services/amc-technical-support.jpg",
    description: "Annual maintenance contracts, preventive checks, repairs, upgrades, and technical support for security and IT systems.",
    benefits: ["Preventive maintenance", "Priority support", "System health checks", "Upgrade recommendations"],
    ideal: ["Existing CCTV users", "Offices", "Apartments", "Institutions", "Businesses"],
    process: ["System audit", "AMC plan", "Preventive visits", "Issue resolution", "Upgrade roadmap"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.setAttribute("href", whatsappUrl);
  });

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
            <strong>Explore service →</strong>
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
                <span class="eyebrow">AAR Service</span>
                <h1>${service.title}</h1>
                <p>${service.description}</p>
                <div class="hero-actions">
                  <a class="btn btn-primary" href="#request-quote">Get Free Site Inspection</a>
                  <a class="btn btn-secondary" data-whatsapp target="_blank" rel="noreferrer">WhatsApp Now</a>
                </div>
              </div>
              <div class="service-detail-image">
                <img src="${service.image}" alt="${service.title} installation" loading="lazy">
              </div>
            </div>
          </section>
          <section class="section">
            <div class="shell grid-3">
              ${detailCard("Benefits", service.benefits)}
              ${detailCard("Ideal For", service.ideal)}
              ${detailCard("Process", service.process)}
            </div>
          </section>
          <section class="section alt">
            <div class="shell">
              <div class="section-title">
                <span>FAQ</span>
                <h2>Questions about ${service.title}</h2>
              </div>
              <div class="faq">
                ${faq(service.title)}
              </div>
            </div>
          </section>
        </article>`
      )
      .join("");
  }

  function detailCard(title, items) {
    return `<div class="card"><h3>${title}</h3>${items.map((item) => `<p>✓ ${item}</p>`).join("")}</div>`;
  }

  function faq(serviceTitle) {
    return `
      <details><summary>Do you provide ${serviceTitle} installation in Mangalore?</summary><p>Yes. AAR Security Solutions handles consultation, site inspection, installation, configuration, and support across Mangalore and nearby Karnataka locations.</p></details>
      <details><summary>Can I request a free site inspection?</summary><p>Yes. Share your location and requirement through the inquiry form or WhatsApp, and our team will schedule a site assessment.</p></details>
      <details><summary>Do you offer AMC and technical support?</summary><p>Yes. We provide annual maintenance, troubleshooting, system upgrades, and periodic health checks for installed systems.</p></details>`;
  }

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
      form.querySelector(".form-message").style.display = "block";
      if (window.aarTrackLead) window.aarTrackLead();
    });
  });
});
