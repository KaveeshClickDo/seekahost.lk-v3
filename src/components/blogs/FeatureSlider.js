"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const FeaturedSlider = ({ featuredBlogs, config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = featuredBlogs.length;

  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const getAuthorInitials = (name) => {
    if (!name) return '';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const renderAuthorSection = (featuredBlog) => {
    const shouldDisplayAuthor = featuredBlog.postPrimary?.isDisplayAuthor !== "NO";
    const authorName = featuredBlog.authorDetails?.authorName;
    const authorImage = featuredBlog.authorDetails?.authorImage?.url;
    
    if (!shouldDisplayAuthor || !authorName) {
      return null;
    }

    return (
      <div className="flex items-center gap-3">
        {authorImage ? (
          <Image
            src={`${config.api}${authorImage}`}
            alt={authorName}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
            {getAuthorInitials(authorName)}
          </div>
        )}
        <div>
          <div className="font-semibold text-sm">{authorName}</div>
          <div className="text-xs text-gray-500">{featuredBlog.publishedAt?.substring(0, 10) || 'No date'}</div>
        </div>
      </div>
    );
  };

  if (totalSlides === 0) {
    return (
      <div className="p-8 bg-gray-50 rounded-lg text-center mb-12">
        <h2 className="text-xl font-semibold text-gray-700">Featured stories currently unavailable</h2>
        <p className="text-gray-600 mt-2">Please check back later.</p>
      </div>
    );
  }

  if (totalSlides === 1) {
    const featuredBlog = featuredBlogs[0];
    const hasImage = featuredBlog.postMetadata?.thumbnail?.url;
    
    return (
      <div className="mb-12">
        <div className={`flex flex-col ${hasImage ? 'md:flex-row' : ''} gap-6 items-center bg-[#F5FAFF] overflow-hidden`}>
          {hasImage && (
            <div className="relative w-full md:w-1/2 aspect-[611/343]">
              <Image
                src={`${config.api}${featuredBlog.postMetadata.thumbnail.url}`}
                alt={featuredBlog.title || 'Featured blog'}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          )}
          <div className={`${hasImage ? 'md:w-1/2' : 'w-full'} p-6`}>
            <div className="text-base text-[#2072CC] font-bold tracking-wide uppercase mb-2">FEATURED STORY</div>
            <h1 className="text-2xl font-bold mb-4">
              <Link href={`/${featuredBlog.postSlug || '#'}`} className="hover:text-blue-700">
                {featuredBlog.title || 'Blog post title'}
              </Link>
            </h1>
            <p className="md:text-lg text-gray-700 mb-6">{featuredBlog.postPrimary?.excerpt || 'No description available'}</p>
            {renderAuthorSection(featuredBlog)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12 relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredBlogs.map((featuredBlog, index) => {
            const hasImage = featuredBlog.postMetadata?.thumbnail?.url;
            
            return (
              <div key={featuredBlog.id} className="w-full flex-shrink-0">
                <div className={`flex flex-col ${hasImage ? 'md:flex-row' : ''} gap-6 items-center bg-[#F5FAFF]`}>
                  {hasImage && (
                    <div className="relative w-full md:w-1/2 aspect-[611/343]">
                      <Image
                        src={`${config.api}${featuredBlog.postMetadata.thumbnail.url}`}
                        alt={featuredBlog.title || 'Featured blog'}
                        fill
                        className="object-cover rounded-xl"
                        priority={index === 0}
                      />
                    </div>
                  )}
                  <div className={`${hasImage ? 'md:w-1/2' : 'w-full'} p-6`}>
                    <div className="text-base text-[#2072CC] font-bold tracking-wide uppercase mb-2">FEATURED STORY</div>
                    <h1 className="text-2xl font-bold mb-4">
                      <Link href={`/${featuredBlog.postSlug || '#'}`} className="hover:text-blue-700">
                        {featuredBlog.title || 'Blog post title'}
                      </Link>
                    </h1>
                    <p className="md:text-lg text-gray-700 mb-6">{featuredBlog.postPrimary?.excerpt || 'No description available'}</p>
                    {renderAuthorSection(featuredBlog)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {featuredBlogs.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-blue-600 scale-110' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;