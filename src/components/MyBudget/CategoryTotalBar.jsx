import React from 'react';
import styled from 'styled-components';
import categoryList from '../../styles/categoryColor';

const CategoryTotalBar = ({categoryData, totalData}) => {
    

    return (
      <TotalBar>
        {categoryData.map(data => {
        const selectedItem = categoryList.find(item => item.Name === data.Name);
        const percent = `${(data.Money / totalData[0].Money) * 100}%`;
        const color = selectedItem ? selectedItem.Color : '#FF7076';

        return <Bar key={data.Name} width={percent} color={color} />;
      })}
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
    display:flex;
  `;