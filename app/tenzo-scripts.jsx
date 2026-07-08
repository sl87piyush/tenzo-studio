"use client";

import { useEffect } from "react";

const scriptSources = [
  "/js/animations.js",
  "/js/navigation.js",
  "/js/cursor.js",
  "/js/hero.js",
  "/js/sections.js",
  "/js/main.js",
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-tenzo-script="${src}"]`);

    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }

    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.tenzoScript = src;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener("error", reject, { once: true });
    document.body.appendChild(script);
  });
}

export default function TenzoScripts() {
  useEffect(() => {
    window.__tenzoScriptsReady ??= scriptSources.reduce(
      (chain, src) => chain.then(() => loadScript(src)),
      Promise.resolve(),
    );
  }, []);

  return null;
}
