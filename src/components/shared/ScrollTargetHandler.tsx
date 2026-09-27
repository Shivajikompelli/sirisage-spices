"use client";

import { useEffect } from "react";

/**
 * When a header anchor is clicked from another route (e.g. /spices), the
 * Header stores the target section and navigates home. This component picks
 * it up on mount and smooth-scrolls to the section.
 */
export function ScrollTargetHandler() {
  useEffect(() => {
    const target = sessionStorage.getItem("scroll-target");
    if (!target) return;
    sessionStorage.removeItem("scroll-target");
    // Wait a tick so sections are mounted
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return null;
}
