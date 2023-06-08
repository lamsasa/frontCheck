import React from "react";
import styled from "styled-components";
import MyCalendar from '../../common/calendar/MyCalendar'


const CalendarContainer = styled.div`
display: flex;
flex-direction: row;
margin: 50px;
`;

const Calendar = () => {
    return (

        <CalendarContainer>
            <div className="App">
                <MyCalendar />
            </div>
        </CalendarContainer>

    );
};

export default Calendar;