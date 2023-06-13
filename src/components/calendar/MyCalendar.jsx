import React from 'react';
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

.calendar_Main, .calendar_SC {
  display: flex;
  flex-direction: row;
}
`;


export default function MyCalendar({ isCal }) {

  // render() {
  const apiKey = process.env.REACT_APP_CAL_API_KEY;

  return (
    <CalendarContainer>

      <div className="calendar_Main">
        {isCal ?
          <div className="App">
            <FullCalendar
              id="calendar"
              defaultView="dayGridMonth"

              plugins={[dayGridPlugin, googleCalendarPlugin]}
              googleCalendarApiKey={apiKey}
              events={[
                { googleCalendarId: 'b1ockbust2r@gmail.com' },
                { title: 'Event 1', date: '2023-06-01' },
                { title: 'Event 2', date: '2023-06-05' },
                { title: 'Event 3', date: '2023-06-10' },
              ]}

              headerToolbar={{
                left: 'prev',
                center: 'title',
                right: 'next'}}

              eventDisplay={'block'}
              eventTextColor={'#222'}
              eventColor={'#DFF6EE'}
              Toolbar
            />
          </div> :
          <div className="App">
            <FullCalendar
              id="calendar"
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin]}
              eventDisplay={'block'}
              eventTextColor={'#222'}
              eventColor={'#DFF6EE'}
              Toolbar />
          </div>
        }
        <div className="calendar-tab" >
        </div>
      </div>

    </CalendarContainer>
  );
}

// export default MyCalendar;