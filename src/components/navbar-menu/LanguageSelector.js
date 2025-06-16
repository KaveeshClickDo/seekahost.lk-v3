import React, { useState, useEffect } from 'react';
import { IoSearch, IoClose } from 'react-icons/io5';
import Image from 'next/image';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('United Kingdom');
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side rendering and load saved language
  useEffect(() => {
    setIsClient(true);
    const savedCountry = localStorage.getItem('selectedCountry');
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
  }, []);

  // Sample countries/languages data - you can replace this with your i18n data
  const countries = [
    { name: 'Argentina', language: 'Español', flag: '/images/flags/Argentina.svg' },
    { name: 'Brasil', language: 'Português', flag: '/images/flags/Brazil.svg' },
    { name: 'Italy', language: 'Italiano', flag: '/images/flags/Italy.svg' },
    { name: 'Japan', language: '日本語', flag: '/images/flags/Japan.svg' },
    { name: 'United Kingdom', language: 'English', flag: '/images/flags/United-kingdom.svg' },
    { name: 'United States', language: 'English', flag: '/images/flags/United-states.svg' },
    { name: 'Sri Lanka', language: 'Sinhala', flag: '/images/flags/Sri-lanka.svg' },
  ];

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCountry = (country) => {
    setSelectedCountry(country.name);
    // Save to localStorage for persistence
    localStorage.setItem('selectedCountry', country.name);
    setIsOpen(false);
    setSearchTerm('');
    // Here you would typically trigger your i18n language change
    console.log('Selected country:', country);
  };

  const selectedCountryData = countries.find(c => c.name === selectedCountry);

  return (
    <div className="relative">
      {/* Language Selector Button - Fully Circular */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 flex item-center rounded-full border border-white overflow-hidden cursor-pointer"
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
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
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
                    className="flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-md transition-colors group"
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
                      <div className="font-medium text-gray-900 group-hover:text-blue-600">
                        {country.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {country.language}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              {filteredCountries.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No countries found matching "{searchTerm}"
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