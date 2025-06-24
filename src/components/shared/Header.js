'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Hosting from '../navbar-menu/Hosting';
import WordPress from '../navbar-menu/WordPress';
import Servers from '../navbar-menu/Server';
import Domains from '../navbar-menu/Domains';
import Ecommers from '../navbar-menu/Ecommers';
import { FiExternalLink } from 'react-icons/fi';
import Support from '../topbar-menu/Support';
import LanguageSelector from '../navbar-menu/LanguageSelector';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [webHostingDropdownOpen, setWebHostingDropdownOpen] = useState(false);
    const [domainsDropdownOpen, setDomainsDropdownOpen] = useState(false);
    const [wordPressDropdownOpen, setWordPressDropdownOpen] = useState(false);
    const [eCommersDropdownOpen, setECommersDropdownOpen] = useState(false);
    const [signInDropdownOpen, setSignInDropdownOpen] = useState(false);

    const [desktopWebHostingDropdownOpen, setDesktopWebHostingDropdownOpen] = useState(false);
    const [desktopWordPressDropdownOpen, setDesktopWordPressDropdownOpen] = useState(false);
    const [desktopServersDropdownOpen, setDesktopServersDropdownOpen] = useState(false);
    const [desktopDomainsDropdownOpen, setDesktopDomainsDropdownOpen] = useState(false);
    const [desktopEcommersDropdownOpen, setDesktopEcommersDropdownOpen] = useState(false);

    const [desktopSupportDropdownOpen, setDesktopSupportDropdownOpen] = useState(false);

    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const navbarRef = useRef(null);

    const closeAllDropdowns = () => {
        setDesktopWebHostingDropdownOpen(false);
        setDesktopWordPressDropdownOpen(false);
        setDesktopServersDropdownOpen(false);
        setDesktopDomainsDropdownOpen(false);
        setWebHostingDropdownOpen(false);
        setDesktopEcommersDropdownOpen(false);
        setDesktopSupportDropdownOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {

            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                closeAllDropdowns();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const SignInDropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
        const dropdownRef = useRef(null);

        useEffect(() => {
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [dropdownRef]);

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                    className="flex items-center bg-transparent cursor-pointer border text-white px-5 py-3 rounded-full font-bold leading-4"
                    onClick={toggleDropdown}
                >
                    Sign In
                    {isOpen ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-1 w-50 rounded-md shadow-lg bg-white z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            <Link href="https://portal.seekahost.co.uk/index.php/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem">
                                <span className="mr-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 1.67442C6.29734 1.67442 1.67442 6.29734 1.67442 12C1.67442 17.7026 6.29734 22.3256 12 22.3256C12.3491 22.3256 12.6939 22.3083 13.0336 22.2746C13.4937 22.2289 13.9037 22.5648 13.9494 23.0249C13.9951 23.4851 13.6591 23.8951 13.199 23.9408C12.8044 23.98 12.4044 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0C18.6275 0 24 5.37258 24 12C24 12.4044 23.98 12.8044 23.9408 13.199C23.8951 13.6591 23.4851 13.9951 23.0249 13.9494C22.5648 13.9037 22.2289 13.4937 22.2746 13.0336C22.3083 12.6939 22.3256 12.3491 22.3256 12C22.3256 6.29734 17.7026 1.67442 12 1.67442Z" fill="currentColor" />
                                        <path d="M12.5 5C11.638 5 10.8114 5.34241 10.2019 5.9519C9.59241 6.5614 9.25 7.38805 9.25 8.25C9.25 9.11195 9.59241 9.9386 10.2019 10.5481C10.8114 11.1576 11.638 11.5 12.5 11.5C13.362 11.5 14.1886 11.1576 14.7981 10.5481C15.4076 9.9386 15.75 9.11195 15.75 8.25C15.75 7.38805 15.4076 6.5614 14.7981 5.9519C14.1886 5.34241 13.362 5 12.5 5ZM12.5 6.54375C13.4425 6.54375 14.2063 7.3075 14.2063 8.25C14.2063 9.1925 13.4425 9.95625 12.5 9.95625C12.0475 9.95625 11.6135 9.77648 11.2935 9.4565C10.9735 9.13652 10.7937 8.70253 10.7937 8.25C10.7937 7.79747 10.9735 7.36348 11.2935 7.0435C11.6135 6.72352 12.0475 6.54375 12.5 6.54375ZM12.5 12.3125C10.3306 12.3125 6 13.3931 6 15.5625V18H19V15.5625C19 13.3931 14.6694 12.3125 12.5 12.3125ZM12.5 13.8562C14.9131 13.8562 17.4563 15.0425 17.4563 15.5625V16.4563H7.54375V15.5625C7.54375 15.0425 10.0625 13.8562 12.5 13.8562Z" fill="currentColor" />
                                    </svg>
                                </span>
                                Client Area
                                <FiExternalLink className="w-4 h-4 ml-auto" />
                            </Link>
                            {/* <Link href="https://portal.seekahost.co.uk/index.php/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
                                <span className="mr-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 1.67442C6.29734 1.67442 1.67442 6.29734 1.67442 12C1.67442 17.7026 6.29734 22.3256 12 22.3256C12.3491 22.3256 12.6939 22.3083 13.0336 22.2746C13.4937 22.2289 13.9037 22.5648 13.9494 23.0249C13.9951 23.4851 13.6591 23.8951 13.199 23.9408C12.8044 23.98 12.4044 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0C18.6275 0 24 5.37258 24 12C24 12.4044 23.98 12.8044 23.9408 13.199C23.8951 13.6591 23.4851 13.9951 23.0249 13.9494C22.5648 13.9037 22.2289 13.4937 22.2746 13.0336C22.3083 12.6939 22.3256 12.3491 22.3256 12C22.3256 6.29734 17.7026 1.67442 12 1.67442Z" fill="currentColor" />
                                        <path d="M6.11355 15.0781C5.89811 15.0781 5.71345 15.0024 5.55957 14.8509C5.40569 14.6993 5.32993 14.5147 5.3323 14.2969C5.32993 14.0838 5.40569 13.9015 5.55957 13.75C5.71345 13.5985 5.89811 13.5227 6.11355 13.5227C6.32188 13.5227 6.50299 13.5985 6.65687 13.75C6.81312 13.9015 6.89243 14.0838 6.8948 14.2969C6.89243 14.4413 6.85455 14.5727 6.78116 14.6911C6.71014 14.8094 6.61544 14.9041 6.49707 14.9751C6.38107 15.0438 6.25323 15.0781 6.11355 15.0781ZM11.6986 12.706V9.54545H12.9841V15H11.7377V14.0305H11.6808C11.5577 14.3359 11.3553 14.5857 11.0736 14.7798C10.7942 14.974 10.4498 15.071 10.0402 15.071C9.68274 15.071 9.36668 14.9917 9.09206 14.8331C8.81981 14.6721 8.60674 14.4389 8.45286 14.1335C8.29898 13.8258 8.22203 13.4541 8.22203 13.0185V9.54545H9.50755V12.8196C9.50755 13.1652 9.60224 13.4399 9.79164 13.6435C9.98103 13.8471 10.2296 13.9489 10.5374 13.9489C10.7268 13.9489 10.9102 13.9027 11.0878 13.8104C11.2654 13.718 11.411 13.5807 11.5246 13.3984C11.6406 13.2138 11.6986 12.983 11.6986 12.706ZM15.4779 13.2884L15.4743 11.7365H15.6803L17.6405 9.54545H19.1427L16.7314 12.2301H16.4651L15.4779 13.2884ZM14.306 15V7.72727H15.5915V15H14.306ZM17.7293 15L15.9537 12.5178L16.8202 11.6122L19.267 15H17.7293Z" fill="currentColor" />
                                    </svg>
                                </span>
                                Seekahost.co.uk
                                <FiExternalLink className="w-4 h-4 ml-auto" />
                            </Link> */}
                            <Link href="https://www.seekahost.com/index.php/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
                                <span className="mr-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 1.67442C6.29734 1.67442 1.67442 6.29734 1.67442 12C1.67442 17.7026 6.29734 22.3256 12 22.3256C12.3491 22.3256 12.6939 22.3083 13.0336 22.2746C13.4937 22.2289 13.9037 22.5648 13.9494 23.0249C13.9951 23.4851 13.6591 23.8951 13.199 23.9408C12.8044 23.98 12.4044 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0C18.6275 0 24 5.37258 24 12C24 12.4044 23.98 12.8044 23.9408 13.199C23.8951 13.6591 23.4851 13.9951 23.0249 13.9494C22.5648 13.9037 22.2289 13.4937 22.2746 13.0336C22.3083 12.6939 22.3256 12.3491 22.3256 12C22.3256 6.29734 17.7026 1.67442 12 1.67442Z" fill="currentColor" />
                                        <path d="M4.16193 15.0625C3.98958 15.0625 3.84186 15.0019 3.71875 14.8807C3.59564 14.7595 3.53504 14.6117 3.53693 14.4375C3.53504 14.267 3.59564 14.1212 3.71875 14C3.84186 13.8788 3.98958 13.8182 4.16193 13.8182C4.3286 13.8182 4.47348 13.8788 4.59659 14C4.72159 14.1212 4.78504 14.267 4.78693 14.4375C4.78504 14.553 4.75473 14.6581 4.69602 14.7528C4.6392 14.8475 4.56345 14.9233 4.46875 14.9801C4.37595 15.035 4.27367 15.0625 4.16193 15.0625ZM7.51213 15.0852C7.07652 15.0852 6.70247 14.9896 6.38997 14.7983C6.07937 14.607 5.83978 14.3428 5.67122 14.0057C5.50455 13.6667 5.42122 13.2765 5.42122 12.8352C5.42122 12.392 5.50645 12.0009 5.6769 11.6619C5.84736 11.321 6.08789 11.0559 6.39849 10.8665C6.71099 10.6752 7.08031 10.5795 7.50645 10.5795C7.86062 10.5795 8.17406 10.6449 8.44679 10.7756C8.72141 10.9044 8.94016 11.0871 9.10304 11.3239C9.26592 11.5587 9.35872 11.8333 9.38145 12.1477H8.39849C8.35872 11.9375 8.26402 11.7623 8.1144 11.6222C7.96668 11.4801 7.76876 11.4091 7.52065 11.4091C7.31043 11.4091 7.12577 11.4659 6.96668 11.5795C6.80759 11.6913 6.68353 11.8523 6.59452 12.0625C6.5074 12.2727 6.46384 12.5246 6.46384 12.8182C6.46384 13.1155 6.5074 13.3712 6.59452 13.5852C6.68164 13.7973 6.8038 13.9612 6.96099 14.0767C7.12009 14.1903 7.30664 14.2472 7.52065 14.2472C7.67217 14.2472 7.80759 14.2187 7.9269 14.1619C8.04812 14.1032 8.14944 14.0189 8.23088 13.9091C8.31232 13.7992 8.36819 13.6657 8.39849 13.5085H9.38145C9.35683 13.8172 9.26592 14.0909 9.10872 14.3295C8.95152 14.5663 8.73751 14.7519 8.46668 14.8864C8.19584 15.0189 7.87766 15.0852 7.51213 15.0852ZM11.8893 15.0852C11.4632 15.0852 11.0939 14.9915 10.7814 14.804C10.4689 14.6165 10.2264 14.3542 10.0541 14.017C9.88364 13.6799 9.79841 13.286 9.79841 12.8352C9.79841 12.3845 9.88364 11.9896 10.0541 11.6506C10.2264 11.3116 10.4689 11.0483 10.7814 10.8608C11.0939 10.6733 11.4632 10.5795 11.8893 10.5795C12.3155 10.5795 12.6848 10.6733 12.9973 10.8608C13.3098 11.0483 13.5513 11.3116 13.7217 11.6506C13.8941 11.9896 13.9802 12.3845 13.9802 12.8352C13.9802 13.286 13.8941 13.6799 13.7217 14.017C13.5513 14.3542 13.3098 14.6165 12.9973 14.804C12.6848 14.9915 12.3155 15.0852 11.8893 15.0852ZM11.895 14.2614C12.1261 14.2614 12.3192 14.1979 12.4745 14.071C12.6298 13.9422 12.7454 13.7699 12.8211 13.554C12.8988 13.3381 12.9376 13.0975 12.9376 12.8324C12.9376 12.5653 12.8988 12.3239 12.8211 12.108C12.7454 11.8902 12.6298 11.7169 12.4745 11.5881C12.3192 11.4593 12.1261 11.3949 11.895 11.3949C11.6583 11.3949 11.4613 11.4593 11.3041 11.5881C11.1488 11.7169 11.0323 11.8902 10.9547 12.108C10.8789 12.3239 10.841 12.5653 10.841 12.8324C10.841 13.0975 10.8789 13.3381 10.9547 13.554C11.0323 13.7699 11.1488 13.9422 11.3041 14.071C11.4613 14.1979 11.6583 14.2614 11.895 14.2614ZM14.6131 15V10.6364H15.5961V11.3778H15.6472C15.7381 11.1278 15.8887 10.9328 16.0989 10.7926C16.3091 10.6506 16.5601 10.5795 16.8517 10.5795C17.1472 10.5795 17.3962 10.6515 17.5989 10.7955C17.8034 10.9375 17.9474 11.1316 18.0307 11.3778H18.0762C18.1728 11.1354 18.3356 10.9422 18.5648 10.7983C18.7959 10.6525 19.0695 10.5795 19.3858 10.5795C19.7873 10.5795 20.115 10.7064 20.3688 10.9602C20.6226 11.214 20.7495 11.5843 20.7495 12.071V15H19.7182V12.2301C19.7182 11.9593 19.6462 11.7614 19.5023 11.6364C19.3584 11.5095 19.1822 11.446 18.9739 11.446C18.7258 11.446 18.5317 11.5237 18.3915 11.679C18.2532 11.8324 18.1841 12.0322 18.1841 12.2784V15H17.1756V12.1875C17.1756 11.9621 17.1074 11.7822 16.9711 11.6477C16.8366 11.5133 16.6604 11.446 16.4426 11.446C16.2949 11.446 16.1604 11.4839 16.0392 11.5597C15.918 11.6335 15.8214 11.7386 15.7495 11.875C15.6775 12.0095 15.6415 12.1667 15.6415 12.3466V15H14.6131Z" fill="currentColor" />
                                    </svg>
                                </span>
                                Seekahost.com
                                <FiExternalLink className="w-4 h-4 ml-auto" />
                            </Link>
                            <Link href="https://portal.seekahost.app/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#F5FAFF] hover:text-[#0081FF]" role="menuitem" target="_blank">
                                <span className="mr-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 1.67442C6.29734 1.67442 1.67442 6.29734 1.67442 12C1.67442 17.7026 6.29734 22.3256 12 22.3256C12.3491 22.3256 12.6939 22.3083 13.0336 22.2746C13.4937 22.2289 13.9037 22.5648 13.9494 23.0249C13.9951 23.4851 13.6591 23.8951 13.199 23.9408C12.8044 23.98 12.4044 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0C18.6275 0 24 5.37258 24 12C24 12.4044 23.98 12.8044 23.9408 13.199C23.8951 13.6591 23.4851 13.9951 23.0249 13.9494C22.5648 13.9037 22.2289 13.4937 22.2746 13.0336C22.3083 12.6939 22.3256 12.3491 22.3256 12C22.3256 6.29734 17.7026 1.67442 12 1.67442Z" fill="currentColor" />
                                        <path d="M4.33301 15.0703C4.13912 15.0703 3.97293 15.0021 3.83443 14.8658C3.69594 14.7294 3.62776 14.5632 3.62989 14.3672C3.62776 14.1754 3.69594 14.0114 3.83443 13.875C3.97293 13.7386 4.13912 13.6705 4.33301 13.6705C4.52051 13.6705 4.68351 13.7386 4.822 13.875C4.96263 14.0114 5.03401 14.1754 5.03614 14.3672C5.03401 14.4972 4.99992 14.6154 4.93387 14.7219C4.86994 14.8285 4.78472 14.9137 4.67818 14.9776C4.57378 15.0394 4.45872 15.0703 4.33301 15.0703ZM7.28329 15.0991C6.97221 15.0991 6.69203 15.0437 6.44274 14.9329C6.19558 14.82 5.99956 14.6538 5.85467 14.4343C5.71192 14.2148 5.64054 13.9442 5.64054 13.6225C5.64054 13.3455 5.69167 13.1165 5.79395 12.9354C5.89622 12.7543 6.03578 12.6094 6.21263 12.5007C6.38947 12.392 6.58869 12.31 6.81028 12.2546C7.034 12.1971 7.26518 12.1555 7.50382 12.13C7.79146 12.1001 8.02477 12.0735 8.20375 12.0501C8.38273 12.0245 8.5127 11.9862 8.59366 11.935C8.67676 11.8817 8.71831 11.7997 8.71831 11.6889V11.6697C8.71831 11.429 8.64693 11.2425 8.50417 11.1104C8.36142 10.9783 8.15581 10.9123 7.88734 10.9123C7.60396 10.9123 7.37917 10.9741 7.21298 11.0977C7.04892 11.2212 6.93812 11.3672 6.88059 11.5355L5.80034 11.3821C5.88557 11.0838 6.02619 10.8345 6.22221 10.6342C6.41824 10.4318 6.65794 10.2805 6.94132 10.1804C7.2247 10.0781 7.53791 10.027 7.88095 10.027C8.11746 10.027 8.3529 10.0547 8.58727 10.1101C8.82165 10.1655 9.03578 10.2571 9.22967 10.3849C9.42356 10.5107 9.5791 10.6822 9.69629 10.8995C9.81561 11.1168 9.87527 11.3885 9.87527 11.7145V15H8.76305V14.3256H8.7247C8.65439 14.462 8.55531 14.5898 8.42747 14.7092C8.30176 14.8263 8.14302 14.9212 7.95126 14.9936C7.76163 15.0639 7.53898 15.0991 7.28329 15.0991ZM7.58372 14.2489C7.81596 14.2489 8.01731 14.2031 8.18777 14.1115C8.35822 14.0178 8.48926 13.8942 8.58088 13.7408C8.67463 13.5874 8.7215 13.4201 8.7215 13.239V12.6605C8.68528 12.6903 8.62349 12.718 8.53613 12.7436C8.45091 12.7692 8.35503 12.7915 8.24849 12.8107C8.14196 12.8299 8.03649 12.8469 7.93209 12.8619C7.82768 12.8768 7.73713 12.8896 7.66042 12.9002C7.48784 12.9237 7.33336 12.962 7.197 13.0153C7.06064 13.0685 6.95304 13.1431 6.8742 13.239C6.79537 13.3327 6.75595 13.4542 6.75595 13.6033C6.75595 13.8164 6.83372 13.9773 6.98926 14.0859C7.1448 14.1946 7.34295 14.2489 7.58372 14.2489ZM10.6786 16.8409V10.0909H11.8164V10.9027H11.8835C11.9432 10.7834 12.0273 10.6566 12.136 10.5224C12.2447 10.386 12.3917 10.2699 12.5771 10.174C12.7624 10.076 12.9989 10.027 13.2866 10.027C13.6658 10.027 14.0078 10.1239 14.3125 10.3178C14.6193 10.5096 14.8622 10.794 15.0412 11.1712C15.2223 11.5462 15.3129 12.0064 15.3129 12.5518C15.3129 13.0909 15.2244 13.549 15.0476 13.9261C14.8707 14.3033 14.63 14.5909 14.3253 14.7891C14.0206 14.9872 13.6754 15.0863 13.2898 15.0863C13.0085 15.0863 12.7752 15.0394 12.5898 14.9457C12.4045 14.8519 12.2553 14.739 12.1424 14.6069C12.0316 14.4727 11.9453 14.3459 11.8835 14.2266H11.8356V16.8409H10.6786ZM11.8132 12.5455C11.8132 12.8629 11.858 13.141 11.9474 13.3796C12.0391 13.6183 12.1701 13.8047 12.3406 13.9389C12.5131 14.071 12.7219 14.1371 12.967 14.1371C13.2227 14.1371 13.4368 14.0689 13.6094 13.9325C13.782 13.794 13.9119 13.6055 13.9993 13.3668C14.0888 13.1261 14.1335 12.8523 14.1335 12.5455C14.1335 12.2408 14.0898 11.9702 14.0025 11.7337C13.9151 11.4972 13.7852 11.3118 13.6126 11.1776C13.44 11.0433 13.2248 10.9762 12.967 10.9762C12.7198 10.9762 12.5099 11.0412 12.3374 11.1712C12.1648 11.3011 12.0337 11.4833 11.9442 11.7177C11.8569 11.9521 11.8132 12.228 11.8132 12.5455ZM15.9436 16.8409V10.0909H17.0814V10.9027H17.1485C17.2082 10.7834 17.2923 10.6566 17.401 10.5224C17.5097 10.386 17.6567 10.2699 17.8421 10.174C18.0274 10.076 18.2639 10.027 18.5516 10.027C18.9308 10.027 19.2728 10.1239 19.5775 10.3178C19.8843 10.5096 20.1272 10.794 20.3062 11.1712C20.4873 11.5462 20.5779 12.0064 20.5779 12.5518C20.5779 13.0909 20.4894 13.549 20.3126 13.9261C20.1357 14.3033 19.895 14.5909 19.5903 14.7891C19.2856 14.9872 18.9404 15.0863 18.5548 15.0863C18.2735 15.0863 18.0402 15.0394 17.8548 14.9457C17.6695 14.8519 17.5203 14.739 17.4074 14.6069C17.2966 14.4727 17.2103 14.3459 17.1485 14.2266H17.1006V16.8409H15.9436ZM17.0782 12.5455C17.0782 12.8629 17.123 13.141 17.2124 13.3796C17.3041 13.6183 17.4351 13.8047 17.6056 13.9389C17.7781 14.071 17.9869 14.1371 18.232 14.1371C18.4877 14.1371 18.7018 14.0689 18.8744 13.9325C19.047 13.794 19.1769 13.6055 19.2643 13.3668C19.3538 13.1261 19.3985 12.8523 19.3985 12.5455C19.3985 12.2408 19.3548 11.9702 19.2675 11.7337C19.1801 11.4972 19.0502 11.3118 18.8776 11.1776C18.705 11.0433 18.4898 10.9762 18.232 10.9762C17.9848 10.9762 17.7749 11.0412 17.6024 11.1712C17.4298 11.3011 17.2987 11.4833 17.2092 11.7177C17.1219 11.9521 17.0782 12.228 17.0782 12.5455Z" fill="currentColor" />
                                    </svg>
                                </span>
                                Seekahost.app
                                <FiExternalLink className="w-4 h-4 ml-auto" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const DesktopMenu = () => (

        <div className="hidden xl:flex items-center md:pr-15">

            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopDomainsDropdownOpen(!desktopDomainsDropdownOpen)
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}
                >
                    Domains & SSL
                </button>
                {desktopDomainsDropdownOpen && (
                    <div className="absolute 2xl:-left-90 -left-50">
                        <Domains />
                    </div>
                )}
            </div>
            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopWebHostingDropdownOpen(!desktopWebHostingDropdownOpen);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}
                >
                    Hosting
                </button>
                {desktopWebHostingDropdownOpen && (
                    <div className="absolute 2xl:-left-126 -left-86">
                        <Hosting />
                    </div>
                )}
            </div>
            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopWordPressDropdownOpen(!desktopWordPressDropdownOpen);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}

                >
                    WordPress
                </button>
                {desktopWordPressDropdownOpen && (
                    <div className="absolute 2xl:-left-148 -left-108">
                        <WordPress />
                    </div>
                )}
            </div>
            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopServersDropdownOpen(!desktopServersDropdownOpen);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}

                >
                    Servers
                </button>
                {desktopServersDropdownOpen && (
                    <div className="absolute 2xl:-left-176 -left-136">
                        <Servers />
                    </div>
                )}
            </div>

            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopEcommersDropdownOpen(!desktopEcommersDropdownOpen)
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopServersDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopSupportDropdownOpen(false);
                    }}

                >
                    Marketing
                </button>
                {desktopEcommersDropdownOpen && (
                    <div className="absolute 2xl:-left-197.75 -left-157.75">
                        <Ecommers />
                    </div>
                )}
            </div>
            {/* <Link
                href="/blog"
                className={`font-light transition-all duration-300 p-4 ${isActive('/blog')
                    ? 'bg-[#F5FAFF] border-b-4 border-blue-500'
                    : 'hover:bg-[#F5FAFF]'
                    }`}
            >
                Blog
            </Link> */}
            <Link
                href="/pricing"
                className="relative p-4 hover:underline"
            >
                Pricing
            </Link>

            {/* <Link
                href="/about"
                className="relative p-4 hover:underline"
            >
                About
            </Link> */}
            {/* <Link href="/contact" className="hover:underline font-light transition-all duration-300">
                Contact Us
            </Link> */}
            <div className="relative hover:underline">
                <button
                    type="button"
                    className="flex items-center transition-all duration-300 focus:outline-none cursor-pointer p-4"
                    onClick={() => {
                        setDesktopSupportDropdownOpen(!desktopSupportDropdownOpen);
                        setDesktopServersDropdownOpen(false);
                        setDesktopWordPressDropdownOpen(false);
                        setDesktopWebHostingDropdownOpen(false);
                        setDesktopDomainsDropdownOpen(false);
                        setDesktopEcommersDropdownOpen(false);
                    }}

                >
                    Support
                </button>
                {desktopSupportDropdownOpen && (
                    <Support />
                )}
            </div>
            <div className="relative p-1">
                <LanguageSelector />
            </div>
            <SignInDropdown />

        </div>
    );

    const MobileMenu = () => (
        <div
            className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
                }`}
        >
            <div className="pt-2 pb-3 space-y-1">
                <div>
                    <button
                        onClick={() => setDomainsDropdownOpen(!domainsDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium"
                        aria-expanded={domainsDropdownOpen}
                    >
                        Domains & SSL
                        {domainsDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {domainsDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/register-domain" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                    </svg>
                                </div>
                                <div>
                                    Register Domain
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={() => setWebHostingDropdownOpen(!webHostingDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium"
                        aria-expanded={webHostingDropdownOpen}
                    >
                        Hosting
                        {webHostingDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {webHostingDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/business-web-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Business Web Hosting
                                </div>
                            </Link>
                            <Link href="/cheap-web-hosting-with-cpanel" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Cheap cPanel Hosting
                                </div>
                            </Link>
                            <Link href="/nodejs-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Node JS Hosting
                                </div>
                            </Link>
                            <Link href="/agency-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Agency Hosting
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={() => setECommersDropdownOpen(!eCommersDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium"
                        aria-expanded={eCommersDropdownOpen}
                    >
                        eCommerce
                        {eCommersDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {eCommersDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/woocommerce-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    WooCommerce Hosting
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={() => setWordPressDropdownOpen(!wordPressDropdownOpen)}
                        className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100 focus:outline-none text-lg font-medium"
                        aria-expanded={wordPressDropdownOpen}
                    >
                        WordPress
                        {wordPressDropdownOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                    </button>
                    {wordPressDropdownOpen && (
                        <div className="pl-4">
                            <Link href="/wordpress-hosting" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    WordPress Web Hosting
                                </div>
                            </Link>
                            <Link href="/managed-wordpress" className="flex items-start block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                                <div className="mr-3 text-blue-500">
                                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    Managed WordPress
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Pricing
                </Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About
                </Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                </Link>
                <button
                    onClick={() => setSignInDropdownOpen(!signInDropdownOpen)}
                    className="flex items-center border bg-transparent text-white px-4 py-2 rounded-full text-lg font-medium"
                    aria-expanded={signInDropdownOpen}
                >
                    Sign In
                    {signInDropdownOpen ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>
                {signInDropdownOpen && (
                    <div className="pl-4">
                        <Link href="#" className="flex items-center px-4 py-2 text-lg font-medium" role="menuitem">
                            <span className="mr-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.67442C6.29734 1.67442 1.67442 6.29734 1.67442 12C1.67442 17.7026 6.29734 22.3256 12 22.3256C12.3491 22.3256 12.6939 22.3083 13.0336 22.2746C13.4937 22.2289 13.9037 22.5648 13.9494 23.0249C13.9951 23.4851 13.6591 23.8951 13.199 23.9408C12.8044 23.98 12.4044 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0C18.6275 0 24 5.37258 24 12C24 12.4044 23.98 12.8044 23.9408 13.199C23.8951 13.6591 23.4851 13.9951 23.0249 13.9494C22.5648 13.9037 22.2289 13.4937 22.2746 13.0336C22.3083 12.6939 22.3256 12.3491 22.3256 12C22.3256 6.29734 17.7026 1.67442 12 1.67442Z" fill="currentColor" />
                                    <path d="M12.5 5C11.638 5 10.8114 5.34241 10.2019 5.9519C9.59241 6.5614 9.25 7.38805 9.25 8.25C9.25 9.11195 9.59241 9.9386 10.2019 10.5481C10.8114 11.1576 11.638 11.5 12.5 11.5C13.362 11.5 14.1886 11.1576 14.7981 10.5481C15.4076 9.9386 15.75 9.11195 15.75 8.25C15.75 7.38805 15.4076 6.5614 14.7981 5.9519C14.1886 5.34241 13.362 5 12.5 5ZM12.5 6.54375C13.4425 6.54375 14.2063 7.3075 14.2063 8.25C14.2063 9.1925 13.4425 9.95625 12.5 9.95625C12.0475 9.95625 11.6135 9.77648 11.2935 9.4565C10.9735 9.13652 10.7937 8.70253 10.7937 8.25C10.7937 7.79747 10.9735 7.36348 11.2935 7.0435C11.6135 6.72352 12.0475 6.54375 12.5 6.54375ZM12.5 12.3125C10.3306 12.3125 6 13.3931 6 15.5625V18H19V15.5625C19 13.3931 14.6694 12.3125 12.5 12.3125ZM12.5 13.8562C14.9131 13.8562 17.4563 15.0425 17.4563 15.5625V16.4563H7.54375V15.5625C7.54375 15.0425 10.0625 13.8562 12.5 13.8562Z" fill="currentColor" />
                                </svg>
                            </span>
                            Client Area
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                        <Link href="https://portal.seekahost.co.uk/index.php/login" className="flex items-center px-4 py-2 text-lg font-medium" role="menuitem" target="_blank">
                            <span className="mr-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.67442C6.29734 1.67442 1.67442 6.29734 1.67442 12C1.67442 17.7026 6.29734 22.3256 12 22.3256C12.3491 22.3256 12.6939 22.3083 13.0336 22.2746C13.4937 22.2289 13.9037 22.5648 13.9494 23.0249C13.9951 23.4851 13.6591 23.8951 13.199 23.9408C12.8044 23.98 12.4044 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0C18.6275 0 24 5.37258 24 12C24 12.4044 23.98 12.8044 23.9408 13.199C23.8951 13.6591 23.4851 13.9951 23.0249 13.9494C22.5648 13.9037 22.2289 13.4937 22.2746 13.0336C22.3083 12.6939 22.3256 12.3491 22.3256 12C22.3256 6.29734 17.7026 1.67442 12 1.67442Z" fill="currentColor" />
                                    <path d="M6.11355 15.0781C5.89811 15.0781 5.71345 15.0024 5.55957 14.8509C5.40569 14.6993 5.32993 14.5147 5.3323 14.2969C5.32993 14.0838 5.40569 13.9015 5.55957 13.75C5.71345 13.5985 5.89811 13.5227 6.11355 13.5227C6.32188 13.5227 6.50299 13.5985 6.65687 13.75C6.81312 13.9015 6.89243 14.0838 6.8948 14.2969C6.89243 14.4413 6.85455 14.5727 6.78116 14.6911C6.71014 14.8094 6.61544 14.9041 6.49707 14.9751C6.38107 15.0438 6.25323 15.0781 6.11355 15.0781ZM11.6986 12.706V9.54545H12.9841V15H11.7377V14.0305H11.6808C11.5577 14.3359 11.3553 14.5857 11.0736 14.7798C10.7942 14.974 10.4498 15.071 10.0402 15.071C9.68274 15.071 9.36668 14.9917 9.09206 14.8331C8.81981 14.6721 8.60674 14.4389 8.45286 14.1335C8.29898 13.8258 8.22203 13.4541 8.22203 13.0185V9.54545H9.50755V12.8196C9.50755 13.1652 9.60224 13.4399 9.79164 13.6435C9.98103 13.8471 10.2296 13.9489 10.5374 13.9489C10.7268 13.9489 10.9102 13.9027 11.0878 13.8104C11.2654 13.718 11.411 13.5807 11.5246 13.3984C11.6406 13.2138 11.6986 12.983 11.6986 12.706ZM15.4779 13.2884L15.4743 11.7365H15.6803L17.6405 9.54545H19.1427L16.7314 12.2301H16.4651L15.4779 13.2884ZM14.306 15V7.72727H15.5915V15H14.306ZM17.7293 15L15.9537 12.5178L16.8202 11.6122L19.267 15H17.7293Z" fill="currentColor" />
                                </svg>
                            </span>
                            Seekahost.co.uk
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                        <Link href="https://www.seekahost.com/index.php/login" className="flex items-center px-4 py-2 text-lg font-medium" role="menuitem" target="_blank">
                            <span className="mr-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.67442C6.29734 1.67442 1.67442 6.29734 1.67442 12C1.67442 17.7026 6.29734 22.3256 12 22.3256C12.3491 22.3256 12.6939 22.3083 13.0336 22.2746C13.4937 22.2289 13.9037 22.5648 13.9494 23.0249C13.9951 23.4851 13.6591 23.8951 13.199 23.9408C12.8044 23.98 12.4044 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0C18.6275 0 24 5.37258 24 12C24 12.4044 23.98 12.8044 23.9408 13.199C23.8951 13.6591 23.4851 13.9951 23.0249 13.9494C22.5648 13.9037 22.2289 13.4937 22.2746 13.0336C22.3083 12.6939 22.3256 12.3491 22.3256 12C22.3256 6.29734 17.7026 1.67442 12 1.67442Z" fill="currentColor" />
                                    <path d="M4.16193 15.0625C3.98958 15.0625 3.84186 15.0019 3.71875 14.8807C3.59564 14.7595 3.53504 14.6117 3.53693 14.4375C3.53504 14.267 3.59564 14.1212 3.71875 14C3.84186 13.8788 3.98958 13.8182 4.16193 13.8182C4.3286 13.8182 4.47348 13.8788 4.59659 14C4.72159 14.1212 4.78504 14.267 4.78693 14.4375C4.78504 14.553 4.75473 14.6581 4.69602 14.7528C4.6392 14.8475 4.56345 14.9233 4.46875 14.9801C4.37595 15.035 4.27367 15.0625 4.16193 15.0625ZM7.51213 15.0852C7.07652 15.0852 6.70247 14.9896 6.38997 14.7983C6.07937 14.607 5.83978 14.3428 5.67122 14.0057C5.50455 13.6667 5.42122 13.2765 5.42122 12.8352C5.42122 12.392 5.50645 12.0009 5.6769 11.6619C5.84736 11.321 6.08789 11.0559 6.39849 10.8665C6.71099 10.6752 7.08031 10.5795 7.50645 10.5795C7.86062 10.5795 8.17406 10.6449 8.44679 10.7756C8.72141 10.9044 8.94016 11.0871 9.10304 11.3239C9.26592 11.5587 9.35872 11.8333 9.38145 12.1477H8.39849C8.35872 11.9375 8.26402 11.7623 8.1144 11.6222C7.96668 11.4801 7.76876 11.4091 7.52065 11.4091C7.31043 11.4091 7.12577 11.4659 6.96668 11.5795C6.80759 11.6913 6.68353 11.8523 6.59452 12.0625C6.5074 12.2727 6.46384 12.5246 6.46384 12.8182C6.46384 13.1155 6.5074 13.3712 6.59452 13.5852C6.68164 13.7973 6.8038 13.9612 6.96099 14.0767C7.12009 14.1903 7.30664 14.2472 7.52065 14.2472C7.67217 14.2472 7.80759 14.2187 7.9269 14.1619C8.04812 14.1032 8.14944 14.0189 8.23088 13.9091C8.31232 13.7992 8.36819 13.6657 8.39849 13.5085H9.38145C9.35683 13.8172 9.26592 14.0909 9.10872 14.3295C8.95152 14.5663 8.73751 14.7519 8.46668 14.8864C8.19584 15.0189 7.87766 15.0852 7.51213 15.0852ZM11.8893 15.0852C11.4632 15.0852 11.0939 14.9915 10.7814 14.804C10.4689 14.6165 10.2264 14.3542 10.0541 14.017C9.88364 13.6799 9.79841 13.286 9.79841 12.8352C9.79841 12.3845 9.88364 11.9896 10.0541 11.6506C10.2264 11.3116 10.4689 11.0483 10.7814 10.8608C11.0939 10.6733 11.4632 10.5795 11.8893 10.5795C12.3155 10.5795 12.6848 10.6733 12.9973 10.8608C13.3098 11.0483 13.5513 11.3116 13.7217 11.6506C13.8941 11.9896 13.9802 12.3845 13.9802 12.8352C13.9802 13.286 13.8941 13.6799 13.7217 14.017C13.5513 14.3542 13.3098 14.6165 12.9973 14.804C12.6848 14.9915 12.3155 15.0852 11.8893 15.0852ZM11.895 14.2614C12.1261 14.2614 12.3192 14.1979 12.4745 14.071C12.6298 13.9422 12.7454 13.7699 12.8211 13.554C12.8988 13.3381 12.9376 13.0975 12.9376 12.8324C12.9376 12.5653 12.8988 12.3239 12.8211 12.108C12.7454 11.8902 12.6298 11.7169 12.4745 11.5881C12.3192 11.4593 12.1261 11.3949 11.895 11.3949C11.6583 11.3949 11.4613 11.4593 11.3041 11.5881C11.1488 11.7169 11.0323 11.8902 10.9547 12.108C10.8789 12.3239 10.841 12.5653 10.841 12.8324C10.841 13.0975 10.8789 13.3381 10.9547 13.554C11.0323 13.7699 11.1488 13.9422 11.3041 14.071C11.4613 14.1979 11.6583 14.2614 11.895 14.2614ZM14.6131 15V10.6364H15.5961V11.3778H15.6472C15.7381 11.1278 15.8887 10.9328 16.0989 10.7926C16.3091 10.6506 16.5601 10.5795 16.8517 10.5795C17.1472 10.5795 17.3962 10.6515 17.5989 10.7955C17.8034 10.9375 17.9474 11.1316 18.0307 11.3778H18.0762C18.1728 11.1354 18.3356 10.9422 18.5648 10.7983C18.7959 10.6525 19.0695 10.5795 19.3858 10.5795C19.7873 10.5795 20.115 10.7064 20.3688 10.9602C20.6226 11.214 20.7495 11.5843 20.7495 12.071V15H19.7182V12.2301C19.7182 11.9593 19.6462 11.7614 19.5023 11.6364C19.3584 11.5095 19.1822 11.446 18.9739 11.446C18.7258 11.446 18.5317 11.5237 18.3915 11.679C18.2532 11.8324 18.1841 12.0322 18.1841 12.2784V15H17.1756V12.1875C17.1756 11.9621 17.1074 11.7822 16.9711 11.6477C16.8366 11.5133 16.6604 11.446 16.4426 11.446C16.2949 11.446 16.1604 11.4839 16.0392 11.5597C15.918 11.6335 15.8214 11.7386 15.7495 11.875C15.6775 12.0095 15.6415 12.1667 15.6415 12.3466V15H14.6131Z" fill="currentColor" />
                                </svg>
                            </span>
                            Seekahost.com
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                        <Link href="https://portal.seekahost.app/login" className="flex items-center px-4 py-2 text-lg font-medium" role="menuitem" target="_blank">
                            <span className="mr-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.67442C6.29734 1.67442 1.67442 6.29734 1.67442 12C1.67442 17.7026 6.29734 22.3256 12 22.3256C12.3491 22.3256 12.6939 22.3083 13.0336 22.2746C13.4937 22.2289 13.9037 22.5648 13.9494 23.0249C13.9951 23.4851 13.6591 23.8951 13.199 23.9408C12.8044 23.98 12.4044 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0C18.6275 0 24 5.37258 24 12C24 12.4044 23.98 12.8044 23.9408 13.199C23.8951 13.6591 23.4851 13.9951 23.0249 13.9494C22.5648 13.9037 22.2289 13.4937 22.2746 13.0336C22.3083 12.6939 22.3256 12.3491 22.3256 12C22.3256 6.29734 17.7026 1.67442 12 1.67442Z" fill="currentColor" />
                                    <path d="M4.33301 15.0703C4.13912 15.0703 3.97293 15.0021 3.83443 14.8658C3.69594 14.7294 3.62776 14.5632 3.62989 14.3672C3.62776 14.1754 3.69594 14.0114 3.83443 13.875C3.97293 13.7386 4.13912 13.6705 4.33301 13.6705C4.52051 13.6705 4.68351 13.7386 4.822 13.875C4.96263 14.0114 5.03401 14.1754 5.03614 14.3672C5.03401 14.4972 4.99992 14.6154 4.93387 14.7219C4.86994 14.8285 4.78472 14.9137 4.67818 14.9776C4.57378 15.0394 4.45872 15.0703 4.33301 15.0703ZM7.28329 15.0991C6.97221 15.0991 6.69203 15.0437 6.44274 14.9329C6.19558 14.82 5.99956 14.6538 5.85467 14.4343C5.71192 14.2148 5.64054 13.9442 5.64054 13.6225C5.64054 13.3455 5.69167 13.1165 5.79395 12.9354C5.89622 12.7543 6.03578 12.6094 6.21263 12.5007C6.38947 12.392 6.58869 12.31 6.81028 12.2546C7.034 12.1971 7.26518 12.1555 7.50382 12.13C7.79146 12.1001 8.02477 12.0735 8.20375 12.0501C8.38273 12.0245 8.5127 11.9862 8.59366 11.935C8.67676 11.8817 8.71831 11.7997 8.71831 11.6889V11.6697C8.71831 11.429 8.64693 11.2425 8.50417 11.1104C8.36142 10.9783 8.15581 10.9123 7.88734 10.9123C7.60396 10.9123 7.37917 10.9741 7.21298 11.0977C7.04892 11.2212 6.93812 11.3672 6.88059 11.5355L5.80034 11.3821C5.88557 11.0838 6.02619 10.8345 6.22221 10.6342C6.41824 10.4318 6.65794 10.2805 6.94132 10.1804C7.2247 10.0781 7.53791 10.027 7.88095 10.027C8.11746 10.027 8.3529 10.0547 8.58727 10.1101C8.82165 10.1655 9.03578 10.2571 9.22967 10.3849C9.42356 10.5107 9.5791 10.6822 9.69629 10.8995C9.81561 11.1168 9.87527 11.3885 9.87527 11.7145V15H8.76305V14.3256H8.7247C8.65439 14.462 8.55531 14.5898 8.42747 14.7092C8.30176 14.8263 8.14302 14.9212 7.95126 14.9936C7.76163 15.0639 7.53898 15.0991 7.28329 15.0991ZM7.58372 14.2489C7.81596 14.2489 8.01731 14.2031 8.18777 14.1115C8.35822 14.0178 8.48926 13.8942 8.58088 13.7408C8.67463 13.5874 8.7215 13.4201 8.7215 13.239V12.6605C8.68528 12.6903 8.62349 12.718 8.53613 12.7436C8.45091 12.7692 8.35503 12.7915 8.24849 12.8107C8.14196 12.8299 8.03649 12.8469 7.93209 12.8619C7.82768 12.8768 7.73713 12.8896 7.66042 12.9002C7.48784 12.9237 7.33336 12.962 7.197 13.0153C7.06064 13.0685 6.95304 13.1431 6.8742 13.239C6.79537 13.3327 6.75595 13.4542 6.75595 13.6033C6.75595 13.8164 6.83372 13.9773 6.98926 14.0859C7.1448 14.1946 7.34295 14.2489 7.58372 14.2489ZM10.6786 16.8409V10.0909H11.8164V10.9027H11.8835C11.9432 10.7834 12.0273 10.6566 12.136 10.5224C12.2447 10.386 12.3917 10.2699 12.5771 10.174C12.7624 10.076 12.9989 10.027 13.2866 10.027C13.6658 10.027 14.0078 10.1239 14.3125 10.3178C14.6193 10.5096 14.8622 10.794 15.0412 11.1712C15.2223 11.5462 15.3129 12.0064 15.3129 12.5518C15.3129 13.0909 15.2244 13.549 15.0476 13.9261C14.8707 14.3033 14.63 14.5909 14.3253 14.7891C14.0206 14.9872 13.6754 15.0863 13.2898 15.0863C13.0085 15.0863 12.7752 15.0394 12.5898 14.9457C12.4045 14.8519 12.2553 14.739 12.1424 14.6069C12.0316 14.4727 11.9453 14.3459 11.8835 14.2266H11.8356V16.8409H10.6786ZM11.8132 12.5455C11.8132 12.8629 11.858 13.141 11.9474 13.3796C12.0391 13.6183 12.1701 13.8047 12.3406 13.9389C12.5131 14.071 12.7219 14.1371 12.967 14.1371C13.2227 14.1371 13.4368 14.0689 13.6094 13.9325C13.782 13.794 13.9119 13.6055 13.9993 13.3668C14.0888 13.1261 14.1335 12.8523 14.1335 12.5455C14.1335 12.2408 14.0898 11.9702 14.0025 11.7337C13.9151 11.4972 13.7852 11.3118 13.6126 11.1776C13.44 11.0433 13.2248 10.9762 12.967 10.9762C12.7198 10.9762 12.5099 11.0412 12.3374 11.1712C12.1648 11.3011 12.0337 11.4833 11.9442 11.7177C11.8569 11.9521 11.8132 12.228 11.8132 12.5455ZM15.9436 16.8409V10.0909H17.0814V10.9027H17.1485C17.2082 10.7834 17.2923 10.6566 17.401 10.5224C17.5097 10.386 17.6567 10.2699 17.8421 10.174C18.0274 10.076 18.2639 10.027 18.5516 10.027C18.9308 10.027 19.2728 10.1239 19.5775 10.3178C19.8843 10.5096 20.1272 10.794 20.3062 11.1712C20.4873 11.5462 20.5779 12.0064 20.5779 12.5518C20.5779 13.0909 20.4894 13.549 20.3126 13.9261C20.1357 14.3033 19.895 14.5909 19.5903 14.7891C19.2856 14.9872 18.9404 15.0863 18.5548 15.0863C18.2735 15.0863 18.0402 15.0394 17.8548 14.9457C17.6695 14.8519 17.5203 14.739 17.4074 14.6069C17.2966 14.4727 17.2103 14.3459 17.1485 14.2266H17.1006V16.8409H15.9436ZM17.0782 12.5455C17.0782 12.8629 17.123 13.141 17.2124 13.3796C17.3041 13.6183 17.4351 13.8047 17.6056 13.9389C17.7781 14.071 17.9869 14.1371 18.232 14.1371C18.4877 14.1371 18.7018 14.0689 18.8744 13.9325C19.047 13.794 19.1769 13.6055 19.2643 13.3668C19.3538 13.1261 19.3985 12.8523 19.3985 12.5455C19.3985 12.2408 19.3548 11.9702 19.2675 11.7337C19.1801 11.4972 19.0502 11.3118 18.8776 11.1776C18.705 11.0433 18.4898 10.9762 18.232 10.9762C17.9848 10.9762 17.7749 11.0412 17.6024 11.1712C17.4298 11.3011 17.2987 11.4833 17.2092 11.7177C17.1219 11.9521 17.0782 12.228 17.0782 12.5455Z" fill="currentColor" />
                                </svg>
                            </span>
                            Seekahost.app
                            <FiExternalLink className="w-4 h-4 ml-auto" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );

    const MobileHamburger = () => (
        <div className="xl:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none" aria-label="Mobile Menu">
                {mobileMenuOpen ? (
                    <svg className="w-9 h-9" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-10 h-10" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8H13.75M5 12H19M10.25 16L19 16" />
                    </svg>
                )}
            </button>
        </div>
    );

    return (
        <>
            <nav
                ref={navbarRef}
                className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#0A488A] text-white p-4 lg:p-0 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''
                    }`}
            >
                <div className="container mx-auto flex items-center justify-between md:pl-10 lg:py-5">
                    <Link href="/">
                        <Image
                            src="/images/shared/header-logo-white.webp"
                            alt="SeekaHost"
                            width={133}
                            height={62}
                            priority
                        />
                    </Link>
                    <DesktopMenu />
                    <MobileHamburger />
                </div>
                <MobileMenu />
            </nav>
            {/* Spacer to push content down */}
            <div className="h-20 xl:h-24"></div>
        </>
    );
}