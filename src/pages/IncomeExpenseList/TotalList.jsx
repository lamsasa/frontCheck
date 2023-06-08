import React, { useState } from 'react';
import ToggleButtonLarge from '../../components/ToggleButton/ToggleButtonLarge';
import ToggleButtonSmall from '../../components/ToggleButton/ToggleButtonSmall';
import SlideButton from '../../components/ToggleButton/SlideButton'
import {ClickButton} from '../../styles/StyledComponent';
import styled from 'styled-components';
import IncomeList from './IncomList';
import ExpenseList from './ExpenseList';

const Back = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 800px;
  cursor: pointer;

  .test1 {
    width: 300px;
    background: black;
    color: aquamarine;
  }
  
  .test2 {
    width: 300px;
    background: #ff7474;
    color: aquamarine;
  }
`;

const TotalList = () => {
    const handleSlideChange = (index) => {
        console.log('Current slide index:', index);
      };
    
      const slides = [
        <div className='test1'><h1>제발...ㅠ</h1></div>,
        <div className='test2'><IncomeList/></div>,
        <div><ExpenseList/></div>
      ];

    return(
        <>
       <ToggleButtonLarge onText={"일 정"} offText={"가계부"}/>
       <ToggleButtonSmall onText={"지출"} offText={"수입"}/>
       <ClickButton>gg</ClickButton>
       <h1>슬라이드 버튼 연동...</h1>
        <Back><SlideButton slides={slides} onSlideChange={handleSlideChange} /></Back>
        </>
    );
};

export default TotalList