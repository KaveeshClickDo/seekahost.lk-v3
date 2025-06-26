import Image from "next/image"
export default function OrderNow() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/register-domain/order-now.webp"
                            alt="Order now Image"
                            width={2900}
                            height={2312}
                            className="rounded-3xl w-full h-auto"
                            priority
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                        Register A Domain Name
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        Choose your perfect domain name and register at SeekaHost. It will be the first step to get your website online with our affordable web hosting service. You can register a domain of TLDs (Top-Level Domains) like .in, .co.in, .com, .co.uk, .org, .blog and much more.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        Pick your domain from our Domain Name Registration system, which looks clear, user-friendly, and easy for anyone to remember. Registering a domain name that explains by itself is a seal-a-deal moment for your business. Even, if you’re not clear with a complete name, our system will suggest you with possibilities available by taking your inputs in search.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>
                    
                </div>
            </section>
        </>
    )
}