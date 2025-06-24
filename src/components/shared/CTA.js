import Image from 'next/image';
import CTASignUpForm from './CTASignUpForm';

export default function CTA() {
    return (
        <section className="w-full">
            <div className="flex justify-center items-center pb-20">
                <div className="relative bg-[#0A488A] rounded-3xl px-4 md:px-16 w-full max-w-4xl flex flex-col md:flex-row items-center md:justify-between shadow-lg">


                    <div className="text-white md:w-2/3 py-10 md:py-16">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Ready to make a secure future?
                        </h2>
                        <p className="text-white/90 mb-6">
                            Get your personalized insurance quote now and take the first step
                            toward a worry-free future. Your security matters.
                        </p>


                        <CTASignUpForm />
                    </div>


                    <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
                        <Image
                            src="/images/shared/phone-mockup.webp"
                            alt="Phone Mockup"
                            width={1167}
                            height={1476}
                            className="w-60 h-auto drop-shadow-lg md:mt-[30%]"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}