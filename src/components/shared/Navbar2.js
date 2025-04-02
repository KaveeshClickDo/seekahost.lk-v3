'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [webHostingDropdownOpen, setWebHostingDropdownOpen] = useState(false);

    const DesktopMenu = () => (
        <div className="hidden lg:flex items-center md:pr-15">
            <Link href="/register-domain" className="hover:bg-blue-100 font-medium transition-all duration-300 text-lg p-4">
                Register Domain
            </Link>
            <div className="relative group hover:bg-blue-100 p-4">
                <button
                    type="button"
                    className="flex items-center font-medium transition-all duration-300 focus:outline-none cursor-pointer text-lg"
                >
                    Web Hosting
                </button>
                <div className="absolute left-0 w-56 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block z-10">
                    <Link href="/wordpress-hosting" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-500 transition-all duration-300">
                        WordPress Web Hosting
                    </Link>
                    <Link href="/business-web-hosting/" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-500 transition-all duration-300">
                        Business Web Hosting
                    </Link>
                    <Link href="/cheap-web-hosting-with-cpanel" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-500 transition-all duration-300">
                        Cheap cPanel Hosting
                    </Link>
                    <Link href="/nodejs-hosting" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-500 transition-all duration-300">
                        Node JS Hosting
                    </Link>
                </div>
            </div>
            <Link href="/blog" className="hover:bg-blue-100 font-medium transition-all duration-300 text-lg p-4">
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
        <nav className="w-full bg-white p-4 lg:p-0 shadow">
            <div className="container mx-auto flex items-center justify-between md:pl-10">
                <Link href="/" className="lg:hidden text-2xl font-bold">
                    <Image src="/images/shared/navbar-logo.webp" alt="SeekaHost" width={133} height={62} priority />
                </Link>
                <DesktopMenu />
                <MobileHamburger />
            </div>
            <MobileMenu />
        </nav>
    );
}