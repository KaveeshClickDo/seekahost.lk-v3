import Image from "next/image"
import SeePlansButton from '../shared/SeePlansButtons';
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                        Hosted in the UK for Maximum Speed
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        <span className="font-bold">Fast, local, and built for UK websites</span><br />
                        Our WordPress hosting is powered by high-speed NVMe SSD servers located right here in the UK. That means your site loads faster for your local visitors, improves SEO, and delivers a smoother browsing experience.


                    </p>
                    <p className="text-[#1D216A] mb-4">
                        Whether you&apos;re serving customers in London, Manchester, or across Europe, your website performs at peak speed—every time.
                    </p>
                    <SeePlansButton
                        text="Launch Now"
                        baseClasses={true}
                        className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold md:mt-8"
                    />

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/wordpress-hosting/order-now-1.webp"
                            alt="Order now Image"
                            width={2900}
                            height={2312}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}