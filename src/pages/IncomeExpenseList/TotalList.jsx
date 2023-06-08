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
        <div><h1>왜 안되는 거야...ㅠ</h1></div>,
        <div><IncomeList/></div>,
        <div><ExpenseList/></div>
      ];

    return(
        <>
        <p>엥...토글 버튼 어려워...확인 필수...</p>
       <ToggleButtonLarge onText={"일 정"} offText={"가계부"}/>
       <ToggleButtonSmall onText={"지출"} offText={"수입"}/>
       <ClickButton>gg</ClickButton>
       <h1>Slider with Index Buttons</h1>
        <Back><SlideButton slides={slides} onSlideChange={handleSlideChange} /></Back>
        </>
    );
};

export default TotalList