import Image from "next/image"
import { useTranslations } from 'next-intl';

export default function OrderNow3() {
    const t = useTranslations('CheapHostingPage.OrderNow3');
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                    {t('titleLine')}
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                    {t('description')}
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        {t('buttonName')}
                    </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/cheap-web-hosting-with-cpanel/order-now-3.webp"
                            alt={t('imageAlt')}
                            width={2900}
                            height={2312}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>


            </section>
        </>
    )
}