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

export {Button};
export default GlobalStyle;