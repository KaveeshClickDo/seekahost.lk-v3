"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [showVideoPopup, setShowVideoPopup] = useState(false);
    
    // Close popup when escape key is pressed
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setShowVideoPopup(false);
            }
        };
        
        if (showVideoPopup) {
            document.addEventListener('keydown', handleEscKey);
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [showVideoPopup]);

    return (
        <section className="relative lg:h-[700px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 lg:w-[72%] h-[4%] min-[352px]:h-[46%] min-[389px]:h-[42%] min-[500px]:h-[39%] md:h-[41%] lg:h-[70%] bg-gradient-to-r from-[#09407A] to-[#136CC9] z-2"></div>
            <div className="absolute inset-0 lg:w-[72%] h-full bg-[#0A437F] rounded-br-[100px] z-1"></div>
            <Image
                src="/images/home/home-hero-bg.svg"
                alt="Background Image"
                fill
                className="object-cover z-0 hidden lg:block"
                priority
            />
            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10">

                <div className="text-white w-full max-w-2xl z-3">
                    <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                        World&rsquo;s Best Multiple IP <br /> PBN Hosting Manager
                    </h1>

                    <p className="mt-4 text-md md:text-lg">
                        All-in-One Click WordPress Blog hosting control panel to securely host private blog networks on unique multiple IP addresses.
                    </p>

                    <div className="mt-6 flex items-center bg-white rounded-full pl-4 shadow-md w-full max-w-lg">
                        <input
                            id="searchDomain"
                            type="text"
                            placeholder="   Search for a domain..."
                            className="flex-grow outline-none text-black"
                        />
                        <button className="bg-[#0081FF] text-white px-5 md:px-10 py-4 rounded-full hover:bg-blue-600 transition md:text-lg">
                            Search
                        </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 xl:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.com</span>
                            <span className="text-white">Rs1976</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.co.uk</span>
                            <span className="text-white">Rs1511</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.net</span>
                            <span className="text-white">Rs2441</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.org</span>
                            <span className="text-white">Rs2209</span>
                        </div>
                    </div>


                    <div className="mt-10 xl:mt-30 w-full max-w-5xl mx-auto grid grid-cols-3 gap-6 text-center z-2  divide-x divide-[#1276DF]">

                        <div className="rounded-md flex flex-col items-center">
                            <Image
                                src="/images/home/server-security.svg"
                                alt="Server Security Icon"
                                width={27}
                                height={27}
                                className="mb-4"
                                priority
                            />
                            <h2 className="text-lg font-semibold text-white">Web Hosting</h2>
                            <p className="text-white mt-1 text-sm xl:text-base">Starting at $1/month</p>
                            <Link href="#" className="mt-1 text-white font-semibold underline hover:text-gray-100">
                                More Info
                            </Link>
                        </div>


                        <div className="rounded-md flex flex-col items-center">
                            <Image
                                src="/images/home/server-security.svg"
                                alt="Server Security Icon"
                                width={27}
                                height={27}
                                className="mb-4"
                                priority
                            />
                            <h2 className="text-xl font-semibold text-white">Web Hosting</h2>
                            <p className="text-white mt-1 text-sm xl:text-base">Starting at $1/month</p>
                            <Link href="#" className="mt-1 text-white font-semibold underline hover:text-gray-100">
                                More Info
                            </Link>
                        </div>


                        <div className="rounded-md flex flex-col items-center">
                            <Image
                                src="/images/home/server-security.svg"
                                alt="Server Security Icon"
                                width={27}
                                height={27}
                                className="mb-4"
                                priority
                            />
                            <h2 className="text-xl font-semibold text-white">Web Hosting</h2>
                            <p className="text-white mt-1 text-sm xl:text-base">Starting at $1/month</p>
                            <Link href="#" className="mt-1 text-white font-semibold underline hover:text-gray-100">
                                More Info
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-3 ml-auto mt-8 lg:mt-0">
                    <Image
                        src="/images/home/hero-image.webp"
                        alt="Hero Image"
                        width={672}
                        height={551}
                        className="w-full rounded-lg shadow-lg rounded-tl-[100px]"
                        priority
                    />
                    <button
                        onClick={() => setShowVideoPopup(true)}
                        aria-label="Watch introduction video"
                        className="absolute bottom-6 left-6 bg-transparent p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 26"
                            className="w-15 h-15 transition duration-1000 fill-white opacity-60 hover:fill-[#136CC9] hover:opacity-100"
                        >
                            <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
                            <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Video Popup */}
            {showVideoPopup && (
                <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl mx-4">
                        <div className="bg-black rounded-lg overflow-hidden aspect-video">
                            <iframe 
                                width="100%" 
                                height="100%"
                                src="https://www.youtube.com/embed/hx2W4fmqw_w?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <button 
                            onClick={() => setShowVideoPopup(false)}
                            className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-gray-300"
                        >
                            Close ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}