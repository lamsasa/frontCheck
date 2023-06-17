import styled from "styled-components";
import Header from "../components/Common/Header";
import Navbar from "../components/Common/Navbar";
import LineBarChart from "../components/Chart/LineBarChart";
import Container from "../components/Common/Container";
import Box from "../components/Common/Box";
import PieChart from "../components/Chart/PieChart";
import BudgetCalendar from "../components/MyBudget/BudgetCalendar";

// 버튼 년도 단위로 변경 필요

const Chart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <Box>
          <ButtonContainer>
            <BudgetCalendar />
          </ButtonContainer>
          <ChartContainer>
            <InBox>
              <LineBarChart />
            </InBox>
          </ChartContainer>
        </Box>

        <Box>
          <ChartContainer2>
            <PieChart />
          </ChartContainer2>
        </Box>
      </Container>
    </>
  );
};

export default Chart;

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #ffdbdb;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  height: 500px;
  align-content: center;
  justify-content: center;
  background-color: #ffdbdb;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ChartContainer2 = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  align-content: center;
  justify-content: center;
  background-color: #ffdbdb;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InBox = styled.div`
  height: 500px;

  justify-content: center;
  overflow-x: scroll;
  overflow-y: hidden;
  zoom: 1;
`;
