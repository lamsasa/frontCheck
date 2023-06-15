import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Common/Header";
import Navbar from "../../components/Common/Navbar";
import Container from "../../components/Common/Container";
// import Box from "../../components/Common/Box";
import ToggleButtonLarge from "../../components/Common/ToggleButtonLarge";
// import ToggleButtonSmall from "../../components/Common/ToggleButtonSmall";
// import useViewport from "../../hooks/viewportHook";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../components/Calendar/calendar.css";

const Home = () => {
  // const { isMobile } = useViewport();

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <Navbar />

      <Container>
        <CalendarContainer>
          <ToggleButtonLarge
            onText="일 정"
            offText="가계부"
            isOn={isOn}
            handleToggle={handleToggle}
          />

          {/* <ToggleButtonSmall
            onText="일 정"
            offText="가계부"
            isOn={isOn}
            handleToggle={handleToggle}
          /> */}

          <div className="calendar">
            <Calendar locale="en" />
            <div className="calendar-tab"></div>
          </div>

          {/* <div className="calendar">
            <div className="App">
              {isOn ? (
                <MyCalendar isCal={true} />
              ) : (
                <MyCalendar isCal={false} />
              )}
            </div>
          </div> */}

          <calendar />
        </CalendarContainer>
        <BoxContainer>
          <div className="box-1">
            <div className="text">지난 달 대비 사용 금액</div>
          </div>
          <div className="box-2">
            <div className="text">남은 돈 확인</div>
          </div>
        </BoxContainer>
      </Container>
    </>
  );
};

export default Home;

// const HomeContainer = styled.div`
//   width: ${(props) => (props.isMobile ? "768px" : "100%")};
//   /* display: flex; */

//   /* flex-direction: ; */
//   /* flex-direction: column; */
//   /* align-items: center; */
//   /* justify-content: center; */
//   /* vertical-align: center; */
// `;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 30px 70px;

  /* height: 1080px;
    width: 1920px;
    background: #eefaf6;
    display: flex;
    flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  /* vertical-align: center; */

  .calendar {
    display: flex;
    flex-direction: row;
  }

  .calendar-tab {
    margin-top: 20px;
    margin-left: 30px;
    width: 300px;
    background-color: ${({ theme }) => theme.bgColor};
    color: #999;
    line-height: 1.125em;
    border: 0px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

const BoxContainer = styled.div`
  width: 1200px;
  height: auto;
  padding-bottom: 30px;
  display: flex;
  padding-left: 40px;

  .box-1,
  .box-2 {
    border-radius: 10px;
    /* position: absolute; */
    width: 580px;
    height: 200px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-left: 30px;
  }

  .text {
    height: 30px;
    font-size: 2rem;
    font-weight: bold;
    padding: 20px;
  }
`;
