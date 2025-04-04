import Image from "next/image"
import Link from "next/link"
import { MdArrowForward } from "react-icons/md";

export default function GetStarted() {
    return (
        <section className="relative w-full py-16 md:my-10">
            <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center">

                <div className="md:w-1/2 mb-8 md:mb-0 text-white">
                    <h1 className="inline-block bg-[#CCE5FF] text-blue-700 text-sm px-3 py-2 rounded-full mb-4">Lorem ipsum dolor</h1>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug text-black">
                        Lorem ipsum dolor et, consectetur
                    </h2>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-start text-xl text-gray-700 font-medium">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Lorem ipsum dolor et, consectetur
                        </li>
                        <li className="flex items-start text-xl text-gray-700 font-medium">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Lorem ipsum dolor et, consectetur
                        </li>
                        <li className="flex items-start text-xl text-gray-700 font-medium">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Lorem ipsum dolor et, consectetur
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <button className="bg-blue-600 text-white text-base sm:text-lg md:text-xl font-medium w-full sm:w-auto border border-blue-600 px-4 sm:px-5 md:px-6 py-3 md:py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300">
                            Get Started
                        </button>
                        <Link
                            href="#"
                            className="flex items-center justify-center text-black text-base sm:text-lg md:text-xl font-medium hover:text-blue-600 transition-colors gap-1 sm:gap-2 py-2"
                        >
                            Learn More <MdArrowForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </Link>
                    </div>
                </div>


                <div className="md:w-1/2 relative flex justify-center items-center">
                    <Image
                        src="/images/contact/contact-getstarted.webp"
                        alt="Human call center"
                        width={552}
                        height={439}
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    )
}