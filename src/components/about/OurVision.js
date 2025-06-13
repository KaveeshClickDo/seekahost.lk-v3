import Image from "next/image"
export default function OurVision() {
    return (
        <section className="relative w-full py-16 bg-[#0A488A]">
                {/* <Image
                  src="/images/shared/middle-banner.png"
                  alt="Background Image"
                  fill
                  className="object-cover z-0"
                /> */}


            <div className="relative z-1 max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center md:my-10">

                <div className="md:w-1/2 mb-8 md:mb-0 md:px-5 text-white">
                    <h1 className="inline-block bg-[#CCE5FF] text-blue-700 text-sm md:text-lg font-medium px-3 py-1 rounded-full mb-4">Our Vision</h1>
                    <h2 className="mb-6 font-medium">
                        Our Vision is to be the best web hosting service in the world and go beyond our customer expectations with SMART web hosting services at affordable prices..
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            We deliver what we promise with quality and on-time service.
                        </li>
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            We provide the latest hosting technology, resources, features and innovations.
                        </li>
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            We provide uninterrupted service, uptime guarantee and high level of security.
                        </li>
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Our dedicated customer services staff works 24/7 for you.
                        </li>
                        <li className="flex items-start text-sm md:text-base">
                            <span className="mr-2 w-5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="6" fill="#1276DF" />
                                </svg>
                            </span>
                            Our packages are competitive, transparent and comes with no hidden costs.
                        </li>
                        <li className="flex items-start text-sm md:text-base">
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
                        src="/images/about/our-vision.webp"
                        alt="Persons using laptop"
                        width={2582}
                        height={2054}
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    )
}