import Image from "next/image"
export default function OrderNow2() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                    How SeekaHost Online Marketing Experts can help you?
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                    We at SeekaHost has online marketing team who can help you and guide to plan for a successful paid marketing campaign like Google Ads, Facebook Ads and Remarketing based on your business model. Our online marketing team has experience in working with different business models across the globe. Hence we will help you in planning the best marketing strategy for your business.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                    Even you can hire our team for the regular online marketing activities or just schedule a one-time consultation call to make it clear with the online advertising strategies. The fastest way to get your business success if by doing Google adverting. SeekaHost employs the best Google AdWords experts trained by ClickDo™ 
                    </p>
                    <p className="text-[#1D216A] mb-4">
                    Give us a call on 020 8638 5857 for Google AdWords campaigns.
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/google-advertising-campaigns/order-now-1.webp"
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