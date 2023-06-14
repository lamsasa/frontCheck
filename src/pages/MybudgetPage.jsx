import React, {useState} from "react";
import Header from "../components/Common/Header"
import Navbar from "../components/Common/Navbar";
import ClickButton  from "../components/Common/ClickButton";
import Container from "../components/Common/Container";
import Box from "../components/Common/Box";
import BudgetChart from "../components/MyBudget/BudgetChart";
import {ReactComponent as Right} from '../assets/right.svg';
import {ReactComponent as Left} from '../assets/left.svg';

const MybudgetPage = () => {
    const currentDate = new Date();
    const [year, setYear] = useState(currentDate.getFullYear());
    const [month, setMonth] = useState(currentDate.getMonth() + 1);

    const handleNextMonth = () => {
        if (month === 12) {
          setYear(year + 1);
          setMonth(1);
        } else {
          setMonth(month + 1);
        }
      };
    
      const handlePreviousMonth = () => {
        if (month === 1) {
          setYear(year - 1);
          setMonth(12);
        } else {
          setMonth(month - 1);
        }
      };

    const categoryData = [
        { Name: '식비', Money: '60000', date : "2023-06"},
        { Name: '교통/차량', Money: '90000', date : "2023-06"},
        { Name: '주유', Money: '90000', date : "2023-06"},
        { Name: '문화/레저', Money: '30000', date : "2023-06"},
        { Name: '마트/편의점', Money: '20000', date : "2023-06"},
        { Name: '패션/미용', Money: '10000', date : "2023-06"},
        { Name: '생활용품', Money: '3000', date : "2023-06"},
        { Name: '여행/숙박', Money: '10000', date : "2023-06"},
        { Name: '주거', Money: '50000', date : "2023-06"},
        { Name: '의료비', Money: '30000', date : "2023-06"},
        { Name: '교육', Money: '60000', date : "2023-06"},
        { Name: '경조사/회비', Money: '10000', date : "2023-06"},
        { Name: '반려동물', Money: '3000', date : "2023-06"},
        { Name: '기타', Money: '10000', date : "2023-06"},
        
    ]
    const totalData = [
        { Money: '476000', date : "2023-06"}
    ]

    
    return(
        <>
            <Header/>   
            <Navbar/>
            <Container>
                <Box height='150px'>
                    <div className="content">
                        <p className="title">나의 예산</p>
                        <ClickButton width={'90px'}>예산 추가</ClickButton>
                    </div>    
                    <div className="content">
                        <div>
                        <Left onClick={handlePreviousMonth}/>
                        <span className="date">{year}년 {month}월</span>
                        <Right onClick={handleNextMonth}/>
                        </div>
                        <div className="total">
                            <p>총 예산</p>
                            <p className="totalMoney">{totalData[0].Money}원</p>
                        </div>     
                    </div>
                    
                </Box>
                <Box>
                    <div className="center">
                        {categoryData.map(data => <BudgetChart name={data.Name} money={data.Money} totalMoney={totalData[0].Money} />)}
                    </div>
                    
                </Box>
            </Container>
        </>
    )
}
export default MybudgetPage;
