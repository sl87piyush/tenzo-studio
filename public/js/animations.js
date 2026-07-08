(function () {
  "use strict";

  function init() {
    const targets = document.querySelectorAll("[data-reveal], .text-reveal, .media-reveal");
    if (!targets.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const styles = getComputedStyle(document.documentElement);
    const rootMargin = styles.getPropertyValue("--scroll-offset").trim() || "0px 0px -20% 0px";
    const threshold = Number.parseFloat(styles.getPropertyValue("--scroll-threshold")) || 0.2;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { root: null, rootMargin, threshold }
    );

    targets.forEach((target) => observer.observe(target));
  }

  window.TenzoAnimations = { init };
})();
