import React from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Navbar from "../components/Common/Navbar";

const Container = styled.div`

    display: flex;
    max-width: 100%;

  .mypage-box {
    width: 800px;
    height: 500px;
    display: flex;
    align-content: center;
    background-color: #fff;
    position: fixed;
    top: 180px;
    left: 400px;
  }

  @media (max-width: 768px) {
    .mypage-box {
      width: 90%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-content: center;
      top: 80px;
      left: 5%;
    }
  }
`;

const Mypage = () => {
  return (
    <>
      <Header />
      <Navbar />

            <Container>
                <div className="mypage-box"></div>
            </Container>
        </>
    );
};

export default Mypage;
