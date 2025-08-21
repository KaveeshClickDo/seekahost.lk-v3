'use client';

import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { useEffect, useState, useCallback } from "react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { screenshots2 } from "@/data/screenshotSliderData";

export default function ScreenshotSlider() {
    const t = useTranslations('HomePage.ScreenshotSlider');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Get slides from translations
    const slideData = t.raw('slides');
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
                                <button className="w-full sm:w-auto bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full active:bg-blue-800 transition-colors font-bold">
                                    {t('buttons.getStarted')}
                                </button>
                                <Link
                                    href="#"
                                    className="flex items-center text-[#1D216A] text-base sm:text-lg font-bold hover:text-[#0066CC] active:text-[#004499] transition-colors gap-2"
                                >
                                    {t('buttons.learnMore')} <MdArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}