import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom right, rgba(167, 255, 201, 0.3), rgba(0, 255, 133, 0.3));
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const LoginBox = styled.div`
    width: 500px;
    height: 300px;
    background:  rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 20px rgba(0, 255, 133, 0.5);
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;


const GoogleLoginButton = () => {
    const clientId = '937459665159-tfpfnlmnrpc0s2d4gc8781k399jjg2oj.apps.googleusercontent.com'
    return (
        <>
        <GlobalStyle/>
        <LoginBox>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </LoginBox>
        </>
    );
};

export default GoogleLoginButton