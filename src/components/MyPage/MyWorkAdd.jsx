import styled from "styled-components";
import BlockLine from "../Common/BlockLine";
import ClickButton from "../Common/ClickButton";
import { useState } from "react";
import MyPageAxiosApi from "../../api/MyPageAxiosAPI";
import SelColor from "../../components/Calendar/SelColor";

const MyWorkAdd = (width) => {
  const [defaultMyWkName, setDefaultMyWkName] = useState("");
  const [defaultMyPayType, setDefaultMyPayType] = useState("");
  const [defaultMyWkMoney, setDefaultMyWkMoney] = useState("");
  const [defaultMyWkStart, setDefaultMyWkStart] = useState("");
  const [defaultMyWkEnd, setDefaultMyWkEnd] = useState("");
  const [defaultMyWkRest, setDefaultMyWkRest] = useState("");
  const [defaultMyWkTax, setDefaultMyWkTax] = useState("");
  const [defaultMyWkPayday, setDefaultMyWkPayday] = useState("");
  const [defaultMyColor, setDefaultMyColor] = useState("");

  const handleMyWkNameChange = (event) => {
    setDefaultMyWkName(event.target.value);
  };

  const handleMyPayTypeChange = (event) => {
    setDefaultMyPayType(event.target.value);
  };

  const handleMyWkMoneyChange = (event) => {
    setDefaultMyWkMoney(event.target.value);
  };

  const handleMyWkStartChange = (event) => {
    setDefaultMyWkStart(event.target.value);
  };

  const handleMyWkEndChange = (event) => {
    setDefaultMyWkEnd(event.target.value);
  };

  const handleMyWkRestChange = (event) => {
    setDefaultMyWkRest(event.target.value);
  };

  const handleMyWkTaxChange = (event) => {
    setDefaultMyWkTax(event.target.value);
  };

  const handleMyWkPaydayChange = (event) => {
    setDefaultMyWkPayday(event.target.value);
  };

  const handleMyColorChange = (event) => {
    setDefaultMyColor(event.target.value);
  };

  const onCreateMyWork = async () => {
    try {
      const MyWkName = parseInt(defaultMyWkName);
      const createMyWork = await MyPageAxiosApi.createExpense(
        MyWkName,
        defaultMyPayType,
        defaultMyWkMoney,
        defaultMyWkStart,
        defaultMyWkEnd,
        defaultMyWkRest,
        defaultMyWkTax,
        defaultMyWkPayday,
        defaultMyColor
      );

      if (createMyWork.data === "근무를 성공적으로 생성했습니다.") {
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
      <Container width={width}>
        <Title>근무 등록</Title>
        <BlockLine />

        <InputContainer>
          <div>
            <p className="label">근무</p>
            <Input value={defaultMyWkName} onChange={handleMyWkNameChange} />
          </div>
          <div>
            <p className="label">급여형태</p>
            <Input value={defaultMyPayType} onChange={handleMyPayTypeChange} />
          </div>
          <div>
            <p className="label">금액</p>
            <Input value={defaultMyWkMoney} onChange={handleMyWkMoneyChange} />
          </div>

          <p className="label">근무시간</p>
          <div>
            <Input value={defaultMyWkStart} onChange={handleMyWkStartChange} />
            <p className="label"> - </p>
            <Input value={defaultMyWkEnd} onChange={handleMyWkEndChange} />
          </div>
          <div>
            <p className="label">휴게시간</p>
            <Input value={defaultMyWkRest} onChange={handleMyWkRestChange} />
          </div>
          <div>
            <p className="label">세금</p>
            <Input value={defaultMyWkTax} onChange={handleMyWkTaxChange} />
          </div>
          <div>
            <p className="label">급여일</p>
            <Input
              type="date"
              id="date"
              value={defaultMyWkPayday}
              onChange={handleMyWkPaydayChange}
            />
          </div>
          {/* <p className="label">color</p> */}
          <SelColor />
          <SelColor value={defaultMyColor} onChange={handleMyColorChange} />
        </InputContainer>
      </Container>
      <ButtonContainer>
        <ClickButton onClick={onCreateMyWork}>근무 등록</ClickButton>
      </ButtonContainer>
    </>
  );
};

export default MyWorkAdd;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 60%;
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .label {
    width: ${({ width }) => width || "auto"};
    margin: 10px;
    font-size: 15px;
    align-items: center;
    justify-content: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  flex-wrap: wrap;
  width: 200px;
  margin: 20px;

  div {
    display: flex;
    flex-direction: row;
    margin: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
