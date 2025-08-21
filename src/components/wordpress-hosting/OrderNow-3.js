import Image from "next/image"
export default function OrderNow3() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                        Robust Security & Automatic Backups
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        <span className="font-bold">Your website is protected 24/7</span><br />
                        We take your website’s safety seriously. Enjoy free SSL certificates for every domain, daily automated backups, malware scanning, and firewalls—all included at no extra cost.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        If anything goes wrong, restore your site in just one click. It’s enterprise-level security without the enterprise price tag.
                    </p>
                    <button className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/wordpress-hosting/order-now-3.webp"
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