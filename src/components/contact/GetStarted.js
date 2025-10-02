import Image from "next/image"
import Link from "next/link"
import { MdArrowForward } from "react-icons/md";

export default function GetStarted() {
    return (
        <section className="relative w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <span className="inline-block bg-[#CCE5FF] text-blue-700 text-sm md:text-lg font-medium  px-3 py-1 rounded-full mb-4">
                            Contact Us
                        </span>

                        <h2 className="text-2xl md:text-4xl font-bold">
                            Personal Consultant
                        </h2>

                        <ul className="space-y-4 py-4">
                            <li className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                <span className="mt-1 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                    </svg>
                                </span>
                                <span className="text-base sm:text-lg">
                                    <strong className="text-gray-900">24/7 Support</strong> – Our team is always available to assist you anytime, anywhere.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                <span className="mt-1 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                    </svg>
                                </span>
                                <span className="text-base sm:text-lg">
                                    <strong className="text-gray-900">Quick Response</strong> – Fast turnaround on all inquiries to keep your business moving.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                <span className="mt-1 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                    </svg>
                                </span>
                                <span className="text-base sm:text-lg">
                                    <strong className="text-gray-900">Multiple Channels</strong> – Reach us via email, chat, or phone—whatever works best for you.
                                </span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <button className="bg-[#0066CC] text-white font-bold w-full sm:w-auto border border-blue-600 px-4 sm:px-5 md:px-6 py-3 md:py-4 rounded-full hover:bg-white hover:text-[#2072CC] transition-colors duration-300">
                                Get Started
                            </button>
                            <Link
                                href="#"
                                className="flex items-center font-semibold text-gray-700 hover:text-blue-600 transition-colors gap-2 group"
                            >
                                Learn More
                                <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <div className="relative w-full max-w-xl">
                            <Image
                                src="/images/contact/contact-getstarted.webp"
                                alt="Human call center"
                                width={2557}
                                height={2034}
                                className="rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}