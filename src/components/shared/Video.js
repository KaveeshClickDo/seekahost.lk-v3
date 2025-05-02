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
          <p className="mt-4 text-white max-w-xl mx-auto">
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
                width={1825}
                height={1027}
                className="w-full h-auto"
              />
              <button
                onClick={() => setShowVideo(true)}
                aria-label="Play introduction video"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-15 md:w-25 md:h-25 transition duration-1000 fill-white opacity-60 hover:opacity-100"
                  strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"
                    fill="white">
                  </path>
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