import Image from 'next/image';
import SeePlansButton from './SeePlansButton';

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

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10 lg:mt:0 xl:px-20">


                <div className="text-white w-full max-w-2xl z-2">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Reliable, lightning-fast WordPress hosting
                    </h1>

                    <p className="mt-4 text-md md:text-base font-sm">
                        with UK-based servers, expert support, and all the features you need—whether you're launching your first blog or running a high-traffic business site. Built for speed, security, and simplicity.
                    </p>

                    <ul className="mt-6">
                        <li className="flex items-start text-sm md:text-base text-gray-300">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            UK-Based NVMe Servers
                        </li>

                        <li className="flex items-start text-sm md:text-base text-gray-300">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Free SSL & Daily Backups
                        </li>
                        <li className="flex items-start text-sm md:text-base text-gray-300">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            One-Click WordPress Setup
                        </li>
                        <li className="flex items-start text-sm md:text-base text-gray-300">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            24/7 WordPress Expert Support
                        </li>
                    </ul>

                    <div className="mt-6">
                        <div className="bg-yellow-500 text-blue-950 text-xs font-semibold inline-block px-2 py-1 rounded">
                            Save 90%
                        </div>
                        <div className="line-through text-gray-300 text-sm mt-1">£2.8/month</div>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-baseline">
                            <span className="text-xl md:text-5xl font-bold">£1.99</span>
                            <span className="text-sm md:text-xl ml-1">/month</span>
                        </div>
                        <div className="text-sm">with a 1-year term</div>
                    </div>
                    <SeePlansButton />

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/wordpress-hosting/wordpress-hosting-hero-image.webp"
                        alt="Hero Image"
                        width={1518}
                        height={900}
                        className="w-full"
                        priority
                    />
                </div>


            </div>
        </section>
    );
}
