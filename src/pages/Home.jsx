import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

const HomeContainer = styled.div`
    height: 1080px;
    width: 1920px;
    background: #eefaf6;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    /* vertical-align: center; */
`;

const Home = () => {
    return (

        <>
            <HomeContainer>

                <div class="container">
                    {/* <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                            <label class="btn btn-outline-primary" for="btnradio1">가계부</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btnradio2">일정</label>
                            </div> */}

                    <div class="btn-group" role="group" aria-label="...">
                        <button type="button" class="btn btn-default">가계부</button>
                        <button type="button" class="btn btn-default">일정</button>
                    </div>
                </div>


                <div className="calendar">
                    <Calendar
                        locale="en" />
                </div>
            </HomeContainer>
        </>

    );
};


export default Home;