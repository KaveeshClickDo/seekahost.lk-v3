import Image from "next/image"
export default function OrderNow4() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/cheap-web-hosting-with-cpanel/order-now-4.webp"
                            alt="Order now Image"
                            width={609}
                            height={486}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4">
                    Ultimate Website Performance with cPanel Software
                    </h2>
                    <p className="text-[#1D216A] mb-4 md:text-xl font-medium">
                    Your SeekaHost cPanel Hosting account is loaded with software to maximize your website&apos;s performance. You can use CloudFlare to improve your site&apos;s content caching to decrease latency and enhance security against DDoS attacks. Access content compression settings for a faster loading site and instantly download backups to restore your website with DropMySute or choose your preferred PHP version and PHP extension. It&apos;s a powerhouse for the best web hosting experience.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer md:text-lg font-medium">
                        Order Now
                    </button>
                </div>
            </section>
        </>
    )
}