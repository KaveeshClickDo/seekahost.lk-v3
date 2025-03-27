import Image from "next/image"
export default function WhatWeOffer() {
    return (
        <section className="relative w-full py-16">
            <Image
                src="/images/shared/middle-banner.svg"
                alt="Background Image"
                fill
                className="object-cover z-0"
                priority
            />


            <div className="relative z-1 max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center">

                <div className="md:w-1/2 px-5">
                    <h2 className="text-2xl  md:text-4xl font-semibold text-white mb-4">
                        What we offer for <br /> <span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65"> Sri Lankans</span>
                    </h2>
                    <p className="text-white md:text-xl mb-4  font-medium">
                        Whether you are a start-up company in Sri Lanka or one with an established business presence in the Sri Lankan market, your website is the first point of reference for your customers.
                        As millions of people use search engines to find your services or products, the web is the first place they will encounter your enterprise.
                    </p>
                    <p className="text-white md:text-xl mb-4  font-medium">
                        We have strong partnerships with the best web service providers in the world to assist you with the latest technological advances and guarantee 99.9% uptime for your website. Because we believe in our promise, we offer a full 45-day money-back guarantee to all our customers.
                    </p>
                    <p className="text-white md:text-xl mb-4 font-medium">
                        If you&rsquo;re new to web hosting and running an online presence, we will be there for you 24/7 with our technical support. We use Sofaculous, which gives you instant access to the most popular applications for website management, blogging, e-commerce, and more. You will find the set-up and management of your domain very smooth and easy and your shiny new website will be live in no time.
                    </p>
                    <p className="text-white md:text-xl font-medium">
                        For website migration transfers, we have the latest tools and expertise to assist you to manage and optimize your online presence.
                    </p>
                </div>


                <div className="md:w-1/2 relative flex justify-center items-center">
                    <Image
                        src="/images/about/what-we-offer.webp"
                        alt="Persons using laptop"
                        width={552}
                        height={439}
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    )
}