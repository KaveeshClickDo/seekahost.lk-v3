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
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                        Optimized for Speed & Stability
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        <span className="font-bold">High-performance infrastructure for fast, reliable apps</span><br /> Our servers are built with true NVMe SSDs, low-latency caching, and finely tuned environments for Node.js. That means faster load times, better concurrency handling, and minimal downtime.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        We don’t overcrowd servers, so your app always performs at its best—even under heavy traffic.
                    </p>
                    <button className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>

                </div>
            </section>
        </>
    )
}