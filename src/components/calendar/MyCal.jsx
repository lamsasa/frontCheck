import React, { useState } from "react";
import styled from "styled-components";

// 캘린더 API 적용
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCal.css";
import moment from "moment";

// import Button from "../Common/ClickButton";
import ToggleButtonSmall from "../Common/ToggleButtonSmall";
// import { Next1 } from "../../assets/next.png";
// import { Prev1 } from "../../assets/prev.png";
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

  const curDate = new Date();
  const [value, onChange] = useState(curDate);
  // const activeDate = moment(value).format("YYYY-MM-DD");

  // 컨텐츠 날짜 리스트
  const incomeList = ["2023-06-02", "2023-06-15", "2023-06-20", "2023-06-27"];
  const expenseList = [
    "2023-06-01",
    "2023-06-07",
    "2023-06-11",
    "2023-06-17",
    "2023-06-20",
    "2023-06-26",
  ];

  // 각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }: any) => {
    // 해당 날짜에 추가할 컨텐츠의 배열
    const contents = [];

    // date가 리스트의 날짜와 일치하면 해당 컨텐츠 추가
    if (incomeList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      contents.push(
        <>
          <div className="dot-income"></div>
          {/* <img
            src="CreditCard.svg"
            className="diaryImg"
            width="26"
            height="26"
            alt="today is..."
          /> */}
        </>
      );
    }
    if (expenseList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      contents.push(
        <>
          <div className="dot-expense"></div>
          {/* <img
            src="CreditCard.svg"
            className="diaryImg"
            width="26"
            height="26"
            alt="today is..."
          /> */}
        </>
      );
    }
    return <div className="dot-all">{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };

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
              // nextLabel={<Next1 />}
              // prevLabel={<Prev1 />}
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
              // nextLabel={<Next1 />}
              // prevLabel={<Prev1 />}
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

  .dot-all {
    display: flex;
    flex-direction: row;
  }
  .dot-income,
  .dot-expense {
    margin: 2px;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    margin-top: 55px;
  }
  .dot-income {
    background-color: #3fcea5;
  }
  .dot-expense {
    background-color: #ff005c;
  }
`;
