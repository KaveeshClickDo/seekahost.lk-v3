import Image from "next/image"
import { useTranslations } from 'next-intl';
export default function OurVision() {
    const t = useTranslations('AboutPage.OurVision');
    return (
        <section className="relative w-full py-16 bg-[#0A488A]">
                {/* <Image
                  src="/images/shared/middle-banner.png"
                  alt="Background Image"
                  fill
                  className="object-cover z-0"
                /> */}


            <div className="relative z-1 max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center md:my-10">

                <div className="md:w-1/2 mb-8 md:mb-0 md:px-5 text-white">
                    <h1 className="inline-block bg-[#CCE5FF] text-blue-700 text-sm md:text-lg font-medium px-3 py-1 rounded-full mb-4">{t('title')}</h1>
                    <h2 className="mb-6 font-medium">
                        {t('description')}
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            {t('point1')}
                        </li>
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            {t('point2')}
                        </li>
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                           {t('point3')}
                        </li>
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            {t('point4')}
                        </li>
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            {t('point5')}
                        </li>
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            {t('point6')}
                        </li>
                    </ul>
                </div>


                <div className="md:w-1/2 relative flex justify-center items-center">
                    <Image
                        src="/images/about/our-vision.webp"
                        alt={t('imageAlt')}
                        width={2582}
                        height={2054}
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    )
}