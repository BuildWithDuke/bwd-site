'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent-hover/10 rounded-lg overflow-hidden relative">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 1200px) 100vw, 75vw"
          priority
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
