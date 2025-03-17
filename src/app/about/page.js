import Image from "next/image"
import Navbar from "@/components/Navbar";
import Timeline from "./Timeline";
import Reviews from "@/components/Review";
import Footer from "@/components/Footer";

export const metadata = {
    title: "About"
}

export default function about() {
    return (
        <>
            <Navbar />
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
                            height={0}
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
                                height={0}
                                className="rounded-3xl w-full h-auto"
                                priority
                            />
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <Image
                                src="/about-hero3.webp"
                                alt="Two people looking at laptop"
                                width={268}
                                height={0}
                                className="rounded-3xl w-full h-auto"
                                priority
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


                <div className="relative z-1 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">

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
                            If you&rsquo;re new to web hosting and running an online presence, we will be there for you 24/7 with our technical support. We use Sofaculous, which gives you instant access to the most popular applications for website management, blogging, e-commerce, and more. You will find the set-up and management of your domain very smooth and easy and your shiny new website will be live in no time.
                        </p>
                        <p className="text-white">
                            For website migration transfers, we have the latest tools and expertise to assist you to manage and optimize your online presence.
                        </p>
                    </div>


                    <div className="md:w-1/2 relative flex justify-center items-center">
                        <Image
                            src="/what-we-offer.webp"
                            alt="Persons using laptop"
                            width={552}
                            height={0}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </section>

            <Timeline />

            <section
                className="relative w-full bg-no-repeat bg-cover py-16"
                style={{
                    backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.6), rgba(30, 58, 138, 0.6)), url('/middle-banner.svg')"
                }}
            >


                <div className="relative z-1 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">

                    <div className="md:w-1/2 mb-8 md:mb-0 md:pl-5 text-white">
                        <h1 className="inline-block bg-[#CCE5FF] text-blue-700 text-sm px-3 py-2 rounded-full mb-4">Our Vision</h1>
                        <h2 className="text-xl md:text-2xl mb-6 leading-snug">
                            Our Vision is to be the best web hosting service in the world and go beyond our customer expectations with SMART web hosting services at affordable prices..
                        </h2>
                        <ul className="space-y-2">
                            <li className="flex items-start text-sm">
                                <span className="mr-2 w-5 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                    </svg>
                                </span>
                                We deliver what we promise with quality and on-time service.
                            </li>
                            <li className="flex items-start text-sm">
                                <span className="mr-2 w-5 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                    </svg>
                                </span>
                                We provide the latest hosting technology, resources, features and innovations.
                            </li>
                            <li className="flex items-start text-sm">
                                <span className="mr-2 w-5 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                    </svg>
                                </span>
                                We provide uninterrupted service, uptime guarantee and high level of security.
                            </li>
                            <li className="flex items-start text-sm">
                                <span className="mr-2 w-5 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                    </svg>
                                </span>
                                Our dedicated customer services staff works 24/7 for you.
                            </li>
                            <li className="flex items-start text-sm">
                                <span className="mr-2 w-5 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                    </svg>
                                </span>
                                Our packages are competitive, transparent and comes with no hidden costs.
                            </li>
                            <li className="flex items-start text-sm">
                                <span className="mr-2 w-5 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                    </svg>
                                </span>
                                We guarantee the best visibility for your site to get ahead of your competitors.
                            </li>
                        </ul>
                    </div>


                    <div className="md:w-1/2 relative flex justify-center items-center">
                        <Image
                            src="/our-vision.webp"
                            alt="Persons using laptop"
                            width={552}
                            height={0}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </section>

            <Reviews />



            <section className="bg-gradient-to-r from-[#09407A] to-[#136CC9] py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-white text-3xl md:text-4xl font-medium text-center mb-12">
                        Our Commitment to Your Digital Success
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden">
                            {/* Blue corner accent */}
                            <div className="absolute top-0 left-0 w-4 h-full bg-[#1276DF]"></div>
                            <div className="ml-2">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    Dedicated Expert Support
                                </h3>
                                <p className="text-gray-600">
                                    Your personal consultant is always available to help you make the most of IONOS products and services, answering any questions and resolving issues—at no extra cost.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden">
                            {/* Blue corner accent */}
                            <div className="absolute top-0 left-0 w-4 h-full bg-[#1276DF]"></div>
                            <div className="ml-2">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    Comprehensive Online Solutions
                                </h3>
                                <p className="text-gray-600">
                                    From professional website creation to secure communication tools, we provide everything you need to establish a strong and credible online presence.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden">
                            {/* Blue corner accent */}
                            <div className="absolute top-0 left-0 w-4 h-full bg-[#1276DF]"></div>
                            <div className="ml-2">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    Cutting-Edge Server Technology
                                </h3>
                                <p className="text-gray-600">
                                    Whether it&rsquo;s WordPress hosting or scalable cloud solutions, our advanced infrastructure ensures performance, security, and flexibility to support your business growth.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden">
                            {/* Blue corner accent */}
                            <div className="absolute top-0 left-0 w-4 h-full bg-[#1276DF]"></div>
                            <div className="ml-2">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    Smart Tools for Digital Success
                                </h3>
                                <p className="text-gray-600">
                                    Leverage our SEO, online marketing, and visibility solutions to enhance your brand&rsquo;s reach, connect with customers, and stay ahead in the digital landscape.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}