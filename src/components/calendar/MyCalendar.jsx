import React, { Component } from 'react';
import styled from 'styled-components';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
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



export default function MyCalendar() {

  // render() {
  const apiKey = process.env.REACT_APP_CAL_API_KEY;


  return (
    <CalendarContainer>
      <div className="App">
        <FullCalendar
          id="calendar"
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, googleCalendarPlugin]}

          googleCalendarApiKey={apiKey}
          events={{
            googleCalendarId: 'b1ockbust2r@gmail.com',
          }}
          eventDisplay={'block'}
          eventTextColor={'#222'}
          eventColor={'#DFF6EE'}
          Toolbar
        />
      </div>
    </CalendarContainer>
  );
}

// export default MyCalendar;