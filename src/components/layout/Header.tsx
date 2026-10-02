"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";

/**
 * One-page header:
 * - Shrinks and gains a shadow once you scroll
 * - Top progress bar tracks page reading position
 * - Scroll-spy highlights the nav item of the section in view
 * - Anchor links smooth-scroll to home sections
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const onHomePage = pathname === "/";

  // Scroll state: shrink + reading progress
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Scroll-spy: watch each home section as it crosses the viewport
  useEffect(() => {
    if (!onHomePage) {
      setActiveSection("");
      return;
    }
    const ids = NAV_LINKS.map((l) => l.sectionId).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHomePage, pathname]);

  // Smooth-scroll to a home section (works from any route)
  const goToSection = useCallback(
    (sectionId: string) => {
      setOpen(false);
      if (!sectionId) return;
      if (!onHomePage) {
        sessionStorage.setItem("scroll-target", sectionId);
        window.location.href = `/#${sectionId}`;
        return;
      }
      const el = document.getElementById(sectionId);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    },
    [onHomePage]
  );

  const isActive = (link: (typeof NAV_LINKS)[number]) => {
    return onHomePage && activeSection === link.sectionId;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-forest/10 bg-[#fbf3e3] transition-all duration-500 ${
        scrolled
          ? "shadow-[0_6px_28px_-14px_rgba(31,35,27,0.3)]"
          : "shadow-none"
      }`}
    >
      {/* Reading progress bar */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-forest via-olive to-saffron transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div
        className={`flex items-center justify-between gap-4 px-4 transition-all duration-500 md:px-8 lg:px-12 xl:px-16 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        {/* Brand block */}
        <Link href="/" className="group flex items-center gap-3" aria-label={`${BRAND.name} home`}>
          <Image
            src="/images/logo/logo-transparent.png"
            alt=""
            width={64}
            height={64}
            className={`object-contain transition-all duration-500 group-hover:rotate-[8deg] ${
              scrolled ? "h-12 w-12" : "h-16 w-16"
            }`}
            priority
          />
          <span className="leading-tight">
            <span
              className={`block font-serif tracking-[0.14em] text-ink transition-all duration-500 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              {BRAND.name.split(" ")[0].toUpperCase()}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-saffron">
              {BRAND.tagline.split(".")[0]}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = isActive(link);
            const isAnchor = Boolean(link.sectionId);
            const inner = (
              <>
                <span className={active ? "text-forest" : ""}>{link.label}</span>
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-forest to-saffron transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
                {active && isAnchor && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-saffron" />
                )}
              </>
            );
            return isAnchor ? (
              <button
                key={link.href}
                type="button"
                onClick={() => goToSection(link.sectionId)}
                className="group relative py-1 text-sm font-medium text-ink/80 transition-colors hover:text-forest"
              >
                {inner}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-1 text-sm font-medium text-ink/80 transition-colors hover:text-forest"
              >
                {inner}
              </Link>
            );
          })}
        </nav>

        {/* Icon actions */}
        <div className="flex items-center gap-1.5 text-ink/80">
          <button
            type="button"
            onClick={() => goToSection("contact")}
            aria-label="Enquire now"
            className="hidden items-center gap-1.5 rounded-full bg-forest px-4 py-2 text-xs font-medium text-parchment transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-md sm:flex"
          >
            Enquire Now
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-forest/10 hover:text-forest lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-parchment-border transition-all duration-500 ease-out lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-3" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => {
            const isAnchor = Boolean(link.sectionId);
            const cls = `border-b border-parchment-border/60 py-3 text-left text-sm font-medium transition-all duration-300 last:border-0 ${
              open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            } ${isActive(link) ? "text-forest" : "text-ink/80"}`;
            return (
              <div key={link.href} style={{ transitionDelay: `${i * 40}ms` }} className={cls}>
                {isAnchor ? (
                  <button type="button" onClick={() => goToSection(link.sectionId)} className="w-full">
                    {link.label}
                  </button>
                ) : (
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
