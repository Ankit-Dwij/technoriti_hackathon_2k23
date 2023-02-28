import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import holi from '../Home/asset/Holi.jpg'
import Adventure from '../Home/asset/Adventure.png'
import ArtCrafts from '../Home/asset/ArtCrafts.png'
import Comedy from '../Home/asset/Comedy.png'
import Games from '../Home/asset/Games.jpg'
import Kids from '../Home/asset/Kids.jpg'
import KittyParty from '../Home/asset/KittyParty.png'
import Music from '../Home/asset/Music.jpg'
import Trip from '../Home/asset/Trip.png'
import Yoga from '../Home/asset/Yoga.png'

  
  const images = [
    {  id:1,
      src: holi, alt: 'Image 1', caption: 'Caption 1'
     },
    { id:2,
       src: Adventure, alt: 'Image 2', caption: 'Caption 2'
   },
    {  id:3,
      src:KittyParty , alt: 'Image 3', caption: 'Caption 3'
     }
   ,
    {  id:4,
      src:Music , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:5,
      src:Trip , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:6,
      src:Kids , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:7,
      src:Comedy , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:8,
      src:Games , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:9,
      src:Yoga , alt: 'Image 3', caption: 'Caption 3'
     }
   
   
   
  ];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);
  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            className={`carousel-slide ${
              index === currentSlide ? 'active' : ''
            }`}
            key={index}
          >
            <Image
              src={image.src}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
        <button
          className="carousel-control prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="carousel-control next"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            className={`carousel-indicator ${
              index === currentSlide ? 'active' : ''
            }`}
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to Slide ${index + 1}`}
          >
            <span className="sr-only">{`Slide ${index + 1}`}</span>
          </button>
        ))}
      </div>
      <style jsx>{`.carousel {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  outline: none;
  cursor: pointer;
}

.carousel-control:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 8px;
}

.carousel-indicator {
  width: 10px;

  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  outline: none;
  cursor: pointer;
  }
  
  .carousel-indicator.active {
  background-color: rgba(0, 0, 0, 0.7);
  }`}</style>
    </div>
  );
};

export default Carousel;
 