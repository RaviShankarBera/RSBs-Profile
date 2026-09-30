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
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ravi Shankar Bera",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "Stacknity Technologies" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    url: siteMeta.url,
    sameAs: [socialLinks.linkedin, socialLinks.stacknity].filter(Boolean),
    knowsAbout: [
      "Quality Engineering",
      "Test Automation",
      "Tricentis Tosca",
      "API Testing",
      "SAP Testing",
      "Agile",
      "Project Management",
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
