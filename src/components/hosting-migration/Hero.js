import Image from 'next/image';
import SeePlansButton from '../shared/SeePlansButtons';

export default function Hero() {
    const features = [
        {
            icon: '🚀',
            title: 'Seamless Migration Process',
            description: 'We handle the entire migration process for you—zero downtime, zero hassle.'
        },
        {
            icon: '⚡',
            title: 'Lightning-Fast Performance',
            description: 'Experience ultrafast loading speeds with our optimized hosting infrastructure.'
        },
        {
            icon: '🛡️',
            title: 'Enterprise-Grade Security',
            description: 'Multi-level security protection keeps your website safe 24/7.'
        },
        {
            icon: '🎯',
            title: 'Expert Support Team',
            description: 'Our top-rated support team is available around the clock to assist you.'
        }
    ];

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
                        Hosting Migration
                    </h1>

                    <ul className="space-y-5 mt-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm md:text-base text-gray-300 mt-4">
                                <div className="flex-shrink-0 mr-3">
                                    <span className="text-lg">{feature.icon}</span>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-white mb-1">{feature.title}</h2>
                                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <SeePlansButton
                        text="See Plans"
                        baseClasses={true}
                        className="bg-white text-[#0066CC] font-bold border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-7"
                    />
                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/hosting-migration/hosting-migration-hero-image.webp"
                        alt="Hero Image"
                        width={1280}
                        height={1071}
                        className="w-full"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}