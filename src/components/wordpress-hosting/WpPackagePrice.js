'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';

export default function WpPackagesPrices() {
    const [isMonthly, setIsMonthly] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const pricing = [
        {
            title: 'Starter',
            monthlyPrice: 280,
            yearlyPrice: 2000,
            specialTextMonth: '30 days of Free Trial',
            specialTextYear: 'Renews for LKR2800/yr',
            features: [
                '1 Website',
                '10 GB Web Space',
                '~10,000 Visits Monthly',
                'Unmetered Traffic',
            ],
            wpfeatures: [
                'WordPress Auto-Install',
                'Free Automated Migrations',
                'Fully Managed Updates',
                'Speed Optimizer WP Plugin',
            ],
            hostfeatures: [
                'Free SSL, Email',
                'Unlimited Database',
                'Daily Backup',
                'Enhanced Security',
            ],
        },
        {
            title: 'Turbo',
            monthlyPrice: 500,
            yearlyPrice: 5000,
            specialTextMonth: 'Renews at LKR580/mo',
            specialTextYear: 'Renews for LKR5800/yr',
            features: [
                'Unlimited Websites',
                '20 GB Web Space',
                '~100,000 Visits Monthly',
                'Unmetered Traffic',
            ],
            wpfeatures: [
                'WordPress Auto-Install',
                'Free Automated Migrations',
                'Fully Managed Updates',
                'Speed Optimizer WP Plugin',
                'WordPress Staging',
            ],
            hostfeatures: [
                'Free SSL, Email',
                'Unlimited Database',
                'Daily Backup',
                'Enhanced Security',
                'On-Demand Backup Copies',
            ],
        },
        {
            title: 'Supersonic',
            monthlyPrice: 700,
            yearlyPrice: 7000,
            specialTextMonth: 'Renews at LKR780/mo',
            specialTextYear: 'Renews for LKR7800/yr',
            features: [
                'Unlimited Websites',
                '40 GB Web Space',
                '~400,000 Visits Monthly',
                'Unmetered Traffic',
            ],
            wpfeatures: [
                'WordPress Auto-Install',
                'Free Automated Migrations',
                'Fully Managed Updates',
                'Speed Optimizer WP Plugin',
                'WordPress Staging',
                '30% Faster PHP',
            ],
            hostfeatures: [
                'Free SSL, Email',
                'Unlimited Database',
                'Daily Backup',
                'Enhanced Security',
                'On-Demand Backup Copies',
                'Free Private DNS',
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
            <div className="relative z-1 max-w-7xl mx-auto px-7 text-center md:mt-10">
                <h1 className="text-blue-600 md:text-xl">PBN Manager</h1>
                <h2 className="text-2xl md:text-4xl mb-4 text-[#042552]">
                    Best Plans & Cheapest Prices
                    <br className="hidden md:block" />
                    With{" "}
                    <span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">
                        SeekaHost
                    </span>
                </h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto md:text-lg font-medium">
                    Protect your beloved with our comprehensive fulfillment and
                    credible insurance coverage you can rely on.
                </p>
                <div className="flex items-center justify-center space-x-4 mb-10">
                    <span
                        className={`cursor-pointer  md:text-xl font-medium ${isMonthly ? 'text-blue-600' : 'text-gray-500'}`}
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
                        className={`cursor-pointer  md:text-xl font-medium ${!isMonthly ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setIsMonthly(false)}
                    >
                        Yearly
                    </span>
                </div>

                <div className="min-h-[420px]">
                    {isClient ? (
                        <Slider {...settings}>
                            {pricing.map((plan, idx) => (
                                <div key={idx} className="p-2">
                                    <div className="group border rounded-2xl p-6 h-full transition duration-600 shadow-md hover:shadow-[#09407A] bg-white border-none hover:bg-gradient-to-t hover:from-[#136CC9] hover:to-[#09407A]">
                                        <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-white">{plan.title}</h3>
                                        <div className="flex items-baseline justify-center mt-4">
                                            <span className="text-4xl font-bold text-[#1276DF] mr-1 group-hover:text-white">
                                                LKR{isMonthly ? plan.monthlyPrice.toFixed(0) : plan.yearlyPrice.toFixed(0)}
                                            </span>
                                            <span className="text-gray-500 group-hover:text-white md:text-xl font-medium">
                                                / {isMonthly ? 'mo' : 'yr'}
                                            </span>
                                        </div>
                                        <p className="mb-4 text-gray-500 group-hover:text-white md:text-xl font-medium">{isMonthly ? plan.specialTextMonth : plan.specialTextYear}</p>
                                        <button
                                            className="w-full mb-4 py-2 rounded text-white font-semibold transition bg-[#1276DF] group-hover:bg-white group-hover:text-blue-600 md:text-xl"
                                        >
                                            Get {plan.title}
                                        </button>
                                        <hr className="mb-4 text-gray-300" />
                                        <ul className="text-left mb-6 space-y-2 group-hover:text-white md:text-lg font-medium">
                                            {plan.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center">
                                                    <svg
                                                        className="w-5 h-5 text-blue-600 mr-2 group-hover:text-white"
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
                                            <p className="font-semibold my-3">Managed WordPress Features</p>

                                            {plan.wpfeatures.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center">
                                                    <svg
                                                        className="w-5 h-5 text-blue-600 mr-2 group-hover:text-white"
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

                                            <p className="font-semibold my-3">Hosting Features</p>

                                            {plan.hostfeatures.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center">
                                                    <svg
                                                        className="w-5 h-5 text-blue-600 mr-2 group-hover:text-white"
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
                <Link href="/shared-hosting-features" className="bg-white text-[#0066CC] md:text-lg border border-[#0066CC] px-6 py-2 rounded-full hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer font-medium">
                        Compare Packages
                    </Link>
            </div>
        </section>
    );
}