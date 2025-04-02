'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [webHostingDropdownOpen, setWebHostingDropdownOpen] = useState(false);
    const [desktopWebHostingDropdownOpen, setDesktopWebHostingDropdownOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path;
    };

    const isWebHostingActive = () => {
        const webHostingPaths = ['/wordpress-hosting', '/business-web-hosting', '/cheap-web-hosting-with-cpanel', '/nodejs-hosting'];
        return webHostingPaths.some(path => pathname === path);
    };

    const DesktopMenu = () => (
        <div className="hidden lg:flex items-center md:pr-15">
            <Link
                href="/register-domain"
                className={`font-medium transition-all duration-300 text-lg p-4 ${isActive('/register-domain')
                    ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                    : 'hover:bg-[#F5FAFF]'
                    }`}
            >
                Register Domain
            </Link>
            <div className={`relative ${isWebHostingActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-medium transition-all duration-300 focus:outline-none cursor-pointer text-lg p-4"
                    onClick={() => setDesktopWebHostingDropdownOpen(!desktopWebHostingDropdownOpen)}
                >
                    Web Hosting
                </button>
                {desktopWebHostingDropdownOpen && (
                    <div className="absolute left-0 w-3xl xl:w-5xl bg-white shadow-lg z-10">
                        <div className="container mx-auto flex flex-wrap">
                            {/* Left side - Menu items with icons */}
                            <div className="w-full lg:w-2/3 p-4">
                                <h3 className="font-medium text-gray-700 mb-4 uppercase text-sm">HOST YOUR WEBSITE</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Link href="/wordpress-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                                        <div className="mr-3 text-blue-500 mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 group-hover:text-blue-500">WordPress Web Hosting</p>
                                            <p className="text-sm text-gray-600">Optimized for WordPress sites</p>
                                        </div>
                                    </Link>

                                    <Link href="/business-web-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                                        <div className="mr-3 text-blue-500 mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 group-hover:text-blue-500">Business Web Hosting</p>
                                            <p className="text-sm text-gray-600">Fast and reliable for businesses</p>
                                        </div>
                                    </Link>

                                    <Link href="/cheap-web-hosting-with-cpanel" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                                        <div className="mr-3 text-blue-500 mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 group-hover:text-blue-500">Cheap cPanel Hosting</p>
                                            <p className="text-sm text-gray-600">Affordable hosting solutions</p>
                                        </div>
                                    </Link>

                                    <Link href="/nodejs-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                                        <div className="mr-3 text-blue-500 mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 group-hover:text-blue-500">Node JS Hosting</p>
                                            <p className="text-sm text-gray-600">Specialized for Node.js apps</p>
                                        </div>
                                    </Link>
                                </div>

                                <h3 className="font-medium text-gray-700 mt-6 mb-4 uppercase text-sm">ONLINE MARKETING</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                                        <div className="mr-3 text-blue-500 mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 group-hover:text-blue-500">Search Engine Optimization</p>
                                            <p className="text-sm text-gray-600">Improve your SEO with ranking tools</p>
                                        </div>
                                    </Link>

                                    <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                                        <div className="mr-3 text-blue-500 mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 group-hover:text-blue-500">Email Marketing</p>
                                            <p className="text-sm text-gray-600">Create effective email campaigns</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Right side - Promotional content */}
                            <div className="w-full lg:w-1/3 bg-gray-50 p-6 flex flex-col justify-center">
                                <h3 className="font-bold text-blue-600 text-lg mb-2">Website Platforms</h3>
                                <p className="text-gray-600 mb-4">Find the right way to build your website.</p>

                                <ul className="space-y-2 text-gray-700">
                                    <li className="hover:text-blue-500">
                                        <Link href="#" className="block">
                                            • Website Tools
                                        </Link>
                                    </li>
                                    <li className="hover:text-blue-500">
                                        <Link href="#" className="block">
                                            • AI Tools
                                        </Link>
                                    </li>
                                    <li className="hover:text-blue-500">
                                        <Link href="#" className="block">
                                            • Website Templates
                                        </Link>
                                    </li>
                                    <li className="hover:text-blue-500">
                                        <Link href="#" className="block">
                                            • Website Checker
                                        </Link>
                                    </li>
                                    <li className="hover:text-blue-500">
                                        <Link href="#" className="block">
                                            • Domain Check
                                        </Link>
                                    </li>
                                </ul>

                                <div className="mt-6">
                                    <Image
                                        src="/images/wordpress-hosting/screenshot-1.webp"
                                        alt="Website builder preview"
                                        width={760}
                                        height={530}
                                        className="rounded-md shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Link
                href="/blog"
                className={`font-medium transition-all duration-300 text-lg p-4 ${isActive('/blog')
                    ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                    : 'hover:bg-[#F5FAFF]'
                    }`}
            >
                Blog
            </Link>
        </div>
    );

    const MobileMenu = () => (
        <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
        >
            <div className="pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Home
                </Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About
                </Link>
                <Link href="/register-domain" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Register Domain
                </Link>
                <div>
                    <button
                        onClick={() => setWebHostingDropdownOpen(!webHostingDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium" aria-expanded={webHostingDropdownOpen}
                    >
                        Web Hosting
                        {webHostingDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {webHostingDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/wordpress-hosting" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                WordPress Web Hosting
                            </Link>
                            <Link href="/business-web-hosting" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Business Web Hosting
                            </Link>
                            <Link href="/cheap-web-hosting-with-cpanel" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Cheap cPanel Hosting
                            </Link>
                            <Link href="/nodejs-hosting" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Node JS Hosting
                            </Link>
                        </div>
                    )}
                </div>
                <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                </Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                </Link>
                <Link
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-lg font-medium" onClick={() => setMobileMenuOpen(false)}
                >
                    Sign In
                </Link>
            </div>
        </div>
    );

    const MobileHamburger = () => (
        <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none" aria-label="Mobile Menu">
                {mobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>
        </div>
    );

    return (
        <nav className="relative w-full bg-white p-4 lg:p-0 shadow">
            <div className="container mx-auto flex items-center justify-between md:pl-10">
                <Link href="/" className="lg:hidden">
                    <Image src="/images/shared/navbar-logo.webp" alt="SeekaHost" width={133} height={62} priority />
                </Link>
                <DesktopMenu />
                <MobileHamburger />
            </div>
            <MobileMenu />
        </nav>
    );
}