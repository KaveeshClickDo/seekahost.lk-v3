import Image from 'next/image';
import Link from 'next/link';
import { domainPrices } from '@/data/homeHeroExtnPrices';
import DomainSearchHomeHero from '../home/DomainSearchHomeHero';
import TestimonialSlider from '../home/Testimonials';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('SEOPage.Hero');
    return (
        <section className="relative lg:h-[700px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[#0A488A] z-1"></div>

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10 lg:mt:0 xl:px-20">
                <div className="text-white w-full max-w-lg z-2 md:mb-10">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        {t('titleLine')}
                    </h1>

                    <p className="mt-2">
                        {t('description')}
                    </p>

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto my-8 lg:my-0">
                    <Image
                        src="/images/seo-consultancy/seo-consultancy-hero-image.webp"
                        alt={t('seoImageAlt')}
                        width={1088}
                        height={898}
                        className="w-full"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}