import Image from "next/image"
import Link from "next/link"
import { MdArrowForward } from "react-icons/md";
import { useTranslations } from 'next-intl';
import SeePlansButton from "./SeePlansButtons";

export default function GetStarted() {
    const t = useTranslations('HomePage.GetStarted');

    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:mb-10">

                <div className="md:w-1/2 px-5 md:mr-15">
                    <h1 className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">
                        {t('badge')}
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-8">
                        {t('title')}
                    </h2>
                    {t.raw('paragraphs').map((paragraph, index) => (
                        <p key={index} className="text-[#1D216A] mb-4">
                            {paragraph}
                        </p>
                    ))}
                    <div className="flex items-center space-x-4">
                        <SeePlansButton
                            text={t('buttons.getStarted')}
                            baseClasses={true}
                            className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold"
                        />
                        {/* <Link
                            href="#"
                            className="flex items-center justify-center text-black text-base font-bold hover:text-[#2072CC] transition-colors gap-1 sm:gap-2 py-2"
                        >
                            {t('buttons.learnMore')} <MdArrowForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </Link> */}
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/home/build-nodejs-in-minutes.webp"
                            alt={t('image.alt')}
                            width={972}
                            height={1180}
                            className="mx-auto w-3/4"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}