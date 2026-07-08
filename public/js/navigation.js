(function () {
  "use strict";

  const HEADER_SELECTOR = "[data-site-header], .site-header";
  const MENU_SELECTOR = "[data-menu], .site-menu";
  const TOGGLE_SELECTOR = "[data-menu-toggle], .site-header__menu-toggle";
  const NAV_LINK_SELECTOR = "[data-nav-link][href^='#']";
  const FOCUSABLE_SELECTOR = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  let initialized = false;
  let bodyScrollPosition = 0;
  let activeObserver = null;
  let frameRequested = false;

  function tokenValue(name, fallback) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallback;
  }

  function getFocusableElements(container) {
    if (!container) return [];
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((element) => {
      return !element.hidden && element.getAttribute("aria-hidden") !== "true" && element.getClientRects().length > 0;
    });
  }

  function lockBody() {
    bodyScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.top = `-${bodyScrollPosition}px`;
    document.body.classList.add("is-menu-locked");
  }

  function unlockBody() {
    document.body.classList.remove("is-menu-locked");
    document.body.style.removeProperty("top");
    window.scrollTo({ top: bodyScrollPosition, left: 0, behavior: "auto" });
  }

  function setMenuLabel(toggle, isOpen) {
    const label = toggle.querySelector("[data-menu-label]");
    if (label) label.textContent = isOpen ? "CLOSE" : "MENU";
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  function setMenuInert(menu, shouldBeInert) {
    if ("inert" in menu) menu.inert = shouldBeInert;
    if (shouldBeInert) menu.setAttribute("inert", "");
    else menu.removeAttribute("inert");
  }

  function initializeActiveLinks() {
    const links = Array.from(document.querySelectorAll(NAV_LINK_SELECTOR));
    const targetsById = new Map();

    links.forEach((link) => {
      let id;
      try {
        id = decodeURIComponent(link.hash.slice(1));
      } catch (error) {
        id = link.hash.slice(1);
      }
      if (!id || targetsById.has(id)) return;
      const target = document.getElementById(id);
      if (target) targetsById.set(id, target);
    });

    function setActiveSection(id) {
      links.forEach((link) => {
        const isActive = id && link.hash === `#${id}`;
        link.querySelectorAll(".site-header__current-prefix").forEach((prefix) => prefix.remove());
        if (!isActive) {
          link.removeAttribute("aria-current");
          return;
        }

        link.setAttribute("aria-current", "location");
        const prefix = document.createElement("span");
        prefix.className = "sr-only site-header__current-prefix";
        prefix.textContent = "Current section: ";
        link.prepend(prefix);
      });
    }

    if (!targetsById.size) return;

    if (!("IntersectionObserver" in window)) {
      const updateFromScroll = () => {
        const readingLine = window.innerHeight * 0.45;
        let activeId = "";
        targetsById.forEach((target, id) => {
          const rect = target.getBoundingClientRect();
          if (rect.top <= readingLine && rect.bottom >= readingLine) activeId = id;
        });
        setActiveSection(activeId);
      };
      window.addEventListener("scroll", updateFromScroll, { passive: true });
      updateFromScroll();
      return;
    }

    const intersecting = new Map();
    activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.set(entry.target.id, entry);
          else intersecting.delete(entry.target.id);
        });

        let closestId = "";
        let closestDistance = Number.POSITIVE_INFINITY;
        const readingLine = window.innerHeight * 0.45;
        intersecting.forEach((entry, id) => {
          const rect = entry.target.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - readingLine);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = id;
          }
        });
        setActiveSection(closestId);
      },
      {
        root: null,
        rootMargin: tokenValue("--nav-active-root-margin", "-40% 0px -50% 0px"),
        threshold: Number.parseFloat(tokenValue("--nav-active-threshold", "0"))
      }
    );

    targetsById.forEach((target) => activeObserver.observe(target));
  }

  function init() {
    if (initialized) return;
    const header = document.querySelector(HEADER_SELECTOR);
    if (!header) return;

    initialized = true;
    const menu = header.querySelector(MENU_SELECTOR) || document.querySelector(MENU_SELECTOR);
    const toggle = header.querySelector(TOGGLE_SELECTOR);
    const desktopBreakpoint = window.matchMedia("(min-width: 1200px)");
    const hero = document.querySelector("[data-hero], #hero");
    const followingSections = Array.from(document.querySelectorAll("main section[id], main [data-nav-section]"))
      .filter((section) => section !== hero);
    const scrollThreshold = Number.parseFloat(tokenValue("--nav-scroll-threshold", "48"));
    let menuIsOpen = false;
    let returnFocusTo = null;

    header.dataset.scrolled = "false";
    header.dataset.menuOpen = "false";

    function updateHeaderState() {
      frameRequested = false;
      const headerBoundary = header.getBoundingClientRect().height;
      const nonHeroAtBoundary = followingSections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= headerBoundary && rect.bottom > headerBoundary;
      });
      const heroHasCleared = hero ? hero.getBoundingClientRect().bottom <= headerBoundary : false;
      header.dataset.scrolled = String(window.scrollY >= scrollThreshold || heroHasCleared || nonHeroAtBoundary);
    }

    function requestHeaderUpdate() {
      if (frameRequested) return;
      frameRequested = true;
      window.requestAnimationFrame(updateHeaderState);
    }

    function trapFocus(event) {
      if (!menuIsOpen || event.key !== "Tab") return;
      const focusable = getFocusableElements(menu);
      if (!focusable.length) {
        event.preventDefault();
        toggle.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!menu.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    }

    function closeMenu(options) {
      if (!menu || !toggle || !menuIsOpen) return;
      const settings = Object.assign({ restoreFocus: true }, options);
      menuIsOpen = false;
      header.dataset.menuOpen = "false";
      menu.dataset.open = "false";
      menu.setAttribute("aria-hidden", "true");
      setMenuInert(menu, true);
      toggle.setAttribute("aria-expanded", "false");
      setMenuLabel(toggle, false);
      unlockBody();
      document.removeEventListener("keydown", trapFocus);
      if (settings.restoreFocus && returnFocusTo && document.contains(returnFocusTo)) returnFocusTo.focus();
      returnFocusTo = null;
      document.dispatchEvent(new CustomEvent("tenzo:navigation:close"));
      requestHeaderUpdate();
    }

    function openMenu() {
      if (!menu || !toggle || menuIsOpen || desktopBreakpoint.matches) return;
      returnFocusTo = toggle;
      menuIsOpen = true;
      header.dataset.menuOpen = "true";
      menu.dataset.open = "true";
      menu.setAttribute("aria-hidden", "false");
      setMenuInert(menu, false);
      toggle.setAttribute("aria-expanded", "true");
      setMenuLabel(toggle, true);
      lockBody();
      document.addEventListener("keydown", trapFocus);
      window.requestAnimationFrame(() => {
        const first = getFocusableElements(menu)[0];
        if (first) first.focus({ preventScroll: true });
      });
      document.dispatchEvent(new CustomEvent("tenzo:navigation:open"));
    }

    function handleKeydown(event) {
      if (event.key === "Escape" && menuIsOpen) {
        event.preventDefault();
        closeMenu({ restoreFocus: true });
      }
    }

    if (menu && toggle) {
      if (!menu.id) menu.id = "site-menu";
      toggle.setAttribute("aria-controls", menu.id);
      toggle.setAttribute("aria-expanded", "false");
      setMenuLabel(toggle, false);
      menu.dataset.open = "false";
      menu.setAttribute("aria-hidden", "true");
      setMenuInert(menu, true);

      toggle.addEventListener("click", () => {
        if (menuIsOpen) closeMenu({ restoreFocus: true });
        else openMenu();
      });
      menu.querySelectorAll(NAV_LINK_SELECTOR).forEach((link) => {
        link.addEventListener("click", () => closeMenu({ restoreFocus: false }), { capture: true });
      });
      document.addEventListener("keydown", handleKeydown);
      desktopBreakpoint.addEventListener("change", (event) => {
        if (event.matches) closeMenu({ restoreFocus: false });
      });
    }

    window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
    window.addEventListener("resize", requestHeaderUpdate, { passive: true });
    updateHeaderState();
    initializeActiveLinks();
  }

  window.TenzoNavigation = { init };
})();
