import React from "react";
import styled from "styled-components";

import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import MyCalendar from '../../components/calendar/MyCalendar.jsx';
import Header from '../../components/Header'
import Navbar from "../../components/Navbar";


// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "../../styles/calendar.css";

const CalendarContainer = styled.div`
display: flex;
flex-direction: row;
margin: 50px;


.calendar-tab {
        margin-top: 80px;
        margin-left: 30px;
        width: 300px;
        padding: 10px;
        background-color: ${( {theme}) => theme.bgColor};
        color: #999;
        line-height: 1.125em;
        border : 0px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }
`;

const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    /* align-items: center; */
    /* justify-content: center; */
    /* vertical-align: center; */


// 가계부,일정 전환 스위치
.toggle-switch input{
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}

.container{
  display: flex;
  width: 100%;
}

.toggle-switch input[type=checkbox]{
  display: none;
}

.toggle-track{
  display: inline-block;
  position: relative;
  margin: 20px;
  width: 140px;
  height: 45px;
  border-radius: 60px;
  background: #fff;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  justify-content: center;
}

.toggle-track:before{
  content:'가계부';
  display: block;
  position: absolute;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  line-height: 32px;
  font-weight: bold;
  font-size: 1.1rem;
  width: 70px;
  height: 33px;
  top: 5px;
  left: 7px;
  background: linear-gradient(89.63deg, rgba(66, 230, 149, 0.6) 5.56%, rgba(59, 178, 184, 0.6) 96.4%, rgba(59, 178, 184, 0.6) 96.4%);

  border-radius: 60px;
  border: 1px solid linear-gradient(89.63deg, rgba(66, 230, 149, 0.6) 5.56%, rgba(59, 178, 184, 0.6) 96.4%, rgba(59, 178, 184, 0.6) 96.4%);
  transition: left 0.3s;
}

.toggle-switch input[type=checkbox]:checked + label .toggle-track:before{
  content: '일 정';
  width: 65px;
  left: 67px;
}

/* .toggle-switch input[type=checkbox]:checked + label .toggle-track{
  background: #fff;
} */

.toggle-switch input[type=checkbox] + label .toggle-track:after{
  content:'일 정';
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 17px;
  font-weight: bold;
  color: #999;
}

.toggle-switch input[type=checkbox]:checked + label .toggle-track:after{
  content:'가계부';
  left: 20px;
  top: 17px;
}
`;

// const Test = styled.div`
//   background: linear-gradient(137deg, rgba(167, 255, 201, 0.13) 1.63%, rgba(70, 137, 175, 0.17) 98.37%, rgba(0, 255, 133, 0.51) 98.37%);
//   width: 150px;
//   height: 150px;
// `


const Home = () => {
  return (

    <HomeContainer>
      <Header />
      <Navbar/>


      <CalendarContainer>

      {/* <div className="container">
          <div class="toggle-switch">
            <input type="checkbox" id="chkTog2" />
            <label for="chkTog2">
              <span class="toggle-track"></span>
            </label>
          </div>
      </div> */}

        <div className="App">
          <MyCalendar />
        </div>

        {/* <div className="calendar">
          <Calendar locale="en" />
        </div> */}

        <div className="calendar-tab" >
        </div>

      </CalendarContainer>

    </HomeContainer>
  );
};

export default Home;