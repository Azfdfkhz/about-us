"use client";

import { useEffect, useState } from "react";
import PageSkeleton from "./page-skeleton";

const MIN_DISPLAY_MS = 600;
const MAX_WAIT_MS = 5000;
const FADE_MS = 500;

export default function PageLoader({ children }) {
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    let revealTimer;
    const startedAt = performance.now();

    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve, { once: true });
    });
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const timeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS));

    Promise.race([Promise.all([pageLoaded, fontsReady]), timeout]).then(() => {
      const remaining = Math.max(0, MIN_DISPLAY_MS - (performance.now() - startedAt));
      revealTimer = setTimeout(() => {
        if (!cancelled) setPhase("fading");
      }, remaining);
    });

    return () => {
      cancelled = true;
      clearTimeout(revealTimer);
    };
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = setTimeout(() => setPhase("done"), FADE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="relative">
      {children}

      {phase !== "done" && (
        <div
          className={`page-skeleton absolute inset-0 z-50 overflow-hidden bg-white transition-opacity duration-500 ${
            phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <PageSkeleton />
        </div>
      )}

      <noscript>
        <style>{".page-skeleton{display:none}"}</style>
      </noscript>
    </div>
  );
}
