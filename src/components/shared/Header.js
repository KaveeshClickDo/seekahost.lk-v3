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
import Support from '../topbar-menu/Support';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [webHostingDropdownOpen, setWebHostingDropdownOpen] = useState(false);
    const [domainsDropdownOpen, setDomainsDropdownOpen] = useState(false);
    const [wordPressDropdownOpen, setWordPressDropdownOpen] = useState(false);
    const [eCommersDropdownOpen, setECommersDropdownOpen] = useState(false);
    const [signInDropdownOpen, setSignInDropdownOpen] = useState(false);

    const [desktopWebHostingDropdownOpen, setDesktopWebHostingDropdownOpen] = useState(false);
    const [desktopWordPressDropdownOpen, setDesktopWordPressDropdownOpen] = useState(false);
    const [desktopServersDropdownOpen, setDesktopServersDropdownOpen] = useState(false);
    const [desktopDomainsDropdownOpen, setDesktopDomainsDropdownOpen] = useState(false);
    const [desktopEcommersDropdownOpen, setDesktopEcommersDropdownOpen] = useState(false);

    const [desktopSupportDropdownOpen, setDesktopSupportDropdownOpen] = useState(false);

    const pathname = usePathname();

    const navbarRef = useRef(null);

    const closeAllDropdowns = () => {
        setDesktopWebHostingDropdownOpen(false);
        setDesktopWordPressDropdownOpen(false);
        setDesktopServersDropdownOpen(false);
        setDesktopDomainsDropdownOpen(false);
        setWebHostingDropdownOpen(false);
        setDesktopEcommersDropdownOpen(false);
        setDesktopSupportDropdownOpen(false);
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

    const SignInDropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
        const dropdownRef = useRef(null);

        useEffect(() => {
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [dropdownRef]);

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                    className="flex items-center bg-transparent cursor-pointer border text-white px-5 py-3 rounded-full font-bold leading-4"
                    onClick={toggleDropdown}
                >
                    Sign In
                    {isOpen ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-1 w-50 rounded-md shadow-lg bg-white ring-1 ring-blue-600 ring-opacity-5 z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            <Link href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem">
                                <span className="mr-2">
                                    <SlPeople className="w-5 h-5" />
                                </span>
                                Client Area
                                <FiExternalLink className="w-4 h-4 ml-auto" />
                            </Link>
                            <Link href="https://portal.seekahost.co.uk/index.php/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
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
                            <Link href="https://www.seekahost.com/index.php/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
                                <span className="mr-2">
                                    <GoGlobe className="w-5 h-5" />
                                </span>
                                Seekahost.com
                                <FiExternalLink className="w-4 h-4 ml-auto" />
                            </Link>
                            <Link href="https://portal.seekahost.app/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
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
                    </div>
                )}
            </div>
        );
    };

    const DesktopMenu = () => (

        <div className="hidden xl:flex items-center md:pr-15">

            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopDomainsDropdownOpen(!desktopDomainsDropdownOpen)
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}
                >
                    Domains & SSL
                </button>
                {desktopDomainsDropdownOpen && (
                    <Domains />
                )}
            </div>
            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopWebHostingDropdownOpen(!desktopWebHostingDropdownOpen);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}
                >
                    Hosting
                </button>
                {desktopWebHostingDropdownOpen && (
                    <Hosting />
                )}
            </div>
            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopEcommersDropdownOpen(!desktopEcommersDropdownOpen)
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}

                >
                    eCommers
                </button>
                {desktopEcommersDropdownOpen && (
                    <Ecommers />
                )}
            </div>
            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopWordPressDropdownOpen(!desktopWordPressDropdownOpen);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}

                >
                    WordPress
                </button>
                {desktopWordPressDropdownOpen && (
                    <WordPress />
                )}
            </div>
            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopServersDropdownOpen(!desktopServersDropdownOpen);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}

                >
                    Servers
                </button>
                {desktopServersDropdownOpen && (
                    <Servers />
                )}
            </div>
            {/* <Link
                href="/blog"
                className={`font-light transition-all duration-300 p-4 ${isActive('/blog')
                    ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                    : 'hover:bg-[#F5FAFF]'
                    }`}
            >
                Blog
            </Link> */}
            <Link
                href="/pricing"
                className="relative p-4 hover:underline"
            >
                Pricing
            </Link>

            <Link
                href="/about"
                className="relative p-4 hover:underline"
            >
                About
            </Link>
            {/* <Link href="/contact" className="hover:underline font-light transition-all duration-300">
                Contact Us
            </Link> */}
            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopSupportDropdownOpen(!desktopSupportDropdownOpen);
                        setDesktopServersDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                    }}

                >
                    Support
                </button>
                {desktopSupportDropdownOpen && (
                    <Support />
                )}
            </div>
            <SignInDropdown />

        </div>
    );

    const MobileMenu = () => (
        <div
            className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
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
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Business Web Hosting
                                </div>
                            </Link>
                            <Link href="/cheap-web-hosting-with-cpanel" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Cheap cPanel Hosting
                                </div>
                            </Link>
                            <Link href="/nodejs-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Node JS Hosting
                                </div>
                            </Link>
                            <Link href="/agency-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Agency Hosting
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={() => setECommersDropdownOpen(!eCommersDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium"
                        aria-expanded={eCommersDropdownOpen}
                    >
                        eCommers
                        {eCommersDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {eCommersDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/woocommerce-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    WordPress Web Hosting
                                </div>
                            </Link>
                            <Link href="/managed-wordpress" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Managed WordPress
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Pricing
                </Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About
                </Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                </Link>
                <button
                    onClick={() => setSignInDropdownOpen(!signInDropdownOpen)}
                    className="flex items-center border bg-transparent text-white px-4 py-2 rounded-full text-lg font-medium"
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
                        <Link href="#" className="flex items-center px-4 py-2 text-lg font-medium" role="menuitem">
                            <span className="mr-2">
                                <SlPeople className="w-5 h-5" />
                            </span>
                            Client Area
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                        <Link href="https://portal.seekahost.co.uk/index.php/login" className="flex items-center px-4 py-2 text-lg font-medium" role="menuitem" target="_blank">
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
                        <Link href="https://www.seekahost.com/index.php/login" className="flex items-center px-4 py-2 text-lg font-medium" role="menuitem" target="_blank">
                            <span className="mr-2">
                                <GoGlobe className="w-5 h-5" />
                            </span>
                            Seekahost.com
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                        <Link href="https://portal.seekahost.app/login" className="flex items-center px-4 py-2 text-lg font-medium" role="menuitem" target="_blank">
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
        <div className="xl:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none" aria-label="Mobile Menu">
                {mobileMenuOpen ? (
                    <svg className="w-9 h-9" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-10 h-10" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8H13.75M5 12H19M10.25 16L19 16" />
                    </svg>
                )}
            </button>
        </div>
    );

    return (
        <nav ref={navbarRef} className="relative z-10 w-full bg-[#0A488A] text-white p-4 lg:p-0">
            <div className="container mx-auto flex items-center justify-between md:pl-10 lg:py-5">
                <Link href="/">
                    <Image src="/images/shared/header-logo-white.webp" alt="SeekaHost" width={133} height={62} priority />
                </Link>
                <DesktopMenu />
                <MobileHamburger />
            </div>
            <MobileMenu />
        </nav>
    );
}