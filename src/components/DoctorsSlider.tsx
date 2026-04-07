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
        <h2 className="text-4xl md:text-5xl text-teal-brand font-bold tracking-wide mb-2">
          OUR DENTISTS
        </h2>
        <div className="w-16 h-1 bg-teal-brand mx-auto rounded-full shadow-sm"></div>
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
                    <p className="text-secondary font-semibold text-sm mb-2 flex-grow">
                      {doctor.specialization}
                    </p>
                    <button className="mt-auto self-start text-sm text-gray-500 hover:text-secondary transition-colors">
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex justify-center mt-6 gap-2">
          {doctorsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSlider;
