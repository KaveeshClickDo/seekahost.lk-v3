import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/seo-consultancy/order-now.webp"
                            alt="Order now Image"
                            width={1450}
                            height={1156}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] md-4 md:mb-8">
                        How to get SEO Consultancy from us?
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        You must be one of our business web hosting services customers to get free SEO consultancy advice and on page SEO support. All our business web hosting services customers gets a VIP support for their business websites.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        We do offer Google AdWords Campaigns at an affordable fee for our business customers and also free business listing on top UK business directories. The free listing on top 100 plus UK business directories will greatly help your UK business websites to rank higher on Google search engine.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        Get Started Now
                    </button>

                </div>
            </section>
        </>
    )
}