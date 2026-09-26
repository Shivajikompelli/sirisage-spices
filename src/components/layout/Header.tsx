import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-lg text-forest">
          {BRAND.name}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        {/* TODO: mobile slide-out menu per slide 10 (Mobile-First System) */}
      </div>
    </header>
  );
}
