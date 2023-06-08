import React, { useState } from 'react';
import ToggleButtonLarge from '../Common/ToggleButton/ToggleButtonLarge';
import ToggleButtonSmall from '../Common/ToggleButton/ToggleButtonSmall';
import SlideButton from '../Common/ToggleButton/SlideButton'
import {ClickButton} from '../../styles/StyledComponent';
import styled from 'styled-components';

const Back = styled.div`
  background-color: #ffffff;
  cursor: pointer;
`;

const TotalList = () => {
    const handleSlideChange = (index) => {
        console.log('Current slide index:', index);
      };
    
      const slides = [
        <div>Slide 1</div>,
        <div>Slide 2</div>,
        <div>Slide 3</div>
      ];

    return(
        <>
        <p>엥...토글 버튼 어려워...확인 필수...</p>
       <ToggleButtonLarge onText={"일 정"} offText={"가계부"}/>
       <ToggleButtonSmall onText={"지출"} offText={"수입"}/>
       <ClickButton>gg</ClickButton>
       <h1>Slider with Index Buttons</h1>
        <><SlideButton slides={slides} onSlideChange={handleSlideChange} /></>
        </>
    );
};

export default TotalList