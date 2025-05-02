import Image from "next/image"
export default function OrderNow3() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-7">
                    Smooth & Flexible CMS Support
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                    No matter whether you use WordPress, Joomla, or Drupal, with the SeekaHost cPanel Hosting you can easily and quickly install the most popular content management software to your account with a few clicks. Softaculous will support you with installing the software of your choice. Whether you&apos;re setting up a blog with WordPress or an eCommerece site with Magento, it&apos;s all covered.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-7">
                        Order Now
                    </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/cheap-web-hosting-with-cpanel/order-now-3.webp"
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