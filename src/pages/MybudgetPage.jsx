import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import useViewport from "../context/viewportHook";
import { ClickButton } from "../components/StyledComponents/Button";

const Container = styled.div`
    width:100%;
    height:100vh;
    padding-left:${(props) => (props.isMobile ? '0px' : '180px')};
    padding-top:100px;
`

const Box = styled.div`
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
const MybudgetPage = () => {
    const { isMobile } = useViewport();
    return(
        <>
            <Header/>
            <Navbar/>
            <Container isMobile={isMobile}>
                <Box>
                    <div className="content">
                        <p className="title">나의 예산</p>
                        <ClickButton width={'90px'}>예산 추가</ClickButton>
                    </div>
                    
                </Box>
                <Box height={'300px'}>

                </Box>
            </Container>
        </>
      
    )
}
export default MybudgetPage;