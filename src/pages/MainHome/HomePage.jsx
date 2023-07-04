import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../components/Common/Header";
import Navbar from "../../components/Common/Navbar";

import { ReactComponent as Plus } from "../../assets/plus.svg";
import Container from "../../components/Common/Container";
import Box from "../../components/Common/Box";
import ToggleButtonLarge from "../../components/Common/ToggleButtonLarge";
import MyCal from "../../components/Calendar/MyCal";
import Modal from "../../components/Common/Modal";
import CreateSchedule from "../../components/Calendar/CreateSchedule";

// import useViewport from "../../hooks/viewportHook";

const Home = () => {
  // const { isMobile } = useViewport();

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <Navbar />

      <Container>
        <CalendarContainer>
          <div className="header">
            <ToggleButtonLarge
              onText="일 정"
              offText="가계부"
              isOn={isOn}
              handleToggle={handleToggle}
            />
            <Plus width="33px" height="33px" onClick={openModal} />
          </div>

          <div className="calendar">
            <div className="App">
              {isOn ? <MyCal isBasic={false} /> : <MyCal isBasic={true} />}
            </div>
          </div>
        </CalendarContainer>
        <BoxContainer>
          <Box height={"200px"} width={"550px"}>
            <div className="text">지난 달 대비 사용 금액</div>
          </Box>
          <Box height={"200px"} width={"550px"}>
            <div className="text">남은 돈 확인</div>
          </Box>
        </BoxContainer>
        {modalOpen && <Modal open={modalOpen} close={closeModal} width={'20%'}>
          <CreateSchedule/>
          </Modal>}
      </Container>
    </>
  );
};

export default Home;

// const HomeContainer = styled.div`
//   width: ${(props) => (props.isMobile ? "768px" : "100%")};
//   /* display: flex; */

//   /* flex-direction: ; */
//   /* flex-direction: column; */
//   /* align-items: center; */
//   /* justify-content: center; */
//   /* vertical-align: center; */
// `;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 30px 70px;
  width: 100%;

  .header {
    width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    > svg {
      fill: ${({ theme }) => theme.menuColor};
    }
  }
`;

const BoxContainer = styled.div`
  width: 1200px;
  height: auto;
  padding-bottom: 30px;
  display: flex;
  padding-left: 60px;

  .text {
    height: 30px;
    font-size: 2rem;
    font-weight: bold;
    padding: 20px;
  }
`;
