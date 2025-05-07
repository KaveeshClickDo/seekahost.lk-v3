'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import { woocommercePkgPrices } from '@/data/packagePricesData';

export default function PackagesPrices() {
    const pricing = woocommercePkgPrices;
    const [isMonthly, setIsMonthly] = useState(true);
    const [isClient, setIsClient] = useState(false);

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

    const toggleBilling = () => {
        setIsMonthly(!isMonthly);
    };

    return (
        <section className="relative w-full py-12">
            <Image
                src="/images/home/package-banner.svg"
                alt="Background Image"
                fill
                className="object-cover z-0"
                priority
            />
            <div className="relative z-1 max-w-7xl mx-auto px-7 text-center md:mt-10">
                <h1 className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">PBN Manager</h1>
                <h2 className="text-2xl md:text-4xl mb-6 text-[#042552]">
                    Best Plans & Cheapest Prices
                    <br className="hidden md:block" />
                    With{" "}
                    <span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">
                        SeekaHost
                    </span>
                </h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                    Protect your beloved with our comprehensive fulfillment and
                    credible insurance coverage you can rely on.
                </p>
                <div className="flex items-center justify-center space-x-4 mb-10">
                    <span
                        className={`cursor-pointer md:text-lg ${isMonthly ? 'text-blue-600' : ''}`}
                        onClick={() => setIsMonthly(true)}
                    >
                        Monthly
                    </span>
                    <div className="relative inline-block w-12 select-none">
                        <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            className="sr-only"
                            checked={!isMonthly}
                            onChange={toggleBilling}
                            aria-label="Toggle between monthly and yearly billing"
                        />
                        <label
                            htmlFor="toggle"
                            className="block h-6 bg-gray-300 rounded-full cursor-pointer"
                        />
                        <div
                            className={`dot absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition ${!isMonthly ? 'translate-x-6' : ''}`}
                        />
                    </div>
                    <span
                        className={`cursor-pointer md:text-lg ${!isMonthly ? 'text-blue-600' : ''}`}
                        onClick={() => setIsMonthly(false)}
                    >
                        Yearly
                    </span>
                </div>

                <div className="min-h-[420px]">
                    {isClient ? (
                        <Slider {...settings}>
                            {pricing.map((plan, idx) => (
                                <div key={idx} className="p-4">
                                    <div className={`relative border rounded-2xl p-6 h-full transition duration-400 shadow-md hover:shadow-lg bg-white border-none ${idx === 1 ? 'bg-gradient-to-t from-[#136CC9] to-[#09407A] shadow-[#09407A]' : ''}`}>
                                        {plan.isBestValue && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-bold z-10">
                                                BEST VALUE
                                            </div>
                                        )}
                                        <h3 className={`text-lg md:text-xl font-bold mb-2 ${idx === 1 ? 'text-white' : ''}`}>{plan.title}</h3>
                                        <div className="flex items-baseline justify-center mt-4">
                                            <span className={`text-5xl font-bold mr-1 leading-14 ${idx === 1 ? 'text-white' : 'text-[#1276DF]'}`}>
                                                LKR{isMonthly ? plan.monthlyPrice.toFixed(0) : plan.yearlyPrice.toFixed(0)}
                                            </span>
                                            <span className={`${idx === 1 ? 'text-white' : 'text-gray-500'} md:text-xl font-medium`}>
                                                / {isMonthly ? 'mo' : 'yr'}
                                            </span>
                                        </div>
                                        <p className={`mb-4 ${idx === 1 ? 'text-white' : 'text-gray-500'}`}>{isMonthly ? plan.specialTextMonth : plan.specialTextYear}</p>
                                        <button
                                            className={`w-full mb-4 py-3 rounded font-bold transition ${idx === 1 ? 'bg-white text-blue-600' : 'bg-[#1276DF] text-white'}`}
                                        >
                                            Get {plan.title}
                                        </button>
                                        <hr className="mb-4 text-gray-300" />
                                        
                                        {/* Dynamic Feature Sections */}
                                        {plan.featureSections.map((section, sectionIdx) => (
                                            <div key={sectionIdx} className="mb-4">
                                                {/* Don't show section title for the first section (General Features) */}
                                                {sectionIdx > 0 && (
                                                    <h4 className={`font-bold text-lg mb-3 text-left ${idx === 1 ? 'text-white' : ''}`}>
                                                        {section.title}
                                                    </h4>
                                                )}
                                                <ul className={`text-left space-y-2 ${idx === 1 ? 'text-white' : ''}`}>
                                                    {section.features.map((feature, fIdx) => (
                                                        <li key={fIdx} className="flex items-center">
                                                            <svg
                                                                className={`w-5 h-5 mr-2 ${idx === 1 ? 'text-white' : 'text-blue-600'}`}
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M5 13l4 4L19 7"
                                                                />
                                                            </svg>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className="flex justify-center gap-4">
                            {pricing.slice(0, 3).map((plan, idx) => (
                                <div key={idx} className="w-1/3 max-w-xs px-2 hidden md:block">
                                    <div className={`relative border rounded-lg p-6 h-full ${idx === 1 ? 'bg-gradient-to-t from-[#136CC9] to-[#09407A] border-none' : 'bg-white border-blue-500'}`}>
                                        {plan.isBestValue && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-bold z-10">
                                                BEST VALUE
                                            </div>
                                        )}
                                        <div className="h-64"></div>
                                    </div>
                                </div>
                            ))}
                            <div className="w-full md:hidden">
                                <div className="relative border rounded-lg p-6 h-64 bg-white border-blue-500 mx-auto max-w-sm">
                                    {pricing[0].isBestValue && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-bold z-10">
                                            BEST VALUE
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Link href="/woocommerce-hosting-features" className="bg-white text-[#0066CC] border border-[#0066CC] px-6 py-2 rounded-full hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer font-bold">
                    Compare Packages
                </Link>
            </div>
        </section>
    );
}