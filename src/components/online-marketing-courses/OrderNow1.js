import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/online-marketing-courses/order-now.webp"
                            alt="Order now Image"
                            width={1450}
                            height={1156}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] md-4 md:mb-8">
                        Online Marketing Courses:
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                       Online marketing skills are highly in demand and any business owner can now take our online marketing courses and learn the digital marketing skills free.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        We have many online marketing courses and our goal is to help anyone learn internet marketing skills and grow online.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        Learning online marketing can help your business in many ways. As the leading business website hosting services provider in the United Kingdom we have taken initiative to provide free online marketing courses for our customers.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        Get Started Now
                    </button>

                </div>
            </section>
        </>
    )
}