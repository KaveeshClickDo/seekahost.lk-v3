'use client';
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"

export default function PeopleCards() {

    const people = [
        {
            name: "David King",
            company: "Business Owner",
            image: "/images/wordpress-hosting/people-card-1.webp",
            comment: "Lorem ipsum dolor sit uno, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet",
            videoUrl: "https://www.youtube.com/watch?v=hx2W4fmqw_w"
        },
        {
            name: "Sarah Juli",
            company: "Business Manager",
            image: "/images/wordpress-hosting/people-card-2.webp",
            comment: "Lorem ipsum dolor sit duos, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet",
            videoUrl: "https://www.youtube.com/watch?v=hx2W4fmqw_w"
        },
        {
            name: "Sarah Juli",
            company: "Business Handler",
            image: "/images/wordpress-hosting/people-card-3.webp",
            comment: "Lorem ipsum dolor sit thres, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet",
            videoUrl: "https://www.youtube.com/watch?v=hx2W4fmqw_w"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % people.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [people.length]);

    return (
        <section className="relative min-h-[600px]">
            <div className="absolute top-0 left-0 w-full h-full md:h-3/4 bg-gradient-to-b from-[#09407A] to-[#136CC9]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 md:px-0 h-full">
                <div className="md:w-1/3 md:mr-15">
                    <div className="w-full relative">
                        <div className="w-1/2 md:w-full relative min-w-50">
                            {people.map((person, index) => (
                                <div
                                    key={index}
                                    className={`${index === currentSlide ? "opacity-100" : "opacity-0"
                                        } absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out`}
                                    style={{ display: index === currentSlide ? "block" : "none" }}
                                >
                                    <div className="relative">
                                        <Image
                                            src={person.image}
                                            alt={`${person.name} Image`}
                                            width={406}
                                            height={616}
                                            className="w-full h-auto rounded-3xl shadow-2xl shadow-black md:ml-4"
                                        />
                                       
                                        <a
                                            href={person.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Watch introduction video on YouTube"
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-3 rounded-full cursor-pointer flex items-center justify-center z-10"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 26 26"
                                                className="md:w-20 md:h-20 w-10 h-10 transition duration-1000 fill-white opacity-60 hover:fill-[#136CC9] hover:opacity-100"
                                            >
                                                <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
                                                <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                            
                            <div className="relative invisible">
                                <Image
                                    src={people[0].image}
                                    alt="People Card Image placeholder"
                                    width={406}
                                    height={616}
                                    className="rounded-3xl w-full h-auto shadow-2xl shadow-black md:ml-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 mt-6 md:mt-0 md:mb-20 px-5">
                    <p className="text-white mb-4 text-xl md:text-3xl lg:text-4xl font-medium">
                        &apos;&apos;{people[currentSlide].comment}&apos;&apos;
                    </p>
                    <hr className="border-t-2 border-gray-300 m-4" />
                    <p className="mb-2 text-lg md:text-xl text-white font-semibold">{people[currentSlide].name}</p>
                    <p className="text-white">{people[currentSlide].company}</p>

                    
                    <div className="flex justify-start space-x-2 mt-4">
                        {people.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`md:w-3.5 md:h-3.5 w-2.5 h-2.5 rounded-full ${index === currentSlide ? "bg-white" : "bg-white opacity-30"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}