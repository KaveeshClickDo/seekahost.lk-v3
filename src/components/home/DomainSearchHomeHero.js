'use client';

import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useTranslations } from 'next-intl';

export default function DomainSearchHomeHero() {
    const t = useTranslations('HomePage.Hero');
    const [domain, setDomain] = useState('');

    const handleSearch = () => {
        // Base URL for SeekAHost domain registration
        let url = 'https://portal.seekahost.co.uk/cart.php?a=add&domain=register&promocode=FIFTEEDOMOFFUK';

        // If a domain is entered, append it to the URL
        if (domain.trim()) {
            url += `&query=${encodeURIComponent(domain.trim())}`;
        }

        // Redirect to the SeekAHost portal
        window.open(url, '_blank');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="mt-6 flex items-center bg-white rounded-full pl-4 shadow-md w-full">
            <input
                type="text"
                placeholder={t('searchBar.placeHolder')}
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow outline-none text-black md:px-2"
            />
            <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-[#0081FF] via-[#0070E0] to-[#005FC7] hover:bg-gradient-to-br text-white px-5 md:px-7 py-4 rounded-full transition leading-4 font-bold flex items-center gap-2"
            >
                <IoSearch className="w-5 h-5" />
                {t('searchBar.buttonName')}
            </button>
        </div>
    );
}