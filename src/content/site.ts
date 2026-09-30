// ─────────────────────────────────────────────────────────────
// RAVI SHANKAR BERA — Editable Content Architecture
// Update everything here without touching components.
// Placeholders use `null` where information is intentionally absent.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "RAVI SHANKAR BERA",
  firstName: "RAVI",
  role: "Quality Engineering Leader",
  positioning: "Quality Engineering Leader | Test Automation Specialist | Technology Entrepreneur",
  headline: "HI, I'M RAVI.",
  subHeadline: "QUALITY ENGINEERING LEADER",
  rotatingKeywords: [
    "TEST AUTOMATION",
    "QUALITY ENGINEERING",
    "AI",
    "TECHNOLOGY",
    "LEADERSHIP",
    "ENTREPRENEURSHIP",
  ],
  tagline:
    "Building quality-driven technology experiences through automation, engineering leadership and continuous innovation.",
  location: "Bengaluru, Karnataka, India",
  currentRole: {
    label: "MANAGER — QUALITY ASSURANCE",
    company: "HEXAWARE TECHNOLOGIES",
  },
  avatarAlt: "Stylised 3D avatar of technology leader Ravi Shankar Bera",
} as const;

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/ravishankarbera/",
  stacknity: "https://www.stacknity.com/",
  // Configurable — Ravi can update without redesign. Null = show placeholder button.
  email: null as string | null, // e.g. "hello@ravishankarbera.com"
  resumeUrl: null as string | null, // e.g. "/Ravi-Shankar-Bera-Resume.pdf"
} as const;

export const navigation = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "VENTURES", href: "#ventures" },
  { label: "INSIGHTS", href: "#insights" },
  { label: "CONTACT", href: "#contact" },
] as const;

export const about = {
  heading: "MORE THAN A QA PROFESSIONAL.",
  paragraphs: [
    "Ravi Shankar Bera is a technology professional and QA leader with 6+ years of experience across automation, manual testing, functional testing, quality engineering and team leadership.",
    "His professional journey has evolved from engineering and hands-on QA responsibilities into automation and quality leadership, while continuing to explore technology, entrepreneurship and digital innovation.",
  ],
  cards: [
    {
      index: "01",
      title: "ENGINEER",
      items: ["Automation", "Testing", "Quality Engineering"],
      description: "Hands-on roots in systems, QA craft and reliable delivery.",
    },
    {
      index: "02",
      title: "LEADER",
      items: ["Team Leadership", "Strategy", "Process Improvement"],
      description: "Leading quality teams with clarity, process and ownership.",
    },
    {
      index: "03",
      title: "BUILDER",
      items: ["Technology", "Entrepreneurship", "Innovation"],
      description: "Building ventures and ideas beyond the day-to-day.",
    },
  ],
} as const;

export const journeyStages = [
  "SYSTEM ENGINEERING",
  "QUALITY ASSURANCE",
  "TEST AUTOMATION",
  "ASSISTANT MANAGER",
  "MANAGER — QUALITY ASSURANCE",
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
    phase: "Current Chapter",
    role: "Manager — Quality Assurance Team",
    summary:
      "Leading the Quality Assurance team with a focus on automation-first quality engineering, delivery excellence and continuous improvement.",
    highlights: ["Quality engineering leadership", "Test automation strategy", "Team mentorship"],
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
  eyebrow: "ENTREPRENEURSHIP",
  heading: "BUILDING BEYOND THE 9–5",
  company: "STACKNITY TECHNOLOGIES",
  description:
    "An entrepreneurial technology initiative associated with Ravi Shankar Bera — exploring how AI, engineering and design come together to build quality-driven digital products.",
  domains: [
    "AI",
    "MACHINE LEARNING",
    "CYBERSECURITY",
    "DATA SCIENCE",
    "UX/UI",
    "CLOUD COMPUTING",
    "DIGITAL MARKETING",
  ],
  cta: { label: "EXPLORE STACKNITY", href: "https://www.stacknity.com/" },
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

export const drives = ["QUALITY", "INNOVATION", "AUTOMATION", "LEADERSHIP", "LEARNING", "ENTREPRENEURSHIP"] as const;

export const contact = {
  heading: "LET'S BUILD SOMETHING BETTER.",
  supporting: "For technology, quality engineering, automation, innovation and professional collaboration.",
} as const;

export const siteMeta = {
  title: "Ravi Shankar Bera — Quality Engineering Leader | Automation | Technology",
  description:
    "Ravi Shankar Bera is a Quality Engineering Leader and Test Automation Specialist at Hexaware Technologies, Bengaluru — building quality-driven technology through automation, leadership and entrepreneurship (Stacknity Technologies).",
  url: "https://ravishankarbera.github.io/RSBs-Profile", // GitHub Pages canonical — update if a custom domain is added
  ogImage: "/og-cover.jpg", // add real cover in public/ when ready
} as const;
