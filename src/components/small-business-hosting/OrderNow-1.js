import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/business-web-hosting/order-now-1.webp"
                            alt="Order now Image"
                            width={2900}
                            height={2312}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] md-4 md:mb-8">
                        No Hidden Fees – Transparent Pricing
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        <span className="font-bold">You only pay what you see</span><br />
                        Some providers lure you in with cheap transfer fees, then surprise you with costly renewals or upsells.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        At SeekAhost, we keep it clear and honest. You’ll know the exact cost before you transfer, and most domain transfers even include a free 1-year extension.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>

                </div>
            </section>
        </>
    )
}