import Image from "next/image"
export default function OrderNow() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/london-server-hosting/order-now.webp"
                            alt="Order now Image"
                            width={1450}
                            height={1156}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] md-4 md:mb-8">
                        How to get business web hosting with a London server?
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        If you have questions about hosting your London-based business on a London web hosting server, get in touch with support@seekahost.com or contact us via phone for a free consultation. SeekaHost is the ultimate web hosting solution for your business website!
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        You can see our best selling London server hosting package online. You can reach Fernando and book a free 10 minute consultation to look at your business website and identify where it is hosted and what would be the best business website hosting solution.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>

                </div>
            </section>
        </>
    )
}