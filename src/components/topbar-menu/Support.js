import Link from "next/link";
import Image from "next/image";

export default function Support() {
    return (
        <div className="absolute -right-5 w-xl bg-white shadow-lg rounded-2xl mt-2">
            <div className="container mx-auto flex flex-wrap">
            
                <div className="w-2xs p-4">
                    <div className="grid grid-cols-1 gap-4">
                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Knowledge Base</p>
                                <p className="text-sm text-gray-600">Advice and answers to all of your FAQs</p>
                            </div>
                        </Link>

                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Tutorials</p>
                                <p className="text-sm text-gray-600">Videos and articles to help you achieve your online success story</p>
                            </div>
                        </Link>

                        <Link href="/contact" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Contact Us</p>
                                <p className="text-sm text-gray-600">How to reach us</p>
                            </div>
                        </Link>


                    </div>
                </div>

        
                <div className="w-2xs bg-gray-50 p-6 flex flex-col justify-center rounded-2xl">
                    <div className="mb-2">
                        <Image
                            src="/images/wordpress-hosting/screenshot-1.webp"
                            alt="Website builder preview"
                            width={760}
                            height={530}
                            className="rounded-md shadow-sm"
                        />
                    </div>
                    <h3 className="font-bold text-[#2072CC] text-lg mt-2">Learn About CMS</h3>
                    <p className="text-gray-600 mb-2">Find the right way to build your website.</p>
                </div>
            </div>
        </div>
    );
}