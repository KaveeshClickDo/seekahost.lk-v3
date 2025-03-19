import Image from "next/image"
import Link from "next/link"
export default function GetStarted() {
    return (
        <section className="relative w-full py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">

                <div className="md:w-1/2 mb-8 md:mb-0 md:pl-16 pl-6 text-white">
                    <h1 className="inline-block bg-[#CCE5FF] text-blue-700 text-sm px-3 py-2 rounded-full mb-4">Lorem ipsum dolor</h1>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug text-black">
                    Lorem ipsum dolor et, consectetur
                    </h2>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-start text-xl text-gray-700">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Lorem ipsum dolor et, consectetur
                        </li>
                        <li className="flex items-start text-xl text-gray-700">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Lorem ipsum dolor et, consectetur
                        </li>
                        <li className="flex items-start text-xl text-gray-700">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Lorem ipsum dolor et, consectetur
                        </li>
                    </ul>
                    <button className="bg-[#0066CC] text-white text-xl border border-[#0066CC] px-6 py-4 rounded-full hover:bg-white hover:text-[#0066CC] transition-colors">
                        Get Started
                    </button>
                    <Link href="#" className="text-black text-xl px-10">Learn More ➡</Link>
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