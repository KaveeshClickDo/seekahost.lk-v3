import Link from "next/link";
import Image from "next/image";

export default function Ecommers() {
    return (
        <div className="w-3xl xl:w-5xl rounded-xl bg-white shadow-lg z-20">
            <div className="container mx-auto flex flex-wrap">
     
                <div className="w-full lg:w-2/3 p-4">
                    <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">LEARN MARKETING</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/google-advertising-campaigns" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                            <Image
                                    src="/images/shared/google-advertising.svg"
                                    alt="Google Advertising"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Google Advertising</p>
                                <p className="text-sm text-gray-600">Boost visibility with targeted Google ads</p>
                            </div>
                        </Link>

                        <Link href="/free-business-listing" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                            <Image
                                    src="/images/shared/business-listing.svg"
                                    alt="Business Listing"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Business Listing</p>
                                <p className="text-sm text-gray-600">Get found easily on online directories</p>
                            </div>
                        </Link>

                        <Link href="/seo-consultancy" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                            <Image
                                    src="/images/shared/seo-consultancy.svg"
                                    alt="SEO Consultancy"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">SEO Consultancy</p>
                                <p className="text-sm text-gray-600">Expert guidance to improve search rankings</p>
                            </div>
                        </Link>

                        <Link href="/online-marketing-courses" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                            <Image
                                    src="/images/shared/marketing-courses.svg"
                                    alt="Marketing Courses"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Marketing Courses</p>
                                <p className="text-sm text-gray-600">Learn proven strategies to grow online</p>
                            </div>
                        </Link>

                    </div>

                    {/* <h3 className="font-bold text-gray-700 mt-6 mb-4 uppercase text-sm">CREATE YOUR ONLINE STORE</h3>

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
                    </div> */}
                </div>

            
                <div className="w-full lg:w-1/3 rounded-xl bg-gray-50 p-6 flex flex-col justify-center">
                    <h3 className="font-bold text-[#2072CC] text-lg mb-2">Marketing Platforms</h3>
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