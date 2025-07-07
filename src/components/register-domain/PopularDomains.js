import Image from 'next/image';
import { useTranslations } from 'next-intl';

const PopularDomains = () => {
  const t = useTranslations('RegisterDomainPage.PopularDomain');
  const domains = t.raw('PopularDomains');

  return (
    <div className="max-w-6xl mx-auto p-6 mb-15">
      <h1 className="text-4xl font-bold text-center my-8">
        {t('title')}
      </h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="bg-[#2072CC] rounded-t-4xl rounded-b-lg p-3 text-white text-center shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <div className="w-full h-15 bg-white rounded-full flex items-center justify-center px-4">
                <Image
                  src={domain.logo}
                  alt={`${domain.extension} logo`}
                  width={90}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>            
            <p className="text-sm text-blue-100 mb-4 leading-relaxed">
              {domain.description}
            </p>
            
            <div className="text-4xl font-bold mb-8">
              {domain.price}
            </div>
            
            <button className="w-full bg-[#2072CC] border rounded-xl hover:bg-blue-500 text-white font-medium py-2 px-4 rounded transition-colors">
              {t('buttonName')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDomains;