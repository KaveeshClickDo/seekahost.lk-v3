import Image from "next/image"
export default function Hero() {
    return (
        <>
            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-350 mx-auto py-5 px-6 md:px-0">

                <div className="md:w-1/2 px-5 md:mr-15">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-6">
                        Enhanced support.<br />Less waiting time.
                    </h2>
                    <p className="text-[#1D216A] mb-7">
                        Receive answers to your questions within minutes, any time of day or night, 365 days a year, from our Customer Success Team via live chat. Our experience shows this method is significantly more effective and efficient than phone support.
                    </p>
                    <div className="flex flex-col space-y-4 max-w-xs">
                        <button className="bg-[#0066CC] hover:bg-[#0A488A] text-white font-bold border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer">
                            Get Live Chat Support
                        </button>
                        <button className="bg-white text-[#0066CC] font-bold border border-[#0066CC] px-6 py-2 rounded-full hover:bg-[#0A488A] hover:text-white transition-colors cursor-pointer">
                            Talk With our Sales Team
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2 mt-6 md:mt-0">

                    <div className="w-full relative">
                        <Image
                            src="/images/contact/contact-hero-image.webp"
                            alt="Contact Hero Image"
                            width={1178}
                            height={1118}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </section>
        </>
    )
}