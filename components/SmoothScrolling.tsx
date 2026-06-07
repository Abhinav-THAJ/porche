"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.015, duration: 3.5, smoothWheel: true, wheelMultiplier: 0.6, touchMultiplier: 3 }}>
      {children}
    </ReactLenis>
  );
}
