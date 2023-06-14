import { useState } from "react";
import { ReactComponent as Right } from "../../assets/right.svg";
import { ReactComponent as Left } from "../../assets/left.svg";
import styled from "styled-components";

const BudgetCalendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  
  // 버튼 클릭 시 다음 달로 값을 넘김
  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };
  // 버튼 클릭 시 이전 달로 값을 넘김
  const handlePreviousMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };
  return (
    <>
      <Calendar>
        <Left onClick={handlePreviousMonth} />
        <span className="date">
          {year}년 {month}월
        </span>
        <Right onClick={handleNextMonth} />
      </Calendar>
    </>
  );
};
export default BudgetCalendar;

const Calendar = styled.div`
  > svg {
    fill: ${({ theme }) => theme.budgetButton};
  }
`;
