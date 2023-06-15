import styled from "styled-components";
//import TotalChart from '../components/Chart/TotalChart';
import Header from "../components/Common/Header";
import Navbar from "../components/Common/Navbar";
//import ChartTest from "../components/Chart/ChartTest";
//import LineChart from "../components/Chart/LineChart";
import LineBarChart from "../components/Chart/LineBarChart";
import Container from "../components/Common/Container";
import Box from "../components/Common/Box";
import PieChart from "../components/Chart/PieChart";

const Chart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <Box>
          <ChartContainer>
            <LineBarChart />
          </ChartContainer>
        </Box>

        <Box>
          <ChartContainer>
            <PieChart />
          </ChartContainer>
        </Box>
      </Container>
    </>
  );
};

export default Chart;

const ChartContainer = styled.div`
  display: flex;
  height: 500px;
  align-content: center;
  justify-content: center;
  background-color: #ffdbdb;
`;
