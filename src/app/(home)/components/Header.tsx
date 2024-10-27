"use client";

import { BookOpen, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../shadcn/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../../../../shadcn/components/ui/sheet";

const Header = () => {
    const router = useRouter();
    const params = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const navs = [
        {
            name: "Courses",
            href: "/courses",
        },
        {
            name: "Tutors",
            href: "/tutors",
        },
        {
            name: "About",
            href: "/about",
        },
    ];

    const NavLinks = ({ mobile = false }) => (
        <>
            {navs.map((nav, index) => (
                <Link
                    href={nav.href}
                    key={index}
                    className={`text-sm font-medium ${
                        params.slug === nav.href.slice(1) ? "text-primary" : ""
                    } text-muted-foreground hover:text-primary duration-700 transition-colors ${
                        mobile ? "block py-2" : ""
                    }`}
                    onClick={() => {
                        router.push(nav.href);
                        if (mobile) setIsOpen(false);
                    }}
                >
                    {nav.name}
                </Link>
            ))}
        </>
    );

    const AuthButtons = ({ mobile = false }) => (
        <div
            className={`flex items-center ${
                mobile ? "flex-col w-full gap-2" : "space-x-2"
            }`}
        >
            <Button
                className={`p-3 border hover:border-primary hover:bg-secondary hover:text-secondary-foreground duration-700 ${
                    mobile ? "w-full" : ""
                }`}
                variant='outline'
                onClick={() => {
                    router.push("/auth");
                    if (mobile) setIsOpen(false);
                }}
            >
                Login
            </Button>
            <Button
                className={`p-3 bg-primary ${mobile ? "w-full" : ""}`}
                onClick={() => {
                    router.push("/auth/signup");
                    if (mobile) setIsOpen(false);
                }}
            >
                Get Started
            </Button>
        </div>
    );

    return (
        <nav className='border-b bg-background/95 backdrop-blur px-5 supports-[backdrop-filter]:bg-background/60'>
            <div className='container mx-auto px-4 flex h-16 items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <BookOpen className='h-6 w-6' />
                    <span className='text-xl font-bold'>EduPro</span>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center space-x-4'>
                    <NavLinks />
                    <AuthButtons />
                </div>

                {/* Mobile Navigation */}
                <div className='md:hidden'>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant='ghost' size='icon'>
                                <Menu className='h-6 w-6' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side='right'
                            className='w-[300px] sm:w-[400px]'
                        >
                            <div className='flex flex-col h-full'>
                                <div className='flex items-center justify-between mb-6'>
                                    <div className='flex items-center space-x-4'>
                                        <BookOpen className='h-6 w-6' />
                                        <span className='text-xl font-bold'>
                                            EduPro
                                        </span>
                                    </div>
                                    <Button
                                        variant='ghost'
                                        size='icon'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <X className='h-6 w-6' />
                                    </Button>
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <NavLinks mobile />
                                </div>
                                <div className='mt-auto pb-6'>
                                    <AuthButtons mobile />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Header;
