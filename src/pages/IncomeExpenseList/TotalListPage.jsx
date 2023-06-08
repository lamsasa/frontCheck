import React, { useState } from 'react';
import ToggleButtonLarge from '../../components/ToggleButton/ToggleButtonLarge';
import ToggleButtonSmall from '../../components/ToggleButton/ToggleButtonSmall';
import SlideButton from '../../styles/StyledComponent'
import {ClickButton} from '../../styles/StyledComponent';
import styled from 'styled-components';
import IncomeList from './IncomListPage';
import ExpenseList from './ExpenseListPage';

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
       <ClickButton>gg</ClickButton>
       <h1>슬라이드 버튼 연동...</h1>
        <Back><SlideButton slides={slides} onSlideChange={handleSlideChange} /></Back>
        </>
    );
};

export default TotalList