import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ClickButton from "../Common/ClickButton";
import UserAxiosAPI from "../../api/UserAxiosAPI";

const EditMyInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // 수정하기

  const handleEditMyInfo = () => {
    setIsEditing(true);
  };

  const handleSaveMyInfo = () => {
    setIsEditing(false);
    changeNewPassword();
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const changeNewPassword = async () => {
    try {
      const postNewPassword = await UserAxiosAPI.postNewPassword({
        email,
        currentPassword,
        newPassword,
      });

      if (postNewPassword.data === "비밀번호 변경 완료") {
        console.log("입력 성공");
      } else {
        console.log("입력 실패");
      }
    } catch (error) {
      console.log("에러:", error);
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await UserAxiosAPI.getUserInfo();
        if (response.status === 200) {
          const userName = response.data.name.split(" ")[0];
          const userEmail = response.data.email;
          setName(userName);
          setEmail(userEmail);
        }
      } catch (error) {
        console.log("getNameError : " + error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <InfoBox>
      <div>
        <Title>내 정보</Title>
        <InfoLine>
          <InfoText>이름</InfoText>
          <MyInfo>{name}님</MyInfo>
        </InfoLine>
        <InfoLine>
          <InfoText>이메일</InfoText>
          <MyInfo>{email}</MyInfo>
        </InfoLine>
        <div>
          {!isEditing && (
            <>
              <div>
                <InfoLine>
                  <InfoText>비밀번호</InfoText>
                  <MyInfo>{currentPassword}</MyInfo>
                  <ClickButton
                    width={"30px"}
                    height={"30px"}
                    onClick={handleEditMyInfo}></ClickButton>
                </InfoLine>
              </div>
            </>
          )}

          {/* 수정 상태 */}
          {isEditing && (
            <>
              <div>
                <InfoLine>
                  <InfoText>비밀번호</InfoText>
                  <ChangeInput
                    type="password"
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                  />
                  <ClickButton
                    width={"30px"}
                    height={"30px"}
                    onClick={handleSaveMyInfo}></ClickButton>
                </InfoLine>
                <InfoLine>
                  <InfoText>새로운 비밀번호</InfoText>
                  <ChangeInput
                    type="password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                  <ClickButton
                    width={"30px"}
                    height={"30px"}
                    onClick={handleSaveMyInfo}></ClickButton>
                </InfoLine>
              </div>
            </>
          )}
        </div>
      </div>
    </InfoBox>
  );
};

export default EditMyInfo;

const InfoBox = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
`;
const Title = styled.div`
  display: flex;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
`;
const InfoLine = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;
const InfoText = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
`;
const MyInfo = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin: 0px 10px;
`;

const ChangeInput = styled.input`
  display: flex;
  padding: 1px 2px;
  font-size: 15px;
  height: 30px;
  width: 50%;
  border: 1.5px solid #e4e4e4;
  border-radius: 5px;
  margin: 0 10px;
`;
