"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, type LenisRef } from "lenis/react";

type LenisProviderProps = {
  children: React.ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  /**
   * Reset scroll on navigation.
   *
   * Next resets the window scroll itself on a route change, but Lenis owns the
   * scroll position while it is running and keeps its own internal offset — so
   * the reset never took effect and a new page opened wherever the previous one
   * had been left, often at the footer.
   *
   * `immediate` skips the easing, so it lands at the top rather than animating
   * up through the new page.
   */
  useEffect(() => {
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
