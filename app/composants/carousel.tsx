"use client"
import React, { useState } from 'react';

type Image = {
  title: string;
  description: string;
  src: string;
};

// Définissez une valeur par défaut pour les images
const defaultImages: Image[] = [
  {
    title: 'Venom',
    description: 'Gentil méchant',
    src: '/Venom.jpg', // Remplacez par un chemin valide ou une URL d'image
  },
  {
    title: 'Galactus',
    description: 'Dévoreur de monde',
    src: '/862.jpg', // Remplacez par un chemin valide ou une URL d'image
  },
  {
    title: 'Doctor Doom',
    description: 'Swag',
    src: '/Doctor Doom.jpg', // Remplacez par un chemin valide ou une URL d'image
  },
];

type SimpleCarouselProps = {
  images?: Image[];
};

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ images = defaultImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" mb-8 w-full max-w-lg mx-auto">
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrevious}
          className="text-4xl me-3 font-bold text-gray-800 hover:text-gray-500 transition duration-300"
        >
          &lt;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="w-60 rounded-lg"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold">{images[currentIndex].title}</h3>
            <p className="text-black font-semibold">{images[currentIndex].description}</p>
          </div>
        </div>
        <button
          onClick={goToNext}
          className="text-4xl ms-3 font-bold text-gray-800 hover:text-gray-500 transition duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SimpleCarousel;
