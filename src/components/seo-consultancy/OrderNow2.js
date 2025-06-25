import Image from "next/image"
export default function OrderNow2() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                        Our SEO Consultancy process?
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        This is how we can help any business in the UK with SEO services.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        Once you join SeekaHost business website hosting plans we will have a SEO audit on your website (You must request). And we will advice what needs to be fixed and that you can get your web masters to fix or else we can do that for you for a nominal fee.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        After the On-Page SEO is fixed and ready to go on Google search, we have the UK business listing to list the business domain name (URL) on the top 100 business directories.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        And then after we will write a custom SEO blueprint for your business websites which will show how to do off site SEO, where to get backlinks and how to utilize guest posting services. Keep learning new technologies and keep up with the times.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        If you need to buy backlinks, there are backlinks packages at ClickDo.
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/seo-consultancy/order-now-1.webp"
                            alt="Order now Image"
                            width={1450}
                            height={1156}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>


            </section>
        </>
    )
}