'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Topbar() {

    const DesktopMenu = () => (
        <div className="hidden lg:flex items-center space-x-10 md:pr-15">
            <Link href="/about" className="text-white hover:underline font-medium transition-all duration-300 text-lg">
                About
            </Link>
            <Link href="/contact" className="text-white hover:underline font-medium transition-all duration-300 text-lg">
                Contact Us
            </Link>
            <Link
                href="#"
                className="text-white hover:underline font-medium transition-all duration-300 text-lg"
            >
                Sign In
            </Link>
        </div>
    );

    return (
        <nav className="w-full bg-[#0A437F] p-4 shadow">
            <div className="container mx-auto flex items-center justify-between md:pl-5">
                <Link href="/" className="text-2xl font-bold">
                    <Image src="/images/shared/footer-logo.webp" alt="SeekaHost" width={133} height={62} priority />
                </Link>
                <DesktopMenu />
            </div>
        </nav>
    );
}