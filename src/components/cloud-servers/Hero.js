import Image from 'next/image';
import TestimonialSlider from '../home/Testimonials';
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


                <div className="text-white w-full max-w-2xl z-2">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        🚀 Next-Gen Cloud Hosting with SeekaHost
                    </h1>

                    <p className="mt-4 text-md md:text-lg font-bold">
                        Power. Speed. Reliability. Scalability.
                    </p>

                    <p className="text-sm md:text-base text-gray-300 max-w-xl">
                        Take your website or application to the next level with SeekaHost&apos;s cutting-edge cloud hosting solutions. Enjoy blazing-fast performance, real-time scalability, and ironclad security — all backed by 24/7 expert support.
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

                    <p className="mt-4 text-sm md:text-base font-bold">
                        → Launch your site with confidence. Experience cloud hosting, reimagined.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        {/* <button className="bg-[#0081FF] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-4xl transition-colors duration-200">
                                                    Get Started Now
                                                </button> */}
                        <SeePlansButton
                            text="Compare Plans"
                            baseClasses={true}
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-4xl transition-colors duration-200"
                        />
                    </div>

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/cloud-servers/cloud-servers-hero-image.webp"
                        alt="Hero Image"
                        width={1464}
                        height={1242}
                        className="w-full"
                        priority
                    />
                </div>


            </div>
        </section>
    );
}
