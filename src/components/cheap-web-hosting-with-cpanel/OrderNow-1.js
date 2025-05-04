import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/wordpress-hosting/order-now-1.webp"
                            alt="Order now Image"
                            width={2900}
                            height={2312}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                    The Power of cPanel Hosting with SeekaHost
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                    Premium web hosting does not have to be expensive or complicated. If you choose the SeekaHost cPanel Hosting, you will realise this. cPanel was launched in 1996 and changed web hosting for its users significantly with its innovative automation tools to manage website hosting more easily and quickly. It remains the market leader among the control panels available in the market as it is a trusted and established brand that has evolved over the years.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>

                </div>
            </section>
        </>
    )
}