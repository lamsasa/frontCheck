import React from "react";
import Header from "../components/Common/Header"
import Navbar from "../components/Common/Navbar";
import ClickButton  from "../components/Common/ClickButton";
import Container from "../components/Common/Container";
import Box from "../components/Common/Box";
import MyResponsiveBullet from "../components/MyBudget/BudgetChart";

const MybudgetPage = () => {


    return(
        <>
            <Header/>   
            <Navbar/>
            <Container>
                <Box height={'150px'}>
                    <div className="content">
                        <p className="title">나의 예산</p>
                        <ClickButton width={'90px'}>예산 추가</ClickButton>
                    </div>          
                </Box>
                <Box height={'200px'}>
                    <MyResponsiveBullet/>
                </Box>
            </Container>
               

        </>
      
    )
}
export default MybudgetPage;


