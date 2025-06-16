'use client';

import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
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

 
    const [selectedCategory, setSelectedCategory] = useState('web');


    const [selectedPackageType, setSelectedPackageType] = useState('home');
    const [showPackageDropdown, setShowPackageDropdown] = useState(false);


    const [isMonthly, setIsMonthly] = useState(true);
    const [isClient, setIsClient] = useState(false);


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
                    Start Hosting at an unbeatable prices
                </h2>
                <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
                    Protect your beloved with our comprehensive fulfillment and
                    credible insurance coverage you can rely on.
                </p>


                <div className="flex justify-center mb-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5" role="group">
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('web')}
                            className={`px-6 py-2 text-sm font-medium rounded-lg ${selectedCategory === 'web'
                                ? 'bg-[#2072CC] text-white hover:bg-blue-700'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            Web Hosting
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('ecommers')}
                            className={`px-6 py-2 text-sm font-medium rounded-lg ${selectedCategory === 'ecommers'
                                ? 'bg-[#2072CC] text-white hover:bg-blue-700'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            eCommerce
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('wordpress')}
                            className={`px-6 py-2 text-sm font-medium rounded-lg ${selectedCategory === 'wordpress'
                                ? 'bg-[#2072CC] text-white hover:bg-blue-700'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            WordPress
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('vps')}
                            className={`px-6 py-2 text-sm font-medium rounded-lg ${selectedCategory === 'vps'
                                ? 'bg-[#2072CC] text-white hover:bg-blue-700'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            VPS Hosting
                        </button>
                    </div>
                </div>


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
                                className="absolute right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-[#2072CC] ring-opacity-5 focus:outline-none"
                            >
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    {packageOptions.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => {
                                                setSelectedPackageType(option.id);
                                                setShowPackageDropdown(false);
                                            }}
                                            className={`block w-full px-4 py-2 text-sm text-left ${selectedPackageType === option.id ? 'bg-gray-100 text-[#2072CC]' : 'text-gray-700'
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


                <div className="flex items-center justify-center space-x-4 mb-10">
                    <span
                        className={`cursor-pointer md:text-lg ${isMonthly ? 'text-[#2072CC]' : ''}`}
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
                        className={`cursor-pointer md:text-lg ${!isMonthly ? 'text-[#2072CC]' : ''}`}
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
                                    <div className="relative border rounded-2xl p-6 h-full transition-all duration-400 shadow-md hover:shadow-lg bg-white border-gray-200 hover:bg-[#2072CC] hover:border-none group">
                                        {plan.isBestValue && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2072CC] text-white px-3 py-1 rounded-md text-sm font-bold z-10">
                                                BEST VALUE
                                            </div>
                                        )}
                                        <div className="flex-shrink-0 pb-2">
                                            <Image src="/images/shared/package-price-icon.svg" width={75} height={75} alt="Package Icon" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 group-hover:text-white transition-colors duration-400 text-left">{plan.title}</h3>
                                        <div className="flex items-baseline justify-start mt-4">
                                            <span className="text-5xl font-bold mr-1 leading-14 group-hover:text-white transition-colors duration-400">
                                                LKR{isMonthly ? plan.monthlyPrice.toFixed(0) : plan.yearlyPrice.toFixed(0)}
                                            </span>
                                            <span className="text-gray-500 group-hover:text-white md:text-xl font-medium transition-colors duration-400">
                                                / {isMonthly ? 'mo' : 'yr'}
                                            </span>
                                        </div>
                                        <p className="mb-4 text-gray-500 group-hover:text-white transition-colors duration-400 text-left">{isMonthly ? plan.specialTextMonth : plan.specialTextYear}</p>
                                        <Link href={plan.link} className="w-full">
                                            <button className="w-full mb-4 py-3 border border-gray-200 rounded-xl font-bold transition-all duration-400 cursor-pointer bg-white hover:bg-white hover:text-[#2072CC] group-hover:bg-white group-hover:text-[#2072CC]">
                                                {plan.buttonName}
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
                                                        <li key={fIdx} className="flex items-center">
                                                            <svg
                                                                className="w-5 h-5 mr-3 transition-colors duration-400 flex-shrink-0"
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
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className="flex justify-center gap-4">
                            {pricing.slice(0, 3).map((plan, idx) => (
                                <div key={idx} className="w-1/3 max-w-xs px-2 hidden md:block">
                                    <div className="relative border rounded-lg p-6 h-full bg-white border-blue-500 hover:bg-gradient-to-t hover:from-[#136CC9] hover:to-[#09407A] hover:border-none transition-all duration-400">
                                        {plan.isBestValue && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2072CC] text-white px-3 py-1 rounded-md text-sm font-bold z-10">
                                                BEST VALUE
                                            </div>
                                        )}
                                        <div className="h-64"></div>
                                    </div>
                                </div>
                            ))}
                            <div className="w-full md:hidden">
                                <div className="relative border rounded-lg p-6 h-64 bg-white border-blue-500 mx-auto max-w-sm hover:bg-gradient-to-t hover:from-[#136CC9] hover:to-[#09407A] hover:border-none transition-all duration-400">
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