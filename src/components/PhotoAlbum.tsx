'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const photos = [
  'IMG20240522161603.jpg',
  'IMG20240623094948.jpg',
  'IMG20240709215119.jpg',
  'IMG20240714213703.jpg',
  'IMG20240715215421.jpg',
  'IMG20240807093133.jpg',
  'IMG20240807125157.jpg',
  'IMG20240807125213.jpg',
  'IMG20240807125236.jpg',
  'IMG20250415131818.jpg',
  'IMG20250417172145.jpg',
  'IMG20250421170705.jpg',
  'IMG20250423184821.jpg',
  'image.png',
  'IMG20250526171522.jpg',
  'IMG_20230329_115359.jpg',
  'IMG_20230401_191103.jpg',
  'IMG_20230402_201740.jpg',
  'IMG20251001161240.jpg',
  'IMG20230713145841.jpg',
  'IMG20230713145854.jpg',
  'IMG20230805161929.jpg',
  'IMG20230822182945.jpg',
  'IMG20231029161848.jpg',
  'IMG20231030124140.jpg',
  'IMG20231030191118.jpg',
  'IMG20231216195208.jpg',
  'IMG20231223154233.jpg',
  'IMG20231223154247.jpg'
];

export default function PhotoAlbum() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Photo Album
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main image container */}
          <div className="relative w-full h-[70vh] bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Blurred background image */}
            <Image
              src={`/photo-album/${photos[currentIndex]}`}
              alt=""
              fill
              className="object-cover scale-110 blur-lg opacity-40"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            
            {/* Main image - contains full image without cropping */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Image
                src={`/photo-album/${photos[currentIndex]}`}
                alt={`Photo ${currentIndex + 1}`}
                width={1920}
                height={1080}
                className="object-contain max-w-full max-h-full transition-opacity duration-500 rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous photo"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next photo"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
            
            {/* Auto-play indicator */}
            <div className="absolute top-4 right-4">
              <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'} animate-pulse`} />
            </div>
            
            {/* Photo counter */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
          
          {/* Thumbnail navigation */}
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2 max-w-full overflow-x-auto pb-2">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentIndex 
                      ? 'ring-2 ring-blue-500 scale-110' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={`/photo-album/${photo}`}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 w-full bg-gray-700 rounded-full h-1">
            <div 
              className="bg-blue-500 h-1 rounded-full transition-all duration-100"
              style={{ width: `${((currentIndex + 1) / photos.length) * 100}%` }}
            />
          </div>
          
          {/* Auto-play control */}
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              {isAutoPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}