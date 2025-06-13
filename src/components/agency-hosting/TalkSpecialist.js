import Image from "next/image"
import Link from "next/link"
export default function TalkSpecialist() {
    return (
        <>
            <section className="relative w-full bg-[#0A488A]">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-0">

                    <div className="md:w-1/2 px-5 md:mr-15 pt-16 md:py-16">

                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                            Talk with our team
                        </h2>
                        <p className="text-white mb-8">
                            Discover the best strategies for scaling your web projects effortlessly. Our experts help you identify the right path for growth and performance.
                        </p>
                        <p className="text-white mb-8">
                            Learn how to migrate seamlessly with minimal downtime and maximum reliability. We ensure your transition is smooth and hassle-free.
                        </p>
                        <p className="text-white mb-8">
                            Find the perfect solution tailored to your needs. Whether you&rsquo;re starting fresh or expanding, we guide you every step of the way.
                        </p>

                        <Link
                            href="/personalized-hosting" className="inline-block bg-white text-[#0066CC] font-bold border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-7"
                        >
                            Talk with a specialist
                        </Link>
                    </div>

                    <div className="md:w-1/2 mt-6 md:mt-0 md:ml-20">
                        <div className="w-full relative">
                            <Image
                                src="/images/home/consultant-image.webp"
                                alt="consultant image"
                                width={1944}
                                height={2812}
                                className="w-full md:w-6/8 h-auto"
                            />
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}