import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Calendar/calendar.css";

const MYCalendar = () => {
  return (
    <>
      <div className="calendar">
        <Calendar locale="en" />
      </div>
    </>
  );
};
export default MYCalendar;
