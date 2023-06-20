import React, { useState } from "react";
import styled from "styled-components";

// 캘린더 API 적용
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCal.css";
import moment from "moment";

import ToggleButtonSmall from "../Common/ToggleButtonSmall";
// import { Next1 } from "../../assets/next.png";
// import { Prev1 } from "../../assets/prev.png";

const MYCalendar = ({ isBasic }) => {
  // const { isMobile } = useViewport();
  // const apiKey = process.env.REACT_APP_CAL_API_KEY;

  // Today 버튼
  // const [date, setDate] = useState(new Date());
  // const handleTodayClick = () => {
  //   setDate(new Date());
  // };

  const curDate = new Date();
  const [value, onChange] = useState(curDate);

  // 컨텐츠 날짜 리스트
  const incomeList = [
    "2023-06-02",
    "2023-06-04",
    "2023-06-07",
    "2023-06-15",
    "2023-06-20",
    "2023-06-27",
  ];

  const expenseList = [
    "2023-06-01",
    "2023-06-04",
    "2023-06-07",
    "2023-06-11",
    "2023-06-12",
    "2023-06-17",
    "2023-06-20",
    "2023-06-26",
  ];

  const scList = ["2023-06-04", "2023-06-05", "2023-06-09", "2023-06-15"];

  const workList = [
    "2023-06-03",
    "2023-06-04",
    "2023-06-10",
    "2023-06-11",
    "2023-06-17",
    "2023-06-18",
    "2023-06-24",
    "2023-06-25",
  ];

  // 각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }: any) => {
    // 해당 날짜에 추가할 컨텐츠의 배열
    const contentBasic = [];
    const contentSchedule = [];
    const contentWork = [];

    // date가 리스트의 날짜와 일치하면 해당 컨텐츠 추가

    // 수입
    if (incomeList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      contentBasic.push(
        <>
          {isBasic ? (
            <>
              <p className="income-text">+ 0원</p>
            </>
          ) : (
            <div className="dot-income"></div>
          )}
        </>
      );
    }

    // 지출
    if (expenseList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      contentBasic.push(
        <>
          {isBasic ? (
            <>
              <p className="expense-text">- 0원</p>
            </>
          ) : (
            <div className="dot-expense"></div>
          )}
        </>
      );
    }

    // 일정
    if (scList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      contentSchedule.push(
        <>
          {isBasic ? (
            <div className="dot-schedule"></div>
          ) : (
            <div className="box-schedule">
              <p>일정</p>
            </div>
          )}
        </>
      );
    }

    // 근무
    if (workList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      contentWork.push(
        <>
          {isBasic ? (
            <div className="dot-work"></div>
          ) : (
            <div className="box-work">
              <p>근무</p>
            </div>
          )}
        </>
      );
    }
    return (
      <div className="contents">
        {isBasic ? (
          <>
            <div className="content-row">
              <div className="content-sc">{contentSchedule}</div>
              <div className="content-work">{contentWork}</div>
            </div>
            <div className="content-column">{contentBasic}</div>
          </>
        ) : (
          <>
            <div className="content-row">{contentBasic}</div>
            <div className="content-column">
              <div className="content-sc">{contentSchedule}</div>
              <div className="content-work">{contentWork}</div>
            </div>
          </>
        )}
      </div>
    ); // 각 날짜마다 해당 요소가 들어감
  };

  return (
    <CalendarContainer>
      <div className="calendar_Main">
        {isBasic ? (
          <div className="App">
            <Calendar
              calendarType="US" // 요일을 일요일부터 시작하도록 설정
              locale="en"
              onChange={onChange}
              value={value}
              next2Label={null}
              prev2Label={null}
              tileContent={addContent}
              isBasic={true}
            />
          </div>
        ) : (
          <div className="App">
            <Calendar
              calendarType="US" // 요일을 일요일부터 시작하도록 설정
              locale="en"
              onChange={onChange}
              value={value}
              // onClickDay={dayIn}
              // returnValue="range"

              // nextLabel={<Next1 />}
              // prevLabel={<Prev1 />}
              next2Label={null}
              prev2Label={null}
              tileContent={addContent}
              isBasic={false}

              // defaultValue={new Date()}
              // today 값
              // value={date}
              // onChange={setDate}
            />
          </div>
        )}

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

  .select-day {
    margin: 10px;
  }

  .contents {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .calendar_Main {
    display: flex;
    flex-direction: row;
  }

  .content-row {
    display: flex;
    flex-direction: row;
    margin: 7px;
  }

  .content-colunm {
    display: flex;
    flex-direction: column;
  }

  .content-sc {
    display: flex;
    flex-direction: column;
  }

  .dot-income,
  .dot-expense,
  .dot-schedule,
  .dot-work {
    margin: 2.5px;
    width: 0.6em;
    height: 0.6em;
    border-radius: 50%;
    /* margin-top: 55px; */
  }

  .income-text {
    color: #3fcea5;
  }

  .expense-text {
    color: #ff005c;
  }

  .income-text,
  .expense-text {
    font-size: 0.8em;
  }

  .dot-income {
    background-color: #3fcea5;
  }

  .dot-expense {
    background-color: #ff005c;
  }

  .dot-schedule {
    background-color: #329d9c;
  }

  .dot-work {
    background-color: #bdbdbd;
  }

  .box-schedule,
  .box-work {
    width: 2em;
    height: 1em;
    border-radius: 10%;
    margin: 2px;
    p {
      color: #fff;
      font-size: 0.6em;
    }
  }

  .box-schedule {
    background-color: #329d9c;
  }

  .box-work {
    background-color: #bdbdbd;
  }
`;
