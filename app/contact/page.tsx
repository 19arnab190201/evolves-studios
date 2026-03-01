import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { generatePageMetadata } from "@/lib/metadata";

// Replace with your actual image URL
const CONTACT_IMAGE_URL = "/contact.png";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch with Evolves Studios. Growth & media agency for founders and SaaS companies.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-auto lg:min-h-[500px]">
          <Image
            src={CONTACT_IMAGE_URL}
            alt="Contact Evolves Studios"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right: Form */}
        <div className="flex flex-col items-start justify-center text-left border border-border rounded-xl p-6 !py-1">
          <h1 className="font-semibold text-2xl tracking-tight md:text-3xl">
            Get In Touch
          </h1>
          <p className="mt-2 text-muted-foreground">
            Our friendly team is always here to chat.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
