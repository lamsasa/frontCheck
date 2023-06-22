import styled from "styled-components";
import Header from "../components/Common/Header";
import Navbar from "../components/Common/Navbar";
import LineBarChart from "../components/Chart/LineBarChart";
import Container from "../components/Common/Container";
import ListBox from "../components/Common/ListBox";
import Box from "../components/Common/Box";
import PieChart from "../components/Chart/PieChart";
import ChartButton from "../components/Chart/ChartButton";
import React, { useRef, useEffect } from "react";

// 버튼 년도 단위로 변경 필요

const Chart = () => {
  const inBoxRef = useRef(null);

  useEffect(() => {
    // 현재 월에 맞게 스크롤 위치 설정
    scrollToCurrentMonth();
  }, []);

  const scrollToCurrentMonth = () => {
    const inBoxElement = inBoxRef.current;
    if (inBoxElement) {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const monthElement = inBoxElement.querySelector(
        `[data-month="${currentMonth}"]`
      );
      if (monthElement) {
        const scrollLeft = monthElement.offsetLeft;
        inBoxElement.scrollLeft = scrollLeft;
      }
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <ListBox mobileHeight={"350px"}>
          <ButtonContainer>
            <ChartButton />
          </ButtonContainer>
          <ChartContainer>
            <InBox ref={inBoxRef}>
              <LineBarChart />
            </InBox>
          </ChartContainer>
        </ListBox>

        <ListBox>
          <ChartContainer2>
            <PieChart />
          </ChartContainer2>
        </ListBox>
      </Container>
    </>
  );
};

export default Chart;

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: none;
  margin-top: 10px;
`;

const ChartContainer = styled.div`
  display: flex;
  height: 500px;
  align-content: center;
  justify-content: center;
  background-color: none;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 95%;
  }
`;

//Pie Chart
const ChartContainer2 = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  align-content: center;
  justify-content: center;
  background-color: none;
  @media (max-width: 768px) {
    width: 100%;
    height: 280px;
  }
`;

const InBox = styled.div`
  justify-content: center;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    height: 100%;
  }
`;
