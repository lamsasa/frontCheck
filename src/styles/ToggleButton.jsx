import React from 'react';
import styled from 'styled-components';
//import {SwitchInput, SwitchLabel, OnButton, TextContainer, OffText, OnText} from './StyledComponent';
//이 컴포넌트는 설명용 컴포넌트입니다.
//그냥 컴포넌트 두 개 만들까...?

// 토글 버튼용 스타일드 컴포넌트
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
  border-radius: 20px;
  transition: 0.2s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #efefef;
  }
`;

const OnButton = styled.span`
  position: absolute;
  top: 4px;
  left: 3px;
  display: inline-block;
  width: ${({ width }) => width || '73px'};
  height: ${({ height }) => height || '40px'};
  transition: 0.2s;
  background: linear-gradient(135deg, rgba(66, 230, 149, 0.8) 0%, rgba(59, 178, 184, 0.8) 100%);
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  /* 버튼 움직일 때 */
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 3px);
    transform: translateX(-100%);
    background: linear-gradient(135deg, rgba(66, 230, 149, 0.8) 0%, rgba(59, 178, 184, 0.8) 100%);
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
  font-weight: 700;
  font-size: 16px;
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
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: rgba(192, 192, 192, 1);
  position: relative;
  z-index: 1;
  margin-right: ${({ margin }) => margin || '22px'};

  /* ON 버튼이 눌리면 text 색 변화 */
  ${SwitchInput}:checked + ${SwitchLabel} & {
    color: #ffffff;
  }
`;

const ToggleButton = ({ offText, onText }) => {
  return (
    <>
      <SwitchInput id="switch" type="checkbox" />
      {/* width, height 설정 가능 */}
      <SwitchLabel htmlFor="switch">
        {/* width, height 설정 가능 */}
        <OnButton className="onf_btn" />
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

export default ToggleButton;


