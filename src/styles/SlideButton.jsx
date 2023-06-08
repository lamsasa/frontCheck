import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

const SlideButton = ({ slides, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
    afterChange: (index) => {
      onSlideChange(index);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {slide}
          </div>
        ))}
      </Slider>
      <div>
        {slides.map((slide, index) => (
          <button key={index} className={index === currentIndex ? 'active' : ''} onClick={() => goToSlide(index)}>
            {index === 0 ? "하나" : index === 1 ? "둘" : "셋"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlideButton;
