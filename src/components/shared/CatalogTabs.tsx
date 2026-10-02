import Link from "next/link";

const TABS = [
  { href: "/#whole-spices", label: "Whole Spices" },
  { href: "/#best-sellers", label: "Best Sellers" },
  { href: "/#new-launches", label: "New Launches" },
  { href: "/#seeds-herbs", label: "Seeds & Herbs" },
];

/** Catalog view switcher shared by the spices pages. */
export function CatalogTabs({ active }: { active: string }) {
  return (
    <nav aria-label="Catalog views" className="flex flex-wrap gap-2.5">
      {TABS.map((tab) => {
        const isActive = tab.href === active;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`rounded-card px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isActive
                ? "bg-forest text-parchment shadow-sm"
                : "border border-ink/15 bg-white text-ink hover:-translate-y-0.5 hover:border-forest hover:text-forest"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
