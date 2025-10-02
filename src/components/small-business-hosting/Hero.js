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
                        Powerful Hosting Built for Small Businesses
                    </h1>

                    <p className="mt-6 font-medium">
                        Launch, grow, and manage your business website with confidence. Our hosting plans are tailored for small businesses that need speed, security, and reliability—without the hefty price tag. Get everything you need to succeed online, from free SSL to expert support.
                    </p>

                    <SeePlansButton
                        text="Start Hosting"
                        baseClasses={true}
                        className="inline-block bg-white text-[#0066CC] font-bold border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-7"
                    />

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/small-business-hosting/small-business-hosting-hero-image.webp"
                        alt="Hero Image"
                        width={1292}
                        height={1168}
                        className="w-full xl:pb-20"
                        priority
                    />
                </div>


            </div>
        </section>
    );
}
