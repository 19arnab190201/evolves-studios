import { Separator } from "@/components/ui/separator";
import { CalendlyLink } from "@/components/calendly-link";
import { Logo } from "@/components/logo";
import Link from "next/link";

const sections = [
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Podcast Production", href: "/services#podcast-production" },
      { title: "Content Repurposing", href: "/services#content-repurposing" },
      { title: "Distribution Strategy", href: "/services#distribution-strategy" },
      { title: "Founder Brand Building", href: "/services#founder-brand-building" },
    ],
  },
  {
    title: "Case Studies",
    links: [
      { title: "Prime", href: "/case-studies/prime" },
      { title: "Boat", href: "/case-studies/boat" },
      { title: "Nike", href: "/case-studies/nike" },
      { title: "Bliss", href: "/case-studies/bliss" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-full lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Growth & Media Agency for founders and SaaS companies. We build
              media that scales modern brands through podcast production,
              content repurposing, and founder brand building.
            </p>
            <CalendlyLink className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
              Book a Call
            </CalendlyLink>
          </div>
            {sections.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {links.map(({ title: linkTitle, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {linkTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            &copy; {new Date().getFullYear()} Evolves Studios. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
