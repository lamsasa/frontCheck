import React, { useState } from "react";
import { ReactComponent as Right } from "../../assets/right.svg";
import { ReactComponent as Left } from "../../assets/left.svg";
import styled from "styled-components";


const YearButton = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear()); // 현재 년도로 초기화

  // 버튼 클릭 시 다음 달로 값을 넘김
  const handleNextYear = () => {
    setYear(year + 1);
  };
  // 버튼 클릭 시 이전 달로 값을 넘김
  const handlePreviousYear = () => {
    setYear(year - 1);
  };

  return (
    <>
      <Calendar>
        <Left onClick={handlePreviousYear} />
        <span className="date">{year}년</span>
        <Right onClick={handleNextYear} />
      </Calendar>
    </>
  );
};

export default YearButton;

const Calendar = styled.div`
  > svg {
    fill: ${({ theme }) => theme.budgetButton};
  }
  .date {
    margin: 15px;
    font-style: normal;
    font-weight: bolder;
    font-size: 18px;
  }
`;
