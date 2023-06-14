import React from 'react';
import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';
import CategoryBar from './CategoryBar';

const BudgetChart = ({name, money, totalMoney}) => {
    return(
        <>
        <Chart>
            <CategoryIcon name={name}></CategoryIcon>
            <p className='name'>{name}</p>
            <CategoryBar name={name} money={money} totalMoney={totalMoney}/>
            <p className='money'>￦{money}</p>
        </Chart>
        
        </>
    )  
    };
export default BudgetChart;

const Chart = styled.div`   
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 20px;

    .name{
        width: 10%;
        padding-left:1%;
    }
    .money{
        width:10%;
        padding-left:1%;
        text-align:right;
    }
`