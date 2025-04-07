'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Video() {
  const [showVideo, setShowVideo] = useState(false);
  const youtubeVideoId = 'hx2W4fmqw_w'; // YouTube video ID

  return (
    <section className="py-12 relative">
      <Image
        src="/images/shared/bg.svg"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
        sizes="100vw"
      />
      <div className="relative z-1 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white md:mb-6">
            <span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">
              Why SeekaHost
            </span>
          </h2>
          <p className="mt-4 text-white max-w-xl mx-auto md:text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-4xl overflow-hidden shadow-4xl border-8 border-white">
          {!showVideo ? (
            <>
              <Image
                src="/images/shared/video-thumb.webp"
                alt="Woman holding phone"
                width={1008}
                height={575}
                className="w-full h-auto object-cover"
              />
              <button
                onClick={() => setShowVideo(true)}
                aria-label="Play introduction video"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 26 26"
                  className="w-20 h-20 transition duration-1000 fill-white opacity-60 hover:fill-[#136CC9] hover:opacity-100"
                >
                  <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
                  <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
                </svg>
              </button>
            </>
          ) : (
            <div className="w-full pb-[56.25%]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}