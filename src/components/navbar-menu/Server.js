import Link from "next/link";
import Image from "next/image";

export default function Servers() {
    return (
        <div className="w-3xl xl:w-5xl rounded-xl bg-white shadow-lg z-20">
            <div className="container mx-auto flex flex-wrap">

                <div className="w-full lg:w-2/3 p-4">
                    <h3 className="font-bold text-gray-700 mb-4 uppercase text-sm">ROOT SERVER</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                        <Link href="/dedicated-servers" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/dedicated-servers.svg"
                                    alt="Dedicated Servers"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Dedicated Servers</p>
                                <p className="text-sm text-gray-600">Full control with powerful, private hosting</p>
                            </div>
                        </Link>

                        <Link href="/cloud-servers" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/cloud-servers.svg"
                                    alt="Cloud Servers"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">Cloud Servers</p>
                                <p className="text-sm text-gray-600">Scalable, reliable hosting in the cloud</p>
                            </div>
                        </Link>


                    </div>

                    <h3 className="font-bold text-gray-700 mt-6 mb-4 uppercase text-sm">VPS</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                        <Link href="/vps-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/vps-hostings.svg"
                                    alt="VPS Hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">VPS Hosting</p>
                                <p className="text-sm text-gray-600">Fully virtualized private servers</p>
                            </div>
                        </Link>

                        <Link href="/n8n-vps-hosting" className="flex items-start p-3 hover:bg-gray-50 rounded group">
                            <div className="mr-3 text-blue-500 mt-1 flex-shrink-0">
                                <Image
                                    src="/images/shared/vps-hostings.svg"
                                    alt="n8n VPS hosting"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 group-hover:text-blue-500">n8n VPS hosting</p>
                                <p className="text-sm text-gray-600">Automate workflows on a dedicated VPS</p>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className="w-full lg:w-1/3 rounded-xl bg-gray-50 p-6 flex flex-col justify-center">
                    <h3 className="font-bold text-[#2072CC] text-lg mb-2">Server Platforms</h3>
                    <p className="text-gray-600 mb-4">Powerful server hosting designed for businesses and high-traffic websites.</p>

                    <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">• Managed or self-managed</Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">• Scalable CPU, RAM & storage</Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">• DDoS & firewall protection</Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">• Full root access</Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link href="#" className="block">• 24/7 uptime monitoring</Link>
                        </li>
                    </ul>


                    <div className="mt-6">
                        <Image
                            src="/images/navbar-menu/server.webp"
                            alt="Server Platforms"
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