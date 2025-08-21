import Image from "next/image"
export default function OrderNow2() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/business-web-hosting/order-now-2.webp"
                            alt="Order now Image"
                            width={2900}
                            height={2312}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-8">
                        Safe. Secure. Trusted.
                    </h2>
                    <ul className="space-y-5">
                        <li className="flex items-start text-[#1D216A]">
                            <span className="mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={25} height={25}>
                                    <circle cx="53" cy="41" r="40" fill="rgba(255, 255, 255, 0.2)" />
                                    <path d="M40 50 L50 60 L70 30" stroke="blue" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Enjoy peace of mind with regular automatic backups and two-factor authentication, ensuring your files stay safe and secure.
                        </li>
                        <li className="flex items-start text-[#1D216A]">
                            <span className="mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={25} height={25}>
                                    <circle cx="53" cy="41" r="40" fill="rgba(255, 255, 255, 0.2)" />
                                    <path d="M40 50 L50 60 L70 30" stroke="blue" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Safeguard your website traffic with unlimited SSL certificates, providing robust encryption for maximum data protection.
                        </li>
                        <li className="flex items-start text-[#1D216A]">
                            <span className="mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={25} height={25}>
                                    <circle cx="53" cy="41" r="40" fill="rgba(255, 255, 255, 0.2)" />
                                    <path d="M40 50 L50 60 L70 30" stroke="blue" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Stay protected from threats with proactive DDoS defense, powered by Cloudflare-protected nameservers.
                        </li>
                    </ul>
                    <button className="bg-[#0066CC] hover:bg-[#0A488A] text-white border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>
                </div>
            </section>
        </>
    )
}