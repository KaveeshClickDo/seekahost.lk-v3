import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('CheapHostingPage.Hero');
    
    const features = [
        {
            icon: '💰',
            title: 'Why Pay for What You Don\'t Use?',
            description: 'Most hosts charge extra for "unlimited" features you might never use. At SeekaHost, we keep it simple and cost-effective.'
        },
        {
            icon: '📈',
            title: 'No Price Hikes',
            description: 'Enjoy honest, consistent renewal rates—no surprise 300% increases.'
        },
        {
            icon: '🆓',
            title: 'Free Website Migration',
            description: 'We\'ll move your sites from another cPanel® host at no cost.'
        },
        {
            icon: '🔒',
            title: 'Free SSL Certificates',
            description: 'Get free SSL for every domain—no hidden fees, big savings.'
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

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10 lg:mt:0 xl:px-20">

                <div className="text-white w-full max-w-xl z-2">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        {t('titleLine')}
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

                    <button className="bg-white text-[#0066CC] font-bold border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-7">
                        {t('buttonName')}
                    </button>

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/cheap-web-hosting-with-cpanel/cheap-web-hosting-with-cPanel-hero-image.webp"
                        alt={t('cheapHostingImageAlt')}
                        width={1287}
                        height={1141}
                        className="w-full"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}