import React from "react";
import styled from "styled-components";

import MyCalendar from '../../components/Calendar/MyCalendar';
import Header from '../../components/Common/Header'
import Navbar from "../../components/Common/Navbar";
import ToggleButtonLarge from "../../components/Common/ToggleButtonLarge";

// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "../../styles/calendar.css";


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

.calendar_Main, .calendar_SC {
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

// const Test = styled.div`
//   background: linear-gradient(137deg, rgba(167, 255, 201, 0.13) 1.63%, rgba(70, 137, 175, 0.17) 98.37%, rgba(0, 255, 133, 0.51) 98.37%);
//   width: 150px;
//   height: 150px;
// `


const Home = () => {

  return (
    <>
      <Header />
      <Navbar />

      <HomeContainer>
        <CalendarContainer>

          <ToggleButtonLarge onText={"일 정"} offText={"가계부"}/>

          <div className="calendar_Main">
            <div className="App">
              <MyCalendar />
            </div>

            <div className="calendar-tab" >
            </div>
          </div>

          <div className="calendar_SC">
            <div className="App">
              <MyCalendar isCal={true} />
            </div>

            <div className="calendar-tab" >
            </div>
          </div>

        </CalendarContainer>
      </HomeContainer>
    </>
  );
};


export default Home;