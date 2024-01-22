"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Heading from "./ui/heading";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();
    const routes = [
        {
            href: '/',
            label: 'ROIPro',
            active: pathname === '/'
        },
        {
            href: '/portfolio',
            label: 'Portfolio',
            active: pathname === '/portfolio'
        },
        {
            href: '/dashboard',
            label: 'Dashboard',
            active: pathname === '/dashboard'
        },
        {
            href: '/contact-us',
            label: 'Contact Us',
            active: pathname === '/contact-us'
        },
        {
            href: '/settings',
            label: 'Settings',
            active: pathname === '/settings'
        }
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