import React from "react";
import styled from "styled-components";
import Header from "../components/Common/Header"
import Navbar from "../components/Common/Navbar";
import ClickButton  from "../components/Common/ClickButton";
import Container from "../components/Common/Container";
import Box from "../components/Common/Box";

const MybudgetPage = () => {
    return(
        <>
            <Header/>   
            <Navbar/>
            <Container>
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


