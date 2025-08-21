import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-8">
                Unmatched Performance You Can Trust
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                    Our web server and operating system, designed exclusively for WordPress, deliver lightning-fast performance with up to 20x faster request processing. Built-in Object Cache and OPcache optimize load times without the need for paid plugins.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                    Boost your site&apos;s speed with code minification, data center rerouting, and automatic image optimization. SeekaHost&apos;s free, unlimited CDN enhances performance, increasing your website&apos;s speed score by up to 40%.
                    </p>
                    <button className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="w-full relative">
                        <Image
                            src="/images/register-domain/order-now.webp"
                            alt="Order now Image"
                            width={2900}
                            height={2312}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}