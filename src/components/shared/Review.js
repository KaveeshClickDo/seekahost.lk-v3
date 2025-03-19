import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

export default function Reviews() {
    return (
        <section className="relative w-full py-12">
            <Image
                src="\images\shared\review-banner.svg"
                alt="Background Image"
                fill
                className="object-cover z-0"
                priority
            />
            <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-40 flex flex-col md:flex-row items-center">

                <div className="md:flex md:items-center md:space-x-8">

                    <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                            Customer Reviews
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Words of Trust
                        </p>
                        <p className="mt-4 max-w-md text-lg text-gray-600">
                            Over 18,000 companies of all sizes use Advantage to streamline their business marketing
                        </p>
                    </div>


                    <div className="md:w-1/2 flex flex-col space-y-6">

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <Image
                                        src="/images/shared/profile1.webp"
                                        alt="Karen Smith"
                                        width={48}
                                        height={48}
                                        className="rounded-full mr-3 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Karen Smith</h3>
                                        <p className="text-sm text-gray-500">Steel Corporation</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 h-5 w-5" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600">
                                “Advantage&apos;s unified platform has boosted our sales and marketing performance remarkably.”
                            </p>
                        </div>


                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <Image
                                        src="/images/shared/profile2.webp"
                                        alt="Damian Doe"
                                        width={48}
                                        height={48}
                                        className="rounded-full mr-3 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Damian Doe</h3>
                                        <p className="text-sm text-gray-500">Doe Industries</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 h-5 w-5" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600">
                                “The automated features have saved us countless hours. A real game changer.”
                            </p>
                        </div>


                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <Image
                                        src="/images/shared/profile3.webp"
                                        alt="Alice Johnson"
                                        width={48}
                                        height={48}
                                        className="rounded-full mr-3 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Alice Johnson</h3>
                                        <p className="text-sm text-gray-500">Alphabet Co</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 h-5 w-5" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600">
                                “We scaled our start-up significantly, all thanks to Advantage&apos;s robust tools.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
