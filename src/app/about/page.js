import Image from "next/image"
import Navbar from "@/components/Navbar";

export default function about() {
    return (
        <>
            <Navbar />
            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-6">
                
                <div className="md:w-1/2 px-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Sri Lanka's Best Web Host <br /> For Entrepreneurs & Business Owners
                    </h2>
                    <p className="text-gray-700 mb-4">
                        “SeekaHost is far more than a hosting company with powerful hosting services and web solutions...
                        we are also a powerful business network.”
                    </p>
                    <p className="text-gray-700 mb-4">
                        We love our customers...or “SeekaHosters” as we call them, and we are always looking to delight...
                        that’s why we love to connect likeminded people and companies.
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
                            height={0}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                    {/* Bottom two images in a row */}
                    <div className="flex flex-row gap-4">
                        <div className="w-full md:w-1/2 relative">
                            <Image
                                src="/about-hero2.webp"
                                alt="Three people looking at laptop"
                                width={268}
                                height={0}
                                className="rounded-3xl w-full h-auto"
                            />
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <Image
                                src="/about-hero3.webp"
                                alt="Two people looking at laptop"
                                width={268}
                                height={0}
                                className="rounded-3xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="relative w-full bg-no-repeat bg-cover py-16"
                style={{
                    backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.6), rgba(30, 58, 138, 0.6)), url('/middle-banner.svg')"
                }}
            >


                <div className="relative z-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                <div className="md:w-1/2 px-5">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    What we offer for <br /> <span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65"> Sri Lankans</span>
                    </h2>
                    <p className="text-white mb-4">
                    Whether you are a start-up company in Sri Lanka or one with an established business presence in the Sri Lankan market, your website is the first point of reference for your customers.
                    As millions of people use search engines to find your services or products, the web is the first place they will encounter your enterprise.
                    </p>
                    <p className="text-white mb-4">
                    We have strong partnerships with the best web service providers in the world to assist you with the latest technological advances and guarantee 99.9% uptime for your website. Because we believe in our promise, we offer a full 45-day money-back guarantee to all our customers.
                    </p>
                    <p className="text-white mb-4">
                    If you’re new to web hosting and running an online presence, we will be there for you 24/7 with our technical support. We use Sofaculous, which gives you instant access to the most popular applications for website management, blogging, e-commerce, and more. You will find the set-up and management of your domain very smooth and easy and your shiny new website will be live in no time.
                    </p>
                    <p className="text-white">
                    For website migration transfers, we have the latest tools and expertise to assist you to manage and optimize your online presence.
                    </p>
                </div>


                    <div className="md:w-1/2 relative flex justify-center items-center">
                        <Image
                            src="/what-we-offer.webp"
                            alt="Persons using laptop"
                            width={754}
                            height={600}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}