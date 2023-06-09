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
  }  

  body {
    font-family: 'Noto Sans KR', sans-serif; // 폰트 설정
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    
  }
`;

export default GlobalStyle;