// src/components/ImageSlider.js
import React, { useState } from 'react';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="w-full object-cover h-96"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-700 via-transparent to-green-900 p-4 text-white">
        <h2 className="text-2xl font-bold">{slides[currentIndex].title}</h2>
        <p className="mt-2">{slides[currentIndex].description}</p>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  );
};

export default ImageSlider;
