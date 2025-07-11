import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Solution() {
  const t = useTranslations('HomePage.Solutions');
  return (
    <section className="py-12 md:mt-10 md:mb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-0">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Node.js Servers Features
          </h2>
          <p className="text-gray-700 mb-8 mx-auto max-w-4xl">SeekaHost offers the best and easy to use WordPress hosting control panel. The custom-built web hosting control panel for WordPress gives you a 1-click WordPress hosting solution with free</p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/shared/high-speed-performance.svg"
                  alt={t('features.highSpeedPerformance.iconAlt')}
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">{t('features.highSpeedPerformance.title')}</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                {t('features.highSpeedPerformance.description')}
              </p>
            </div>
          </div>


          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/shared/24-7-expert-support.svg"
                  alt={t('features.expertSupport.iconAlt')}
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">{t('features.expertSupport.title')}</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                {t('features.expertSupport.description')}
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/shared/unlimited-ssd-storage.svg"
                  alt={t('features.unlimitedSsdStorage.iconAlt')}
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">{t('features.unlimitedSsdStorage.title')}</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                {t('features.unlimitedSsdStorage.description')}
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/shared/uk-based-servers.svg"
                  alt={t('features.ukBasedServers.iconAlt')}
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">{t('features.ukBasedServers.title')}</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                {t('features.ukBasedServers.description')}
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/shared/simple-n-scalable-interface.svg"
                  alt={t('features.simpleScalableInterface.iconAlt')}
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">{t('features.simpleScalableInterface.title')}</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                {t('features.simpleScalableInterface.description')}
              </p>
            </div>
          </div>

          <div className="bg-[#F4F7FA] rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#0A488B]/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 max-w-lg md:max-w-xl w-full group cursor-pointer overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50/0 before:via-blue-50/30 before:to-purple-50/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
            <div className="flex flex-col items-start p-8 text-left relative z-10">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/images/shared/built-in-ddos-protection.svg"
                  alt={t('features.ddosProtection.iconAlt')}
                  width={75}
                  height={75}
                  className="w-[70px] h-[70px] md:w-[75px] md:h-[75px] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#324561] group-hover:text-[#0A488B] transition-colors duration-300">{t('features.ddosProtection.title')}</h3>
              <p className="text-[#2E4360] group-hover:text-[#1E3A5F] transition-colors duration-300">
                {t('features.ddosProtection.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}