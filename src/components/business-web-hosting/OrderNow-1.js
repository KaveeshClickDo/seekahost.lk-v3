import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/business-web-hosting/order-now-1.webp"
                            alt="Order now Image"
                            width={609}
                            height={486}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4">
                        #1 Sri Lankans Business Web Hosting Choice
                    </h2>
                    <p className="text-[#1D216A] mb-4 md:text-xl font-medium">
                        Your business website is your gateway to your customers and eventual success of your business. SeekaHost Business Web Hosting packages are for you to build a thriving brand online.
                    </p>
                    <p className="text-[#1D216A] mb-4 md:text-xl font-medium">
                        All our business hosting plans come with a 99.99% network uptime guarantee. SeekaHost Business Web Hosting packages are for your business to give the best performance it needs.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer md:text-lg font-medium">
                        Order Now
                    </button>

                </div>
            </section>
        </>
    )
}