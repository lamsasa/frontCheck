import React from 'react';
//import styled from 'styled-components';
import {SwitchInput, SwitchLabel, OnButton, TextContainer, OffText, OnText} from '../Styles/ButtonStyle';


const ToggleButtonLarge = ({ offText, onText }) => {
  return (
    <>
      <SwitchInput id="toggle_large" type="checkbox" />
      {/* width, height 설정 가능 */}
      <SwitchLabel htmlFor="toggle_large">
        {/* width, height 설정 가능 */}
        <OnButton />
        <TextContainer>
          {/* margin으로 margin-left 설정 가능 */}
          <OffText>{offText}</OffText>
          {/* margin으로 margin-right 설정 가능 */}
          <OnText>{onText}</OnText>
        </TextContainer>
      </SwitchLabel>
    </>
  );
};

export default ToggleButtonLarge;


