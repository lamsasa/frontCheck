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
  const apiKey = process.env.REACT_APP_CAL_API_KEY;

  // Today 버튼
  const [date, setDate] = useState(new Date());
  const handleTodayClick = () => {
    setDate(new Date());
  };

  const tileContent = () => {};

  return (
    <CalendarContainer>
      <div className="calendar_Main">
        {isCal ? (
          <div className="App">
            <Calendar
              locale="en"
              // onClickDay={dayIn}
              // formatShortWeekday={(locale, value) =>
              //   ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
              //     value.getDay()
              //   ]
              // }
              // formatDay={(locale, date) =>
              //   date.toLocaleString("en", { day: "numeric" })
              // }
              returnValue="range"
              // selectRange={true}
              // nextLabel={<NextButton />}
              // prevLabel={<PrevButton />}
              next2Label={null}
              prev2Label={null}
              value={date}
              onChange={setDate}
              defaultValue={new Date()}
              tileContent={tileContent}
              calendarType="US" // 요일을 일요일부터 시작하도록 설정
              // formatDay={(locale, date) => moment(date).format("D")} // '일' 제외하고 숫자만 보이도록 설정
            />
          </div>
        ) : (
          <div className="App">
            <Calendar
              locale="ko"
              returnValue="range"
              // selectRange={true}
              // nextLabel={<NextButton />}
              // prevLabel={<PrevButton />}
              next2Label={null}
              prev2Label={null}
              value={date}
              onChange={setDate}
              defaultValue={new Date()}
              calendarType="US" // 요일을 일요일부터 시작하도록 설정
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
        </div>
      </div>
    </CalendarContainer>
  );
};
export default MYCalendar;

const CalendarContainer = styled.div`
  .calendar-tab {
    display: flex;
    justify-content: center;
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
`;
