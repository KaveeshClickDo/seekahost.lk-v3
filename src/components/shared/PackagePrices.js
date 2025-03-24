'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function PackagesPrices() {
    const [isMonthly, setIsMonthly] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const pricing = [
        {
            title: 'Basic Package',
            monthlyPrice: 29,
            yearlyPrice: 290,
            features: [
                'Comprehensive Coverage',
                '24/7 Customer Support',
                'Quick Claims Processing',
            ],
        },
        {
            title: 'Standard Package',
            monthlyPrice: 59,
            yearlyPrice: 590,
            features: [
                'Enhanced Coverage Options',
                'Personalized Service',
                'Flexible Fee Rates',
            ],
        },
        {
            title: 'Premium Package',
            monthlyPrice: 79,
            yearlyPrice: 790,
            features: [
                'Comprehensive Coverage',
                '24/7 Customer Support',
                'Quick Claims Processing',
            ],
        },
        {
            title: 'Super Package',
            monthlyPrice: 99,
            yearlyPrice: 990,
            features: [
                'Comprehensive Coverage',
                '24/7 Customer Support',
                'Quick Claims Processing',
            ],
        },
    ];

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
            <div className="relative z-1 max-w-7xl mx-auto px-7 text-center">
                <h1 className="text-blue-600">PBN Manager</h1>
                <h2 className="text-3xl md:text-4xl mb-4 text-[#042552]">
                    Best Plans & Cheapest Prices
                    <br className="hidden md:block" />
                    With{" "}
                    <span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">
                        SeekaHost
                    </span>
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Protect your beloved with our comprehensive fulfillment and
                    credible insurance coverage you can rely on.
                </p>
                <div className="flex items-center justify-center space-x-4 mb-10">
                    <span
                        className={`cursor-pointer font-medium ${isMonthly ? 'text-blue-600' : 'text-gray-500'}`}
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
                        className={`cursor-pointer font-medium ${!isMonthly ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setIsMonthly(false)}
                    >
                        Yearly
                    </span>
                </div>

                <div className="min-h-[420px]">
                    {isClient ? (
                        <Slider {...settings}>
                            {pricing.map((plan, idx) => (
                                <div key={idx} className="px-2">
                                    <div className="group border rounded-lg p-6 h-full transition duration-600 hover:shadow-lg bg-white border-blue-500 hover:bg-gradient-to-r hover:from-[#103040] hover:to-[#0A437F] hover:border-blue-950">
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{plan.title}</h3>
                                        <div className="flex items-baseline justify-center my-4">
                                            <span className="text-4xl font-bold text-blue-600 mr-1 group-hover:text-white">
                                                ${isMonthly ? plan.monthlyPrice.toFixed(2) : plan.yearlyPrice.toFixed(2)}
                                            </span>
                                            <span className="text-gray-500 group-hover:text-white">
                                                / {isMonthly ? 'mo' : 'yr'}
                                            </span>
                                        </div>
                                        <ul className="text-left mb-6 space-y-2 group-hover:text-white">
                                            {plan.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 text-blue-600 mr-2 group-hover:text-white"
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
                                        <button
                                            className="w-full py-2 rounded text-white font-semibold transition bg-blue-600 group-hover:bg-white group-hover:text-blue-600"
                                        >
                                            Get This Plan
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className="flex justify-center gap-4">
                            {pricing.slice(0, 3).map((plan, idx) => (
                                <div key={idx} className="w-1/3 max-w-xs px-2 hidden md:block">
                                    <div className="border rounded-lg p-6 h-full bg-white border-blue-500">
                                        <div className="h-64"></div>
                                    </div>
                                </div>
                            ))}
                            <div className="w-full md:hidden">
                                <div className="border rounded-lg p-6 h-64 bg-white border-blue-500 mx-auto max-w-sm"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}