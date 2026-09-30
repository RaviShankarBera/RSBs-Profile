// ─────────────────────────────────────────────────────────────
// RAVI SHANKAR BERA — Editable Content Architecture
// Update everything here without touching components.
// Placeholders use `null` where information is intentionally absent.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "RAVI SHANKAR BERA",
  firstName: "RAVI",
  role: "Founder & CEO",
  positioning: "Founder & CEO | Technology · Travel · Legal · AI",
  headline: "HI, I'M RAVI.",
  subHeadline: "FOUNDER & CEO",
  rotatingKeywords: [
    "STACKNITY TECHNOLOGIES",
    "MY MINUTE TRAVEL",
    "RSB & CO",
    "STACKNITY-AI",
    "TECHNOLOGY",
    "LEADERSHIP",
  ],
  tagline:
    "Founder & CEO of four companies — building technology, travel, legal and AI ventures with a quality-obsessed engineering mindset.",
  location: "Bengaluru, Karnataka, India",
  currentRole: {
    label: "FOUNDER & CEO — 4 COMPANIES",
    company: "STACKNITY GROUP OF VENTURES",
  },
  avatarAlt: "Stylised 3D avatar of founder Ravi Shankar Bera",
} as const;

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/ravishankarbera/",
  stacknity: "https://www.stacknity.com/",
  // Configurable — Ravi can update without redesign. Null = show placeholder button.
  email: "advocate.ravishankarbera@gmail.com" as string | null,
  resumeUrl: null as string | null, // e.g. "/Ravi-Shankar-Bera-Resume.pdf"
} as const;

export const navigation = [
  { label: "ABOUT", href: "#about" },
  { label: "VENTURES", href: "#ventures" },
  { label: "JOURNEY", href: "#experience" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "INSIGHTS", href: "#insights" },
  { label: "CONTACT", href: "#contact" },
] as const;

export const about = {
  heading: "FOUNDER FIRST. ENGINEER AT HEART.",
  paragraphs: [
    "Ravi Shankar Bera is the Founder & CEO of four companies spanning technology, travel, legal services and artificial intelligence — with a professional foundation of 6+ years across quality engineering, test automation and team leadership.",
    "His journey evolved from engineering and hands-on QA leadership into entrepreneurship — carrying a quality-obsessed, automation-first mindset into every venture he builds.",
  ],
  cards: [
    {
      index: "01",
      title: "FOUNDER",
      items: ["Four Companies", "Vision", "Execution"],
      description: "Building and leading ventures across tech, travel, legal and AI.",
    },
    {
      index: "02",
      title: "LEADER",
      items: ["Team Leadership", "Strategy", "Process Improvement"],
      description: "Leading teams with clarity, process and ownership.",
    },
    {
      index: "03",
      title: "BUILDER",
      items: ["Technology", "Entrepreneurship", "Innovation"],
      description: "Obsessed with quality, automation and continuous innovation.",
    },
  ],
} as const;

export const journeyStages = [
  "SYSTEM ENGINEERING",
  "QUALITY ASSURANCE",
  "TEST AUTOMATION",
  "LEADERSHIP",
  "FOUNDER & CEO",
] as const;

export const experience = [
  {
    id: "tcs",
    company: "Tata Consultancy Services (TCS)",
    short: "TCS",
    phase: "Foundation · Growth · Leadership",
    summary:
      "Professional journey spanning approximately four years, with progression from System Engineer through QA and leadership responsibilities.",
    highlights: [
      "Tosca automation",
      "SAP testing",
      "Quality assurance",
      "Process improvement",
      "Team leadership",
    ],
    current: false,
    // Dates intentionally omitted — add when confirmed.
    period: null as string | null,
  },
  {
    id: "hexaware",
    company: "Hexaware Technologies",
    short: "HEXAWARE",
    phase: "Corporate Leadership",
    role: "Manager — Quality Assurance Team",
    summary:
      "Quality Assurance leadership with a focus on automation-first quality engineering, delivery excellence and continuous improvement — the foundation behind a founder's mindset.",
    highlights: ["Quality engineering leadership", "Test automation strategy", "Team mentorship"],
    current: false,
    period: null as string | null,
  },
  {
    id: "founder",
    company: "Founder & CEO — Four Ventures",
    short: "FOUNDER",
    phase: "Current Chapter",
    role: "Founder & Chief Executive Officer",
    summary:
      "Leading Stacknity Technologies, My Minute Travel, RSB & Co and Stacknity-ai — building across technology, travel, legal services and artificial intelligence.",
    highlights: ["Entrepreneurship", "Business strategy", "Multi-company leadership"],
    current: true,
    period: "Present" as string | null,
  },
] as const;

export const skills = [
  { category: "Core", label: "QUALITY ENGINEERING" },
  { category: "Core", label: "TEST AUTOMATION" },
  { category: "Core", label: "MANUAL TESTING" },
  { category: "Core", label: "FUNCTIONAL TESTING" },
  { category: "Tools", label: "TRICENTIS TOSCA" },
  { category: "Tools", label: "API TESTING" },
  { category: "Tools", label: "SAP TESTING" },
  { category: "Leadership", label: "TEST STRATEGY" },
  { category: "Leadership", label: "PROCESS IMPROVEMENT" },
  { category: "Leadership", label: "TEAM LEADERSHIP" },
  { category: "Delivery", label: "AGILE" },
  { category: "Delivery", label: "PROJECT MANAGEMENT" },
] as const;

