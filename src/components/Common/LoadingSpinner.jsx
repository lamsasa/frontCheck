import styled, { keyframes } from 'styled-components';

const LoadingSpinner = ({ width, height, children}) => {
  return (
    <LoaderStyled
      width={width}
      height={height}
    >
      {children}
    </LoaderStyled>
  );
};

export default LoadingSpinner;


// 회전 애니메이션 키프레임
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 로딩 스피너 스타일
const LoaderStyled = styled.div`
  border: 4px solid #f3f3f3; /* 회색 테두리 */
  border-top: 4px solid #3498db; /* 파란색 테두리 */
  border-radius: 50%; /* 원 모양 */
  width: ${(props) => props.width || '50px'}; // Use the width prop or default to 50px
  height: ${(props) => props.height || '50px'}; // Use the height prop or default to 50px
  animation: ${spin} 2s linear infinite; /* 회전 애니메이션 */
`;