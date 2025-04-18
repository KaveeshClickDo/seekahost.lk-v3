import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Topbar from "@/components/shared/Topbar";
import { FaCheck, FaTimes } from 'react-icons/fa';
import Link from "next/link";

export default function HostingFeatures() {
    // Plans data
    const plans = [
        { name: "Starter", },
        { name: "Turbo", },
        { name: "Supersonic", }
    ];

    // Features data - each feature has a name and values for each plan
    const features = [
        {
            name: "Websites",
            values: ["25", "50", "100"]
        },
        {
            name: "Managed hosting for WordPress",
            values: [true, true, true]
        },
        {
            name: "Visits monthly",
            values: ["25 000", "100 000", "200 000"]
        },
        {
            name: "SSD storage",
            values: ["25 GB", "50 GB", "100 GB"]
        },
        {
            name: "Files and directories (inodes)",
            values: ["400 000", "600 000", "2 000 000"]
        },
        {
            name: "Free pre-built templates",
            values: [true, true, true]
        },
        {
            name: "Free automatic website migration",
            values: [true, true, true]
        },
        {
            name: "Unlimited free SSL",
            values: [true, true, true]
        },
        {
            name: "Mailboxes - free for 1 year",
            values: ["50", "100", "200"]
        },
        {
            name: "Weekly backups",
            values: [true, true, true]
        }
    ];

    const wpfeatures = [
        {
            name: "Websites",
            values: ["25", "50", "100"]
        },
        {
            name: "Managed hosting for WordPress",
            values: [false, true, true]
        },
        {
            name: "Visits monthly",
            values: ["25 000", "100 000", "200 000"]
        },
        {
            name: "SSD storage",
            values: ["25 GB", "50 GB", "100 GB"]
        },
        {
            name: "Files and directories (inodes)",
            values: ["400 000", "600 000", "2 000 000"]
        },
        {
            name: "Free pre-built templates",
            values: [false, true, true]
        },
        {
            name: "Free automatic website migration",
            values: [false, true, true]
        },
        {
            name: "Unlimited free SSL",
            values: [false, true, true]
        },
        {
            name: "Mailboxes - free for 1 year",
            values: ["50", "100", "200"]
        },
        {
            name: "Weekly backups",
            values: [false, true, true]
        }
    ];

    const hostfeatures = [
        {
            name: "Websites",
            values: ["25", "50", "100"]
        },
        {
            name: "Managed hosting for WordPress",
            values: [false, false, true]
        },
        {
            name: "Visits monthly",
            values: ["25 000", "100 000", "200 000"]
        },
        {
            name: "SSD storage",
            values: ["25 GB", "50 GB", "100 GB"]
        },
        {
            name: "Files and directories (inodes)",
            values: ["400 000", "600 000", "2 000 000"]
        },
        {
            name: "Free pre-built templates",
            values: [false, false, true]
        },
        {
            name: "Free automatic website migration",
            values: [false, false, true]
        },
        {
            name: "Unlimited free SSL",
            values: [false, false, true]
        },
        {
            name: "Mailboxes - free for 1 year",
            values: ["50", "100", "200"]
        },
        {
            name: "Weekly backups",
            values: [false, false, true]
        }
    ];
    return (
        <>
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />
            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-2">Compare our plans</h1>
                <p className="text-center text-gray-600 mb-8">See at a glance what each plan costs and what you get for your money.</p>

                <div className="relative overflow-x-auto overflow-y-auto max-h-[70vh] border border-gray-200 rounded-lg shadow-sm">
                    <table className="w-full border-collapse">
                        <thead className="bg-white">
                            <tr className="border-b border-gray-500">
                                <th className="sticky top-0 bg-white py-4 px-6 text-left font-semibold text-lg md:text-xl z-10 shadow-sm"></th>
                                {plans.map((plan, index) => (
                                    <th
                                        key={index}
                                        className="sticky top-0 bg-white py-4 px-6 text-center font-semibold text-lg md:text-xl z-10 shadow-sm"
                                    >
                                        {plan.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-500 bg-[#F5FAFF]">
                                <td colSpan={4} className="py-4 px-6 font-semibold md:text-lg">
                                    Top features
                                </td>
                            </tr>

                            {features.map((feature, index) => (
                                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                                    <td className="py-4 px-6 text-gray-700 font-medium">
                                        {feature.name}
                                    </td>
                                    {feature.values.map((value, valueIndex) => (
                                        <td key={valueIndex} className="py-4 px-6 text-center">
                                            {typeof value === 'boolean' ? (
                                                value ?
                                                    <FaCheck className="mx-auto text-green-500" size={20} /> :
                                                    <FaTimes className="mx-auto text-red-500" size={20} />
                                            ) : (
                                                <span className="text-gray-800">{value}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}

                            <tr className="border-b border-gray-500 bg-[#F5FAFF]">
                                <td colSpan={4} className="py-4 px-6 font-semibold md:text-lg">
                                    WordPress features
                                </td>
                            </tr>

                            {wpfeatures.map((feature, index) => (
                                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                                    <td className="py-4 px-6 text-gray-700 font-medium">
                                        {feature.name}
                                    </td>
                                    {feature.values.map((value, valueIndex) => (
                                        <td key={valueIndex} className="py-4 px-6 text-center">
                                            {typeof value === 'boolean' ? (
                                                value ?
                                                    <FaCheck className="mx-auto text-green-500" size={20} /> :
                                                    <FaTimes className="mx-auto text-red-500" size={20} />
                                            ) : (
                                                <span className="text-gray-800">{value}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}

                            <tr className="border-b border-gray-500 bg-[#F5FAFF]">
                                <td colSpan={4} className="py-4 px-6 font-semibold md:text-lg">
                                    Host features
                                </td>
                            </tr>

                            {hostfeatures.map((feature, index) => (
                                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                                    <td className="py-4 px-6 text-gray-700 font-medium">
                                        {feature.name}
                                    </td>
                                    {feature.values.map((value, valueIndex) => (
                                        <td key={valueIndex} className="py-4 px-6 text-center">
                                            {typeof value === 'boolean' ? (
                                                value ?
                                                    <FaCheck className="mx-auto text-green-500" size={20} /> :
                                                    <FaTimes className="mx-auto text-red-500" size={20} />
                                            ) : (
                                                <span className="text-gray-800">{value}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}

                            {/* Add buttons at the bottom as well */}
                            <tr className="border-b border-gray-300">
                                <td className="py-4 px-6 font-semibold md:text-lg">
                                    Select plan
                                </td>
                                {plans.map((plan, index) => (
                                    <td key={index} className="py-4 px-6 text-center">
                                        <Link href="#"
                                            className="py-2 px-4 rounded text-white font-semibold transition bg-[#1276DF] hover:bg-blue-700 md:text-xl inline-block"
                                        >
                                            Get Plan
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </>
    );
}