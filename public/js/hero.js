(function () {
  "use strict";

  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");
  const MOBILE = window.matchMedia("(max-width: 767px)");

  function tokenMilliseconds(name, fallback) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    if (!raw) return fallback;
    if (raw.endsWith("ms")) return Number.parseFloat(raw);
    if (raw.endsWith("s")) return Number.parseFloat(raw) * 1000;
    return fallback;
  }

  function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
  }

  function easeOutExpo(progress) {
    return progress >= 1 ? 1 : 1 - Math.pow(2, -10 * progress);
  }

  function init() {
    const hero = document.querySelector("[data-hero]");
    if (!hero || hero.dataset.heroInitialized === "true") return;
    hero.dataset.heroInitialized = "true";

    const fragments = Array.from(hero.querySelectorAll("[data-hero-fragment]"));
    let activeFragments = fragments;
    const scrollLabel = hero.querySelector("[data-hero-scroll-label]");
    let targetProgress = 0;
    let renderedProgress = 0;
    let rafId = 0;
    let previousTime = 0;
    let mobileStart = 0;
    let hasAligned = false;
    const mobileSettle = tokenMilliseconds("--duration-slow", 900);
    const scrollScrub = tokenMilliseconds("--duration-medium", 700);

    function isRendered(fragment) {
      return window.getComputedStyle(fragment).display !== "none";
    }

    function render(progress) {
      const inverse = 1 - progress;

      activeFragments.forEach((fragment) => {
        const x = Number(fragment.dataset.offsetX || 0) * inverse;
        const y = Number(fragment.dataset.offsetY || 0) * inverse;
        const rotation = Number(fragment.dataset.offsetR || 0) * inverse;
        const scale = 0.92 + 0.08 * progress;
        fragment.style.transform = `translate3d(${x}vw, ${y}vh, 0) rotate(${rotation}deg) scale(${scale})`;
      });

      hero.style.setProperty("--hero-progress", Math.max(progress, 0.12).toFixed(4));
      hero.style.setProperty("--hero-grid-opacity", (0.08 - progress * 0.06).toFixed(4));

      const aligned = progress >= 0.995;
      hero.dataset.systemState = aligned ? "aligned" : "resolving";
      if (scrollLabel) scrollLabel.textContent = aligned ? "SYSTEM ALIGNED" : "SCROLL TO RESOLVE";

      if (aligned && !hasAligned) {
        hasAligned = true;
        hero.dispatchEvent(new CustomEvent("tenzo:hero-aligned", { bubbles: true }));
      } else if (!aligned) {
        hasAligned = false;
      }
    }

    function readScrollProgress() {
      const rect = hero.getBoundingClientRect();
      const travel = Math.max(hero.offsetHeight * 0.75, 1);
      return clamp(-rect.top / travel, 0, 1);
    }

    function scrollFrame(time) {
      const delta = previousTime ? Math.min(time - previousTime, 64) : 16;
      previousTime = time;
      const smoothing = 1 - Math.exp(-delta / scrollScrub);
      renderedProgress += (targetProgress - renderedProgress) * smoothing;

      if (Math.abs(targetProgress - renderedProgress) < 0.001) {
        renderedProgress = targetProgress;
        render(renderedProgress);
        rafId = 0;
        previousTime = 0;
        return;
      }

      render(renderedProgress);
      rafId = window.requestAnimationFrame(scrollFrame);
    }

    function requestScrollRender() {
      targetProgress = readScrollProgress();
      if (!rafId) rafId = window.requestAnimationFrame(scrollFrame);
    }

    function mobileFrame(time) {
      if (!mobileStart) mobileStart = time;
      const elapsed = time - mobileStart;
      const progress = easeOutExpo(clamp(elapsed / mobileSettle, 0, 1));
      renderedProgress = progress;
      render(progress);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(mobileFrame);
      } else {
        rafId = 0;
      }
    }

    function startComposition() {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = 0;
      previousTime = 0;
      mobileStart = 0;
      activeFragments = fragments.filter(isRendered);

      if (REDUCED_MOTION.matches) {
        renderedProgress = 1;
        render(1);
        return;
      }

      if (MOBILE.matches) {
        renderedProgress = 0;
        render(0);
        rafId = window.requestAnimationFrame(mobileFrame);
        return;
      }

      renderedProgress = readScrollProgress();
      targetProgress = renderedProgress;
      render(renderedProgress);
    }

    function revealHero() {
      if (hero.classList.contains("is-entered")) return;
      window.requestAnimationFrame(() => {
        hero.classList.add("is-entered");
        startComposition();
      });
    }

    function onModeChange() {
      startComposition();
      if (!MOBILE.matches && !REDUCED_MOTION.matches) requestScrollRender();
    }

    const preloader = document.querySelector("[data-preloader]");
    if (!preloader || preloader.hidden || preloader.classList.contains("is-complete") || REDUCED_MOTION.matches) {
      revealHero();
    } else {
      document.addEventListener("tenzo:ready", revealHero, { once: true });
    }

    window.addEventListener("scroll", () => {
      if (!MOBILE.matches && !REDUCED_MOTION.matches) requestScrollRender();
    }, { passive: true });

    window.addEventListener("resize", () => {
      if (!MOBILE.matches && !REDUCED_MOTION.matches) requestScrollRender();
    }, { passive: true });
    MOBILE.addEventListener?.("change", onModeChange);
    REDUCED_MOTION.addEventListener?.("change", onModeChange);
  }

  window.TenzoHero = { init };
})();
