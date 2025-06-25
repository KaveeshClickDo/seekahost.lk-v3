import Image from "next/image"
export default function Hero() {
    return (
        <>
            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-350 mx-auto py-12 px-6 md:px-0">

                <div className="md:w-1/2 px-5 md:mr-15">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-6">
                        UK&rsquo;s Best Web Host <br /> For Entrepreneurs & Business Owners
                    </h2>
                    <p className="text-[#1D216A] mb-7">
                        Receive answers to your questions within minutes, any time of day or night, 365 days a year, from our Customer Success Team via live chat. Our experience shows this method is significantly more effective and efficient than phone support.
                    </p>
                    <button className="bg-white text-[#0066CC] border border-[#0066CC] px-6 py-2 rounded-full hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer font-bold">
                        Talk With our Sales Team
                    </button>
                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 gap-4 grid">

                    {/* <div className="w-full relative">
                        <Image
                            src="/images/about/about-hero1.webp"
                            alt="People collaborating around a table"
                            width={2900}
                            height={1104}
                            className="rounded-3xl w-full h-auto"
                            priority
                        />
                    </div>


                    <div className="flex flex-row gap-4">
                        <div className="w-full md:w-1/2 relative">
                            <Image
                                src="/images/about/about-hero2.webp"
                                alt="Three people looking at laptop"
                                width={1400}
                                height={1104}
                                className="rounded-3xl w-full h-auto"
                                priority
                            />
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <Image
                                src="/images/about/about-hero3.webp"
                                alt="Two people looking at laptop"
                                width={1400}
                                height={1104}
                                className="rounded-3xl w-full h-auto"
                                priority
                            />
                        </div>
                    </div> */}
                    <Image
                            src="/images/about/about-hero-image.webp"
                            alt="About Hero Image"
                            width={1102}
                            height={1172}
                            className="w-full h-auto"
                            priority
                        />
                </div>
            </section>
        </>
    )
}