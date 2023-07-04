import React, { useState } from "react";
import styled from "styled-components";
import CategoryInput from "../Common/CategoryInput";
import categoryList from "../../styles/categoryExpenseColor";
import ClickButton from "../Common/ClickButton";
import ExpenseAxiosApi from "../../api/ExpenseAxiosAPI";

const CreateScheduleInner = ({isIncome}) => {
  const [categoryId, setCategoryId] = useState(1);

  const handleCategoryIdChange = (id) => {
    setCategoryId(id);
  };

  const onCreateExpense = async () => {
    try {
      const amount = parseInt();
      const createExpense = await ExpenseAxiosApi.createExpense(
        categoryId,
        amount
      );
      if (createExpense.data === "지출을 성공적으로 생성했습니다.") {
        console.log("입력 성공");
        window.location.reload();
      } else {
        console.log("입력 실패");
        window.location.reload();
      }
    } catch (error) {
      console.log("에러:", error);
    }
  };

  return (
    <>
      <CreateScheduleContainer>
        <Container>
          <CategoryInput
            categoryList={categoryList}
            categoryId={categoryId}
            onCategoryIdChange={handleCategoryIdChange}
          />
          <InputContainer>
            <p className="label">금액</p>
            <Input />
            <p className="label">날짜</p>
            <Input />
            <p className="label">내용</p>
            <Input />
          </InputContainer>
        </Container>
        <ButtonContainer>
        {isIncome ? (
          <ClickButton onClick={onCreateExpense}>수입 추가</ClickButton>
        ) : (
          <ClickButton onClick={onCreateExpense}>지출 추가</ClickButton>
        )}
        </ButtonContainer>
      </CreateScheduleContainer>
    </>
  );
};
export default CreateScheduleInner;

const CreateScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  position: relative;

  .SMSBox {
    position: absolute;
    right: 1vw;
    margin-top: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  .label {
    margin: 10px;
    font-size: 15px;
  }
`;

const Input = styled.input`
  width: 70%;
  border-top: none;
  border-left: none;
  color: lightgray;
  border-right: none;
  border-bottom: 1px solid lightgray;
  text-align: right;
  outline: none;
  background-color: rgba(255, 255, 255, 0);

  :focus {
    border-bottom: 1px solid ${({ theme }) => theme.menuColor};
    color: ${({ theme }) => theme.menuColor};
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 200px;
  margin: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
