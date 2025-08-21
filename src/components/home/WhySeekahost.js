import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function WhySeekahost() {
  const t = useTranslations('HomePage.WhySeekahost');
  const items = t.raw('items');
  return (
    <section className="py-16 bg-white md:my-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-18 justify-center">
        <div className="w-full md:w-1/2">
          <div className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">
            {t('badge')}
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {t('title')}
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            {t('description')}
          </p>

          <ul className="space-y-4 mb-10">
            {items.map((item) => (
              <li key={item.id} className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <div>
                  <span className="font-semibold text-gray-900">{item.title}</span>
                  <span className="text-gray-600">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <button className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold">
              {t('buttons.getStarted')}
            </button>
            <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors">
              {t('buttons.learnMore')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/home/why-seekahost.webp"
              alt={t('image.alt')}
              width={1176}
              height={1150}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}