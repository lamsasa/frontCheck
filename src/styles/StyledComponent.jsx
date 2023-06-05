import styled, {css} from 'styled-components';
import { createGlobalStyle} from "styled-components";

// 전역스타일링: 모든 곳에 쓰이는 style입니다.
const GlobalStyle = createGlobalStyle`
height: 1080px;
width: 1920px;
background: linear-gradient(137deg, rgba(167, 255, 201, 0.13) 1.63%, rgba(70, 137, 175, 0.17) 98.37%, rgba(0, 255, 133, 0.51) 98.37%);

  html {
    font-size: 62.5%; // 10px = 1rem;
    --maincolor: #DFF6EE
  }  

  body {
    //font-family:
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