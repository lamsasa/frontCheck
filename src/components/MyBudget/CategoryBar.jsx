import React from 'react';
import styled, { keyframes } from 'styled-components';
import categoryList from '../../styles/categoryColor';

const CategoryBar = ({ name, money, totalMoney }) => {
    const selectedItem = categoryList.find((item) => item.Name === name);
    const percent = ((money / totalMoney) * 100) + "%";
    return (
      <TotalBar>
        <BarWrapper>
          <Bar color={selectedItem ? selectedItem.Color : '#FF7076'} width={percent} />
        </BarWrapper>
        
      </TotalBar>
    );
  };
  
  export default CategoryBar;
  
  const moveInAnimation = keyframes`
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const BarWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 5px;
  `;

  const Bar = styled.div`
    width: ${props => props.width};
    height: 100%;
    background-color: ${props => props.color};
    border-radius: 100px;
    position: absolute;
    top: 0;
    animation: ${moveInAnimation} 0.5s forwards;
  `;
  
  const TotalBar = styled.div`
    width: 80%;
    height: 5px;
    background-color: #D6D6D6;
    border-radius: 100px;
  `;