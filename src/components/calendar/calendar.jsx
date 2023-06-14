import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // interaction 패키지 추가설치 필요
import { INITIAL_EVENTS, createEventId } from "./event-utils"; // 이벤트 셋팅 함수

// import '@fullcalendar/daygrid/main.css';

export default class calendar extends React.Component {
  // 이벤트 내용이 반영될 배열
  state = {
    currentEvents: [],
  };

  render() {
    return (
      <FullCalendar
        // interactionPlugin: 클릭이벤트를 사용하기 위해 필요한 콜백기능
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true} // 날짜를 클릭했을때 날짜 주변이 하늘색으로 변하면서 선택됨
        weekends={true} // false일 경우 토요일, 일요일은 표시 생략
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
    );
  }

  // 이벤트틀이 초기화/추가/수정/삭제 된 후에 호출되는 함수
  handleEvents = (events) => {
    // 이벤트가 실행된 후 변경된 상태를 현재 상태에 반영
    this.setState({
      currentEvents: events,
    });
  };

  // 달력에 등록된 이벤트를 클릭했을때 실행되는 함수(내용 삭제)
  handleEventClick = (selectInfo) => {
    alert("삭제할 이벤트 ID: " + selectInfo.event.id);

    // 클릭한 내용을 삭제할지 물어보는 확인창
    if (window.confirm(`'${selectInfo.event.title}'을 삭제하시겠습니까?`)) {
      // 클릭한 이벤트 내용 삭제
      selectInfo.event.remove();
    }
  };

  // 달력에 날짜를 클릭했을때 실행되는 함수(내용 추가)
  handleDateSelect = (selectInfo) => {
    let title = prompt("새로운 내용을 입력해 주세요."); // 새로운 이벤트를 입력받는 프롬프트창
    let calendarApi = selectInfo.view.calendar; // fullcalendar 이벤트 관련 api

    calendarApi.unselect(); // 날짜 선택 해제

    // 새로운 이벤트를 입력한 경우에만 반영
    // 클릭한 날짜에 대해서만 이벤트를 추가
    // startStr과 endStr의 값을 title처럼 직접 받아온 내용으로 반영하면 기간을 지정하여 이벤트를 추가 가능
    if (title) {
      calendarApi.addEvent({
        id: createEventId(), // 새로운 아이디 생성
        title, // 입력된 내용 반영
        start: selectInfo.startStr, // 일정(시작날짜)
        end: selectInfo.endStr, // 일정(종료날짜)
      });
    }
  };
}
