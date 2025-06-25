import Image from "next/image"
export default function OrderNow2() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 md:my-10">

                <div className="md:w-1/2 px-5 md:mr-15">

                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D276A] mb-4 md:mb-8">
                    How to get online marketing courses free?
                    </h2>
                    <p className="text-[#1D216A] mb-4">
                    All our business hosting customers gets the full access to all the 7 online marketing courses when they sign up for an annual business hosting package. If you are looking buy personal hosting or just want to get access to one of our courses, let us know and we will give you free access to the online courses.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                    There are many cheap online marketing courses all over the web, so we want to give you better than cheap and it’s free! So, if you are looking for free marketing courses to learn fast and thrive online, it’s time to take an internet marketing course or get all the courses and start learning today.
                    </p>
                    <p className="text-[#1D216A] mb-4">
                    SeekaHost have created the best digital marketing course online free access for you, so get online and start building your successful business online.
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="w-full relative">
                        <Image
                            src="/images/online-marketing-courses/order-now-1.webp"
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