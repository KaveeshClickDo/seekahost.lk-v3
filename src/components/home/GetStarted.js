import Image from "next/image"
import Link from "next/link"
import { MdArrowForward } from "react-icons/md";
export default function GetStarted() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:mb-10">

                <div className="md:w-1/2 px-5 md:mr-15">
                    <h1 className="inline-block bg-blue-100 text-[#235E9D] text-sm md:text-lg px-3 py-1 rounded-full mb-4 font-medium">Our Solutions</h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-8">
                        Build a Node.js App in Minutes
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        SeekaHost offers the best and easy to use WordPress hosting control panel. The custom-built web hosting control panel for WordPress gives you a 1-click WordPress hosting solution with free SSL certificates and 1-clicka activation.
                    </p>
                    <p className="text-[#1D216A] mb-8">
                        You can find, register domain names, host the domain and create WordPress websites with blogs faster than ever. Bloggers top choice for WP hosting and the managed WordPress is the business owners best WP partner.
                    </p>
                    <div className="flex items-center space-x-4">
                        <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold">
                            Get Started
                        </button>
                        <Link
                            href="#"
                            className="flex items-center justify-center text-black text-base font-bold hover:text-[#2072CC] transition-colors gap-1 sm:gap-2 py-2"
                        >
                            Learn More <MdArrowForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </Link>
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/home/get-started.webp"
                            alt="Get Started Image"
                            width={1363}
                            height={1430}
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}