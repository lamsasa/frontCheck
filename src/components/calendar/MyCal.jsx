import React, { useState } from "react";
import styled from "styled-components";

// 캘린더 API 적용
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCal.css";
import moment from "moment";

// import Button from "../Common/ClickButton";
import ToggleButtonSmall from "../Common/ToggleButtonSmall";
// import NextButton from "../../assets/1.png";
// import PrevButton from "../../assets/2.png";
// import NextTo from "../../assets/NextTo.png";
// import PrevDouble from "../../assets/PrevDouble.png";

const MYCalendar = ({ isCal }) => {
  // const { isMobile } = useViewport();
  // const apiKey = process.env.REACT_APP_CAL_API_KEY;

  // Today 버튼
  // const [date, setDate] = useState(new Date());
  // const handleTodayClick = () => {
  //   setDate(new Date());
  // };

  const addContent = () => {};

  const curDate = new Date();
  const [value, onChange] = useState(curDate);
  // const activeDate = moment(value).format("YYYY-MM-DD");

  return (
    <CalendarContainer>
      <div className="calendar_Main">
        {isCal ? (
          <div className="App">
            <Calendar
              onChange={onChange}
              value={value}
              locale="en"
              // onClickDay={dayIn}
              // returnValue="range"
              // nextLabel={<NextButton />}
              // prevLabel={<PrevButton />}
              next2Label={null}
              prev2Label={null}
              // defaultValue={new Date()}
              tileContent={addContent}
              calendarType="US" // 요일을 일요일부터 시작하도록 설정

              // today 값
              // value={date}
              // onChange={setDate}
            />
          </div>
        ) : (
          <div className="App">
            <Calendar
              onChange={onChange}
              value={value}
              locale="en"
              // returnValue="range"
              // selectRange={true}
              // nextLabel={<NextButton />}
              // prevLabel={<PrevButton />}
              next2Label={null}
              prev2Label={null}
              // defaultValue={new Date()}
              calendarType="US" // 요일을 일요일부터 시작하도록 설정

              // today 값
              // value={date}
              // onChange={setDate}
            />
          </div>
        )}
        {/* <Button width={"50px"} height={"30px"} onClick={handleTodayClick}>
          Today
        </Button> */}
        <div className="calendar-tab">
          <ToggleButtonSmall
            onText="수 입"
            offText="지 출"
            // isOn={isOn}
            // handleToggle={handleToggle}
          />
          <div className="select-day">
            {moment(value).format("YYYY년 MM월 DD일")}
          </div>
        </div>
      </div>
    </CalendarContainer>
  );
};
export default MYCalendar;

const CalendarContainer = styled.div`
  .calendar-tab {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin: 20px 30px 0 30px;
    padding: 10px;
    width: 300px;
    height: auto;
    background-color: #fff;
    color: #999;
    line-height: 1.125em;
    border: 0px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }

  .calendar_Main {
    display: flex;
    flex-direction: row;
  }

  .select-day {
    margin: 10px;
  }
`;
