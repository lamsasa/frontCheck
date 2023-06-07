import React, { useState, useRef } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

const InputSlideButton = styled.input`
  cursor: pointer;
`;

const SlideButton = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleSliderChange = (e) => {
    const index = parseInt(e.target.value);
    sliderRef.current.slickGoTo(index);
    setSlideIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setSlideIndex(next)
  };

  return (
    <div>
      <InputSlideButton onChange={handleSliderChange} value={slideIndex} type="range" min={0} max={2}/>
      <Slider ref={sliderRef} {...settings}>
        <div>
          1
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
        <div>
          4
        </div>
      </Slider>
    </div>
  );
};


export default SlideButton;
