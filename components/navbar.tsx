"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserButton, useAuth } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";

const Navbar = () => {
    
    const { userId } = useAuth(); // Correct usage of the useAuth hook
    const router = useRouter(); // useRouter hook for redirection

    useEffect(() => {
        // Redirect if not signed in
        if (!userId) {
            router.push("/sign-in");
        }
    }, [userId, router]); // Dependencies array

    // If there's no user ID, we return null immediately to render nothing
    if (!userId) {
        return null;
    }

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
