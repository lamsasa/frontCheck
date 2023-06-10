import React from "react";
import styled from "styled-components";

const Box = ({height}) => {
    return <BoxStyled height={height}/>
}
export default Box;

const BoxStyled = styled.div`
    width:80%;
    margin:0 auto;
    margin-bottom:20px;
    height:${props => props.height || '150px'};
    background-color:${({theme}) => theme.bgColor};
    box-shadow: 0px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .content {
        display:flex;
        justify-content:space-between;
        padding: 20px;
    }
    .title{
        font-style: normal;
        font-weight: bolder;
        font-size: 18px;
    }
`