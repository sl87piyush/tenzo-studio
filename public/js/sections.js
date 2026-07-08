(function () {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopChapters = window.matchMedia("(min-width: 768px)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  let initialized = false;

  const clamp = (value, minimum, maximum) => Math.min(Math.max(value, minimum), maximum);

  function tokenNumber(name, fallback) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return Number.parseFloat(raw) || fallback;
  }

  function onFrame(callback) {
    let queued = false;
    return function frameHandler() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        callback();
        queued = false;
      });
    };
  }

  function initPositioningIndicator() {
    const section = document.querySelector("#standard");
    const indicator = section?.querySelector("[data-standard-indicator]");
    if (!section || !indicator) return;

    const render = () => {
      if (!desktopChapters.matches || reducedMotion.matches) {
        indicator.style.setProperty("--standard-progress", "1");
        return;
      }

      const bounds = section.getBoundingClientRect();
      const start = window.innerHeight * 0.65;
      const end = window.innerHeight * 0.35;
      const progress = clamp((start - bounds.top) / (bounds.height + start - end), 0, 1);
      indicator.style.setProperty("--standard-progress", progress.toFixed(3));
    };

    const update = onFrame(render);
    render();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
  }

  function initSystemCursors() {
    if (!finePointer.matches || reducedMotion.matches) return;

    document.querySelectorAll(".system-card__visual").forEach((visual) => {
      visual.addEventListener("pointermove", (event) => {
        const bounds = visual.getBoundingClientRect();
        visual.style.setProperty("--cursor-x", `${event.clientX - bounds.left}px`);
        visual.style.setProperty("--cursor-y", `${event.clientY - bounds.top}px`);
      });

      visual.addEventListener("pointerleave", () => {
        visual.style.removeProperty("--cursor-x");
        visual.style.removeProperty("--cursor-y");
      });
    });
  }

  function initCapabilities() {
    const section = document.querySelector("[data-capabilities]");
    const stage = section?.querySelector("[data-capability-stage]");
    const chapters = Array.from(section?.querySelectorAll("[data-capability-chapter]") || []);
    const jumps = Array.from(section?.querySelectorAll("[data-capability-jump]") || []);
    const incomingLinks = Array.from(document.querySelectorAll("[data-capability-link]"));
    const index = section?.querySelector(".capability-index");
    const orbit = section?.querySelector("[data-capability-orbit]");
    const orbitPanels = Array.from(section?.querySelectorAll("[data-capability-orbit-panel]") || []);
    const orbitCoordinate = orbit?.querySelector(".capability-orbit__coordinates span");
    if (!section || !stage || !chapters.length) return;

    let activeIndex = 0;

    const enhanced = () => desktopChapters.matches && document.documentElement.classList.contains("motion-allowed");

    const setActive = (nextIndex) => {
      const safeIndex = clamp(nextIndex, 0, chapters.length - 1);
      if (activeIndex === safeIndex && chapters[safeIndex].classList.contains("is-active")) return;
      activeIndex = safeIndex;

      chapters.forEach((chapter, chapterIndex) => {
        chapter.classList.toggle("is-active", chapterIndex === safeIndex);
        chapter.classList.toggle("is-before", chapterIndex < safeIndex);
      });

      jumps.forEach((jump, jumpIndex) => {
        const current = jumpIndex === safeIndex;
        jump.classList.toggle("is-active", current);
        if (current) jump.setAttribute("aria-current", "step");
        else jump.removeAttribute("aria-current");
      });

      orbitPanels.forEach((panel, panelIndex) => {
        panel.classList.toggle("is-current", panelIndex === safeIndex);
      });

      if (index) index.setAttribute("aria-label", `Capability chapter ${safeIndex + 1} of 5`);
    };

    const renderOrbit = (progress) => {
      if (!orbitPanels.length || !enhanced()) return;

      const position = clamp(progress * chapters.length, 0, chapters.length - 1);
      orbit.style.setProperty("--orbit-progress", position.toFixed(3));
      if (orbitCoordinate) orbitCoordinate.textContent = `Y / ${position.toFixed(3).padStart(6, "0")}`;

      orbitPanels.forEach((panel, panelIndex) => {
        const distance = panelIndex - position;
        const absoluteDistance = Math.abs(distance);
        const scale = Math.max(0.72, 1 - absoluteDistance * 0.1);
        const opacity = Math.max(0, 1 - absoluteDistance * 0.38);

        panel.style.setProperty("--orbit-y", `${(distance * 68).toFixed(3)}%`);
        panel.style.setProperty("--orbit-z", `${(-absoluteDistance * 170).toFixed(2)}px`);
        panel.style.setProperty("--orbit-tilt", `${(distance * -16).toFixed(2)}deg`);
        panel.style.setProperty("--orbit-scale", scale.toFixed(3));
        panel.style.setProperty("--orbit-opacity", opacity.toFixed(3));
        panel.style.zIndex = String(20 - Math.round(absoluteDistance * 2));
      });
    };

    const render = () => {
      if (!enhanced()) {
        section.classList.remove("is-engaged");
        section.style.setProperty("--capability-progress", "1");
        chapters.forEach((chapter) => chapter.classList.remove("is-before"));
        return;
      }

      const bounds = stage.getBoundingClientRect();
      const distance = Math.max(bounds.height - window.innerHeight, 1);
      const progress = clamp(-bounds.top / distance, 0, 1);
      const nextIndex = Math.min(Math.floor(progress * chapters.length), chapters.length - 1);

      section.classList.toggle("is-engaged", bounds.top <= window.innerHeight && bounds.bottom >= 0);
      section.style.setProperty("--capability-progress", progress.toFixed(3));
      renderOrbit(progress);
      setActive(nextIndex);
    };

    const scrollToChapter = (chapterIndex) => {
      const safeIndex = clamp(chapterIndex, 0, chapters.length - 1);
      if (!enhanced()) {
        chapters[safeIndex].scrollIntoView({
          behavior: reducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
        return;
      }

      const stageTop = window.scrollY + stage.getBoundingClientRect().top;
      const distance = Math.max(stage.offsetHeight - window.innerHeight, 1);
      const targetProgress = (safeIndex + 0.08) / chapters.length;
      window.scrollTo({
        top: stageTop + distance * targetProgress,
        behavior: reducedMotion.matches ? "auto" : "smooth"
      });
    };

    jumps.forEach((jump) => {
      jump.addEventListener(
        "click",
        (event) => {
          if (!enhanced()) return;
          event.preventDefault();
          event.stopImmediatePropagation();
          scrollToChapter(Number(jump.dataset.capabilityJump));
        },
        { capture: true }
      );
    });

    incomingLinks.forEach((link) => {
      link.addEventListener(
        "click",
        (event) => {
          if (!enhanced()) return;
          event.preventDefault();
          event.stopImmediatePropagation();
          scrollToChapter(Number(link.dataset.capabilityLink));
        },
        { capture: true }
      );
    });

    const update = onFrame(render);
    setActive(0);
    render();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    reducedMotion.addEventListener?.("change", update);
    desktopChapters.addEventListener?.("change", update);
  }

  function initMethod() {
    const method = document.querySelector("[data-method]");
    const steps = Array.from(method?.querySelectorAll("[data-method-step]") || []);
    const nodes = Array.from(method?.querySelectorAll("[data-method-node]") || []);
    const diagram = method?.querySelector(".method__diagram");
    if (!method || !steps.length || !diagram) return;

    const setActive = (activeIndex) => {
      const safeIndex = clamp(activeIndex, 0, steps.length - 1);
      const progress = steps.length > 1 ? safeIndex / (steps.length - 1) : 0;

      steps.forEach((step, stepIndex) => {
        const active = stepIndex === safeIndex;
        step.classList.toggle("is-active", active);
        step.setAttribute("aria-pressed", String(active));
      });

      nodes.forEach((node, nodeIndex) => node.classList.toggle("is-active", nodeIndex === safeIndex));
      diagram.style.setProperty("--method-progress", progress.toFixed(3));
      diagram.setAttribute("aria-label", steps[safeIndex].querySelector(".method-step__note")?.textContent.trim() || "");
    };

    steps.forEach((step, stepIndex) => {
      step.addEventListener("click", () => setActive(stepIndex));
      step.addEventListener("focus", () => setActive(stepIndex));
      step.addEventListener("pointerenter", () => {
        if (finePointer.matches) setActive(stepIndex);
      });
    });

    setActive(0);
  }

  function initPrinciplesPreview() {
    const list = document.querySelector("[data-principles-list]");
    const preview = document.querySelector("[data-principles-preview]");
    const track = preview?.querySelector("[data-principles-preview-track]");
    const previewIndex = preview?.querySelector("[data-principles-preview-index]");
    const frame = preview?.querySelector(".principles-preview__frame");
    const principles = Array.from(list?.querySelectorAll("[data-principle-index]") || []);
    if (!list || !preview || !track || !frame || !principles.length || !finePointer.matches || !document.documentElement.classList.contains("motion-allowed")) return;

    let targetX = -window.innerWidth;
    let targetY = -window.innerHeight;
    let currentX = targetX;
    let currentY = targetY;
    let animationFrame = 0;
    let visible = false;
    let activePrinciple = null;

    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      preview.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

      const unsettled = Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1;
      if (visible || unsettled) animationFrame = window.requestAnimationFrame(render);
      else animationFrame = 0;
    };

    const requestRender = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    const updateTarget = (event) => {
      const halfWidth = frame.offsetWidth / 2;
      const halfHeight = frame.offsetHeight / 2;
      const safeEdge = 24;
      targetX = clamp(event.clientX, halfWidth + safeEdge, window.innerWidth - halfWidth - safeEdge);
      targetY = clamp(event.clientY, halfHeight + safeEdge, window.innerHeight - halfHeight - safeEdge);
      requestRender();
    };

    const activate = (principle, event) => {
      const index = Number(principle.dataset.principleIndex);
      visible = true;
      list.classList.add("is-hovering");
      preview.classList.add("is-visible");
      if (activePrinciple !== principle) {
        activePrinciple = principle;
        principles.forEach((item) => item.classList.toggle("is-preview-active", item === principle));
        track.style.transform = `translate3d(0, ${index * -100}%, 0)`;
        if (previewIndex) previewIndex.textContent = `${String(index + 1).padStart(2, "0")} / ${String(principles.length).padStart(2, "0")}`;
      }
      updateTarget(event);
    };

    const deactivate = () => {
      visible = false;
      list.classList.remove("is-hovering");
      preview.classList.remove("is-visible");
      principles.forEach((principle) => principle.classList.remove("is-preview-active"));
      activePrinciple = null;
    };

    list.addEventListener("pointermove", (event) => {
      const principle = event.target.closest?.("[data-principle-index]");
      if (principle) activate(principle, event);
      else updateTarget(event);
    }, { passive: true });
    list.addEventListener("pointerleave", deactivate);
    window.addEventListener("blur", deactivate);
  }

  function initStudioField() {
    const field = document.querySelector("[data-studio-field]");
    if (!field || !finePointer.matches || !desktopChapters.matches || reducedMotion.matches) return;
    const shift = tokenNumber("--studio-parallax-shift", 4);
    const rotation = tokenNumber("--studio-parallax-rotation", 0.4);

    field.addEventListener("pointermove", (event) => {
      const bounds = field.getBoundingClientRect();
      const x = clamp((event.clientX - bounds.left) / bounds.width, 0, 1) - 0.5;
      const y = clamp((event.clientY - bounds.top) / bounds.height, 0, 1) - 0.5;
      field.style.transform = `translate3d(${(x * shift * 2).toFixed(2)}px, ${(y * shift * 2).toFixed(2)}px, 0) rotate(${(x * rotation * 2).toFixed(2)}deg)`;
    });

    field.addEventListener("pointerleave", () => {
      field.style.removeProperty("transform");
    });
  }

  function init() {
    if (initialized) return;
    initialized = true;
    initPositioningIndicator();
    initSystemCursors();
    initCapabilities();
    initMethod();
    initPrinciplesPreview();
    initStudioField();
  }

  window.TenzoSections = { init };
})();
