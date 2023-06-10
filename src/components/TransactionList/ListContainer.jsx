import styled from 'styled-components';

// 슬라이드 내부 화면 컨테이너
const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1049px;
  height: 646px;
  margin-top: 30px;

  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export default ListContainer;

