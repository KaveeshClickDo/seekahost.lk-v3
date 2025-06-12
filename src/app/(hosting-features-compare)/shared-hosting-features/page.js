import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Topbar from "@/components/shared/Topbar";
import { FaCheck, FaTimes } from 'react-icons/fa';
import Link from "next/link";
import { Fragment } from "react";
import { plansData } from "@/data/comparePlansData";
import BacktoTop from "@/components/shared/BacktoTop";
import Header from "@/components/shared/Header";

export const metadata = {
    title: "Compare Plans"
}

export default function HostingFeatures() {

    const { plans, featureCategories } = plansData;

    return (
        <>
            {/* <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 /> */}
            <Header />
            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-6">Compare our plans</h1>
                <p className="text-center text-gray-700 mb-8">See at a glance what each plan costs and what you get for your money.</p>

                <div className="relative overflow-x-auto overflow-y-auto border border-gray-200 rounded-lg shadow-sm">
                    <table className="w-full border-collapse">
                        <thead className="bg-white">
                            <tr className="border-b border-gray-500">
                                <th className="sticky top-0 bg-white py-4 px-6 text-left font-semibold text-lg md:text-xl z-8 shadow-sm"></th>
                                {plans.map((plan, index) => (
                                    <th
                                        key={index}
                                        className="sticky top-0 bg-white py-4 px-6 text-center font-bold text-lg md:text-xl z-8 shadow-sm"
                                    >
                                        {plan.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {featureCategories.map((category, categoryIndex) => (
                                <Fragment key={categoryIndex}>
                  
                                    <tr className="border-b border-gray-500 bg-[#F5FAFF]">
                                        <td colSpan={4} className="py-4 px-6 font-bold md:text-lg">
                                            {category.title}
                                        </td>
                                    </tr>

                    
                                    {category.features.map((feature, featureIndex) => (
                                        <tr key={featureIndex} className="border-b border-gray-300 hover:bg-gray-50">
                                            <td className="py-4 px-6 text-gray-700">
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
                                </Fragment>
                            ))}

      
                            <tr className="border-b border-gray-300 bg-[#F5FAFF]">
                                <td className="py-4 px-6 font-bold md:text-lg">
                                    Pricing
                                </td>
                                {plans.map((plan, index) => (
                                    <td key={index} className="py-4 px-6 text-center">
                                        <p className="text-gray-800 font-bold md:text-xl">LKR{plan.monthlyPrice}/mo</p>
                                        <p className="text-gray-500 text-sm">{plan.specialTextMonth}</p>
                                    </td>
                                ))}
                            </tr>

                            <tr className="border-b border-gray-300">
                                <td className="py-4 px-6 font-bold md:text-lg">
                                    Select plan
                                </td>
                                {plans.map((plan, index) => (
                                    <td key={index} className="py-4 px-6 text-center">
                                        <Link href="#"
                                            className="py-2 px-4 rounded text-white font-bold transition bg-[#1276DF] hover:bg-blue-700 inline-block"
                                        >
                                            Get {plan.name}
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <BacktoTop />
            <Footer />
        </>
    );
}