import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/nodejs-hosting/order-now-1.webp"
                            alt="Order now Image"
                            width={2900}
                            height={2312}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-7">
                        Ideal For Business Websites
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        If you are looking for the best WordPress hosting solution for your business websites, SeekaHost offers a range of WP sevrices. From managed WP to easy to manage control panel as well as cPanels and Webmin or even Plesk control panel with support.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        However, we do recommend you using the SeekaHost control panel for the best user experience and WordPress site speeds.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-7">
                        Order Now
                    </button>

                </div>
            </section>
        </>
    )
}