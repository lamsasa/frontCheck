import React from "react";
import Header from "../components/Common/Header";
import Navbar from "../components/Common/Navbar";
import ClickButton from "../components/Common/ClickButton";
import Container from "../components/Common/Container";
import Box from "../components/Common/Box";
import BudgetChart from "../components/MyBudget/BudgetChart";
import CategoryTotalBar from "../components/MyBudget/CategoryTotalBar";
import BudgetCalendar from "../components/MyBudget/BudgetCalendar";

const MybudgetPage = () => {
  // 임시 데이터
  const categoryData = [
    { Name: "식비", Money: "60000", date: "2023-06" },
    { Name: "교통/차량", Money: "90000", date: "2023-06" },
    { Name: "주유", Money: "90000", date: "2023-06" },
    { Name: "문화/레저", Money: "30000", date: "2023-06" },
    { Name: "마트/편의점", Money: "20000", date: "2023-06" },
    { Name: "패션/미용", Money: "10000", date: "2023-06" },
    { Name: "생활용품", Money: "3000", date: "2023-06" },
    { Name: "여행/숙박", Money: "10000", date: "2023-06" },
    { Name: "주거", Money: "50000", date: "2023-06" },
    { Name: "의료비", Money: "30000", date: "2023-06" },
    { Name: "교육", Money: "60000", date: "2023-06" },
    { Name: "경조사/회비", Money: "10000", date: "2023-06" },
    { Name: "반려동물", Money: "3000", date: "2023-06" },
    { Name: "기타", Money: "10000", date: "2023-06" },
  ];
  const totalData = [{ Money: "476000", date: "2023-06" }];

  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <Box>
          <div className="content">
            <p className="title">나의 예산</p>
            <ClickButton width={"90px"}>예산 추가</ClickButton>
          </div>
          <div className="content">
            <BudgetCalendar></BudgetCalendar>
            <div className="total">
              <p>총 예산</p>
              <p className="totalMoney">
                {totalData[0].Money ? totalData[0].Money : "0"}원
              </p>
            </div>
          </div>
          <div className="content">
            <CategoryTotalBar
              categoryData={categoryData}
              totalData={totalData}
            />
          </div>
        </Box>
        <Box>
          <div className="center">
            {categoryData &&
              categoryData.map((data) => (
                <BudgetChart
                  name={data.Name}
                  money={data.Money}
                  totalMoney={totalData[0].Money ? totalData[0].Money : "0"}
                />
              ))}
          </div>
        </Box>
      </Container>
    </>
  );
};
export default MybudgetPage;
