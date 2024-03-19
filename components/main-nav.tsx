"use client"

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
  // Removed the unused `useParams`.
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
      href: '/contact',
      label: 'Contact Us',
      active: pathname === '/contact'
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-30", className)}
      {...props}
    >
      <img src="/images/ifslogo.png" alt="Logo" className="h-8 mr-5" /> {/* Adjust the logo size and margin as needed */}
      <div className="flex-grow">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn("text-sm font-medium transition-colors hover:text-primary ml-4",
              route.active ? "text-black dark:text-white" : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
