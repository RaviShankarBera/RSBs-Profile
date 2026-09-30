import { profile, socialLinks } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const emailHref = socialLinks.email ? `mailto:${socialLinks.email}` : undefined;

  return (
    <footer className="border-t border-white/8 bg-black/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="text-sm font-extrabold tracking-[0.22em] text-white">{profile.name}</p>
          <p className="mt-2 text-[13px] text-white/50">
            Founder & CEO
            <br />
            Technology | Travel | Legal | AI
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-[11px] font-bold tracking-[0.2em]">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">
            LINKEDIN
          </a>
          {emailHref ? (
            <a href={emailHref} className="text-white/55 hover:text-white">
              EMAIL
            </a>
          ) : (
            <span className="text-white/30">EMAIL</span>
          )}
          <a href={socialLinks.stacknity} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">
            STACKNITY
          </a>
        </nav>
      </div>
      <div className="border-t border-white/8">
        <p className="mx-auto max-w-7xl px-5 py-5 font-mono text-[11px] tracking-[0.14em] text-white/30 md:px-8">
          COPYRIGHT © {year} RAVI SHANKAR BERA · BENGALURU, INDIA
        </p>
      </div>
    </footer>
  );
}
