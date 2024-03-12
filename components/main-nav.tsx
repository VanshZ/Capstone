"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import Heading from "./ui/heading";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const router = typeof window !== 'undefined' ? require("next/router").useRouter() : null;

    const pathname = router ? router.pathname : '/';
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
            label: 'Calculator',
            active: pathname === '/dashboard'
        },
        {
            href: '/contact',
            label: 'Contact Us',
            active: pathname === '/contact'
        },
        {
            href: '/settings',
            label: 'Settings',
            active: pathname === '/settings'
        }
    ];

    return (
        <nav
            className={cn("flex items-center justify-center space-x-8 lg:space-x-12", className)}
            {...props}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn("text-sm font-bold transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-white" : "text-muted-foreground"
                    )}
                    legacyBehavior>
                    {route.label}
                </Link>
            ))}
        </nav>
    );
}
