import Image from 'next/image';

export default function SignUpIsland() {
    return (
        <section className="w-full">
            <div className="flex justify-center items-center py-10">
                <div className="relative bg-[#1276DF] rounded-3xl px-4 md:px-16 w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between shadow-lg">


                    <div className="text-white md:w-2/3 py-10 md:py-16">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            Ready to make a secure future?
                        </h2>
                        <p className="text-white/90 text-base md:text-xl mb-6 font-medium">
                            Get your personalized insurance quote now and take the first step
                            toward a worry-free future. Your security matters.
                        </p>


                        <div className="mt-6 flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md font-medium">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="flex-grow outline-none text-black"
                            />
                            <button className="bg-[#1276DF] text-white font-medium px-4 lg:px-6 py-2 rounded-full hover:bg-blue-600 transition">
                                <span className="max-[400px]:hidden">Sign Up Free</span>
                                <span className="hidden max-[400px]:inline">Sign Up</span>
                            </button>
                        </div>
                    </div>


                    <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
                        <Image
                            src="/images/shared/phone-mockup.webp"
                            alt="Phone Mockup"
                            width={240}
                            height={303}
                            className="w-60 h-auto drop-shadow-lg md:mt-[38%]"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}