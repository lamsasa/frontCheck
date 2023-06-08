import React, { Component } from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './MyCalendar.css';


const CalendarContainer = styled.div`

.fc {
  background-color: ${({ theme }) => theme.bgColor};
  --fc-border-color: ${({ theme }) => theme.bgColor};
}

.fc-day-today {
  --fc-today-bg-color: ${({ theme }) => theme.todayColor};
}
`;


class MyCalendar extends Component {
  render() {

    return (
      <CalendarContainer>
        <div className="App">
          <FullCalendar
            id="calendar"
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
          />
        </div>
      </CalendarContainer>
    );
  }
}
export default MyCalendar;