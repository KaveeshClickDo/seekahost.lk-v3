import Image from 'next/image';
import Link from 'next/link';
import { domainPrices } from '@/data/homeHeroExtnPrices';
import DomainSearchHomeHero from '../home/DomainSearchHomeHero';
import TestimonialSlider from '../home/Testimonials';

export default function Hero() {
    return (
        <section className="relative lg:h-[700px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[#0A488A] z-1"></div>

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10 lg:mt:0 xl:px-20">
                <div className="text-white w-full max-w-lg z-2 md:mb-10">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Free Business Listing on UK Business Directories
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

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/free-business-listing/free-business-listing-hero-image.webp"
                        alt="Hero Image"
                        width={1088}
                        height={898}
                        className="w-full"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}