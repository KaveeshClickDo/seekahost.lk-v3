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
                        n8n VPS Hosting
                    </h1>

                    <p className="mt-4 text-md md:text-lg font-bold">
                        Automate Smarter. Scale Faster. Deploy Effortlessly.
                    </p>

                    <p className="text-sm md:text-base text-gray-300 max-w-xl">
                        Power your workflow automation with dedicated n8n VPS hosting. Pre-configured, optimized, and ready to handle your most complex integrations. Get full control with root access, automatic backups, and lightning-fast performance on UK-based servers.
                    </p>

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
                            text="Start Automate"
                            baseClasses={true}
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-4xl transition-colors duration-200"
                        />
                    </div>

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/n8n-vps-hosting/n8n-vps-hosting-hero-image.webp"
                        alt="Hero Image"
                        width={1116}
                        height={1214}
                        className="w-full xl:pb-20"
                        priority
                    />
                </div>


            </div>
        </section>
    );
}