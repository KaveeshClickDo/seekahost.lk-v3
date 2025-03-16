'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar () {
    const [isFixed, setIsFixed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [webHostingDropdownOpen, setWebHostingDropdownOpen] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFixed(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (navbarRef.current) {
            observer.observe(navbarRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    const DesktopMenu = () => (
        <div className="hidden xl:flex items-center space-x-10 md:pr-15">
            <Link href="/" className="hover:text-blue-500 font-medium transition-all duration-300">
                Home
            </Link>
            <Link href="https://www.seekahost.lk/about-us/" className="hover:text-blue-500 font-medium transition-all duration-300">
                About
            </Link>
            <Link href="https://www.seekahost.lk/register-domain/" className="hover:text-blue-500 font-medium transition-all duration-300">
                Register Domain
            </Link>
            <div className="relative group hover:text-blue-500">
                <button
                    type="button"
                    className="flex items-center font-medium transition-all duration-300 focus:outline-none cursor-pointer"
                >
                    Web Hosting
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className="absolute left-0 w-56 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block z-10">
                    <Link href="https://www.seekahost.lk/wordpress-hosting/" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-lg hover:text-blue-500 transition-all duration-300">
                        WordPress Web Hosting
                    </Link>
                    <Link href="https://www.seekahost.lk/business-web-hosting/" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-lg hover:text-blue-500 transition-all duration-300">
                        Business Web Hosting
                    </Link>
                    <Link href="https://www.seekahost.lk/cheap-web-hosting-with-cpanel/" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-lg hover:text-blue-500 transition-all duration-300">
                        Cheap cPanel Hosting
                    </Link>
                </div>
            </div>
            <Link href="https://www.seekahost.lk/blog/" className="hover:text-blue-500 font-medium transition-all duration-300">
                Blog
            </Link>
            <Link href="https://www.seekahost.lk/contact-us/" className="hover:text-blue-500 font-medium transition-all duration-300">
                Contact Us
            </Link>
            <Link
                href="/get-started"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
                Get Started
            </Link>
        </div>
    );

    const MobileMenu = () => (
        <div
            className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
        >
            <div className="pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    Home
                </Link>
                <Link href="https://www.seekahost.lk/about-us/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    About
                </Link>
                <Link href="https://www.seekahost.lk/register-domain/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    Register Domain
                </Link>
                <div>
                    <button
                        onClick={() => setWebHostingDropdownOpen(!webHostingDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none" aria-expanded={webHostingDropdownOpen}
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
                            <Link href="https://www.seekahost.lk/wordpress-hosting/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                                WordPress Web Hosting
                            </Link>
                            <Link href="https://www.seekahost.lk/business-web-hosting/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                                Business Web Hosting
                            </Link>
                            <Link href="https://www.seekahost.lk/cheap-web-hosting-with-cpanel/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                                Cheap cPanel Hosting
                            </Link>
                        </div>
                    )}
                </div>
                <Link href="https://www.seekahost.lk/blog/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                </Link>
                <Link href="https://www.seekahost.lk/contact-us/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                </Link>
                <Link
                    href="/get-started"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition" onClick={() => setMobileMenuOpen(false)}
                >
                    Get Started
                </Link>
            </div>
        </div>
    );

    const MobileHamburger = () => (
        <div className="xl:hidden">
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

    const NavbarContent = () => (
        <div className="container flex items-center justify-between md:pl-20">
            <Link href="/" className="text-2xl font-bold">
                <Image src="/logo.webp" alt="SeekaHost" width={158} height={62} priority />
            </Link>
            <DesktopMenu />
            <MobileHamburger />
        </div>
    );

    return (
        <>
            <nav ref={navbarRef} className="w-full bg-white p-4 shadow">
                <NavbarContent />
                <MobileMenu />
            </nav>

            <nav
                className={`fixed top-0 left-0 w-full bg-white p-4 shadow transition-all duration-300 z-20 ${isFixed ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
            >
                <NavbarContent />
                <MobileMenu />
            </nav>
        </>
    );
}
