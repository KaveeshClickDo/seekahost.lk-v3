import Image from 'next/image';
import Link from 'next/link';
import { domainPrices } from '@/data/homeHeroExtnPrices';
import TestimonialSlider from './Testimonials';
import { IoSearch } from 'react-icons/io5';

export default function Hero() {
    return (
        <section className="relative lg:h-[800px] w-full flex items-center overflow-hidden pb-20 lg:pb-40">



            {/* <div className="absolute inset-0 w-full h-[47%] min-[352px]:h-[46%] min-[389px]:h-[42%] min-[500px]:h-[39%] md:h-[38%] lg:h-[65%] bg-gradient-to-r from-[#09407A] to-[#136CC9] z-2"></div>
            <div className="absolute inset-0 w-full h-full bg-[#0A437F] z-1"></div> */}
            {/* <Image
                src="/images/home/home-hero-bg.svg"
                alt="Background Image"
                fill
                className="object-cover z-0 hidden lg:block"
                priority
            /> */}
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
                        World&rsquo;s Best Multiple IP PBN<br /> Hosting Manager
                    </h1>

                    <p className="mt-2">
                        All-in-One Click WordPress Blog hosting control panel to securely host private blog networks on unique multiple IP addresses.
                    </p>

                    <div className="mt-6 flex items-center bg-white rounded-full pl-4 shadow-md w-full">
                        <input
                            id="searchDomain"
                            type="text"
                            placeholder="Search for a domain..."
                            className="flex-grow outline-none text-black md:px-2"
                        />
                        <button className="bg-[#0081FF] text-white px-5 md:px-7 py-4 rounded-full hover:bg-blue-600 transition leading-4 font-bold flex items-center gap-2">
                            <IoSearch className="w-5 h-5" />
                            Search
                        </button>
                    </div>

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
                        src="/images/home/hero.webp"
                        alt="Hero Image"
                        width={1659}
                        height={1464}
                        className="w-full h-auto rounded-lg rounded-tl-[100px]"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}