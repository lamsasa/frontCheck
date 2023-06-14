import React, { useRef } from 'react';
import styled from 'styled-components';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./event-utils"; // 이벤트 셋팅 함수
// import { INITIAL_EVENTS, createEventId } from "./event-utils"; // 이벤트 셋팅 함수

import useViewport from '../../hooks/viewportHook';
import './MyCalendar.css';


const CalendarContainer = styled.div`

// 달력 전체 크기 
.fc {
  display: flex;
  justify-items: center;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  width: ${(props) => (props.isMobile ? '500px' : '800px')};
  height: ${(props) => (props.isMobile ? '800px' : 'auto')};

  background-color: ${({ theme }) => theme.bgColor};
  --fc-border-color: ${({ theme }) => theme.bgColor};

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
  const apiKey = process.env.REACT_APP_CAL_API_KEY;

  // state = {
  //   currentEvents: [],  
  // };
  // render() {

  return (
    <CalendarContainer isMobile={isMobile}>

      <div className="calendar_Main">
        {isCal ?
          <div className="App">
            <FullCalendar
              id="calendar"
              plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
              defaultView="dayGridMonth"

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

              selectable={true} // 날짜를 클릭했을때 날짜 주변이 하늘색으로 변하면서 선택됨
              eventDisplay={'block'}
              eventTextColor={'#222'}
              eventColor={'#DFF6EE'}
              Toolbar

              initialEvents={INITIAL_EVENTS} // 달력 로딩 후 초기화할 이벤트 내용
              // 이벤트를 클릭했을때 실행되는 함수(내용 삭제)
              eventClick={this.handleEventClick}
              // 날짜를 클릭했을때 실행되는 함수(내용 추가)
              select={this.handleDateSelect}
              // 이벤트틀이 초기화/추가/수정/삭제 된 후에 호출되는 함수
              // eventAdd={function(){}}
              // eventChange={function(){}}
              // eventRemove={function(){}}
              eventsSet={this.handleEvents}
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