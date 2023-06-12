import React, { useState }from 'react';
import styled from 'styled-components';

// import { useNavigate } from "react-router-dom";


const SwitchInput = styled.input`
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;
  width: ${({ width }) => width || '148px'};
  height: ${({ height }) => height || '49px'};
  background: #fff;
  border-radius: 100px;
  transition: 0.2s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #efefef;
  }
`;

const OnButton = styled.span`
  position: absolute;
  left: 3px;
  display: inline-block;
  width: ${({ width }) => width || '73px'};
  height: ${({ height }) => height || '40px'};
  transition: 0.2s;
  background: linear-gradient(100deg, rgba(66, 230, 149, 0.8) 3.56%, rgba(59, 178, 184, 0.8) 96.4%);
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  /* 버튼 움직일 때 */
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 3px);
    transform: translateX(-100%);
    background: linear-gradient(100deg, rgba(66, 230, 149, 0.8) 3.56%, rgba(59, 178, 184, 0.8) 96.4%);
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  position: relative;
`;

const OffText = styled.span`
  font-weight: ${({fontWeight}) => fontWeight || '700'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: 19px;
  color: #ffffff;
  position: relative;
  z-index: 1;
  margin-left: ${({ margin }) => margin || '15px'};

  /* ON 버튼이 눌리면 text 색 변화 */
  ${SwitchInput}:checked + ${SwitchLabel} & {
    color: rgba(192, 192, 192, 1);
  }
`;

const OnText = styled.span`
  font-weight: ${({fontWeight}) => fontWeight || '700'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: 19px;
  color: rgba(192, 192, 192, 1);
  position: relative;
  z-index: 1;
  margin-right: ${({ margin }) => margin || '22px'};

  /* OFF 버튼이 눌리면 text 색 변화 */
  ${SwitchInput}:checked + ${SwitchLabel} & {
    color: #ffffff;
  }
`;



const ToggleButtonLarge = ({ offText, onText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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


