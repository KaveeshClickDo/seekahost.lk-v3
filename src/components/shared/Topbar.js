'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {FiExternalLink } from 'react-icons/fi';
import { SlPeople } from "react-icons/sl";
import { TfiMobile } from "react-icons/tfi";
import { GoGlobe } from "react-icons/go";

export default function Topbar() {
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
                    className="bg-[#0081FF] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition md:text-lg"
                    onClick={toggleDropdown}
                >
                    Sign In
                </button>
              
                {isOpen && (
                    <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-blue-600 ring-opacity-5 z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem">
                                <span className="mr-2">
                                    <SlPeople className="w-5 h-5" />
                                </span>
                                Client Area
                                <FiExternalLink className="w-4 h-4 ml-auto" />
                            </a>
                            <a href="https://www.seekahost.com/index.php/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
                                <span className="mr-2">
                                    <GoGlobe className="w-5 h-5" />
                                </span>
                                Seekahost.com
                                <FiExternalLink className="w-4 h-4 ml-auto" />
                            </a>
                            <a href="https://portal.seekahost.app/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
                                <span className="mr-2">
                                    <TfiMobile className="w-5 h-5" />
                                </span>
                                Seekahost.app
                                <FiExternalLink className="w-4 h-4 ml-auto" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const DesktopMenu = () => (
        <div className="hidden lg:flex items-center space-x-10 md:pr-15">
            <Link href="/about" className="hover:underline font-medium transition-all duration-300 text-lg">
                About
            </Link>
            <Link href="/contact" className="hover:underline font-medium transition-all duration-300 text-lg">
                Contact Us
            </Link>
            <SignInDropdown />
        </div>
    );

    return (
        <nav className="relative z-10 w-full bg-white shadow">
            <div className="container mx-auto flex items-center justify-between md:pl-5">
                <Link href="/">
                    <Image src="/images/shared/navbar-logo.webp" alt="SeekaHost" width={150} height={70} priority />
                </Link>
                <DesktopMenu />
            </div>
        </nav>
    );
}