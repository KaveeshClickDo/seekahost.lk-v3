import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { reviewers } from '@/data/reviewersData';
import Link from 'next/link';

export default function Reviews() {

    return (
        <section className="relative w-full py-12">
            <Image
                src="/images/shared/review-banner.svg"
                alt="Background Image"
                fill
                className="object-cover z-0"
                priority
            />
            <div className="relative z-1 max-w-6xl mx-auto px-4 flex flex-col items-center md:my-10">
                <div className="w-full flex flex-col md:flex-row md:items-center md:space-x-8">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0">
                        <h2 className="text-base text-[#2072CC] font-semibold tracking-wide uppercase">
                            Customer Reviews
                        </h2>
                        <p className="mt-2 text-2xl leading-8 font-bold tracking-tight md:text-4xl">
                            Words of Trust
                        </p>
                        <p className="mt-6 max-w-md text-gray-700">
                            We&apos;re proud to serve customers who value quality and support. Read their stories and discover what makes us different.
                        </p>
                        <Link
                            href="https://uk.trustpilot.com/review/www.seekahost.co.uk"
                            className="inline-block bg-[#0A488B] text-white border border-[#0066CC] px-6 py-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer font-bold mt-6 md:mt-8 text-center w-fit"
                        >
                            Read More Stories
                        </Link>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col space-y-6">
                        {reviewers.map((reviewer) => (
                            <div key={reviewer.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <Image
                                            src={reviewer.image}
                                            alt={reviewer.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full mr-3 object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold md:text-xl">{reviewer.name}</h3>
                                            <p className="md:text-lg text-gray-700">{reviewer.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        {[...Array(reviewer.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 h-5 w-5" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    {reviewer.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}