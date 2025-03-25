import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function Reviews() {

    const reviewers = [
        {
            id: 1,
            name: "Karen Smith",
            company: "Steel Corporation",
            image: "/images/shared/profile1.webp",
            rating: 5,
            comment: "Advantage's unified platform has boosted our sales and marketing performance remarkably."
        },
        {
            id: 2,
            name: "Damian Doe",
            company: "Doe Industries",
            image: "/images/shared/profile2.webp",
            rating: 5,
            comment: "The automated features have saved us countless hours. A real game changer."
        },
        {
            id: 3,
            name: "Alice Johnson",
            company: "Alphabet Co",
            image: "/images/shared/profile3.webp",
            rating: 5,
            comment: "We scaled our start-up significantly, all thanks to Advantage's robust tools."
        }
    ];

    return (
        <section className="relative w-full py-12">
            <Image
                src="/images/shared/review-banner.svg"
                alt="Background Image"
                fill
                className="object-cover z-0"
                priority
            />
            <div className="relative z-1 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:flex md:items-center md:space-x-8">
                    <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                            Customer Reviews
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
                            Words of Trust
                        </p>
                        <p className="mt-4 max-w-md text-lg md:text-xl text-gray-700 font-medium">
                            Over 18,000 companies of all sizes use Advantage to streamline their business marketing
                        </p>
                    </div>

                    <div className="md:w-1/2 flex flex-col space-y-6">
                        {reviewers.map((reviewer) => (
                            <div key={reviewer.id} className="bg-white shadow-lg rounded-lg p-6">
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
                                <p className="md:text-xl text-gray-700 font-medium">
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