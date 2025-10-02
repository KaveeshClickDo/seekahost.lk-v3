import Image from 'next/image';
import DomainSearchHomeHero from '../home/DomainSearchHomeHero';

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


                <div className="text-white w-full max-w-lg z-2 md:mb-10">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Move Your Domain to a Better Home — Fast, Simple, and Secure
                    </h1>

                    <p className="mt-6">
                        Transferring your domain shouldn’t be complicated. We make it easy with a seamless process, zero downtime, and no hidden fees. Enjoy full control, transparent pricing, and world-class support when you move your domain to us.
                    </p>

                    <div className="max-w-lg mx-auto my-10">
                        <DomainSearchHomeHero />
                    </div>

                    <div className="mt-4 grid grid-cols-2 xl:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.com</span>
                            <span className="text-white">£5.99</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.co.uk</span>
                            <span className="text-white">£5.99</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.net</span>
                            <span className="text-white">£5.99</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.org</span>
                            <span className="text-white">£5.99</span>
                        </div>
                    </div>

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/domain-transfer/domain-transfer-hero-image.webp"
                        alt="Hero Image"
                        width={1128}
                        height={1000}
                        className="w-full xl:pb-20"
                        priority
                    />
                </div>


            </div>
        </section>
    );
}
