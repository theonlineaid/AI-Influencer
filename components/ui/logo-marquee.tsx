"use client";

import { useSyncExternalStore } from "react";
import type { TrustedLogo } from "@/lib/content";

type LogoMarqueeProps = {
  logos: readonly TrustedLogo[];
};

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const sequence = reducedMotion ? [...logos] : [...logos, ...logos];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={
          reducedMotion
            ? "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14"
            : "trusted-marquee-track items-center gap-12 md:gap-16 lg:gap-20"
        }
      >
        {sequence.map((logo, i) => (
          <div
            key={`${logo.id}-${i}`}
            className="flex h-9 shrink-0 items-center md:h-10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG wordmarks */}
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-7 w-auto max-h-8 object-contain object-left opacity-85 md:h-8"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
