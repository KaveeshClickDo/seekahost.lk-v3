import Image from 'next/image';
import SeePlansButton from '../wordpress-hosting/SeePlansButton';
import TestimonialSlider from '../home/Testimonials';

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
                        Blazing-Fast Dedicated Server Hosting
                    </h1>

                    <p className="mt-4 text-md md:text-lg font-bold">
                        Full Control. Maximum Power. No Limits.
                    </p>

                    <p className="text-sm md:text-base text-gray-300 max-w-xl">
                        Get unparalleled performance with our high-speed dedicated servers — perfect for resource-heavy applications, large-scale websites, or enterprise-level projects. Enjoy full root access, customizable configurations, and rock-solid security.
                    </p>

                    {/* <div className="mt-6">
                        <div className="bg-yellow-500 text-blue-950 text-xs font-semibold inline-block px-2 py-1 rounded">
                            Save 90%
                        </div>
                        <div className="line-through text-gray-300 text-sm mt-1">£2,800/month</div>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-baseline">
                            <span className="text-xl md:text-5xl font-bold">£280</span>
                            <span className="text-sm md:text-xl ml-1">/month</span>
                        </div>
                        <div className="text-sm">with a 1-year term</div>
                    </div>
                    <SeePlansButton /> */}
                    <div className="mt-8">
                        <TestimonialSlider />
                    </div>

                    <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
                        <li className="flex items-center text-sm md:text-base text-white">
                            ✅ 99.99% Uptime
                        </li>

                        <li className="flex items-center text-sm md:text-base text-white">
                            ✅ Enterprise-Grade Hardware
                        </li>

                        <li className="flex items-center text-sm md:text-base text-white">
                            ✅ 24/7 Expert Support
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button className="bg-[#0081FF] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-4xl transition-colors duration-200">
                            Get Started Now
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-4xl transition-colors duration-200">
                            Compare Plans
                        </button>
                    </div>

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/dedicated-servers/dedicated-servers-hero-image.webp"
                        alt="Hero Image"
                        width={1292}
                        height={1342}
                        className="w-full"
                        priority
                    />
                </div>


            </div>
        </section>
    );
}
