(function () {
  "use strict";

  const TARGET_SELECTOR = "[data-cursor], [data-cursor-label]";
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let initialized = false;

  function init() {
    if (initialized || !finePointer.matches || reducedMotion.matches) return;

    const targets = Array.from(document.querySelectorAll(TARGET_SELECTOR));
    if (!targets.length) return;
    initialized = true;

    let cursor = document.querySelector("[data-context-cursor], .context-cursor");
    if (!cursor) {
      cursor = document.createElement("div");
      cursor.className = "context-cursor";
      cursor.dataset.contextCursor = "";
      cursor.setAttribute("aria-hidden", "true");
      cursor.innerHTML = '<span class="context-cursor__surface"><span class="context-cursor__label"></span></span>';
      document.body.append(cursor);
    }

    const label = cursor.querySelector(".context-cursor__label");
    let pointerX = -100;
    let pointerY = -100;
    let activeTarget = null;
    let animationFrame = 0;

    document.documentElement.classList.add("has-context-cursor");

    function render() {
      animationFrame = 0;
      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
    }

    function queueRender(event) {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    }

    function getLabel(target) {
      return target.dataset.cursorLabel || target.dataset.cursor || "VIEW SYSTEM";
    }

    function show(event) {
      activeTarget = event.currentTarget;
      if (label) label.textContent = getLabel(activeTarget);
      queueRender(event);
      cursor.classList.add("is-visible");
    }

    function hide() {
      activeTarget = null;
      cursor.classList.remove("is-visible", "is-pressed");
    }

    function press() {
      if (activeTarget) cursor.classList.add("is-pressed");
    }

    function release() {
      cursor.classList.remove("is-pressed");
    }

    targets.forEach((target) => {
      target.addEventListener("pointerenter", show);
      target.addEventListener("pointermove", queueRender);
      target.addEventListener("pointerleave", hide);
      target.addEventListener("pointerdown", press);
      target.addEventListener("pointerup", release);
      target.addEventListener("pointercancel", hide);
    });

    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) hide();
    });
    document.addEventListener("tenzo:navigation:open", hide);
    reducedMotion.addEventListener("change", (event) => {
      if (event.matches) {
        hide();
        document.documentElement.classList.remove("has-context-cursor");
      } else if (finePointer.matches) {
        document.documentElement.classList.add("has-context-cursor");
      }
    });
    finePointer.addEventListener("change", (event) => {
      if (!event.matches) {
        hide();
        document.documentElement.classList.remove("has-context-cursor");
      } else if (!reducedMotion.matches) {
        document.documentElement.classList.add("has-context-cursor");
      }
    });
  }

  window.TenzoCursor = { init };
})();
