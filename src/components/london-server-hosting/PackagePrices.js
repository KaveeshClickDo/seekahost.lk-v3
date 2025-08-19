'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { londonServerPackageData } from '@/data/londonServerPackageData';

export default function PackagesPrices() {
    const pricing = londonServerPackageData[0].homePkgPrices;
    const packageInfo = londonServerPackageData[0];
    
    const [isClient, setIsClient] = useState(false);
    const [selectedPeriods, setSelectedPeriods] = useState({});

    useEffect(() => {
        setIsClient(true);
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
        centerPadding: "0",
        cssEase: 'ease',
        accessibility: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: '15px',
                },
            },
            {
                breakpoint: 693,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '6px',
                },
            },
        ],
    };

    const handlePeriodChange = (planIndex, period) => {
        setSelectedPeriods(prev => ({
            ...prev,
            [planIndex]: period
        }));
    };

    const getCurrentPeriod = (planIndex) => {
        return selectedPeriods[planIndex] || '1month';
    };

    const getCurrentPricing = (plan, planIndex) => {
        const period = getCurrentPeriod(planIndex);
        return plan.pricing[period];
    };

    const getCurrentLink = (plan, planIndex) => {
        const period = getCurrentPeriod(planIndex);
        const pricing = plan.pricing[period];        
        return `${plan.baseLink}?billingcycle=${pricing.billingCycle}`;
    };

    const periodOptions = [
        { value: '1month', label: '1 Month' },
        { value: '6months', label: '6 Months' },
        { value: '1year', label: '1 Year' },
        { value: '2years', label: '2 Years' },
        { value: '3years', label: '3 Years' }
    ];

    return (
        <section className="relative w-full py-12">
            <Image
                src="/images/home/package-banner.svg"
                alt="Background Image"
                fill
                className="object-cover z-0"
                priority
            />
            <div className="relative z-10 max-w-7xl mx-auto px-7 text-center md:my-10">
                <h1 className="inline-block text-[#1276DF] text-sm md:text-lg mb-4 font-semibold">
                    {packageInfo.title1}
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-8">
                    {packageInfo.title2}
                </h2>

                <div className="min-h-[420px]">
                    {isClient ? (
                        <Slider {...settings}>
                            {pricing.map((plan, idx) => {
                                const currentPricing = getCurrentPricing(plan, idx);
                                const currentPeriod = getCurrentPeriod(idx);
                                
                                return (
                                    <div key={idx} className="p-4">
                                        <div className="relative border rounded-2xl p-6 h-full transition-all duration-500 shadow-md hover:shadow-xl bg-white border-gray-200 hover:bg-[#2072CC] hover:border-none group transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden">
                                            {/* Outer glow effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2072CC]/20 to-[#2072CC]/30 blur-lg transform scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

                                            {/* Shimmer effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                                            {/* Background animation overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#2072CC]/30 to-[#2072CC]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>

                                            {plan.isBestValue && (
                                                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                                                    Best Value
                                                </div>
                                            )}

                                            <div className="relative z-10">
                                                <div className="flex-shrink-0 pb-2 transform group-hover:scale-110 transition-transform duration-500">
                                                    <Image src="/images/shared/package-price-icon.svg" width={75} height={75} alt="Package Icon" />
                                                </div>
                                                
                                                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-400 text-left">{plan.title}</h3>
                                                
                                                {/* Stylish Dropdown for Package Period */}
                                                <div className="mb-4 text-left">
                                                    <div className="relative">
                                                        <select
                                                            value={currentPeriod}
                                                            onChange={(e) => handlePeriodChange(idx, e.target.value)}
                                                            className="w-full appearance-none bg-white border-2 border-gray-200 rounded-lg px-4 py-2 pr-8 text-gray-700 text-sm font-medium focus:outline-none focus:border-[#2072CC] transition-all duration-300 group-hover:bg-white/90 group-hover:border-white cursor-pointer hover:border-[#2072CC]"
                                                        >
                                                            {periodOptions.map((option) => (
                                                                <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                            <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-baseline justify-start mt-4">
                                                    <span className="text-5xl font-bold mr-1 leading-tight group-hover:text-white transition-colors duration-400 group-hover:drop-shadow-lg">
                                                        £{currentPricing.price}
                                                        {currentPricing.discount > 0 && (
                                                            <sup className="ml-2 bg-gray-200 text-gray-500 group-hover:text-white group-hover:bg-[#2D7EEE] transition-colors duration-400 text-xs px-2 py-1 rounded-md font-bold">
                                                                -{currentPricing.discount}%
                                                            </sup>
                                                        )}
                                                    </span>
                                                </div>
                                                <p className="mb-4 text-gray-500 group-hover:text-white transition-colors duration-400 text-left">{currentPricing.specialText}</p>
                                                
                                                <Link href={getCurrentLink(plan, idx)} className="w-full">
                                                    <button className="w-full mb-4 py-3 border border-gray-200 rounded-xl font-bold transition-all duration-400 cursor-pointer bg-white hover:bg-white hover:text-[#2072CC] group-hover:bg-white group-hover:text-[#2072CC] group-hover:shadow-lg group-hover:scale-105 relative overflow-hidden">
                                                        {/* Button shimmer effect */}
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                                                        <span className="relative z-10">{plan.buttonName}</span>
                                                    </button>
                                                </Link>
                                                <hr className="mb-4 border-gray-300 group-hover:border-white/30 transition-colors duration-400" />

                                                {plan.featureSections.map((section, sectionIdx) => (
                                                    <div key={sectionIdx} className="mb-4">
                                                        {sectionIdx > 0 && (
                                                            <h4 className="font-bold text-lg mb-3 text-left text-gray-800 group-hover:text-white transition-colors duration-400">
                                                                {section.title}
                                                            </h4>
                                                        )}
                                                        <ul className="text-left space-y-2 text-gray-700 group-hover:text-white transition-colors duration-400">
                                                            {section.features.map((feature, fIdx) => (
                                                                <li key={fIdx} className="flex items-center group-hover:transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${fIdx * 50}ms` }}>
                                                                    <svg
                                                                        className="w-5 h-5 mr-3 transition-all duration-400 flex-shrink-0 group-hover:scale-110"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                                                                            className="fill-gray-100 group-hover:fill-white transition-colors duration-400"
                                                                        />
                                                                        <path
                                                                            d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                                                                            className="fill-black group-hover:fill-blue-600 transition-colors duration-400"
                                                                        />
                                                                    </svg>
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}

                                                {/* Interactive element at bottom */}
                                                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 text-center">
                                                    <div className="inline-flex items-center justify-center w-8 h-1 bg-gradient-to-r from-white/60 to-white/40 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    ) : (
                        <div className="flex justify-center gap-4">
                            {pricing.slice(0, 3).map((plan, idx) => (
                                <div key={idx} className="w-1/3 max-w-xs px-2 hidden md:block">
                                    <div className="relative border rounded-lg p-6 h-full bg-white border-blue-500 hover:bg-gradient-to-t hover:from-[#136CC9] hover:to-[#09407A] hover:border-none transition-all duration-400 group overflow-hidden">
                                        {/* Shimmer effect for loading state */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                                        <div className="h-64"></div>
                                    </div>
                                </div>
                            ))}
                            <div className="w-full md:hidden">
                                <div className="relative border rounded-lg p-6 h-64 bg-white border-blue-500 mx-auto max-w-sm hover:bg-gradient-to-t hover:from-[#136CC9] hover:to-[#09407A] hover:border-none transition-all duration-400 group overflow-hidden">
                                    {/* Shimmer effect for mobile loading state */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Link href="/shared-hosting-features" className="inline-block bg-white text-[#0066CC] border border-[#0066CC] px-6 py-2 rounded-full hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer font-bold">
                    {packageInfo.buttonText}
                </Link>
            </div>
        </section>
    );
}