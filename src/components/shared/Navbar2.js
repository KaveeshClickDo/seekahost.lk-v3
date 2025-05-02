'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Hosting from '../navbar-menu/Hosting';
import WordPress from '../navbar-menu/WordPress';
import Servers from '../navbar-menu/Server';
import Domains from '../navbar-menu/Domains';
import Ecommers from '../navbar-menu/Ecommers';
import { FiExternalLink } from 'react-icons/fi';
import { SlPeople } from "react-icons/sl";
import { GoGlobe } from "react-icons/go";

export default function Navbar2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [webHostingDropdownOpen, setWebHostingDropdownOpen] = useState(false);
    const [domainsDropdownOpen, setDomainsDropdownOpen] = useState(false);
    const [wordPressDropdownOpen, setWordPressDropdownOpen] = useState(false);
    const [signInDropdownOpen, setSignInDropdownOpen] = useState(false);

    const [desktopWebHostingDropdownOpen, setDesktopWebHostingDropdownOpen] = useState(false);
    const [desktopWordPressDropdownOpen, setDesktopWordPressDropdownOpen] = useState(false);
    const [desktopServersDropdownOpen, setDesktopServersDropdownOpen] = useState(false);
    const [desktopDomainsDropdownOpen, setDesktopDomainsDropdownOpen] = useState(false);
    const [desktopEcommersDropdownOpen, setDesktopEcommersDropdownOpen] = useState(false);
    const pathname = usePathname();

    const navbarRef = useRef(null);

    const closeAllDropdowns = () => {
        setDesktopWebHostingDropdownOpen(false);
        setDesktopWordPressDropdownOpen(false);
        setDesktopServersDropdownOpen(false);
        setDesktopDomainsDropdownOpen(false);
        setWebHostingDropdownOpen(false);
        setDesktopEcommersDropdownOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {

            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                closeAllDropdowns();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isActive = (path) => {
        return pathname === path;
    };

    const isWebHostingActive = () => {
        const webHostingPaths = ['/business-web-hosting', '/cheap-web-hosting-with-cpanel', '/nodejs-hosting'];
        return webHostingPaths.some(path => pathname === path);
    };

    const isWordpressActive = () => {
        const wordpressPaths = ['/wordpress-hosting'];
        return wordpressPaths.some(path => pathname === path);
    };

    const isServersActive = () => {
        const serversPaths = ['/servers'];
        return serversPaths.some(path => pathname === path);
    };

    const isDomainsActive = () => {
        const domainsPaths = ['/register-domain'];
        return domainsPaths.some(path => pathname === path);
    };

    const isEcommersActive = () => {
        const ecommersPaths = ['/ecommers'];
        return ecommersPaths.some(path => pathname === path);
    };

    const DesktopMenu = () => (
        <div className="hidden lg:flex items-center md:pr-15">

            <div className={`relative ${isDomainsActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-light transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopDomainsDropdownOpen(!desktopDomainsDropdownOpen)
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                    }}
                >
                    Domains & SSL
                </button>
                {desktopDomainsDropdownOpen && (
                    <Domains />
                )}
            </div>
            <div className={`relative ${isWebHostingActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-light transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopWebHostingDropdownOpen(!desktopWebHostingDropdownOpen);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                    }}
                >
                    Hosting
                </button>
                {desktopWebHostingDropdownOpen && (
                    <Hosting />
                )}
            </div>
            <div className={`relative ${isEcommersActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-light transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopEcommersDropdownOpen(!desktopEcommersDropdownOpen)
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                    }}

                >
                    eCommers
                </button>
                {desktopEcommersDropdownOpen && (
                    <Ecommers />
                )}
            </div>
            <div className={`relative ${isWordpressActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-light transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopWordPressDropdownOpen(!desktopWordPressDropdownOpen);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                    }}

                >
                    WordPress
                </button>
                {desktopWordPressDropdownOpen && (
                    <WordPress />
                )}
            </div>
            <div className={`relative ${isServersActive()
                ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                : 'hover:bg-[#F5FAFF]'
                }`}>
                <button
                    type="button"
                    className="flex items-center font-light transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopServersDropdownOpen(!desktopServersDropdownOpen);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                    }}

                >
                    Servers
                </button>
                {desktopServersDropdownOpen && (
                    <Servers />
                )}
            </div>
            <Link
                href="/blog"
                className={`font-light transition-all duration-300 p-4 ${isActive('/blog')
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
                <div>
                    <button
                        onClick={() => setDomainsDropdownOpen(!domainsDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium"
                        aria-expanded={domainsDropdownOpen}
                    >
                        Domains & SSL
                        {domainsDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {domainsDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/register-domain" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                    </svg>
                                </div>
                                <div>
                                    Register Domain
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={() => setWebHostingDropdownOpen(!webHostingDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium"
                        aria-expanded={webHostingDropdownOpen}
                    >
                        Hosting
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
                            <Link href="/business-web-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Business Web Hosting
                                </div>
                            </Link>
                            <Link href="/cheap-web-hosting-with-cpanel" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Cheap cPanel Hosting
                                </div>
                            </Link>
                            <Link href="/nodejs-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Node JS Hosting
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    eCommers
                </Link>
                <div>
                    <button
                        onClick={() => setWordPressDropdownOpen(!wordPressDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium"
                        aria-expanded={wordPressDropdownOpen}
                    >
                        WordPress
                        {wordPressDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {wordPressDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/wordpress-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    WordPress Web Hosting
                                </div>
                            </Link>
                            <Link href="/managed-wordpress" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Managed WordPress
                                </div>
                            </Link>
                            <Link href="/woocommerce-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    WooCommerce Hosting
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                </Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About
                </Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                </Link>
                <button
                    onClick={() => setSignInDropdownOpen(!signInDropdownOpen)}
                    className="flex items-center bg-[#0081FF] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text-lg font-medium"
                    aria-expanded={signInDropdownOpen}
                >
                    Sign In
                    {signInDropdownOpen ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>
                {signInDropdownOpen && (
                    <div className="pl-4">
                        <Link href="#" className="flex items-center px-4 py-2 text-lg font-medium hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem">
                            <span className="mr-2">
                                <SlPeople className="w-5 h-5" />
                            </span>
                            Client Area
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                        <Link href="https://portal.seekahost.co.uk/index.php/login" className="flex items-center px-4 py-2 text-lg font-medium hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
                            <span className="mr-2">
                                <Image
                                    src="/images/shared/uk-ico.svg"
                                    alt="Domain Registration"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            Seekahost.co.uk
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                        <Link href="https://www.seekahost.com/index.php/login" className="flex items-center px-4 py-2 text-lg font-medium hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
                            <span className="mr-2">
                                <GoGlobe className="w-5 h-5" />
                            </span>
                            Seekahost.com
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                        <Link href="https://portal.seekahost.app/login" className="flex items-center px-4 py-2 text-lg font-medium hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
                            <span className="mr-2">
                                <Image
                                    src="/images/shared/app-ico.svg"
                                    alt="Domain Registration"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            Seekahost.app
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );

    const MobileHamburger = () => (
        <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none" aria-label="Mobile Menu">
                {mobileMenuOpen ? (
                    <svg className="w-9 h-9" fill="none" stroke="#0081FF" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-10 h-10" fill="none" stroke="#0081FF" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8H13.75M5 12H19M10.25 16L19 16" />
                    </svg>
                )}
            </button>
        </div>
    );

    return (
        <nav ref={navbarRef} className="relative w-full bg-white p-4 lg:p-0 shadow">
            <div className="container mx-auto flex items-center justify-between md:pl-10">
                <Link href="/" className="lg:hidden">
                    <Image src="/images/shared/header-logo.webp" alt="SeekaHost" width={133} height={62} priority />
                </Link>
                <DesktopMenu />
                <MobileHamburger />
            </div>
            <MobileMenu />
        </nav>
    );
}