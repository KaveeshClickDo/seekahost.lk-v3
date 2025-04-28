import Image from "next/image";

export default function Features() {
    return (
        <section className="max-w-5xl mx-auto py-12 px-4 md:px-0 md:my-10">

            <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4">
                    Node.js Hosting Features
                </h2>
                <p className="text-gray-700 font-medium md:text-lg max-w-2xl mx-auto">
                    Enjoy high-performance, secure, and easy-to-manage Node.js hosting.
                    Explore our top features designed to help you scale and succeed.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative mt-10 mx-4">

                <div className="bg-[#F4F4F4] rounded-2xl p-4 text-center shadow-sm">
                    <Image
                        src="/images/shared/ddos-protected.svg"
                        alt="1-Click WP Installer"
                        className="mb-4 mx-auto"
                        width={75}
                        height={75}
                    />
                    <h3 className="md:text-2xl font-semibold mb-2">
                        1-Click WP Installer
                    </h3>
                    <p className="text-sm text-gray-700 md:text-lg font-medium">
                        Easiest way to just 1-click install WordPress on your domain
                        and get online.
                    </p>
                </div>


                <div className="bg-[#DEF2FF] rounded-2xl p-4 text-center shadow-sm">
                    <Image
                        src="/images/shared/ddos-protected.svg"
                        alt="Website Traffic/Data"
                        className="mb-4 mx-auto"
                        width={75}
                        height={75}
                    />
                    <h3 className="md:text-2xl font-semibold mb-2">
                        Website Traffic/Data
                    </h3>
                    <p className="text-sm text-gray-700 md:text-lg font-medium">
                        Track your WordPress site traffic daily via cPanel & Google
                        analytics integrations.
                    </p>
                </div>

                <div className="md:bg-[#F4F4F4] bg-[#DEF2FF] rounded-2xl p-4 text-center shadow-sm">
                    <Image
                        src="/images/shared/ddos-protected.svg"
                        alt="Domain Registration"
                        className="mb-4 mx-auto"
                        width={75}
                        height={75}
                    />
                    <h3 className="md:text-2xl font-semibold mb-2">
                        Domain Registration
                    </h3>
                    <p className="text-sm text-gray-700 md:text-lg font-medium">
                        You can easily register your ideal domain names inside the
                        control panel.
                    </p>
                </div>


                <div className="md:bg-[#DEF2FF] bg-[#F4F4F4] rounded-2xl p-4 text-center shadow-sm">
                    <Image
                        src="/images/shared/ddos-protected.svg"
                        alt="WP Hosting Plans"
                        className="mb-4 mx-auto"
                        width={75}
                        height={75}
                    />
                    <h3 className="md:text-2xl font-semibold mb-2">
                        WP Hosting Plans
                    </h3>
                    <p className="text-sm text-gray-700 md:text-lg font-medium">
                        4 best WordPress hosting packages suitable for bloggers
                        and business owners.
                    </p>
                </div>

                <div className="bg-[#F4F4F4] rounded-2xl p-4 text-center shadow-sm">
                    <Image
                        src="/images/shared/ddos-protected.svg"
                        alt="1-Click WP Installer"
                        className="mb-4 mx-auto"
                        width={75}
                        height={75}
                    />
                    <h3 className="md:text-2xl font-semibold mb-2">
                        1-Click WP Installer
                    </h3>
                    <p className="text-sm text-gray-700 md:text-lg font-medium">
                        Easiest way to just 1-click install WordPress on your domain
                        and get online.
                    </p>
                </div>


                <div className="bg-[#DEF2FF] rounded-2xl p-4 text-center shadow-sm">
                    <Image
                        src="/images/shared/ddos-protected.svg"
                        alt="Website Traffic/Data"
                        className="mb-4 mx-auto"
                        width={75}
                        height={75}
                    />
                    <h3 className="md:text-2xl font-semibold mb-2">
                        Website Traffic/Data
                    </h3>
                    <p className="text-sm text-gray-700 md:text-lg font-medium">
                        Track your WordPress site traffic daily via cPanel & Google
                        analytics integrations.
                    </p>
                </div>
            </div>

        </section>
    );
} 