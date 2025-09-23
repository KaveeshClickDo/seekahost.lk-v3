import Link from "next/link";
import Image from "next/image";

export default function Hosting() {
    return (
        <div className="w-3xl xl:w-5xl rounded-xl bg-white shadow-lg z-20">
            <div className="container mx-auto flex flex-wrap">

                <div className="w-full lg:w-2/3 p-4">
                    <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">HOST YOUR WEBSITE</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <Link href="/business-web-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/business-web-hosting.svg"
                                    alt="Business Web Hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Business Web Hosting</p>
                                <p className="text-sm text-gray-600">Fast and reliable for businesses</p>
                            </div>
                        </Link>

                        <Link href="/cheap-web-hosting-with-cpanel" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/cheap-cpanel-hosting.svg"
                                    alt="Cheap cPanel Hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Cheap cPanel Hosting</p>
                                <p className="text-sm text-gray-600">Affordable hosting solutions</p>
                            </div>
                        </Link>

                        {/* <Link href="/nodejs-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/nodejs-hosting.svg"
                                    alt="Node.js Hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Node.js Hosting</p>
                                <p className="text-sm text-gray-600">Specialized for Node.js apps</p>
                            </div>
                        </Link> */}

                        <Link href="/small-business-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/small-business-hosting.svg"
                                    alt="Small Business Hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Small Business Hosting</p>
                                <p className="text-sm text-gray-600"> Affordable Hosting for Small Businesses</p>
                            </div>
                        </Link>

                        <Link href="/agency-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/agency-hosting.svg"
                                    alt="Agency Hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Agency Hosting</p>
                                <p className="text-sm text-gray-600">Designed for professionals and agencies</p>
                            </div>
                        </Link>

                        <Link href="/business-email-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/business-web-hosting.svg"
                                    alt="Business Web Hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Business Email Hosting</p>
                                <p className="text-sm text-gray-600">Professional and personalized email addresses.</p>
                            </div>
                        </Link>

                    </div>

                    <h3 className="font-bold text-gray-700 mt-6 mb-4 uppercase text-sm">LOCATION & SERVICES</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <Link href="/london-server-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/london-server-hosting.svg"
                                    alt="London Server Hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">London Server Hosting</p>
                                <p className="text-sm text-gray-600">Full control with powerful, private hosting</p>
                            </div>
                        </Link>

                        <Link href="/hosting-migration" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/hosting-migration.svg"
                                    alt="Hosting Migration"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Hosting Migration</p>
                                <p className="text-sm text-gray-600">Seamless transfer of your website to new servers</p>
                            </div>
                        </Link>
                    </div>

                    {/* <h3 className="font-bold text-gray-700 mt-6 mb-4 uppercase text-sm">ONLINE MARKETING</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Search Engine Optimization</p>
                                <p className="text-sm text-gray-600">Improve your SEO with ranking tools</p>
                            </div>
                        </Link>

                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Email Marketing</p>
                                <p className="text-sm text-gray-600">Create effective email campaigns</p>
                            </div>
                        </Link>
                    </div> */}
                </div>


                <div className="w-full lg:w-1/3 rounded-xl bg-gray-50 p-6 flex flex-col justify-center">
                    <h3 className="font-bold text-[#2072CC] text-lg mb-2">Hosting</h3>
                    <p className="text-gray-600 mb-4">Reliable, secure, and high-performance hosting tailored for any website.</p>

                    <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Unlimited websites & storage options
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Free SSL certificates for all domains
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Fast SSD-powered performance
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • Daily automated backups included
                            </Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">
                                • 99.9% uptime guarantee
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <Image
                            src="/images/navbar-menu/hosting.webp"
                            alt="Website builder preview"
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