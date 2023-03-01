import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import axios from "axios";

const Carousel = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3300/api/event/allEvents`)
      .then((response) => {
        const data = response.data.result;
        if (data) {
          setImages([...data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              index === currentSlide ? "active" : ""
            }`}
            key={index}
          >
            <Image
              src={image.img}
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
              index === currentSlide ? "active" : ""
            }`}
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to Slide ${index + 1}`}
          >
            <span className="sr-only">{`Slide ${index + 1}`}</span>
          </button>
        ))}
      </div>
      <style jsx>{`
        .carousel {
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
        }
      `}</style>
    </div>
  );
};

export default Carousel;
