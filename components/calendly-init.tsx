"use client";

import Script from "next/script";

export function CalendlyInit() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
    />
  );
}
