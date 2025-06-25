import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/free-business-listing/order-now.webp"
                            alt="Order now Image"
                            width={1450}
                            height={1156}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] md-4 md:mb-8">
                        The free business listings are a great way to get the SEO boost
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        Join SeekaHost business web hosting and get free business listings on the UK business List and top 100 UK Business directories.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        Local business directory listings are one of the best ways to put your business website in front of thousands of people.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        We have a list of over top 100 UK business directories that we use to list our clients. Every business owner who joins our London server hosting, UK business websites services annual plan gets complimentary “business directory listing” on all the top 100 UK business directories for free.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        Get Started Now
                    </button>

                </div>
            </section>
        </>
    )
}