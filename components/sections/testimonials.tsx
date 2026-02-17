import Link from "next/link";
import type { ComponentProps } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "../ui/marquee";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    designation: "CEO",
    company: "TechFlow",
    testimonial:
      "Evolves Studios transformed our podcast from an idea into a top 1% show. Their strategic approach to content and distribution is unmatched.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    designation: "Founder",
    company: "ScaleUp",
    testimonial:
      "The team understands how to build founder brands that convert. Our visibility and pipeline have grown significantly since partnering with them.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "CMO",
    company: "DataVault",
    testimonial:
      "Professional, strategic, and results-driven. They helped us build a content engine that now runs itself.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Park",
    designation: "CEO",
    company: "InnovateX",
    testimonial:
      "Our podcast is now our top attribution source for pipeline. Evolves Studios built the systems—we just show up and have the conversations.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Jessica Moore",
    designation: "Head of Marketing",
    company: "BrandBoost",
    testimonial:
      "The best investment we've made in growth. They don't just produce content—they build distribution that scales.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 6,
    name: "Alex Turner",
    designation: "Founder",
    company: "Sturdie",
    testimonial:
      "Category-defining media doesn't happen by accident. Evolves Studios gave us the strategy and execution to get there.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Testimonials = () => (
  <div className="flex items-center justify-center py-10">
    <div className="h-full w-full">
      <h2 className="text-pretty px-6 text-center font-semibold text-5xl tracking-[-0.03em]">
        Success Stories
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl">
        What founders say about building media that scales with Evolves Studios
      </p>
      <div className="relative mt-10">
        <div className="absolute inset-y-0 left-0 z-10 w-[15%] bg-linear-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-[15%] bg-linear-to-l from-background to-transparent" />
        <Marquee className="[--duration:14s]" pauseOnHover>
          <TestimonialList />
        </Marquee>
        <Marquee className="mt-0 [--duration:14s]" pauseOnHover reverse>
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      className="m-3 min-w-96 max-w-sm shrink-0 rounded-xl bg-accent p-6"
      key={testimonial.id}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-muted-foreground text-sm">{testimonial.designation} · {testimonial.company}</p>
          </div>
        </div>
        <Button asChild size="icon" variant="ghost">
          <Link href="#" target="_blank">
            <TwitterLogo className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      fill="currentColor"
    />
  </svg>
);

export default Testimonials;
