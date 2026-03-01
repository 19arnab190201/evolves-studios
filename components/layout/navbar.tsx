"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CalendlyLink } from "@/components/calendly-link";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="flex h-20 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`flex w-full items-center justify-between px-6 py-1 transition-[border-radius,background-color,border-color,box-shadow,max-width] duration-500 ease-in-out ${
            isScrolled
              ? "mx-auto max-w-3xl rounded-full border border-border bg-muted/50 shadow-sm"
              : "mx-auto max-w-7xl"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Logo className="size-10" />
            <span
              className={`whitespace-nowrap overflow-hidden text-base font-medium transition-all duration-500 ease-in-out ${
                isScrolled ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
              }`}
            >
              Evolves Studios
            </span>
          </Link>
          <NavMenu className="hidden md:flex" compact={isScrolled} />

          <div className="flex items-center gap-3">
            <Button asChild variant="default" size="default">
              <CalendlyLink>Book a Call</CalendlyLink>
            </Button>

            <div className="flex shrink-0 md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
