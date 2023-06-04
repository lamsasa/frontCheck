import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

const CalendarContainer = styled.div`
display: flex;
flex-direction: row;

.calendar-tab {
        margin-left: 30px;
        height: 500px;
        width: 300px;
        background-color: #fff;
        color: #999;
        line-height: 1.125em;
        border : 0px;
        border-radius: 10px;
        box-shadow: 0px 5px 8px 0px gray;
    }
`;

const HomeContainer = styled.div`
    height: 1080px;
    width: 1920px;
    background: #eefaf6;
    display: flex;
    flex-direction: column;

    /* align-items: center; */
    /* justify-content: center; */
    /* vertical-align: center; */



.toggle-switch input{
  -webkit-appearance:none;
  -webkit-border-radius:0;
}

#container{
  display: flex;
  width: 100%;
  /* height: 98vh;
  justify-content:center;
  align-items:center; */
}
.toggle-switch input[type=checkbox]{
  display: none;
}

.toggle-track{
  display: inline-block;
  position: relative;
  width: 60px;
  height: 27px;
  border-radius:60px;
  background: #3BB2B8;
}
.toggle-track:before{
  content:'';
  display: block;
  position: absolute;
  top: -6px;
  left: -15px;
  width: 27px;
  height: 27px; 
  margin: 5px;
  background: #fff;
  border-radius:100%;
  border:1px solid #3BB2B8;
  transition:left 0.3s;
}

.toggle-switch input[type=checkbox] + label .toggle-track:after{
  content:'일정';
  display: inline-block;
  position: absolute;
  right: 8px;
  color: #fff;
}

.toggle-switch input[type=checkbox]:checked + label .toggle-track{
  background: #42E695;
}

.toggle-switch input[type=checkbox]:checked + label .toggle-track:before{
  left: 40px;
  border:1px solid #42E695;
}

.toggle-switch input[type=checkbox]:checked + label .toggle-track:after{
  content:'가계부';
  left: 5px;
}
`;

const Home = () => {
    return (

        <>
            <HomeContainer>

                <div class="container">
                    {/* <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                        <label class="btn btn-outline-primary" for="btnradio1">가계부</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio2">일정</label>
                    </div> */}


                    <div id="container">
                        <div class="toggle-switch">
                            <input type="checkbox" id="chkTog4" />
                            <label for="chkTog4">
                                <span class="toggle-track"></span>
                            </label>
                        </div>
                    </div>

                </div>


                <CalendarContainer>
                    <div className="calendar">
                        <Calendar
                            locale="en" />
                    </div>

                    <div className="calendar-tab">

                    </div>
                </CalendarContainer>

            </HomeContainer>
        </>

    );
};


export default Home;