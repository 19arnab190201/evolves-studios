import Link from "next/link";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background mt-4">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex min-w-[140px] shrink-0">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground"
          >
            Evolves Studios
          </Link>
        </div>
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center">
          <div className="flex items-center gap-1 rounded-full border border-border bg-background px-2 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex min-w-[140px] shrink-0 justify-end">
          <Button asChild variant="default" size="default">
            <Link href="/contact">Book a Call</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
