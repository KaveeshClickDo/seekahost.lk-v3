'use client';
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import PopUpVideo from "../shared/PopUpVideo";
import { people } from "@/data/peopleCardData";

export default function PeopleCards() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        if (!isVideoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % people.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isVideoPlaying]);

    const handleVideoState = (isPlaying) => {
        setIsVideoPlaying(isPlaying);
    };

    return (
        <section className="relative min-h-[600px]">
            <div className="absolute top-0 left-0 w-full h-full md:h-3/4 bg-[#0A488A]" />
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
                                            width={1840}
                                            height={2792}
                                            className="w-full h-auto rounded-3xl shadow-2xl shadow-black md:ml-4"
                                        />

                                        <div className="absolute top-7/16 left-6/16 md:left-7/16">
                                            <PopUpVideo
                                                videoId={person.videoUrl}
                                                onVideoStateChange={handleVideoState}
                                            />
                                        </div>
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
                    <p className="text-white mb-4 text-xl md:text-4xl">
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