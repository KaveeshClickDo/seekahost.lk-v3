import Image from "next/image"
import { useTranslations } from 'next-intl';
export default function WhatWeOffer() {
    const t = useTranslations('AboutPage.WhatWeOffer');
    return (
        <section className="relative w-full py-16 bg-[#0A488A]">
            {/* <Image
                src="/images/shared/middle-banner.png"
                alt="Background Image"
                fill
                className="object-cover z-0"
                priority
            /> */}


            <div className="relative z-1 max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center md:my-10">

                <div className="md:w-1/2 mb-8 md:mb-0 md:px-5 text-white">
                    <h2 className="text-2xl  md:text-4xl font-bold text-white mb-6">
                        {t('title')}
                    </h2>
                    <p className="mb-4">
                        {t('paragraph1')}
                    </p>
                    <p className="mb-4">
                        {t('paragraph2')}
                    </p>
                    <p className="mb-4">
                        {t('paragraph3')}
                    </p>
                    <p>
                        {t('paragraph4')}
                    </p>
                </div>


                <div className="md:w-1/2 relative flex justify-center items-center">
                    <Image
                        src="/images/about/what-we-offer.webp"
                        alt={t('ImageAlt')}
                        width={2572}
                        height={2046}
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    )
}