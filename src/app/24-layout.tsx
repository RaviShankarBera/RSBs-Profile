import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteMeta, profile, socialLinks } from "@/content/site";

const display = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: [
    "Ravi Shankar Bera",
    "Founder and CEO",
    "Stacknity Technologies",
    "My Minute Travel",
    "RSB and Co law firm",
    "Stacknity AI",
    "Quality Engineering",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: profile.name,
    images: [{ url: siteMeta.ogImage, width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
  alternates: { canonical: siteMeta.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const base = siteMeta.url;
  const personId = `${base}/#ravi`;
  const orgs = [
    { "@type": "Organization", "@id": `${base}/#stacknity-technologies`, name: "Stacknity Technologies", url: socialLinks.stacknity, description: "Website development, mobile applications, digital marketing and staff augmentation.", founder: { "@id": personId } },
    { "@type": "Organization", "@id": `${base}/#stacknity-ai`, name: "Stacknity.ai", url: socialLinks.stacknityAi, description: "AI consulting for company problems, LLM training and fine-tuning, and expert AI engineers and FDEs.", founder: { "@id": personId } },
    { "@type": "Organization", "@id": `${base}/#my-minute-travel`, name: "My Minute Travel", description: "A complete travel company offering affordable flights and end-to-end destination packages.", founder: { "@id": personId } },
    { "@type": "LegalService", "@id": `${base}/#rsb-and-co`, name: "RSB & Co", description: "A diverse law firm handling criminal, civil, corporate, trademark, pro bono and matrimonial matters across India.", areaServed: "IN", founder: { "@id": personId } },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Ravi Shankar Bera",
        alternateName: ["Ravishankar Bera", "Ravi Bera"],
        jobTitle: "Founder & CEO",
        description: siteMeta.description,
        worksFor: orgs.map((o) => ({ "@id": o["@id"] })),
        address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
        url: siteMeta.url,
        sameAs: [socialLinks.linkedin, socialLinks.github, socialLinks.stacknity, socialLinks.stacknityAi],
        knowsAbout: ["Artificial Intelligence", "Quality Engineering", "Test Automation", "Tricentis Tosca", "API Testing", "SAP Testing", "Web Development", "Law"],
      },
      ...orgs,
      { "@type": "ProfilePage", url: siteMeta.url, name: siteMeta.title, mainEntity: { "@id": personId } },
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${mono.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain min-h-full bg-[#060608] text-[#f5f6f8] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
