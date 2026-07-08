(function () {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const root = document.documentElement;

  function tokenMilliseconds(name, fallback) {
    const raw = getComputedStyle(root).getPropertyValue(name).trim();
    if (!raw) return fallback;
    if (raw.endsWith("ms")) return Number.parseFloat(raw);
    if (raw.endsWith("s")) return Number.parseFloat(raw) * 1000;
    return fallback;
  }

  function initPreloader() {
    const preloader = document.querySelector("[data-preloader]");
    if (!preloader) return;

    const seen = sessionStorage.getItem("tenzo-preloader-seen");
    if (seen || reducedMotion.matches) {
      preloader.hidden = true;
      document.body.classList.remove("is-locked");
      return;
    }

    const counter = preloader.querySelector("[data-preloader-counter]");
    const status = preloader.querySelector("[data-preloader-status]");
    const duration = tokenMilliseconds("--duration-counter", 1100);
    const hold = tokenMilliseconds("--duration-hold", 100);
    const exitDuration = tokenMilliseconds("--duration-fast", 200);
    const start = performance.now();
    document.body.classList.add("is-locked");

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(progress * 100).toString().padStart(2, "0");
      if (counter) counter.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(update);
        return;
      }

      if (status) status.textContent = "STANDARD SET";
      sessionStorage.setItem("tenzo-preloader-seen", "true");
      window.setTimeout(() => {
        preloader.classList.add("is-complete");
        document.body.classList.remove("is-locked");
        window.setTimeout(() => {
          preloader.hidden = true;
          document.dispatchEvent(new CustomEvent("tenzo:ready"));
        }, exitDuration);
      }, hold);
    }

    requestAnimationFrame(update);
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const selector = link.getAttribute("href");
        if (!selector || selector === "#") return;
        const target = document.querySelector(selector);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({
          behavior: reducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
        if (history.pushState) history.pushState(null, "", selector);
      });
    });
  }

  function initProjectForm() {
    const form = document.querySelector("[data-project-form]");
    if (!form) return;

    const status = form.querySelector("[data-form-status]");
    const submit = form.querySelector('[type="submit"]');
    const validationMessages = {
      name: { missing: "Enter your name." },
      email: { missing: "Enter your work email.", invalid: "Enter a valid email address." },
      company: { missing: "Enter your company or business name." },
      "project-gap": {
        missing: "Describe what needs to change.",
        short: "Add enough context for us to understand the gap."
      },
      budget: { missing: "Enter the available budget and currency." },
      "target-launch": { missing: "Enter a target date or timeframe." },
      authority: { missing: "Select the decision-authority option that applies." },
      consent: { missing: "Confirm that TENZO may use these details to respond." },
      "relevant-link": { invalid: "Enter a complete link, including https://." }
    };

    form.querySelectorAll("input, textarea, select").forEach((control) => {
      control.addEventListener("invalid", () => {
        const messages = validationMessages[control.name];
        if (!messages) return;
        if (control.validity.valueMissing && messages.missing) {
          control.setCustomValidity(messages.missing);
        } else if (control.validity.tooShort && messages.short) {
          control.setCustomValidity(messages.short);
        } else if (control.validity.typeMismatch && messages.invalid) {
          control.setCustomValidity(messages.invalid);
        }
      });
      control.addEventListener("input", () => control.setCustomValidity(""));
      control.addEventListener("change", () => control.setCustomValidity(""));
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const endpoint = form.dataset.endpoint;
      if (!endpoint) {
        if (status) {
          status.dataset.state = "error";
          status.textContent = "The brief was not sent. Your details remain in the form. Try again in a moment.";
          status.focus();
        }
        return;
      }

      submit.disabled = true;
      const originalLabel = submit.querySelector("span");
      if (originalLabel) originalLabel.textContent = "Sending Brief";

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error("Submission failed");
        form.reset();
        if (status) {
          status.dataset.state = "success";
          status.textContent = "Brief received. We will review it and respond within one business day with the right next step.";
          status.focus();
        }
      } catch (error) {
        if (status) {
          status.dataset.state = "error";
          status.textContent = "The brief was not sent. Your details remain in the form. Try again in a moment.";
          status.focus();
        }
      } finally {
        submit.disabled = false;
        if (originalLabel) originalLabel.textContent = "Send Project Brief";
      }
    });
  }

  function initFormToggle() {
    const toggle = document.querySelector("[data-form-toggle]");
    const wrap = document.querySelector("[data-form-wrap]");
    if (!toggle || !wrap) return;

    toggle.addEventListener("click", () => {
      const willOpen = wrap.dataset.collapsed === "true";
      wrap.dataset.collapsed = willOpen ? "false" : "true";
      toggle.setAttribute("aria-expanded", String(willOpen));
      if (willOpen) {
        window.setTimeout(() => {
          wrap.querySelector("input, textarea, select")?.focus();
        }, tokenMilliseconds("--form-collapse-duration", 500));
      }
    });
  }

  function init() {
    const syncMotionPolicy = () => {
      root.classList.toggle("motion-allowed", !reducedMotion.matches || window.location.protocol === "file:");
    };

    root.classList.remove("no-js");
    root.classList.add("js");
    syncMotionPolicy();
    reducedMotion.addEventListener?.("change", syncMotionPolicy);
    initPreloader();
    initSmoothAnchors();
    initProjectForm();
    initFormToggle();
    window.TenzoAnimations?.init?.();
    window.TenzoNavigation?.init?.();
    window.TenzoCursor?.init?.();
    window.TenzoHero?.init?.();
    window.TenzoSections?.init?.();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
