import Link from "next/link";
import Image from "next/image";

export default function Servers() {
    return (
        <div className="w-3xl xl:w-5xl rounded-xl bg-white shadow-lg z-20">
            <div className="container mx-auto flex flex-wrap">
               
                <div className="w-full lg:w-2/3 p-4">
                    <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">ROOT SERVER</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        

                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1">
                                <Image
                                    src="/images/shared/dedicated-servers.svg"
                                    alt="Dedicated Servers"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Dedicated Servers</p>
                                <p className="text-sm text-gray-600">Full control with powerful, private hosting</p>
                            </div>
                        </Link>

                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1">
                                <Image
                                    src="/images/shared/cloud-servers.svg"
                                    alt="Cloud Servers"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Cloud Servers</p>
                                <p className="text-sm text-gray-600">Scalable, reliable hosting in the cloud</p>
                            </div>
                        </Link>


                    </div>

                    <h3 className="font-bold text-gray-700 mt-6 mb-4 uppercase text-sm">VPS</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        

                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1">
                                <Image
                                    src="/images/shared/vps-hostings.svg"
                                    alt="VPS Hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">VPS Hosting</p>
                                <p className="text-sm text-gray-600">Fully virtualized private servers</p>
                            </div>
                        </Link>

                        <Link href="#" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1">
                                <Image
                                    src="/images/shared/vps-hostings.svg"
                                    alt="n8n VPS hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">n8n VPS hosting</p>
                                <p className="text-sm text-gray-600">Automate workflows on a dedicated VPS</p>
                            </div>
                        </Link>
                    </div>
                </div>

               
                <div className="w-full lg:w-1/3 rounded-xl bg-gray-50 p-6 flex flex-col justify-center">
                    <h3 className="font-bold text-[#2072CC] text-lg mb-2">Server Platforms</h3>
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