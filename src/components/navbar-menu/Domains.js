import Link from "next/link";
import Image from "next/image";

export default function Domains() {
    return (
        <div className="w-5xl rounded-xl bg-white shadow-lg z-20">
            <div className="container mx-auto flex flex-wrap">
                {/* Left side - Menu items with icons */}
                <div className="w-full lg:w-2/3 p-4">
                    <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">DOMAINS</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/register-domain" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/register-domain.svg"
                                    alt="Register Domain"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Register Domain</p>
                                <p className="text-sm text-gray-600">Create your online address</p>
                            </div>
                        </Link>

                        <Link href="/domain-pricing" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/domain-pricing.svg"
                                    alt="Domain Pricing"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Domain Pricing</p>
                                <p className="text-sm text-gray-600">Transparent rates for domain</p>
                            </div>
                        </Link>
                    </div>

                    <h3 className="font-bold text-gray-700 mt-6 mb-4 uppercase text-sm">TRANSFER SERVICE</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/domain-transfer" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/transfer-domain.svg"
                                    alt="Transfer Domain"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Domain Transfer</p>
                                <p className="text-sm text-gray-600">Secure your server or cloud infrastructure</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Right side - Promotional content */}
                <div className="w-full lg:w-1/3 rounded-xl bg-gray-50 p-6 flex flex-col justify-center">
                    <h3 className="font-bold text-[#2072CC] text-lg mb-2">Domains & SSL</h3>
                    <p className="text-gray-600 mb-4">Secure your online identity with reliable domains and SSL protection.</p>

                    <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Wide range of domain extensions available 
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Easy domain management with DNS control
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Free SSL certificates for every website
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Boost trust with HTTPS encryption & site security
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Automatic renewal options to keep your domain active
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <Image
                            src="/images/navbar-menu/domain.webp"
                            alt="Domains & SSL"
                            width={1434}
                            height={1004}
                            className="rounded-md shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}