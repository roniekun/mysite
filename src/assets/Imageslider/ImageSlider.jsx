import React, { useState, useEffect } from "react";
import { slides } from './ImageSliderData';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };



  const goToNextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // useEffect to automatically transition to the next slide after 5 seconds (5000ms)
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 4000); // 5000ms = 5 seconds

    // Clean up the interval when the component is unmounted or currentIndex changes
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
   <div className="slider__container">

<div className='left__arrow__container'
      >
        <div onClick={goToPrevious} className='left__arrow'>
         &#8249;
        </div>
      </div>
    <div className='slider'>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'slide-visible' : 'slide-hidden'}`}
          style={{
            backgroundImage: `url(${slide.url})`,
            display: index === currentIndex ? "block" : "none",
            transform: 'translateX(0)'
        
          }}
        ></div>
      ))}
    </div>


    <div className='right__arrow__container'>
        <div onClick={goToNext} className="right__arrow">
        &#8250;
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
