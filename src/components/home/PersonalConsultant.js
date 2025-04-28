import Image from "next/image"
export default function PersonalConsultant() {
    return (
        <>
            <section className="relative w-full bg-gradient-to-b from-[#09407A] to-[#136CC9]">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-0">

                    <div className="md:w-1/2 px-5 md:mr-15 pt-16 md:py-16">

                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Personal Consultant
                        </h2>
                        <p className="text-white mb-8 md:text-lg font-medium">
                            Your dedicated point of contact for personalized guidance and support. We&apos;re here around the clock with 24/7 ticket assistance whenever you need us.
                        </p>

                        <div className="space-y-6 text-white">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Image src="/images/home/help.svg" width={50} height={50} alt="help you succeed" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-semibold mb-2">With You at Every Stage</h3>
                                    <p className="md:text-lg">
                                    From starting out to expanding online, your SeekaHost personal consultant is ready with expert tips and insights to help you succeed.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Image src="/images/home/reach.svg" width={50} height={50} alt="reach you" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-semibold mb-2">Reach Us Your Way</h3>
                                    <p className="md:text-lg">
                                    From starting out to expanding online, your SeekaHost personal consultant is ready with expert tips and insights to help you succeed.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Image src="/images/home/award.svg" width={50} height={50} alt="award winning support" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-semibold mb-2">Powered by Award-Winning Support</h3>
                                    <p className="md:text-lg">
                                    From starting out to expanding online, your SeekaHost personal consultant is ready with expert tips and insights to help you succeed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <div className="w-full relative">
                            <Image
                                src="/images/home/consultant-image.webp"
                                alt="consultant image"
                                width={1944}
                                height={2812}
                                className="w-full md:w-7/8 h-auto"
                            />
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}