import React, { useState, useEffect } from 'react';
import { IoSearch, IoClose } from 'react-icons/io5';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Initialize client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Map countries to locale codes - only 'en' and 'es' are active
  const countries = [
    // Active locales
    { name: 'United Kingdom', language: 'English', flag: '/images/flags/United-kingdom.svg', locale: 'en', active: true },
    { name: 'United States', language: 'English', flag: '/images/flags/United-states.svg', locale: 'en', active: true },
    { name: 'India', language: 'English', flag: '/images/flags/India.svg', locale: 'en', active: true },
    { name: 'Pakistan', language: 'English', flag: '/images/flags/Pakistan.svg', locale: 'en', active: true },
    { name: 'Philippines', language: 'English', flag: '/images/flags/Philippines.svg', locale: 'en', active: true },
    { name: 'Malaysia', language: 'English', flag: '/images/flags/Malaysia.svg', locale: 'en', active: true },
    { name: 'España', language: 'Español', flag: '/images/flags/Spain.svg', locale: 'es', active: true },
    { name: 'México', language: 'Español', flag: '/images/flags/Mexico.svg', locale: 'es', active: true },
    { name: 'Argentina', language: 'Español', flag: '/images/flags/Argentina.svg', locale: 'es', active: true },
    { name: 'Colombia', language: 'Español', flag: '/images/flags/Colombia.svg', locale: 'es', active: true },
    { name: '中国', language: '中文', flag: '/images/flags/China.svg', locale: 'hk', active: true },
    { name: 'भारत', language: 'हिंदी', flag: '/images/flags/India.svg', locale: 'hi', active: true },
    { name: 'Deutschland', language: 'Deutsch', flag: '/images/flags/Germany.svg', locale: 'de', active: true },
    { name: 'Japan', language: '日本語', flag: '/images/flags/Japan.svg', locale: 'jp', active: true },
    { name: 'Brasil', language: 'Português', flag: '/images/flags/Brazil.svg', locale: 'pt', active: true },
    { name: 'Portugal', language: 'Português', flag: '/images/flags/Portugal.svg', locale: 'pt', active: true },
    { name: 'Russia', language: 'Russian', flag: '/images/flags/Russia.svg', locale: 'ru', active: true },
    { name: 'France', language: 'Français', flag: '/images/flags/France.svg', locale: 'fr', active: true },
    { name: 'الدول العربية', language: 'العربية', flag: '/images/flags/Arabic-countries.svg', locale: 'ae', active: true },
    { name: 'Indonesia', language: 'Bahasa Indonesia', flag: '/images/flags/Indonesia.svg', locale: 'id', active: true },
    { name: '대한민국', language: '한국어', flag: '/images/flags/South-korea.svg', locale: 'kr', active: true },

    // Inactive locales (will use English as default)

    { name: 'Česko', language: 'Čeština', flag: '/images/flags/Czech-republic.svg', locale: 'en', active: false },
    { name: 'Danmark', language: 'Dansk', flag: '/images/flags/Denmark.svg', locale: 'en', active: false },
    { name: 'Eesti', language: 'Eesti', flag: '/images/flags/Estonia.svg', locale: 'en', active: false },
    { name: 'Ελλάδα', language: 'Ελληνικά', flag: '/images/flags/Greece.svg', locale: 'en', active: false },
    { name: 'Hrvatska', language: 'Hrvatski', flag: '/images/flags/Croatia.svg', locale: 'en', active: false },
    { name: 'Italia', language: 'Italiano', flag: '/images/flags/Italy.svg', locale: 'en', active: false },
    { name: 'Japan', language: '日本語', flag: '/images/flags/Japan.svg', locale: 'en', active: false },
    { name: 'Latvija', language: 'Latviešu', flag: '/images/flags/Latvia.svg', locale: 'en', active: false },
    { name: 'Lietuva', language: 'Lietuvių', flag: '/images/flags/Lithuania.svg', locale: 'en', active: false },
    { name: 'Magyarország', language: 'Magyar', flag: '/images/flags/Hungary.svg', locale: 'en', active: false },
    { name: 'Nederland', language: 'Nederlands', flag: '/images/flags/Netherlands.svg', locale: 'en', active: false },
    { name: 'Norge', language: 'Norsk', flag: '/images/flags/Norway.svg', locale: 'en', active: false },
    { name: 'Polska', language: 'Polski', flag: '/images/flags/Poland.svg', locale: 'en', active: false },
    { name: 'România', language: 'Română', flag: '/images/flags/Romania.svg', locale: 'en', active: false },
    { name: 'Sri Lanka', language: 'සිංහල', flag: '/images/flags/Sri-lanka.svg', locale: 'en', active: false },
    { name: 'Sri Lanka', language: 'தமிழ்', flag: '/images/flags/Sri-lanka.svg', locale: 'en', active: false },
    { name: 'Slovensko', language: 'Slovenčina', flag: '/images/flags/Slovakia.svg', locale: 'en', active: false },
    { name: 'Suomi', language: 'Suomi', flag: '/images/flags/Finland.svg', locale: 'en', active: false },
    { name: 'Sverige', language: 'Svenska', flag: '/images/flags/Sweden.svg', locale: 'en', active: false },
    { name: 'Türkiye', language: 'Türkçe', flag: '/images/flags/Turkey.svg', locale: 'en', active: false },
    { name: 'Україна', language: 'Українська', flag: '/images/flags/Ukraine.svg', locale: 'en', active: false },
    { name: 'Việt Nam', language: 'Tiếng Việt', flag: '/images/flags/Vietnam.svg', locale: 'en', active: false },
    { name: 'ישראל', language: 'עברית', flag: '/images/flags/Israel.svg', locale: 'en', active: false },
    { name: 'ประเทศไทย', language: 'ไทย', flag: '/images/flags/Thailand.svg', locale: 'en', active: false },


  ];

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCountry = (country) => {
    // Save selected country to localStorage
    localStorage.setItem('selectedCountry', country.name);

    // Change locale if different from current
    if (country.locale !== currentLocale) {
      router.push(pathname, { locale: country.locale });
    }

    setIsOpen(false);
    setSearchTerm('');

    console.log('Selected country:', country);
    console.log('Switching to locale:', country.locale);
  };

  // Get current selected country based on locale and localStorage
  const getCurrentSelectedCountry = () => {
    if (!isClient) return countries.find(c => c.locale === 'en' && c.name === 'United Kingdom');

    const savedCountry = localStorage.getItem('selectedCountry');
    if (savedCountry) {
      const savedCountryData = countries.find(c => c.name === savedCountry);
      if (savedCountryData && savedCountryData.locale === currentLocale) {
        return savedCountryData;
      }
    }

    // Default to first country with current locale
    return countries.find(c => c.locale === currentLocale) || countries.find(c => c.locale === 'en');
  };

  const selectedCountryData = getCurrentSelectedCountry();

  return (
    <div className="relative">
      {/* Language Selector Button - Fully Circular */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-white overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Image
          src={selectedCountryData?.flag || '/images/flags/flag.svg'}
          alt={`${selectedCountryData?.name} flag`}
          width={36}
          height={36}
          className="w-full h-full object-cover"
        />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Choose your country</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <IoClose className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-6 border-b">
              <div className="relative">
                <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for a country"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Countries Grid */}
            <div className="p-6 overflow-y-auto max-h-96">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {filteredCountries.map((country, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectCountry(country)}
                    className={`flex items-center gap-3 p-3 text-left rounded-md transition-colors group relative ${selectedCountryData?.name === country.name
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50'
                      }`}
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        src={country.flag}
                        alt={`${country.name} flag`}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${selectedCountryData?.name === country.name
                          ? 'text-blue-700'
                          : 'text-gray-900 group-hover:text-[#2072CC]'
                        }`}>
                        {country.name}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        {country.language}
                        {!country.active && (
                          <span className="text-xs bg-blue-100 text-blue-500 px-1.5 py-0.5 rounded">
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                    {selectedCountryData?.name === country.name && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              {filteredCountries.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No countries found matching &quot;{searchTerm}&quot;
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;