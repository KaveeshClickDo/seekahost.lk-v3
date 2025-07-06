import { useTranslations } from 'next-intl';

export default function Commitment() {
    const t = useTranslations('AboutPage.Commitment');
    return (
        <section className="bg-[#0A488A] py-16 px-4 my-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-12">
                    {t('title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 md:px-4">

                    <div className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden">

                        <div className="absolute top-0 left-0 w-4 h-full bg-[#1276DF]"></div>
                        <div className="ml-2">
                            <h3 className="text-lg md:text-2xl font-bold mb-3">
                                {t('topic1')}
                            </h3>
                            <p className="text-gray-700">
                                {t('description1')}
                            </p>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden">

                        <div className="absolute top-0 left-0 w-4 h-full bg-[#1276DF]"></div>
                        <div className="ml-2">
                            <h3 className="text-lg md:text-2xl font-bold mb-3">
                                {t('topic2')}
                            </h3>
                            <p className="text-gray-700">
                                {t('description2')}
                            </p>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden">

                        <div className="absolute top-0 left-0 w-4 h-full bg-[#1276DF]"></div>
                        <div className="ml-2">
                            <h3 className="text-lg md:text-2xl font-bold mb-3">
                                {t('topic3')}
                            </h3>
                            <p className="text-gray-700">
                                {t('description3')}
                            </p>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden">

                        <div className="absolute top-0 left-0 w-4 h-full bg-[#1276DF]"></div>
                        <div className="ml-2">
                            <h3 className="text-lg md:text-2xl font-bold mb-3">
                                {t('topic4')}
                            </h3>
                            <p className="text-gray-700">
                                {t('description4')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}