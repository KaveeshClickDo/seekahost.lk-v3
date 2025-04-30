import Image from "next/image"
export default function OrderNow() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#1D276A] mb-4">
                        Finding a domain name
                    </h2>
                    <p className="text-[#1D216A] mb-4 md:text-lg font-medium">
                        Finding a domain name for your website is the starting point to get online. At SeekaHost you can register the best domain name for your website.
                    </p>
                    <p className="text-[#1D216A] mb-4 md:text-lg font-medium">
                        We care for our customers and we have all the best domain TLDs that you will seek. Join us by registering a domain name and get online today. You can talk to us to help you find the best domain name for your website.
                    </p>
                    <p className="text-[#1D216A] mb-4 md:text-lg font-medium">
                        We can check what domain name will be best for you. Once you get online by registering the domain, you get hosting packages that will help your site to be hosted. We do recommend our WordPress hosting for you domains to be hosted.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer md:text-lg font-medium">
                        Get Live Chat Support
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
                            priority
                        />
                    </div>
                </div>
            </section>
        </>
    )
}