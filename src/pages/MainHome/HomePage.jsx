import React, { useState } from "react";
import styled from "styled-components";
import MyCalendar from "../../components/Calendar/MyCalendar";
import Header from "../../components/Common/Header";
import Navbar from "../../components/Common/Navbar";
import ToggleButtonLarge from "../../components/Common/ToggleButtonLarge";
import useViewport from "../../hooks/viewportHook";
import Container from "../../components/Common/Container";
import ToggleButtonSmall from "../../components/Common/ToggleButtonSmall";

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

          <ToggleButtonSmall
            onText="일 정"
            offText="가계부"
            isOn={isOn}
            handleToggle={handleToggle}
          />

          <div className="calendar">
            <div className="App">
              {isOn ? (
                <MyCalendar isCal={true} />
              ) : (
                <MyCalendar isCal={false} />
              )}
            </div>
          </div>

          <calendar />
        </CalendarContainer>
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
  padding: 0 0 30px 30px;

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
