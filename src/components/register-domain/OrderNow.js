import Image from "next/image"
import { useTranslations } from 'next-intl';

export default function OrderNow() {
    const t = useTranslations('RegisterDomainPage.OrderNow');
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/register-domain/order-now.webp"
                            alt={t('imageAlt')}
                            width={2900}
                            height={2312}
                            className="rounded-3xl w-full h-auto"
                            priority
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                        {t('title')}
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        {t('paragraph1')}
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        {t('paragraph2')}
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        {t('buttonName')}
                    </button>
                    
                </div>
            </section>
        </>
    )
}