import Link from "next/link";
import Image from "next/image";

export default function Ecommers() {
    return (
        <div className="absolute -left-57.5 w-3xl xl:w-5xl bg-white shadow-lg z-20">
            <div className="container mx-auto flex flex-wrap">
                {/* Left side - Menu items with icons */}
                <div className="w-full lg:w-2/3 p-4">
                    <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">CREATE YOUR ONLINE STORE</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">eCommerce Website Design</p>
                                <p className="text-sm text-gray-600">Get your online store built by experts</p>
                            </div>
                        </Link>

                    </div>

                    <h3 className="font-bold text-gray-700 mt-6 mb-4 uppercase text-sm">ECOMMERCE HOSTING</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">WooCommerce Hosting</p>
                                <p className="text-sm text-gray-600">Secure your server or cloud infrastructure</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Right side - Promotional content */}
                <div className="w-full lg:w-1/3 bg-gray-50 p-6 flex flex-col justify-center">
                    <h3 className="font-bold text-blue-600 text-lg mb-2">E-Commers Platforms</h3>
                    <p className="text-gray-600 mb-4">Find the right way to build your website.</p>

                    <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Website Tools
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • AI Tools
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Website Templates
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Website Checker
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Domain Check
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <Image
                            src="/images/wordpress-hosting/screenshot-1.webp"
                            alt="Website builder preview"
                            width={760}
                            height={530}
                            className="rounded-md shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}