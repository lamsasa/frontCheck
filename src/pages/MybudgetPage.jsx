import React from "react";
import Header from "../components/Common/Header"
import Navbar from "../components/Common/Navbar";
import ClickButton  from "../components/Common/ClickButton";
import Box from "../components/Common/Box";
import ContainerStyle from "../styles/ContainerStyle";
import BoxStyle from "../styles/BoxStyle";
import useViewport from "../hooks/viewportHook";

const MybudgetPage = () => {
const { isMobile } = useViewport();

    return(
        <>
            <Header/>   
            <Navbar/>
            <ContainerStyle isMobile={isMobile}>
            <BoxStyle>
                <div className="content">
                    <p className="title">나의 예산</p>
                    <ClickButton width={'90px'} text={'예산 추가'}/>
                </div>
                       
                </BoxStyle>
                <Box height={'300px'}>

                </Box>
            </ContainerStyle>
               

        </>
      
    )
}
export default MybudgetPage;


