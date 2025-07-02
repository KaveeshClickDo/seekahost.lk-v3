'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function TestimonialSlider() {
    const t = useTranslations('HomePage.Hero');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Get testimonials from translations
    const testimonials = t.raw('testimonials');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="bg-[#295E96] rounded-full flex items-center space-x-3 max-w-md">
            <div className="flex -space-x-3">
                <div className="relative w-12 h-12 min-[400px]:w-15 min-[400px]:h-15 rounded-full overflow-hidden border-3 border-white">
                    <Image
                        src="/images/shared/profile1.webp"
                        alt="Testimonial 1"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative w-12 h-12 min-[400px]:w-15 min-[400px]:h-15 rounded-full overflow-hidden border-3 border-white">
                    <Image
                        src="/images/shared/profile2.webp"
                        alt="Testimonial 2"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative w-12 h-12 min-[400px]:w-15 min-[400px]:h-15 rounded-full overflow-hidden border-3 border-white">
                    <Image
                        src="/images/shared/profile3.webp"
                        alt="Testimonial 3"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="text-white text-xs sm:text-sm max-w-xs">
                <div className="transition-opacity duration-500">
                    <p className="font-medium">{testimonials[currentIndex].text}</p>
                    <p className="opacity-90 hidden min-[450px]:block">{testimonials[currentIndex].subtext}</p>
                </div>
            </div>
        </div>
    );
}