'use client';

import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { screenshots2 } from "@/data/screenshotSliderData";

// Sample slide data - replace with your actual content
const slideData = [
    {
        badge: "Our Solutions",
        title: "Build a Node.js App in Minutes",
        description: "SeekaHost offers the best and easy to use WordPress hosting control panel. The custom-built web hosting control panel for WordPress gives you a 1-click WordPress hosting solution with free SSL certificates and 1-click activation.",
        additionalText: "You can find, register domain names, host the domain and create WordPress websites with blogs faster than ever. Bloggers top choice for WP hosting and the managed WordPress is the business owners best WP partner."
    },
    {
        badge: "WordPress",
        title: "UK's Best WordPress Host",
        description: "WordPress is the most used CMS when it comes to building websites in the UK. And web hosting for WordPress websites must be reliable and optimised for performance. At SeekaHost we help anyone get online with the best domain names and WordPress web hosting packages that are fully managed. You can buy the desired hosting packages after your test with a 7 days free trail.",
        additionalText: "Create an account and get started hosting your WordPress websites and blogs with everything you need to succeed online. You can get free access to SeekaHost University to learn digital marketing and blogging skills taught by Fernando Raymond and his team of experts in web dynamics. So get started hosting your WordPress sites today."
    },
    {
        badge: "Blogging",
        title: "Everything Bloggers Need to Get Online",
        description: "SeekaHost understands what the best web hosting should look like and therefore offers several key advantages. These include scalable tariffs with no minimum term, providing high flexibility for users. Customers also benefit from free SSL and migration services, as well as automatic and regular updates and backups of all website content to ensure security and reliability.",
        additionalText: "In addition, SeekaHost provides expert support through live chat and a responsive email ticket system. Users can register domains easily and create WordPress websites within minutes. The unique hosting management panel offered by SeekaHost includes many exclusive features not available with any other web hosting provider, making website management seamless and efficient."
    }
];

export default function ScreenshotSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const screenshotsLength = screenshots2.length;

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

    const currentSlideData = slideData[currentSlide] || slideData[0];

    return (
        <section className="bg-[#F5FAFF] min-h-screen">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
                <div className="flex flex-col lg:flex-row min-h-screen">
                    {/* Image section - Responsive height */}
                    <div className="w-full lg:w-1/2 flex justify-center relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:min-h-screen order-1 lg:order-1">
                        <div className="relative w-full h-full max-w-2xl lg:max-w-none">
                            <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-none">
                                {screenshots2.map((src, index) => (
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
                                            alt={`Application Screenshot ${index + 1}`}
                                            fill
                                            className="object-cover object-center"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Dots positioned over the image - Mobile responsive */}
                            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 sm:space-x-3 z-10">
                                {screenshots2.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => changeSlide(index)}
                                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                            index === currentSlide 
                                                ? "bg-white scale-110 shadow-lg" 
                                                : "bg-white/50 hover:bg-white/70 active:bg-white/80"
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                        disabled={isTransitioning}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Text section with dynamic content - Mobile responsive */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-0 order-2 lg:order-2">
                        <div className="w-full max-w-lg lg:max-w-xl transition-all duration-500 ease-in-out text-center lg:text-left">
                            <div className="mb-4">
                                <span className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">
                                    {currentSlideData.badge}
                                </span>
                            </div>
                            
                            <h2 className="mt-2 mb-4 text-2xl md:text-4xl font-bold text-[#1D216A]">
                                {currentSlideData.title}
                            </h2>
                            
                            <p className="text-[#1D216A] mb-4">
                                {currentSlideData.description}
                            </p>
                            
                            <p className="text-[#1D216A] mb-6">
                                {currentSlideData.additionalText}
                            </p>
                            
                            {/* Mobile-first button layout */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                                <button className="w-full sm:w-auto bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors font-bold">
                                    Get Started
                                </button>
                                <Link
                                    href="#"
                                    className="flex items-center text-[#1D216A] text-base sm:text-lg font-bold hover:text-[#0066CC] active:text-[#004499] transition-colors gap-2"
                                >
                                    Learn More <MdArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}