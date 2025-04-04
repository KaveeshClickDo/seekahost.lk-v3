import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative lg:h-[700px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 lg:w-[72%] h-full bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px] z-1"></div>
            <Image
                src="/images/home/home-hero-bg.svg"
                alt="Background Image"
                fill
                className="object-cover z-0 hidden lg:block"
                priority
            />

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10 lg:mt:0">


                <div className="text-white w-full max-w-2xl z-2">
                    <h1 className="text-xl md:text-4xl font-bold leading-tight">
                        WordPress Hosting
                    </h1>

                    <p className="mt-4 text-lg md:text-xl font-medium">
                        High performance, secure, super fast WP hosting services for bloggers and business owners with world class web support.
                    </p>

                    <ul className="space-y-2 mt-4">
                        <li className="flex items-start text-sm md:text-lg font-medium text-gray-300 mt-4">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                        </li>

                        <li className="flex items-start text-sm md:text-lg font-medium text-gray-300 mt-4">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                        </li>
                        <li className="flex items-start text-sm md:text-lg font-medium text-gray-300 mt-4">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                        </li>
                        <li className="flex items-start text-sm md:text-lg font-medium text-gray-300 mt-4">
                            <span className="mr-3 w-5 flex-shrink-0">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10l3 3 7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                        </li>
                    </ul>

                    <button className="bg-white text-[#0066CC] md:text-lg font-medium border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-6">
                        Get Started
                    </button>

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto mt-8 lg:mt-0">
                    <Image
                        src="/images/wordpress-hosting/wordpress-hosting-hero.webp"
                        alt="Hero Image"
                        width={672}
                        height={551}
                        className="w-full rounded-lg shadow-lg rounded-tl-[100px]"
                        priority
                    />
                </div>


            </div>
        </section>
    );
}
