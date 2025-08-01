import Link from "next/link";
import Image from "next/image";

export default function Support() {
    return (
        <div className="absolute -right-5 w-xl bg-white shadow-lg rounded-2xl mt-2">
            <div className="container mx-auto flex flex-wrap">

                <div className="w-2xs p-4">
                    <div className="grid grid-cols-1 gap-4">
                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/knowledge-base.svg"
                                    alt="Knowledge Base"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Knowledge Base</p>
                                <p className="text-sm text-gray-600">Advice and answers to all of your FAQs</p>
                            </div>
                        </Link>

                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/tutorials.svg"
                                    alt="Tutorials"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Tutorials</p>
                                <p className="text-sm text-gray-600">Videos and articles to help you achieve your online success story</p>
                            </div>
                        </Link>

                        <Link href="/contact" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/contact.svg"
                                    alt="Contact Us"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
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