import React from 'react';
import styled from 'styled-components';
import categoryList from '../../styles/categoryColor';

const CategoryTotalBar = ({ name, money, totalMoney }) => {
    const selectedItem = categoryList.find((item) => item.Name === name);
    const percent = ((money / totalMoney) * 100).toFixed(2) + "%"; // 소수점 둘째자리까지 표시
    return (
      <TotalBar>
        
      </TotalBar>
    );
  };
  
  export default CategoryTotalBar;
  
  const Bar = styled.div`
    width: ${props => props.width};
    height: 5px;
    background-color: ${props => props.color};
    border-radius: 100px;
  `;
  
  const TotalBar = styled.div`
    width: 100%;
    height: 5px;
    background-color: #D6D6D6;
    border-radius: 100px;
    margin-bottom:20px;
  `;