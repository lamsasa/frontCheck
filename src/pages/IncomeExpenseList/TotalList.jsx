import React, { useState } from 'react';
import ToggleButtonLarge from '../../components/ToggleButton/ToggleButtonLarge';
import ToggleButtonSmall from '../../components/ToggleButton/ToggleButtonSmall';
import SlideButton from '../../styles/StyledComponent'
import {ClickButton} from '../../styles/StyledComponent';
import styled from 'styled-components';
import IncomeList from './IncomList';
import ExpenseList from './ExpenseList';

const Back = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 800px;
  cursor: pointer;
`;

const TotalList = () => {
    const handleSlideChange = (index) => {
        console.log('Current slide index:', index);
      };
    
      const slides = [
        <div><IncomeList/></div>,
        <div><ExpenseList/></div>
      ];

    return(
        <>
       <ToggleButtonLarge onText={"일 정"} offText={"가계부"}/>
       <ToggleButtonSmall onText={"지출"} offText={"수입"}/>
       <ClickButton>Button</ClickButton>
       
       <h1>Slider with Index Buttons</h1>
        <Back><SlideButton slides={slides} onSlideChange={handleSlideChange} /></Back>
        </>
    );
};

export default TotalList