import styled, {css} from 'styled-components';
import { createGlobalStyle} from "styled-components";
import reset from 'styled-reset'

// 전역스타일링: 모든 곳에 쓰이는 style입니다.
const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%; // 10px = 1rem;
    --maincolor: #DFF6EE
  }  

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

const Button = styled.button`
  background: linear-gradient(89.63deg, rgba(66, 230, 149, 0.6) 5.56%, rgba(59, 178, 184, 0.6) 96.4%, rgba(59, 178, 184, 0.6) 96.4%);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

//일반 버튼 컴포넌트
const ClickButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  width: ${props => props.width || '128px'};
  height: ${props => props.height || '40px'};

  background: linear-gradient(99.99deg, rgba(66, 230, 149, 0.8) 1.31%, rgba(59, 178, 184, 0.8) 98.06%);
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: none;
  cursor: pointer;

  color: #FFFFFF;

  &:hover {
    background: linear-gradient(99.99deg, rgba(66, 230, 149, 1) 1.31%, rgba(59, 178, 184, 1) 98.06%);
  }
`;

export {Button, ClickButton};
export default GlobalStyle;