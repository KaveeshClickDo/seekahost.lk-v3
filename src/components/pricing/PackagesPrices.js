'use client';

import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import {
    homePkgPrices,
    managedWPPkgPrices,
    woocommercePkgPrices,
    wordPressPkgPrices,
    agencyPkgPrices
} from '@/data/packagePricesData';

export default function PackagesPrices() {

    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowPackageDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Top level category (Web Hosting vs VPS Hosting)
    const [selectedCategory, setSelectedCategory] = useState('web');

    // Package type state and options
    const [selectedPackageType, setSelectedPackageType] = useState('home');
    const [showPackageDropdown, setShowPackageDropdown] = useState(false);

    // Original states
    const [isMonthly, setIsMonthly] = useState(true);
    const [isClient, setIsClient] = useState(false);

    // Get the appropriate pricing data based on selection
    const getPricingData = () => {
        switch (selectedPackageType) {
            case 'managedWP':
                return managedWPPkgPrices;
            case 'woocommerce':
                return woocommercePkgPrices;
            case 'wordpress':
                return wordPressPkgPrices;
            case 'agency':
                return agencyPkgPrices;
            case 'home':
            default:
                return homePkgPrices;
        }
    };

    const pricing = getPricingData();

    // Define package options based on selected category
    const getPackageOptions = () => {
        if (selectedCategory === 'web') {
            return [
                { id: 'business', label: 'Business Hosting' },
                { id: 'cPanel', label: 'cPanel Hosting' },
                { id: 'nodeJS', label: 'NodeJS Hosting' },
                { id: 'agency', label: 'Agency Hosting' },
            ];
        } else if (selectedCategory === 'ecommers') {
            return [
                { id: 'woocommerce', label: 'WooCommerce' },
            ];
        }
        else if (selectedCategory === 'wordpress') {
            return [
                { id: 'wordpress', label: 'WordPress Hosting' },
                { id: 'managedWP', label: 'Managed WordPress' },
            ];
        } else {
            return [
                { id: 'vps', label: 'VPS Hosting' },
                { id: 'n8n', label: 'n8n VPS Hosting' },
            ];
        }
    };

    const packageOptions = getPackageOptions();

    // Update selected package type when category changes
    useEffect(() => {
        if (selectedCategory === 'web') {
            setSelectedPackageType('business');
        } else if (selectedCategory === 'ecommers') {
            setSelectedPackageType('woocommerce');
        } else if (selectedCategory === 'wordpress') {
            setSelectedPackageType('wordpress');
        } else {
            setSelectedPackageType('vps');
        }
    }, [selectedCategory]);

    // Get the current package label
    const getCurrentPackageLabel = () => {
        const option = packageOptions.find(opt => opt.id === selectedPackageType);
        return option ? option.label : 'Web Hosting';
    };

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
            <div className="relative z-1 max-w-7xl mx-auto px-7 text-center md:mt-10">
                <h2 className="text-2xl md:text-[40px] font-bold mb-6 text-[#042552]">
                    Start Hosting at an unbeatable price
                </h2>
                <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
                    Protect your beloved with our comprehensive fulfillment and
                    credible insurance coverage you can rely on.
                </p>

                {/* Main Category Selector Buttons */}
                <div className="flex justify-center mb-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5" role="group">
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('web')}
                            className={`px-6 py-2 text-sm font-medium rounded-lg ${selectedCategory === 'web'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            Web Hosting
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('ecommers')}
                            className={`px-6 py-2 text-sm font-medium rounded-lg ${selectedCategory === 'ecommers'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            eCommers
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('wordpress')}
                            className={`px-6 py-2 text-sm font-medium rounded-lg ${selectedCategory === 'wordpress'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            WordPress
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('vps')}
                            className={`px-6 py-2 text-sm font-medium rounded-lg ${selectedCategory === 'vps'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            VPS Hosting
                        </button>
                    </div>
                </div>

                {/* Package Type Selector */}
                <div className="flex justify-center mb-8">
                    <div className="relative inline-block w-64" ref={dropdownRef}>
                        <button
                            onClick={() => setShowPackageDropdown(!showPackageDropdown)}
                            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm"
                        >
                            <span>{getCurrentPackageLabel()}</span>
                            {showPackageDropdown ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </button>

                        {showPackageDropdown && (
                            <div
                                className="absolute right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-blue-600 ring-opacity-5 focus:outline-none"
                            >
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    {packageOptions.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => {
                                                setSelectedPackageType(option.id);
                                                setShowPackageDropdown(false);
                                            }}
                                            className={`block w-full px-4 py-2 text-sm text-left ${selectedPackageType === option.id ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
                                                } hover:bg-gray-100`}
                                            role="menuitem"
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Monthly/Yearly Toggle */}
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
                                    <div className={`relative border rounded-2xl p-6 h-full transition duration-400 shadow-md hover:shadow-lg bg-white border-[#136CC9] ${idx === 1 ? 'bg-gradient-to-t from-[#136CC9] to-[#09407A] shadow-[#09407A]' : ''}`}>
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
                                        <Link href={plan.link} className="w-full">
                                            <button
                                                className={`w-full mb-4 py-3 rounded font-bold transition cursor-pointer ${idx === 1 ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-[#1276DF] text-white hover:bg-blue-900'}`}
                                            >
                                                {plan.buttonName}
                                            </button>
                                        </Link>
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
                <Link href="/shared-hosting-features" className="bg-white text-[#0066CC] border border-[#0066CC] px-6 py-2 rounded-full hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer font-bold mt-6 inline-block">
                    Compare Packages
                </Link>
            </div>
        </section>
    );
}