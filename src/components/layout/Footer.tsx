import { BRAND, CONTACT, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-16 bg-forest px-6 py-10 text-parchment">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:justify-between">
        <div>
          <p className="font-serif text-lg">{BRAND.name}</p>
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="text-sm">
          <p>{CONTACT.email}</p>
        </div>
      </div>
    </footer>
  );
}
