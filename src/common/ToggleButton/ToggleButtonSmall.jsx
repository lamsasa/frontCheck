import React from 'react';
//import styled from 'styled-components';
import {SwitchInput, SwitchLabel, OnButton, TextContainer, OffText, OnText} from '../Button';


const ToggleButtonSmall = ({ offText, onText }) => {

  return (
    <>
      <SwitchInput id="toggle_small" type="checkbox"/>
      {/* width, height 설정 가능 */}
      <SwitchLabel htmlFor="toggle_small" width="63px" height="24px">
        {/* width, height 설정 가능 */}
        <OnButton width="28px" height="20px"/>
        <TextContainer>
          {/* margin으로 margin-left 설정 가능 */}
          <OffText fontSize={'12px'} fontWeight={'500'} margin={'5px'}>{offText}</OffText>
          {/* margin으로 margin-right 설정 가능 */}
          <OnText fontSize={'12px'} fontWeight={'500'} margin={'7px'}>{onText}</OnText>
        </TextContainer>
      </SwitchLabel>
    </>
  );
};

export default ToggleButtonSmall;


