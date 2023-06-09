import React from "react";
import styled from "styled-components";

import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import MyCalendar from '../../components/calendar/MyCalendar.jsx';
import Header from '../../common/Header'
import Navbar from "../../common/Navbar";
import ToggleButtonLarge from "../../common/ToggleButton/ToggleButtonLarge";


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
margin-left: 180px;

.calendar {
  display: flex;
  flex-direction: row;
}
.calendar-tab {
        margin-top: 20px;
        margin-left: 30px;
        width: 300px;
        padding: 10px;
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
          <ToggleButtonLarge onText={"일 정"} offText={"가계부"} />

          <div className="calendar">

            <div className="App">
              <MyCalendar />
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