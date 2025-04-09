'use client';

import { useState, useEffect } from 'react';

export default function PopUpVideo({ videoId, onVideoStateChange }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        // Inform parent when video is closed via Escape key
        if (onVideoStateChange) {
          onVideoStateChange(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onVideoStateChange]);

  const openVideo = () => {
    setIsOpen(true);
    // Inform parent when video is opened
    if (onVideoStateChange) {
      onVideoStateChange(true);
    }
  };

  const closeVideo = () => {
    setIsOpen(false);
    // Inform parent when video is closed
    if (onVideoStateChange) {
      onVideoStateChange(false);
    }
  };

  return (
    <>
      <button
        onClick={openVideo}
        aria-label="Watch introduction video"
        className="bg-transparent rounded-full shadow-lg cursor-pointer"
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

      {isOpen && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:opacity-80 transition-opacity"
              aria-label="Close video"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  opacity="0.4"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="white"
                />
                <path
                  d="M13.0594 12.0001L15.3594 9.70011C15.6494 9.41011 15.6494 8.93011 15.3594 8.64011C15.0694 8.35011 14.5894 8.35011 14.2994 8.64011L11.9994 10.9401L9.69937 8.64011C9.40937 8.35011 8.92937 8.35011 8.63938 8.64011C8.34938 8.93011 8.34938 9.41011 8.63938 9.70011L10.9394 12.0001L8.63938 14.3001C8.34938 14.5901 8.34938 15.0701 8.63938 15.3601C8.78938 15.5101 8.97937 15.5801 9.16937 15.5801C9.35937 15.5801 9.54937 15.5101 9.69937 15.3601L11.9994 13.0601L14.2994 15.3601C14.4494 15.5101 14.6394 15.5801 14.8294 15.5801C15.0194 15.5801 15.2094 15.5101 15.3594 15.3601C15.6494 15.0701 15.6494 14.5901 15.3594 14.3001L13.0594 12.0001Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}