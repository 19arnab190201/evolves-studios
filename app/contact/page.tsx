import { ContactForm } from "@/components/contact-form";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Book a strategy call with Evolves Studios. Growth & media agency for founders and SaaS companies.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          Contact
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Ready to build category-defining media? Book a strategy call and let us
          understand your goals.
        </p>
        <div className="mt-16 flex flex-col items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
