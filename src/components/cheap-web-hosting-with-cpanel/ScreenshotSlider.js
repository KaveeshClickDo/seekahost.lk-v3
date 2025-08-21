'use client';

import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { screenshots } from "@/data/screenshotSliderData";

export default function ScreenshotSlider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const [prevSlide, setPrevSlide] = useState(null);

    const [isTransitioning, setIsTransitioning] = useState(false);

    const screenshotsLength = screenshots.length;

    const changeSlide = useCallback((index) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setPrevSlide(currentSlide);
        setCurrentSlide(index);

        setTimeout(() => {
            setIsTransitioning(false);
            setPrevSlide(null);
        }, 500);
    }, [currentSlide, isTransitioning]);


    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % screenshotsLength;
            changeSlide(nextSlide);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, changeSlide, screenshotsLength]);

    return (
        <section className="bg-[#F5FAFF]">
            <div className="max-w-7xl container mx-auto flex flex-col md:flex-row">
                <div className="md:w-3/5 w-full bg-[#0A488A] flex justify-end items-right py-20 relative">
                    <div className="w-3/4 relative overflow-hidden">

                        <div className="relative" style={{ height: "auto" }}>
                            {screenshots.map((src, index) => (
                                <div
                                    key={index}
                                    className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out`}
                                    style={{
                                        transform: index === currentSlide
                                            ? 'translateX(0)'
                                            : index === prevSlide
                                                ? 'translateX(100%)'
                                                : 'translateX(100%)',
                                        opacity: index === currentSlide ? 1 : index === prevSlide ? 0 : 0,
                                        zIndex: index === currentSlide ? 2 : index === prevSlide ? 1 : 0,
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={`WordPress Hosting Control Panel ${index + 1}`}
                                        width={3040}
                                        height={2120}
                                        className="w-full h-auto rounded-l-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>


                        <div className="opacity-0 invisible">
                            <Image
                                src={screenshots[0]}
                                alt="WordPress Hosting Control Panel placeholder"
                                width={760}
                                height={530}
                                className="w-full h-auto rounded-l-lg shadow-lg"
                            />
                        </div>



                    </div>
                    <div className="absolute bottom-8 right-8 flex justify-center space-x-2">
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => changeSlide(index)}
                                className={`md:w-3.5 md:h-3.5 w-2.5 h-2.5 rounded-full ${index === currentSlide ? "bg-white" : "bg-white opacity-30"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                                disabled={isTransitioning}
                            />
                        ))}
                    </div>
                </div>
                <div className="md:w-2/5 w-full md:pl-12 mt-10 md:mt-0 flex flex-col justify-center px-4 md:px-0">
                    <div><h1 className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">Our Solutions</h1></div>
                    <h2 className="mt-2 text-2xl md:text-4xl font-bold">
                        Smart Pricing — Pay Only for What You Need
                    </h2>
                    <p className="mb-10 my-8">
                        Tired of overpaying for “unlimited” features you never use? Many hosting providers include flashy extras like fake NVMe SSDs or unlimited domains just to justify higher costs. At SeekaHost, we believe in transparent pricing. Our plans are designed to match your actual needs—whether you&apos;re running a single blog or managing multiple client websites. No fluff, no bloat—just reliable hosting that saves you money.
                    </p>
                    <div className="flex items-center space-x-4">
                        <button className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold">
                            Get Started
                        </button>
                        <Link
                            href="#"
                            className="flex items-center justify-center text-black text-base font-bold hover:text-[#2072CC] transition-colors gap-1 sm:gap-2 py-2"
                        >
                            Learn More <MdArrowForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}