import Link from "next/link";
import Image from "next/image";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";

const SOCIALS: { icon: "facebook" | "instagram" | "whatsapp"; href: string; label: string }[] = [
  { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
  { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
  { icon: "whatsapp", href: "https://wa.me/91XXXXXXXXXX", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-parchment texture-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 py-7 md:flex-row">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3" aria-label={`${BRAND.name} home`}>
          <Image
            src="/images/logo/logo-transparent.png"
            alt=""
            width={56}
            height={56}
            className="h-12 w-12 rounded-full bg-parchment object-cover"
          />
          <span className="leading-tight">
            <span className="block font-serif text-base tracking-[0.14em]">
              {BRAND.name.split(" ")[0].toUpperCase()}
            </span>
            <span className="block text-[9px] uppercase tracking-[0.3em] text-saffron">
              {BRAND.tagline.split(".")[0]}
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-parchment/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-parchment/80">Follow Us</span>
          {SOCIALS.map(({ icon, href, label }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-parchment/30 text-parchment transition-all duration-300 hover:-translate-y-0.5 hover:border-parchment hover:bg-leaf hover:text-white"
            >
              <Icon name={icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-parchment/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-parchment/70 md:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
          </p>
          <p className="font-serif italic tracking-wide text-saffron">
            Pure Spices. Pure Trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
