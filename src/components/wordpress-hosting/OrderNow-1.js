import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-7">
                        Easy To Manage Via Web Hosting Control Panel
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        SeekaHost offers the best and easy to use WordPress hosting control panel. The custom-built web hosting control panel for WordPress gives you a 1-click WordPress hosting solution with free SSL certificates and 1-clicka activation.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        You can find, register domain names, host the domain and create WordPress websites with blogs faster than ever. Bloggers top choice for WP hosting and the managed WordPress is the business owners best WP partner.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-7">
                        Order Now
                    </button>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0">
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
            </section>
        </>
    )
}