import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import MyCalendar from '../../common/calendar/MyCalendar'
=======
import MyCalendar from '../../components/calendar/MyCalendar'
>>>>>>> e614dfe29647b3afce46fd887d8bd88e4bd6a14c


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