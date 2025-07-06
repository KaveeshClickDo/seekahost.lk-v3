import { useTranslations } from 'next-intl';

export default function Timeline () {
    const t = useTranslations('AboutPage.Timeline');
    const timelineData = t.raw('timelineData');
    return (
        <div className="py-16 bg-[#F5FAFF]">
            <div className="container mx-auto px-4  md:px-30 md:my-10">
                <h2 className="text-2xl  md:text-4xl font-bold text-center mb-12 relative">
                    <span className="font-bold">{t('title')}</span>
                </h2>

                <div className="relative">

                    <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 left-6 h-full w-1 bg-gray-200"></div>

                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`mb-8 flex items-center relative ${index % 2 === 0
                                    ? 'sm:justify-start justify-end'
                                    : 'sm:justify-end justify-end'
                                }`}
                        >

                            <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 left-6 w-6 h-6 rounded-full bg-[#0A488A] border-4 border-gray-200 z-10"></div>


                            <div
                                className={`w-5/6 sm:w-5/12 ${index % 2 === 0
                                        ? 'sm:pr-1 pl-8'
                                        : 'sm:pl-1 pl-8'
                                    }`}
                            >
                                <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">

                                    <div className={`absolute top-0 -left-2 w-5 h-full bg-[#0A488A] rounded-l-2xl`}></div>

                                    <h3 className="text-2xl  md:text-3xl font-bold text-blue-900 mb-2">{item.year}</h3>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}