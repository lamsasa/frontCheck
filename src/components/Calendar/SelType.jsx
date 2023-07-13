import styled from "styled-components";
import React, { useState } from "react";

const SelType = ({ onChange }) => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setCategory(value);
    onChange(value);
  };

  return (
    <StyledCategory>
      <select
        className="dropBox"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="1">시급</option>
        <option value="2">건별</option>
        <option value="3">일급</option>
        <option value="4">월급</option>
      </select>
    </StyledCategory>
  );
};

export default SelType;

const StyledCategory = styled.div`
  width: 60px;
  text-align: center;
  align-items: center;

  .dropBox {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.menuColor};
    width: 50px;
    height: 30px;
  }
`;
