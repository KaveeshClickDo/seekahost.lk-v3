import Image from 'next/image';
import SeePlansButton from '../shared/SeePlansButtons';

export default function Hero() {
    return (
        <section className="relative lg:h-[700px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[#0A488A] z-1"></div>
            {/* <Image
                src="/images/home/home-hero-bg.svg"
                alt="Background Image"
                fill
                className="object-cover z-0 hidden lg:block"
                priority
            /> */}

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10 xl:mt-0 xl:px-20">
                <div className="text-white w-full max-w-xl z-2">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Business Web Hosting
                    </h1>

                    <p className="mt-6 font-medium">
                        High performance, secure, super-fast business website hosting services in UK for UK business owners with 24/7 support. Ideal for startups and enterprises that need a reliable UK host.
                    </p>

                    <ul className="space-y-5 mt-4">
                        <li className="flex items-start text-sm md:text-base text-gray-300 mt-4">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            99.9% uptime guarantee with enterprise-grade servers.
                        </li>

                        <li className="flex items-start text-sm md:text-base font-medium text-gray-300 mt-4">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Free SSL, backups & advanced DDoS protection.
                        </li>

                        <li className="flex items-start text-sm md:text-base font-medium text-gray-300 mt-4">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            24/7 expert UK support ready to help anytime.
                        </li>
                    </ul>
                    <SeePlansButton
                        text="Get Started"
                        baseClasses={true}
                        className="inline-block bg-white text-[#0066CC] font-bold border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-7"
                    />
                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/business-web-hosting/business-web-hosting-hero-image.webp"
                        alt="Hero Image"
                        width={1338}
                        height={1142}
                        className="w-full"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
