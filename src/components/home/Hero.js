import Image from 'next/image';
import Link from 'next/link';
import { domainPrices } from '@/data/homeHeroExtnPrices';
import TestimonialSlider from './Testimonials';
import DomainSearchHomeHero from './DomainSearchHomeHero';

export default function Hero() {
    return (
        <section className="relative lg:h-[800px] w-full flex items-center overflow-hidden pb-20 lg:pb-40">
            <svg
                className="absolute inset-0 w-full h-full lg:hidden"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,0 L100,0 L100,95 L70,100 L0,95 Z"
                    fill="#0A488A"
                />
            </svg>
            <svg
                className="absolute inset-0 w-full h-full hidden lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,0 L100,0 L100,85 L80,100 L0,85 Z"
                    fill="#0A488A"
                />
            </svg>

            <div className="absolute left-0 bottom-40 opacity-15 hidden md:block">
                <Image
                    src="/images/home/Home-hero-bottem.svg"
                    alt="Decorative design"
                    width={200}
                    height={200}
                    className="object-contain z-3"
                />
            </div>

            <div className="absolute right-0 top-10 opacity-15 hidden md:block">
                <Image
                    src="/images/home/Home-hero-top.svg"
                    alt="Decorative design"
                    width={200}
                    height={200}
                    className="object-contain z-3"
                />
            </div>

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10 xl:px-20">
                <div className="text-white w-full max-w-lg z-3">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Create Your Own WordPress<br /> Website & Get Online!
                    </h1>

                    <p className="mt-2">
                        All-in-One Click WordPress Blog hosting control panel to securely host private blog networks on unique multiple IP addresses.
                    </p>
                    
                    <DomainSearchHomeHero />

                    <div className="mt-4 grid grid-cols-2 xl:grid-cols-4 gap-4">
                        {domainPrices.map(({ extension, price }) => (
                            <div key={extension} className="flex items-center space-x-2">
                                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                                    {extension}
                                </span>
                                <span className="text-white">{price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <TestimonialSlider />
                    </div>

                    <div className="mt-8 w-full max-w-5xl mx-auto grid grid-cols-3 gap-6 text-center z-2  divide-x divide-[#1276DF]">
                        <div className="rounded-md flex flex-col items-center">
                            <Image
                                src="/images/home/server-security.svg"
                                alt="Server Security Icon"
                                width={27}
                                height={27}
                                className="mb-4"
                                priority
                            />
                            <h2 className="text-lg font-bold text-white">WordPress Hosting</h2>
                            <p className="text-white mt-1 text-sm xl:text-base">Starting at £1/month</p>
                            <Link href="/wordpress-hosting" className="mt-1 text-white font-semibold underline hover:text-gray-100">
                                More Info
                            </Link>
                        </div>

                        <div className="rounded-md flex flex-col items-center">
                            <Image
                                src="/images/home/server-security.svg"
                                alt="Server Security Icon"
                                width={27}
                                height={27}
                                className="mb-4"
                                priority
                            />
                            <h2 className="text-lg font-bold text-white">WooCommerce Hosting</h2>
                            <p className="text-white mt-1 text-sm xl:text-base">Starting at £1/month</p>
                            <Link href="/woocommerce-hosting" className="mt-1 text-white font-semibold underline hover:text-gray-100">
                                More Info
                            </Link>
                        </div>

                        <div className="rounded-md flex flex-col items-center">
                            <Image
                                src="/images/home/server-security.svg"
                                alt="Server Security Icon"
                                width={27}
                                height={27}
                                className="mb-4"
                                priority
                            />
                            <h2 className="text-lg font-bold text-white">Agency Hosting</h2>
                            <p className="text-white mt-1 text-sm xl:text-base">Starting at £1/month</p>
                            <Link href="/agency-hosting" className="mt-1 text-white font-semibold underline hover:text-gray-100">
                                More Info
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative w-full max-w-xl 2xl:max-w-3xl z-3 ml-auto mt-8 lg:mt-0">
                    <Image
                        src="/images/home/home-hero-image.webp"
                        alt="Hero Image"
                        width={1642}
                        height={1224}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}