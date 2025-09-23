import Image from 'next/image';
import TestimonialSlider from '../home/Testimonials';
import SeePlansButton from '../shared/SeePlansButtons';

export default function Hero() {

    return (
        <section className="relative lg:h-[700px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[#0A488A] z-1"></div>

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10 lg:mt:0 xl:px-20">


                <div className="text-white w-full max-w-2xl z-2">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        ⚙️ High-Performance VPS Hosting by SeekaHost
                    </h1>

                    <p className="mt-4 text-md md:text-lg font-bold">
                        Full Control. Lightning Speed. Unmatched Flexibility.
                    </p>

                    <p className="text-sm md:text-base text-gray-300 max-w-xl">
                        Empower your websites, apps, or game servers with our powerful VPS solutions. Get dedicated resources, root access, and ultra-fast SSD storage — all at unbeatable value and backed by world-class support.
                    </p>

                    <div className="mt-8">
                        <TestimonialSlider />
                    </div>

                    <p className="mt-4 text-sm md:text-base font-bold">
                        → Take control with scalable, secure, and reliable VPS hosting.
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
                        src="/images/vps-hosting/vps-hosting-hero-image.webp"
                        alt="Hero Image"
                        width={1480}
                        height={1232}
                        className="w-full"
                        priority
                    />
                </div>


            </div>
        </section>
    );
}
