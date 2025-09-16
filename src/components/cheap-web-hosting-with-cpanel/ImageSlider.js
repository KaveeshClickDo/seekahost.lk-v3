'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const slides = [
        {
            id: 1,
            image: '/images/cheap-web-hosting-with-cpanel/bg1.webp',
            title: 'MailGuard',
            subtitle: "Smarter Email Protection",
            description: "Reliable, secure email delivery powered by MailChannels’ advanced cloud-based SMTP filtering.",
            features: [
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/next-level-spam-defense.svg',
                    title: 'Next-Level Spam Defense',
                    description: 'Block outbound spam instantly with world-class threat detection.'
                },
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/boosted-deliverability.svg',
                    title: 'Boosted Deliverability',
                    description: 'IP reputation tools and blacklist avoidance keep your emails landing in inboxes.'
                },
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/actionable-insights.svg',
                    title: 'Actionable Insights',
                    description: 'Track delivery performance and optimize with real-time analytics.'
                },
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/blacklist-free-guarantee.svg',
                    title: 'Blacklist-Free Guarantee',
                    description: 'Protect your domain from IP blacklisting issues once and for all.'
                }
            ],
        },
        {
            id: 2,
            image: '/images/cheap-web-hosting-with-cpanel/bg2.webp',
            title: 'cPanel',
            subtitle: "cPanel Custom",
            description: "Our Custom cPanel gives you a simplified, intuitive, and fully tailored control panel designed to make website management easier than ever. With a modern interface and streamlined tools, you can manage domains, emails, databases, backups, and security settings—all from one place. Whether you’re a beginner or an advanced user, our custom-built enhancements ensure faster navigation, better performance, and full control over your hosting environment.",
            features: [],
        },
        {
            id: 3,
            image: '/images/cheap-web-hosting-with-cpanel/bg1.webp',
            title: 'Active Defense',
            subtitle: "Advanced Malware Scanning",
            description: "Proactive malware defense with instant detection, cleanup, and reporting.",
            features: [
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/regular-security-scans.svg',
                    title: 'Regular Security Scans',
                    description: 'Automated system-wide scans ensure your account stays malware-free.'
                },
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/instant-alerts.svg',
                    title: 'Instant Alerts',
                    description: 'Get detailed incident reports directly in your cPanel dashboard.'
                },
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/one-click-removal.svg',
                    title: 'One-Click Removal',
                    description: 'Clean up threats instantly with a single click using ImunifyAV+.'
                },
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/seamless-cPanel-integration.svg',
                    title: 'Seamless cPanel Integration',
                    description: 'Manage all malware protection tools from one place.'
                }
            ],
        },
        {
            id: 4,
            image: '/images/cheap-web-hosting-with-cpanel/bg1.webp',
            title: 'SecureVault',
            subtitle: "Complete Backup & Restore",
            description: "Effortless data protection with automated backups and fast recovery options.",
            features: [
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/full-account-recovery.svg',
                    title: 'Full Account Recovery',
                    description: 'SRestore emails, databases, and files from any backup within 14 days.'
                },
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/off-site-security.svg',
                    title: 'Off-Site Security',
                    description: 'Backups are securely stored at a remote datacenter for maximum safety.'
                },
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/fast-one-click-restore.svg',
                    title: 'Fast One-Click Restore',
                    description: 'Quickly bring your site back online in minutes with JetBackup tools.'
                },
                {
                    icon: '/images/cheap-web-hosting-with-cpanel/included-at-no-extra-cost.svg',
                    title: 'Included at No Extra Cost',
                    description: 'Enjoy enterprise-level backup solutions, free with your plan.'
                }
            ],
        }
    ];

    const currentSlideHasFeatures = () => {
        return slides[currentSlide]?.features && slides[currentSlide].features.length > 0;
    };

    const getFeature = (index) => {
        return slides[currentSlide]?.features?.[index] || null;
    };

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;

        setIsTransitioning(true);

        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 150);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 600);
    }, [isTransitioning, slides.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const FeatureItem = ({ feature, size = 'desktop' }) => {
        if (!feature) return null;

        const iconSize = size === 'desktop' ? { width: 80, height: 80 } : { width: 40, height: 40 };
        const iconClasses = size === 'desktop' 
            ? "mb-4 mx-auto w-[50px] h-[50px] 2xl:w-[80px] 2xl:h-[80px]"
            : "mb-2 mx-auto";
        const titleClasses = size === 'desktop'
            ? "text-lg font-bold mb-3 text-[#1D216A] 2xl:text-base text-sm"
            : "text-xs font-bold mb-1";
        const descClasses = size === 'desktop'
            ? "2xl:text-base text-xs text-gray-600 2xl:px-15 px-10"
            : "text-xs text-gray-700";

        return (
            <div className="text-center">
                <Image
                    src={feature.icon}
                    alt={feature.title}
                    className={iconClasses}
                    width={iconSize.width}
                    height={iconSize.height}
                />
                <h4 className={titleClasses}>
                    {feature.title}
                </h4>
                <p className={descClasses}>
                    {feature.description}
                </p>
            </div>
        );
    };

    const EmptyFeaturesState = ({ size = 'desktop' }) => {
        return null;
    };

    return (
        <div className="w-full bg-[#F5FAFF] py-8">
            <div className="relative">
                {/* Desktop Layout */}
                <div className="hidden xl:block">
                    <div className="max-w-full mx-auto px-4 relative">
                        {/* Image Container */}
                        <div className="relative overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div key={slide.id} className="w-full flex-shrink-0">
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-140 2xl:h-185 object-cover"
                                            width={2048}
                                            height={910}
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Box */}
                        <div className="absolute top-8 right-4 sm:right-6 lg:right-8 xl:right-12 w-3/7 h-9/10 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="relative h-full">
                                <div
                                    className={`transform transition-all duration-400 ease-in-out h-full ${isTransitioning ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                                        }`}
                                >
                                    <div className="p-4 lg:p-6 h-full flex flex-col">
                                        {/* Header */}
                                        <div className="mb-2">
                                            <span className="inline-block bg-blue-100 text-[#235E9D] text-sm px-2 2xl:px-4 py-1 2xl:py-2 rounded-full font-medium">
                                                {slides[currentSlide].title}
                                            </span>
                                        </div>

                                        <h2 className="mb-2 2xl:text-3xl font-bold text-[#1D216A] leading-tight">
                                            {slides[currentSlide].subtitle}
                                        </h2>

                                        <p className="text-[#1D216A] mb-8 2xl:text-base text-sm">
                                            {slides[currentSlide].description}
                                        </p>

                                        {/* Features Grid or Empty State */}
                                        <div className="flex-1">
                                            {currentSlideHasFeatures() ? (
                                                <div className="grid grid-cols-2 gap-8 h-full">
                                                    <div className="grid gap-8">
                                                        <FeatureItem feature={getFeature(0)} size="desktop" />
                                                        <FeatureItem feature={getFeature(1)} size="desktop" />
                                                    </div>
                                                    <div className="grid gap-8">
                                                        <FeatureItem feature={getFeature(2)} size="desktop" />
                                                        <FeatureItem feature={getFeature(3)} size="desktop" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <EmptyFeaturesState size="desktop" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="block xl:hidden">
                    <div className="px-4">
                        {/* Image Container - Mobile */}
                        <div className="relative overflow-hidden rounded-xl mb-6">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div key={slide.id} className="w-full flex-shrink-0">
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-64 object-cover object-left"
                                            width={1024}
                                            height={455}
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Container - Mobile */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div key={slide.id} className="w-full flex-shrink-0">
                                        <div className="bg-white rounded-xl shadow-lg p-6">
                                            <div className="mb-2">
                                                <span className="inline-block bg-blue-100 text-[#235E9D] text-sm px-2 2xl:px-4 py-1 2xl:py-2 rounded-full font-medium">
                                                    {slide.title}
                                                </span>
                                            </div>

                                            <h2 className="mb-2 2xl:text-3xl font-bold text-[#1D216A] leading-tight">
                                                {slide.subtitle}
                                            </h2>

                                            <p className="text-[#1D216A] mb-8 2xl:text-base text-sm">
                                                {slide.description}
                                            </p>

                                            {/* Mobile Features Grid or Empty State */}
                                            <div className="mb-4">
                                                {slide.features && slide.features.length > 0 ? (
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="grid gap-4">
                                                            <FeatureItem feature={slide.features[0]} size="mobile" />
                                                            <FeatureItem feature={slide.features[1]} size="mobile" />
                                                        </div>
                                                        <div className="grid gap-4">
                                                            <FeatureItem feature={slide.features[2]} size="mobile" />
                                                            <FeatureItem feature={slide.features[3]} size="mobile" />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <EmptyFeaturesState size="mobile" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;