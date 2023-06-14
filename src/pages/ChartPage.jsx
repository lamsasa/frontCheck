//import styled from 'styled-components';
//import TotalChart from '../components/Chart/TotalChart';
import Header from '../components/Common/Header';
import Navbar from "../components/Common/Navbar";
import ChartTest from '../components/Chart/ChartTest';
import LineChart from '../components/Chart/LineChart';
import LineBarChart from '../components/Chart/LineBarChart'
import Container from '../components/Common/Container'

const Chart = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Container>
      <LineBarChart/>
      <p>graph</p>
      <LineChart/>
      <ChartTest/>
      </Container>
    </>
  );
};

export default Chart;


// const ChartContainer = styled.div`
// `;