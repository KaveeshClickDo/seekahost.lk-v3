import Image from "next/image"
export default function OrderNow2() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                    Seamless Deployment & Git Integration
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                    <span className="font-bold">Deploy updates with ease using Git or CLI tools</span> <br /> Push code straight from your Git repo and automate deployments with post-receive hooks. Whether you're managing staging and production environments or working in a CI/CD workflow, our setup makes it simple to stay in sync.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                    Less time deploying, more time building.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        Order Now
                    </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/nodejs-hosting/order-now-2.webp"
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