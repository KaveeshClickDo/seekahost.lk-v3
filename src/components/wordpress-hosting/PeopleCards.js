import Image from "next/image"
export default function PeopleCards() {
    return (
        <>
            <section className="relative min-h-[600px]">
            <div className="absolute top-0 left-0 w-full h-full md:h-3/4 bg-gradient-to-b from-[#09407A] to-[#136CC9]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 h-full">
                <div className="md:w-1/3 md:mr-15">
                    <div className="w-full relative">
                        <Image
                            src="/images/wordpress-hosting/people-card-1.webp"
                            alt="People Card Image"

                            width={406}
                            height={616}
                            className="rounded-3xl w-1/2 md:w-full h-auto shadow-2xl shadow-black"
                            priority
                        />
                    </div>

                </div>

                <div className="md:w-2/3 mt-6 md:mt-0 px-5">
                    <p className="text-white mb-4 text-xl md:text-4xl font-medium">
                        &apos;&apos;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet&apos;&apos;
                    </p>
                    <hr className="border-t-2 border-gray-300 m-4" />
                    <p className="mb-2 text-lg md:text-xl text-white font-semibold">David King</p>
                    <p className="text-white">Business Owner</p>
                </div>
                </div>
            </section>
        </>
    )
}