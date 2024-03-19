"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// Assuming Heading might be utilized elsewhere or should be removed if not in use.
// import Heading from "./ui/heading";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  // The `useParams` is declared but never used. Consider removing it if unnecessary.
  // const params = useParams();
  const routes = [
    {
      href: '/',
      label: 'ROIPro',
      active: pathname === '/'
    },
    {
      href: '/items',
      label: 'Portfolio',
      active: pathname === '/items'
    },
    {
      href: '/dashboard',
      label: 'Dashboard',
      active: pathname === '/dashboard'
    },
    {
      href: '/contact', // Changed back to '/contact-us'
      label: 'Contact Us',
      active: pathname === '/contact'
    },
    
  ];

  return (
    <nav
      className={cn("flex items-space-around space-x-40 lg:space-x-45", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn("text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
