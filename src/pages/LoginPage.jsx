import axios from 'axios';
//import Container from "../components/Common/Container";
import Box from "../components/Common/Box";
import logo1 from "../assets/logo1.png";
import styled from "styled-components";
import ClickButton from "../components/Common/ClickButton";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthAxiosAPI from "../api/AuthAxiosAPI";

const handleGoogleLogin = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const redirectUri = "http://localhost:8888/auth/login";
  const scopes = [
    "openid",
    "email",
    "profile",
    "https://www.googleapis.com/auth/calendar.events",
  ];
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}`;

  window.location.href = authUrl;
  // 로그인하면 OAuth에서 리다이렉션 주소로 보내는데
  // 리다이렉션 주소를 callback으로 설정해놓고
  // 백엔드 서버에서 access token의 정보를 받을 수 있다 getMapping (/callback)으로 받으면 될듯

  // 구글로그인 하면 다시 메인 홈으로 돌아가야 한다 지금은 리다이렉션 주소로 가고있다 이것도 고쳐야함
};

const Login = () => {
  const navigate = useNavigate();
  // 키보드 입력 받기
  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  }
  const onChangePwd = (e) => {
    setInputPwd(e.target.value);
  }
  const onClickLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthAxiosAPI.login(inputEmail, inputPwd);
      const userInfo = JSON.stringify(response, null, 2);
      const userInfoParse = JSON.parse(userInfo);

      if (response.status === 200) {
        console.log(userInfoParse);
        localStorage.setItem('name', userInfoParse.data.name);
        console.log(userInfoParse.data.name);
        localStorage.setItem('email', userInfoParse.data.email);
        console.log(userInfoParse.data.email);
      }
    } catch (error) {
      console.log("Login error:", error.message);
    }
  };

  const handleGoogleLogin = () => {
    // Your existing handleGoogleLogin code here
    // ...
  };
  return (
    <>
      <LoginContainer>
        <div className="loginBox">
          {/* 임시 로고입니다 변경됩니다 */}
          <Img src={logo1} alt="logo1" />
          <Box height={"auto"} width={"90%"}>
            <div className="loginBox">
              <button onClick={handleGoogleLogin}>Google Login</button>
              <InputBox type="text"
                        placeholder="이메일을 입력해주세요."
                        value={inputEmail}
                        onChange={onChangeEmail}
              />
              <InputBox type="password"
                        placeholder="비밀번호를 입력해주세요."
                        value={inputPwd}
                        onChange={onChangePwd}
              />
              <ClickButton width={"90%"} height={"40px"} onClick={onClickLogin}>
                로그인
              </ClickButton>
            </div>
          </Box>
          <div className="signUpBox">
            <div className="click">회원가입</div>
            <div className="click">아이디/비밀번호 찾기</div>
          </div>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  .signUpBox {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  .click {
    color: gray;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .signUpBox {
      width: 70%;
    }
  }
`;

const Img = styled.img`
  width: 400px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const InputBox = styled.input`
  width: 90%;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px;
`;
