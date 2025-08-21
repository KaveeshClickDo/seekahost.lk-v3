'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const LargeImageSlider = ({ 
  slides = [], 
  autoSlide = true, 
  autoSlideInterval = 5000, // 5 seconds default
  pauseOnHover = true 
}) => {
  const t = useTranslations('HomePage.LargeImageSlider');
  const defaultSlides = t.raw('defaultSlides');
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef(null)
  const autoSlideTimer = useRef(null)

  const slidesData = slides.length > 0 ? slides : defaultSlides

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slidesData.length)
  }, [slidesData.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length)
  }, [slidesData.length])

  // Auto-slide functionality
  const startAutoSlide = useCallback(() => {
    if (autoSlide && slidesData.length > 1) {
      autoSlideTimer.current = setInterval(() => {
        nextSlide()
      }, autoSlideInterval)
    }
  }, [autoSlide, autoSlideInterval, nextSlide, slidesData.length])

  const stopAutoSlide = useCallback(() => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current)
      autoSlideTimer.current = null
    }
  }, [])

  const resetAutoSlide = useCallback(() => {
    stopAutoSlide()
    startAutoSlide()
  }, [stopAutoSlide, startAutoSlide])

  // Start auto-slide on mount and restart when dependencies change
  useEffect(() => {
    const shouldAutoSlide = autoSlide && !isDragging && (!pauseOnHover || !isHovered)
    
    if (shouldAutoSlide) {
      startAutoSlide()
    } else {
      stopAutoSlide()
    }

    return stopAutoSlide
  }, [autoSlide, isDragging, isHovered, pauseOnHover, startAutoSlide, stopAutoSlide])

  // Handle mouse enter/leave for pause on hover
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleStart = (clientX) => {
    setIsDragging(true)
    setStartX(clientX)
    setDragOffset(0)
    stopAutoSlide() // Stop auto-slide when user starts dragging
  }

  const handleMove = useCallback((clientX) => {
    if (!isDragging) return
    const diff = clientX - startX
    setDragOffset(diff)
  }, [isDragging, startX])

  const handleEnd = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)

    // If dragged more than 100px, change slide
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }

    setDragOffset(0)
    // Reset auto-slide after user interaction
    setTimeout(() => {
      resetAutoSlide()
    }, 100)
  }, [isDragging, dragOffset, prevSlide, nextSlide, resetAutoSlide])

  const handleMouseDown = (e) => {
    e.preventDefault()
    handleStart(e.clientX)
  }

  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleEnd()
  }

  // Manual navigation with auto-slide reset
  const handlePrevSlide = () => {
    prevSlide()
    resetAutoSlide()
  }

  const handleNextSlide = () => {
    nextSlide()
    resetAutoSlide()
  }

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index)
    resetAutoSlide()
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      handleMove(e.clientX)
    }

    const handleMouseUp = () => {
      handleEnd()
    }

    const handleGlobalMouseUp = () => {
      if (isDragging) handleMouseUp()
    }

    const handleGlobalMouseMove = (e) => {
      if (isDragging) handleMouseMove(e)
    }

    document.addEventListener('mouseup', handleGlobalMouseUp)
    document.addEventListener('mousemove', handleGlobalMouseMove)

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp)
      document.removeEventListener('mousemove', handleGlobalMouseMove)
    }
  }, [isDragging, handleMove, handleEnd])

  const getSlideIndex = (offset) => {
    return (currentIndex + offset + slidesData.length) % slidesData.length
  }

  const getTransform = () => {
    return `translateX(${dragOffset}px)`
  }

  return (
    <div 
      className="w-full bg-[#0A488B] py-22 px-4 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 transition-all duration-300">
            {t('title')}
          </h2>
          <p className="mt-4 text-white max-w-xl mx-auto transition-all duration-300">
            {t('description')}
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-80 md:h-120 overflow-hidden">
          <div 
            className="flex items-center justify-center h-full cursor-grab active:cursor-grabbing select-none"
            style={{ 
              transform: getTransform(),
              transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Previous slide (partial view) - shorter height */}
            <div className="relative w-32 md:w-48 h-64 md:h-100 flex-shrink-0 mr-4">
              <div className="relative w-full h-full overflow-hidden rounded-l-2xl">
                <Image
                  src={slidesData[getSlideIndex(-1)].image}
                  alt="Previous slide"
                  fill
                  className="object-cover transform transition-transform duration-300"
                  style={{
                    transform: isDragging ? `scale(${1 + Math.abs(dragOffset) * 0.0005})` : 'scale(1)'
                  }}
                  draggable={false}
                />
                <div 
                  className="absolute inset-0 bg-black/40 transition-opacity duration-300"
                  style={{
                    opacity: isDragging ? Math.max(0.2, 0.4 - Math.abs(dragOffset) * 0.001) : 0.4
                  }}
                ></div>
              </div>
            </div>

            {/* Current slide (main view) - full height */}
            <div className="relative w-full max-w-4xl h-full flex-shrink-0 mx-2">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={slidesData[currentIndex].image}
                  alt="Current slide"
                  fill
                  className="object-cover transform transition-transform duration-300"
                  style={{
                    transform: isDragging ? `scale(${1 + Math.abs(dragOffset) * 0.0003})` : 'scale(1)'
                  }}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                
                {/* Overlay Text */}
                <div 
                  className="absolute left-8 bottom-8 text-white max-w-md transition-all duration-300"
                  style={{
                    transform: isDragging ? `translateX(${dragOffset * 0.1}px)` : 'translateX(0px)',
                    opacity: isDragging ? Math.max(0.7, 1 - Math.abs(dragOffset) * 0.002) : 1
                  }}
                >
                  <p className="text-lg font-medium leading-relaxed">
                    {slidesData[currentIndex].overlayText}
                  </p>
                </div>
              </div>
            </div>

            {/* Next slide (partial view) - shorter height */}
            <div className="relative w-32 md:w-48 h-64 md:h-100 flex-shrink-0 ml-4">
              <div className="relative w-full h-full overflow-hidden rounded-r-2xl">
                <Image
                  src={slidesData[getSlideIndex(1)].image}
                  alt="Next slide"
                  fill
                  className="object-cover transform transition-transform duration-300"
                  style={{
                    transform: isDragging ? `scale(${1 + Math.abs(dragOffset) * 0.0005})` : 'scale(1)'
                  }}
                  draggable={false}
                />
                <div 
                  className="absolute inset-0 bg-black/40 transition-opacity duration-300"
                  style={{
                    opacity: isDragging ? Math.max(0.2, 0.4 - Math.abs(dragOffset) * 0.001) : 0.4
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LargeImageSlider