import Image from 'next/image';

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

                <div className="text-white w-full max-w-xl z-2">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Blazing-Fast Node.js Hosting for Modern Web Apps
                    </h1>

                    <p className="mt-6 font-medium">
                        Run, Scale & Deploy Node.js Apps with Ease
                    </p>

                    <p className="mt-4 text-sm text-gray-300">
                        Build dynamic, high-performance apps with our optimized Node.js hosting. Enjoy full control, lightning-fast servers, and seamless deployment—backed by expert support.
                    </p>

                    <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
                        <li className="flex items-center text-sm md:text-base text-white">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            SSH Access
                        </li>

                        <li className="flex items-center text-sm md:text-base text-white">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            npm Support
                        </li>

                        <li className="flex items-center text-sm md:text-base text-white">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Free SSL
                        </li>

                        <li className="flex items-center text-sm md:text-base text-white">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Git Integration
                        </li>
                    </ul>

                    <button className="bg-white text-[#0066CC] font-bold border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-7">
                        Get Started
                    </button>

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/nodejs-hosting/nodejs-hosting-hero-image.webp"
                        alt="Hero Image"
                        width={1356}
                        height={1078}
                        className="w-full"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}