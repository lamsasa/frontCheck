import React from 'react';
import styled from 'styled-components';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import useViewport from '../../hooks/viewportHook';
import './MyCalendar.css';

const CalendarContainer = styled.div`

.fc {
  background-color: ${({ theme }) => theme.bgColor};
  --fc-border-color: ${({ theme }) => theme.bgColor};
  width: ${(props) => (props.isMobile ? '768px' : '800px')};
  height: ${(props) => (props.isMobile ? '50px' : 'auto')};
}

.fc-day-today {
  --fc-today-bg-color: ${({ theme }) => theme.todayColor};
}

.fc .fc-button-primary:disabled {
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.bgColor};
  border: none;
}

.fc .fc-button-primary {
  background-color: ${({ theme }) => theme.todayColor};
  border-color: ${({ theme }) => theme.todayColor};
  --fc-button-hover-bg-color: ${({ theme }) => theme.todayColor};
  --fc-button-hover-border-color: ${({ theme }) => theme.todayColor};
  --fc-button-active-bg-color: ${({ theme }) => theme.todayColor};
  --fc-button-active-border-color:${({ theme }) => theme.todayColor};
}

.calendar_Main, .calendar_SC {
  display: flex;
  flex-direction: row;
}
`;


export default function MyCalendar({ isCal }) {
  const { isMobile } = useViewport();

  // render() {
  const apiKey = process.env.REACT_APP_CAL_API_KEY;

  return (
    <CalendarContainer isMobile={isMobile}>

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

              // headerToolbar={{
              //   left: 'prev',
              //   center: 'title',
              //   right: 'next'}}

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