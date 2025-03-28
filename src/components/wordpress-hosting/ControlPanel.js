import Image from "next/image";

export default function ControlPanel() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0">
            

                <div className="md:w-1/2 mb-10 lg:mb-0 md:pr-10 px-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4">
                        Control Panel Features
                    </h2>
                    <p className="text-[#1D216A] mb-4 md:text-xl font-medium">
                        The WordPress hosting control panel provides many features and some
                        of them are domain registration, 1-Click WP hosting, free SSL
                        certificate with 1-click activation, daily backups to be taken at
                        any time, a knowledgebase for WordPress hosting tips and access to
                        Seekahost University WordPress tutorials for bloggers.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer md:text-lg font-medium">
                        Get Started
                    </button>
                </div>


                <div className="md:w-1/2 grid grid-cols-2 gap-6 relative md:my-10">

                    <div className="bg-[#DEF2FF] rounded-2xl p-4 text-center shadow-sm">
                        <Image
                            src="/images/shared/ddos-protected.svg"
                            alt="Domain Registration"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-xl font-semibold mb-2">
                            Domain Registration
                        </h3>
                        <p className="text-sm text-gray-700 md:text-lg">
                            You can easily register your ideal domain names inside the
                            control panel.
                        </p>
                    </div>


                    <div className="bg-[#F4F4F4] rounded-2xl p-4 text-center shadow-sm">
                        <Image
                            src="/images/shared/ddos-protected.svg"
                            alt="WP Hosting Plans"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-xl font-semibold mb-2">
                            WP Hosting Plans
                        </h3>
                        <p className="text-sm text-gray-700 md:text-lg">
                            4 best WordPress hosting packages suitable for bloggers
                            and business owners.
                        </p>
                    </div>

                    {/* <div className="relative -top-4 md:-top-6 bg-blue-50 rounded-2xl p-6 text-center shadow-sm"> */}
                    <div className="bg-[#F4F4F4] rounded-2xl p-4 text-center shadow-sm">
                        <Image
                            src="/images/shared/ddos-protected.svg"
                            alt="1-Click WP Installer"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-xl font-semibold mb-2">
                            1-Click WP Installer
                        </h3>
                        <p className="text-sm text-gray-700 md:text-lg">
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
                        <h3 className="md:text-xl font-semibold mb-2">
                            Website Traffic/Data
                        </h3>
                        <p className="text-sm text-gray-700 md:text-lg">
                            Track your WordPress site traffic daily via cPanel & Google
                            analytics integrations.
                        </p>
                    </div>
                </div>
            
        </section>
    );
}
