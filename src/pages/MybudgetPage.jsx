import React from "react";
import styled from "styled-components";

import Header from "../components/Common/Header"
import Navbar from "../components/Common/Navbar";
import useViewport from "../hooks/viewportHook";
import ClickButton  from "../components/Common/ClickButton";

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
                        <ClickButton width={'90px'} text={'예산 추가'}/>
                    </div>
                </Box>
                <Box height={'300px'}>

                </Box>
            </Container>
        </>
      
    )
}
export default MybudgetPage;

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