import { BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const footerLinks = {
        platform: [
            { label: "Browse Courses", href: "/courses" },
            { label: "Success Stories", href: "/success-stories" },
            { label: "Become a Tutor", href: "/become-tutor" },
            { label: "Enterprise", href: "/enterprise" },
        ],
        support: [
            { label: "Help Center", href: "/help" },
            { label: "Contact Us", href: "/contact" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
        ],
        community: [
            { label: "Blog", href: "/blog" },
            { label: "Forums", href: "/forums" },
            { label: "Events", href: "/events" },
            { label: "FAQs", href: "/faqs" },
        ],
    };

    const FooterColumn = ({
        title,
        links,
    }: {
        title: string;
        links: { label: string; href: string }[];
    }) => (
        <div className='space-y-4'>
            <h4 className='font-semibold text-base md:text-lg'>{title}</h4>
            <ul className='space-y-3'>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className='text-sm text-muted-foreground hover:text-primary transition-colors duration-200'
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className='border-t bg-background'>
            <div className='container mx-auto px-4 py-8 md:py-16'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
                    {/* Logo and Description - Full width on mobile */}
                    <div className='space-y-4 sm:col-span-2 lg:col-span-1'>
                        <div className='flex items-center space-x-2'>
                            <BookOpen className='h-6 w-6' />
                            <span className='text-xl font-bold'>EduPro</span>
                        </div>
                        <p className='text-sm text-muted-foreground max-w-xs'>
                            Empowering learners worldwide with quality education
                            and transformative learning experiences.
                        </p>
                        {/* Social Media Icons - Visible only on mobile */}
                        <div className='flex space-x-4 lg:hidden mt-4'>
                            <a
                                href='#'
                                className='text-muted-foreground hover:text-primary'
                            >
                                <svg
                                    className='h-5 w-5'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                                </svg>
                            </a>
                            <a
                                href='#'
                                className='text-muted-foreground hover:text-primary'
                            >
                                <svg
                                    className='h-5 w-5'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                                </svg>
                            </a>
                            <a
                                href='#'
                                className='text-muted-foreground hover:text-primary'
                            >
                                <svg
                                    className='h-5 w-5'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 18.6h-2.472v-3.9c0-.923-.017-2.109-1.285-2.109-1.285 0-1.482 1.003-1.482 2.042v3.967H9.305V9.75h2.375v1.09h.033c.33-.624 1.137-1.284 2.34-1.284 2.504 0 2.963 1.645 2.963 3.784v4.26zM7.58 8.66a1.434 1.434 0 11-.003-2.867 1.434 1.434 0 01.003 2.867zM6.344 18.6V9.75H8.82v8.85H6.344z' />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Footer Columns */}
                    <FooterColumn
                        title='Platform'
                        links={footerLinks.platform}
                    />
                    <FooterColumn title='Support' links={footerLinks.support} />
                    <FooterColumn
                        title='Community'
                        links={footerLinks.community}
                    />
                </div>

                {/* Bottom Section */}
                <div className='border-t mt-8 md:mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                    <p className='text-sm text-muted-foreground text-center md:text-left'>
                        © 2024 EduPro. All rights reserved.
                    </p>
                    {/* Social Media Icons - Hidden on mobile, visible on desktop */}
                    <div className='hidden lg:flex space-x-4'>
                        <a
                            href='#'
                            className='text-muted-foreground hover:text-primary'
                        >
                            <svg
                                className='h-5 w-5'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                            </svg>
                        </a>
                        <a
                            href='#'
                            className='text-muted-foreground hover:text-primary'
                        >
                            <svg
                                className='h-5 w-5'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                            </svg>
                        </a>
                        <a
                            href='#'
                            className='text-muted-foreground hover:text-primary'
                        >
                            <svg
                                className='h-5 w-5'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 18.6h-2.472v-3.9c0-.923-.017-2.109-1.285-2.109-1.285 0-1.482 1.003-1.482 2.042v3.967H9.305V9.75h2.375v1.09h.033c.33-.624 1.137-1.284 2.34-1.284 2.504 0 2.963 1.645 2.963 3.784v4.26zM7.58 8.66a1.434 1.434 0 11-.003-2.867 1.434 1.434 0 01.003 2.867zM6.344 18.6V9.75H8.82v8.85H6.344z' />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
