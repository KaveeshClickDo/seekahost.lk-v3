import Image from "next/image";

export default function ControlPanel() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">


            <div className="md:w-1/2 mb-10 lg:mb-0 md:pr-10 px-4">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-7">
                    Control Panel Features
                </h2>
                <p className="text-[#1D216A] mb-4">
                    The WordPress hosting control panel provides many features and some
                    of them are domain registration, 1-Click WP hosting, free SSL
                    certificate with 1-click activation, daily backups to be taken at
                    any time, a knowledgebase for WordPress hosting tips and access to
                    Seekahost University WordPress tutorials for bloggers.
                </p>
                <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-7">
                    Get Started
                </button>
            </div>


            <div className="md:w-1/2 grid grid-cols-2 gap-6 relative md:my-10">
                
                <div className="grid gap-6 mb-10">
                    <div className="bg-[#F4F7FA] rounded-2xl p-4 text-center shadow hover:shadow-lg transition-shadow">
                        <Image
                            src="/images/shared/ddos-protected.svg"
                            alt="Domain Registration"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-2xl font-bold mb-2">
                            Domain Registration
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 mx-2">
                            You can easily register your ideal domain names inside the
                            control panel now.
                        </p>
                    </div>


                    <div className="bg-[#F4F7FA] rounded-2xl p-4 text-center shadow hover:shadow-lg transition-shadow">
                        <Image
                            src="/images/shared/ddos-protected.svg"
                            alt="WP Hosting Plans"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-2xl font-bold mb-2">
                            WP Hosting Plans
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 mx-2">
                            4 best WordPress hosting packages suitable for bloggers
                            and business owners.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 mt-10">
                    <div className="bg-[#F4F7FA] rounded-2xl p-4 text-center shadow hover:shadow-lg transition-shadow">
                        <Image
                            src="/images/shared/ddos-protected.svg"
                            alt="1-Click WP Installer"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-2xl font-bold mb-2">
                            1-Click WP Installer
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 mx-2">
                            Easiest way to just 1-click install WordPress on your domain
                            and get online.
                        </p>
                    </div>


                    <div className="bg-[#F4F7FA] rounded-2xl p-4 text-center shadow hover:shadow-lg transition-shadow">
                        <Image
                            src="/images/shared/ddos-protected.svg"
                            alt="Website Traffic/Data"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-2xl font-bold mb-2">
                            Website Traffic/Data
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 mx-2">
                            Track your WordPress site traffic daily via cPanel & Google
                            analytics integrations.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
