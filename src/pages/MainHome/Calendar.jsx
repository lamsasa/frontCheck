import React from "react";
import styled from "styled-components";
import MyCalendar from '../../components/calendar/MyCalendar'
import ToggleButtonLarge from "../../common/ToggleButton/ToggleButtonLarge";

const CalendarContainer = styled.div`
display: flex;
flex-direction: column;
margin: 50px;
`;

const Calendar = () => {
    return (

        <CalendarContainer>
                    <ToggleButtonLarge onText={"일 정"} offText={"가계부"}/>
            <div className="App">
                <MyCalendar />
            </div>
        </CalendarContainer>

    );
};

export default Calendar;