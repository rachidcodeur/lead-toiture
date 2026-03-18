"use client";

import { useEffect } from "react";

export default function ClientInit() {
  useEffect(() => {
    const hero = document.querySelector(".lt-hero");
    if (hero) {
      const t = requestAnimationFrame(() => {
        setTimeout(() => hero.classList.add("lt-hero-ready"), 80);
      });
      return () => cancelAnimationFrame(t);
    }
  }, []);

  useEffect(() => {
    const scrollButtons = document.querySelectorAll("[data-scroll-to]");
    const handler = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const targetSelector = btn.getAttribute("data-scroll-to");
      if (!targetSelector) return;
      const target = document.querySelector(targetSelector);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollButtons.forEach((btn) => btn.addEventListener("click", handler));
    return () => scrollButtons.forEach((btn) => btn.removeEventListener("click", handler));
  }, []);

  useEffect(() => {
    const animatedElements = document.querySelectorAll(".lt-animate");
    if (typeof window === "undefined" || !("IntersectionObserver" in window) || animatedElements.length === 0) {
      animatedElements.forEach((el) => {
        if (!(el as Element).closest(".lt-hero")) el.classList.add("lt-visible");
      });
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target.closest(".lt-hero")) return;
          entry.target.classList.add("lt-visible");
          obs.unobserve(entry.target);
        });
      },
      { root: null, threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    animatedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
