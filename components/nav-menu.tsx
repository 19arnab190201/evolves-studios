"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navLinkClass = cn(
  navigationMenuTriggerStyle(),
  "bg-transparent font-medium hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"
);

interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
  compact?: boolean;
}

export const NavMenu = ({ compact, className, ...props }: NavMenuProps) => (
  <NavigationMenu className={className} {...props}>
    <NavigationMenuList
      className={cn(
        "gap-1 transition-[gap] duration-500 ease-in-out data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start",
        compact && "gap-0.5"
      )}
    >
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navLinkClass}>
          <Link href="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navLinkClass}>
          <Link href="/services">Services</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navLinkClass}>
          <Link href="/case-studies">Case Studies</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navLinkClass}>
          <Link href="/blog">Blog</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navLinkClass}>
          <Link href="/about">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navLinkClass}>
          <Link href="/contact">Contact</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