export const certifications = [
  {
    issuer: "TRICENTIS",
    title: "Automation Specialist 1",
    issued: "Issued 2023",
    credentialUrl: null as string | null,
  },
  {
    issuer: "TRICENTIS",
    title: "Automation Specialist 2",
    issued: "Issued 2023",
    credentialUrl: null as string | null,
  },
  {
    issuer: "TRICENTIS TOSCA",
    title: "Certified Tricentis Tosca",
    issued: "Issued 2024",
    credentialUrl: null as string | null,
  },
  {
    issuer: "AGILE SCRUM MASTER",
    title: "Master of Project Academy",
    issued: "Issued 2024",
    credentialUrl: null as string | null,
  },
  {
    issuer: "PROJECT MANAGEMENT",
    title: "Certified Project Management Associate",
    issued: "Project Management Institute · Issued 2024",
    credentialUrl: null as string | null,
  },
] as const;

export const ventures = {
  eyebrow: "VENTURES",
  heading: "FOUR COMPANIES. ONE VISION.",
  description:
    "Founder & CEO of four companies — each built on the same obsession: quality, trust and execution.",
  companies: [
    {
      index: "01",
      name: "STACKNITY TECHNOLOGIES",
      tagline: "Technology services company",
      description:
        "Website development, mobile applications, digital marketing and staff augmentation — end-to-end technology execution for businesses.",
      domains: ["WEBSITES", "MOBILE APPS", "DIGITAL MARKETING", "STAFF AUGMENTATION"],
      cta: { label: "EXPLORE STACKNITY", href: "https://www.stacknity.com/" as string | null },
    },
    {
      index: "02",
      name: "MY MINUTE TRAVEL",
      tagline: "Complete travel company",
      description:
        "Affordable flights and complete end-to-end destination packages — travel planned, booked and managed in one place.",
      domains: ["AFFORDABLE FLIGHTS", "DESTINATION PACKAGES", "END-TO-END TRAVEL"],
      cta: { label: "COMING SOON", href: null as string | null },
    },
    {
      index: "03",
      name: "RSB & CO",
      tagline: "Diverse law firm — All over India",
      description:
        "A diverse law firm handling criminal, civil, corporate, trademark, pro-bono and matrimonial matters across India.",
      domains: ["CRIMINAL", "CIVIL", "CORPORATE", "TRADEMARK", "PRO-BONO", "MATRIMONIAL"],
      cta: { label: "COMING SOON", href: null as string | null },
    },
    {
      index: "04",
      name: "STACKNITY-AI",
      tagline: "AI consulting & engineering",
      description:
        "AI consulting for company problems, LLM training & fine-tuning, and expert AI engineers and FDEs on demand.",
      domains: ["AI CONSULTING", "LLM TRAINING & FINE-TUNING", "AI ENGINEERS", "FDEs"],
      cta: {
        label: "EXPLORE STACKNITY-AI",
        href: "https://ravishankarbera.github.io/stacknity.ai/index.html" as string | null,
      },
    },
  ],
} as const;

export const articles = [
  {
    id: "ratan-tata-stacknity",
    index: "01",
    category: "ENTREPRENEURSHIP",
    date: "Editorial · Featured", // exact publish date not provided — editable
    title:
      "Mr. Ratan Tata: A Beacon of Inspiration in My Entrepreneurial Journey with Stacknity Technologies",
    excerpt:
      "On integrity-first leadership, long-term thinking and what founders can learn from an icon — and how it shapes Stacknity.",
    href: null as string | null,
  },
  {
    id: "india-startup-flame",
    index: "02",
    category: "STARTUPS · INDIA",
    date: "Editorial · Featured",
    title: "Igniting the Flame: India's Young Generation and the Startup Enthusiasm Initiatives",
    excerpt:
      "Why India's young builders are choosing ownership over comfort — and how ecosystem momentum turns ideas into institutions.",
    href: null as string | null,
  },
] as const;

export const drives = ["VISION", "QUALITY", "EXECUTION", "LEADERSHIP", "INNOVATION", "ENTREPRENEURSHIP"] as const;

export const contact = {
  heading: "LET'S BUILD SOMETHING BIGGER.",
  supporting: "For technology, travel, legal, AI and business collaboration.",
} as const;

export const siteMeta = {
  title: "Ravi Shankar Bera — Founder & CEO | Technology · Travel · Legal · AI",
  description:
    "Ravi Shankar Bera is the Founder & CEO of Stacknity Technologies, My Minute Travel, RSB & Co and Stacknity-ai — building technology, travel, legal and AI ventures from Bengaluru, India.",
  url: "https://ravishankarbera.github.io/RSBs-Profile", // GitHub Pages canonical — update if a custom domain is added
  ogImage: "/og-cover.jpg", // add real cover in public/ when ready
} as const;
