import Image from "next/image"
export default function OrderNow1() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/google-advertising-campaigns/order-now.webp"
                            alt="Order now Image"
                            width={1450}
                            height={1156}
                            className="rounded-3xl w-full h-auto"
                        />
                    </div>

                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 px-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] md-4 md:mb-8">
                        Why you should start with Google Ads for a brand new business website?
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                        Say if you are registering a new domain and hosting with us. Initially your brand needs more online reach to grab the customer’s attention. You can get the online reach for your business by using the strategies like SEO & Google Ads. SEO is a long term task by using which you can rank the business website on top organically. But if you would like to get the leads from the first day, then you can just opt for Google Ads.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                        Online marketing experts at SeekaHost will help you in creating & running the Google Ads campaign starting from the scratch. We help you pick the best keywords which will bring you more ROI. Also, our Google Ads experts will help you in creating the Google Ad Account, Creating the campaign, monitoring & regularly updating the campaign to ensure that your business gets more leads.
                    </p>
                    <button className="bg-[#0066CC] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold md:mt-8">
                        Get Started Now
                    </button>

                </div>
            </section>
        </>
    )
}