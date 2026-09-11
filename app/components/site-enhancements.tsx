"use client";

import { useEffect } from "react";

export function SiteEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
    const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    root.classList.add("js-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8%" },
    );

    elements.forEach((element) => revealObserver.observe(element));

    const updateProgress = () => {
      if (!progress) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      root.classList.remove("js-ready");
    };
  }, []);

  return <span className="scroll-progress" data-scroll-progress aria-hidden="true" />;
}
