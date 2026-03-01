"use client";

import { forwardRef, useCallback } from "react";
import { CALENDLY_URL } from "@/lib/calendly";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

/** Opens Calendly scheduler in a popup when clicked. Use with Button asChild. */
export const CalendlyLink = forwardRef<HTMLAnchorElement, CalendlyLinkProps>(
  function CalendlyLink({ children, onClick, ...props }, ref) {
    const openCalendly = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (typeof window !== "undefined" && window.Calendly) {
          window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
          window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
        }
        onClick?.(e);
      },
      [onClick]
    );

    return (
      <a
        ref={ref}
        href={CALENDLY_URL}
        onClick={openCalendly}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
);
