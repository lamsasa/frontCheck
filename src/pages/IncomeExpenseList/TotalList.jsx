import React, { useState } from 'react';
import ToggleButton from '../../styles/ToggleButton';
import SlideButton from '../../styles/SlideButton'
import {ClickButton} from '../../styles/StyledComponent';

const TotalList = () => {

    return(
        <>
        <p>엥...토글 버튼 어려워...확인 필수...</p>
        <p>슬라이드 버튼 진짜 돌았나...</p>
       <ToggleButton onText={"일 정"} offText={"가계부"}/>
       <ClickButton>gg</ClickButton>
       <SlideButton/>
        </>
    );
};

export default TotalList