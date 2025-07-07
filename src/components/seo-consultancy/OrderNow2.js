import Image from "next/image"
import { useTranslations } from 'next-intl';

export default function OrderNow2() {
    const t = useTranslations('SEOPage.OrderNow2');
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                        {t('titleLine')}
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        {t('paragraph1')}
                    </p>
                    <p className="text-[#1D216A] mb-4">
                       {t('paragraph2')}
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        {t('paragraph3')}
                    </p>
                    <p className="text-[#1D216A] mb-4">
                       {t('paragraph4')}
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        {t('paragraph5')}
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/seo-consultancy/order-now-1.webp"
                            alt={t('imageAlt')}
                            width={1450}
                            height={1156}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>


            </section>
        </>
    )
}