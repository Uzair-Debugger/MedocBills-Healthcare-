import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { doctorsData } from '../constants/data';

const DoctorsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const totalSlides = doctorsData.length;

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying || !totalSlides) return;
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, totalSlides]);

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Transform calculation
  useEffect(() => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.slider-card');
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 24; // matches "1.5rem" Tailwind gap
        const transformValue = -(currentIndex * (cardWidth + gap));
        sliderRef.current.style.transform = `translateX(${transformValue}px)`;
      }
    }
  }, [currentIndex]);

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
      role="region"
      aria-label="Our Dentists Slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl text-[#00a99d] font-bold tracking-wide mb-2">
          OUR DENTISTS
        </h2>
        <div className="w-16 h-1 bg-[#00a99d] mx-auto rounded-full shadow-sm"></div>
      </div>

      {/* Slider Container */}
      <div className="max-w-6xl mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl shadow-xl">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-out"
            style={{ gap: '1.5rem' }}
          >
            {doctorsData.map((doctor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-3 py-4 slider-card"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={doctor.image}
                      alt={`Portrait of ${doctor.name}`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-[#00a99d] font-semibold text-sm mb-2 flex-grow">
                      {doctor.specialization}
                    </p>
                    <button className="mt-auto self-start text-sm text-gray-500 hover:text-[#00a99d] transition-colors">
                      View Profile →
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border border-gray-200 rounded-full p-2.5 transition-all duration-200 hover:shadow-xl z-10"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border border-gray-200 rounded-full p-2.5 transition-all duration-200 hover:shadow-xl z-10"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default DoctorsSlider;
