import Image from "next/image";
import SeePlansButton from "./SeePlansButtons";

export default function ControlPanel() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">


            <div className="md:w-1/2 mb-10 lg:mb-0 md:pr-10 px-4">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-7">
                    Free cPanel® Website Migration
                </h2>
                <p className="text-[#1D216A] mb-4">
                    Migrating your website shouldn&apos;t be a hassle—or a cost. We offer free website migration from any existing cPanel® hosting provider. Our expert team will handle everything for you—files, databases, emails—so there’s no downtime or stress. You get a smooth switch without lifting a finger.
                </p>
                <SeePlansButton
                        text="Hosting Plans"
                        baseClasses={true}
                        className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold md:mt-7"
                    />
            </div>


            <div className="md:w-1/2 grid grid-cols-2 gap-6 relative md:my-10">
                
                <div className="grid gap-6 mb-10">
                    <div className="bg-[#F4F7FA] rounded-2xl p-4 text-center shadow hover:shadow-lg transition-shadow">
                        <Image
                            src="/images/cheap-web-hosting-with-cpanel/seamless-transfer.svg"
                            alt="Seamless Transfer"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-2xl font-bold mb-2">
                            Seamless Transfer
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 mx-2">
                            We’ll migrate your website, files, databases, and emails safely and securely.
                        </p>
                    </div>


                    <div className="bg-[#F4F7FA] rounded-2xl p-4 text-center shadow hover:shadow-lg transition-shadow">
                        <Image
                            src="/images/cheap-web-hosting-with-cpanel/expert-assistance.svg"
                            alt="Expert Assistance"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-2xl font-bold mb-2">
                            Expert Assistance
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 mx-2">
                            Our migration specialists ensure everything is set up and working perfectly
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 mt-10">
                    <div className="bg-[#F4F7FA] rounded-2xl p-4 text-center shadow hover:shadow-lg transition-shadow">
                        <Image
                            src="/images/cheap-web-hosting-with-cpanel/zero-downtime.svg"
                            alt="Zero Downtime"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-2xl font-bold mb-2">
                            Zero Downtime
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 mx-2">
                            Your site stays online throughout the migration process without interruptions.
                        </p>
                    </div>


                    <div className="bg-[#F4F7FA] rounded-2xl p-4 text-center shadow hover:shadow-lg transition-shadow">
                        <Image
                            src="/images/cheap-web-hosting-with-cpanel/completely-free.svg"
                            alt="Completely Free"
                            className="mb-4 mx-auto"
                            width={75}
                            height={75}
                        />
                        <h3 className="md:text-2xl font-bold mb-2">
                            Completely Free
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
