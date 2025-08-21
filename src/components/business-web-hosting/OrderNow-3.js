import Image from "next/image"
export default function OrderNow3() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                        Reliable Business Host
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        Your business website is your online gateway to big business success in UK. You start as a small business with a limited budget, however, to grow big and become a successful large scale business, you have to think big from the start. And SeekaHost gives everything for small or big business thinkers to grow successfully.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        We have several hosting options that will suit your business website hosting requirements and you can see on our listed packages and pick. With that being said, if you are a UK based business and that&apos;s planning to thrive in Ceylon Island and cater for the internal markets, you can ask about hosting international server locations. We are here to support your business to grow online with the best hosting services.
                    </p>
                    <button className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/business-web-hosting/order-now-3.webp"
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