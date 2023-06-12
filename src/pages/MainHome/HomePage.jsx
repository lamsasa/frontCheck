import React from "react";
import styled from "styled-components";

import MyCalendar from '../../components/Calendar/MyCalendar';
import Header from '../../components/Common/Header'
import Navbar from "../../components/Common/Navbar";
import ToggleButtonLarge from "../../components/Common/ToggleButtonLarge";


const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    /* flex-direction: ; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    /* vertical-align: center; */
`;

const CalendarContainer = styled.div`
display: flex;
flex-direction: column;
padding : 100px;
padding-left: 230px;

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
        border : 0px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }
`;


const Home = () => {

  return (
    <>
      <Header />
      <Navbar />

      <HomeContainer>
        <CalendarContainer>

          <ToggleButtonLarge onText={"일 정"} offText={"가계부"}/>

          <div className="calendar">
            <div className="App">
              <MyCalendar />
              {/* <MyCalendar isCal={true} /> */}
            </div>
          </div>

        </CalendarContainer>
      </HomeContainer>
    </>
  );
};


export default Home;