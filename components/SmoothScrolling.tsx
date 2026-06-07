"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.03, duration: 2.5, smoothWheel: true, wheelMultiplier: 0.8, touchMultiplier: 2 }}>
      {children}
    </ReactLenis>
  );
}
