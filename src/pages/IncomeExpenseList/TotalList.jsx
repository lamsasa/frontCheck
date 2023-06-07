import React, { useState } from 'react';
import ToggleButtonLarge from '../../styles/ToggleButtonLarge';
import ToggleButtonSmall from '../../styles/ToggleButtonSmall';
import SlideButton from '../../styles/SlideButton'
import {ClickButton} from '../../styles/StyledComponent';

const TotalList = () => {

    return(
        <>
        <p>엥...토글 버튼 어려워...확인 필수...</p>
        <p>슬라이드 버튼 진짜 돌았나...</p>
       <ToggleButtonLarge onText={"일 정"} offText={"가계부"}/>
       <ToggleButtonSmall onText={"지출"} offText={"수입"}/>
       <ClickButton>gg</ClickButton>
       <SlideButton/>
        </>
    );
};

export default TotalList