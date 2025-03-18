import Image from "next/image"
export default function Hero () {
    return (
        <>
            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-6">

                <div className="md:w-1/2 px-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Sri Lanka&rsquo;s Best Web Host <br /> For Entrepreneurs & Business Owners
                    </h2>
                    <p className="text-gray-700 mb-4">
                        “SeekaHost is far more than a hosting company with powerful hosting services and web solutions...
                        we are also a powerful business network.”
                    </p>
                    <p className="text-gray-700 mb-4">
                        We love our customers...or “SeekaHosters” as we call them, and we are always looking to delight...
                        that&rsquo;s why we love to connect likeminded people and companies.
                    </p>
                    <p className="text-gray-700">
                        We are a company run by Entrepreneurs, who drive entrepreneurial spirit and we love to help create, inspire
                        and share success. Become a SeekaHoster and take the next step in your successful journey.
                    </p>
                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 gap-4 grid">
                    {/* Top larger image */}
                    <div className="w-full relative">
                        <Image
                            src="/about-hero1.webp"
                            alt="People collaborating around a table"
                            width={552}
                            height={210}
                            className="rounded-3xl w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Bottom two images in a row */}
                    <div className="flex flex-row gap-4">
                        <div className="w-full md:w-1/2 relative">
                            <Image
                                src="/about-hero2.webp"
                                alt="Three people looking at laptop"
                                width={268}
                                height={211}
                                className="rounded-3xl w-full h-auto"
                                priority
                            />
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <Image
                                src="/about-hero3.webp"
                                alt="Two people looking at laptop"
                                width={268}
                                height={211}
                                className="rounded-3xl w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}