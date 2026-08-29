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
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "3D Commercials", href: "/services#3d-commercials" },
      { title: "Product Renders", href: "/services#product-renders" },
      { title: "Video Production", href: "/services#video-production" },
      { title: "Video & Social Content", href: "/services#video-social" },
      { title: "Brand Visuals", href: "/services#brand-visuals" },
      { title: "Media Strategy", href: "/services#media-strategy" },
    ],
  },
  {
    title: "Selected Work",
    links: [
      { title: "Prime", href: "/case-studies/prime" },
      { title: "Nike", href: "/case-studies/nike" },
      { title: "Sidemen Clothing", href: "/case-studies/sidemen-clothing" },
      { title: "Cardi B", href: "/case-studies/cardi-b-vape" },
      { title: "Dream Honey", href: "/case-studies/dream-honey" },
      { title: "All case studies", href: "/case-studies" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      {/* max-w-7xl so the footer columns line up with the CTA block and the
          sections above, which all sit on the same grid. */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-full lg:col-span-3">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Commercial production for consumer product brands. 3D
              commercials, photoreal renders and campaign films — built to
              launch products and make people want them.
            </p>
            <CalendlyLink className="mt-5 inline-block text-sm font-medium text-foreground transition-colors hover:text-muted-foreground">
              Book a Call →
            </CalendlyLink>
          </div>
          {sections.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
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
