import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Navbar from "../components/Common/Navbar";
import Container from "../components/Common/Container";
import Box from "../components/Common/Box";
import TagBox from "../components/MyPage/TagBox";
import useViewport from "../hooks/viewportHook";
// import Tag from "../components/MyPage/Tag";
import AxiosApi from "../api/MyPageAxiosAPI";

const Mypage = () => {
  const { isMobile } = useViewport();

  const [myPageList, setMyPageList] = useState([]);

  // const [value, onChange] = useState(new Date());
  // const {userId} = useContext(LoginContext);

  useEffect(() => {
    const getMyPageList = async() => {
      const rsp = await AxiosApi.getMyPageList();
      if(rsp.status === 200) setMyPageList(rsp.data);
      setMyPageList(rsp.data);
      console.log("마이페이지 list 조회");
    };
    getMyPageList();
  }, []);

  // const lifeData = [
  //     { tag: '일정', detail: '술도녀 모임' },
  //     { tag: '일정', detail: '백엔드 공부' },
  //     { tag: '일정', detail: '코딩테스트' },
  //     { tag: '일정', detail: '국취제 신청' },
  //     { tag: '일정', detail: '정처기 시험 접수' },
  // ];
  // const workData = [
  //     { tag: '근무', detail: '순댓국 알바' },
  //     { tag: '근무', detail: '수학 과외' },
  //     { tag: '근무', detail: '국어 과외' },
  //     { tag: '근무', detail: '볼링장 알바' },
  // ];
  
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <Box titleMargin={"30px"}>
          <p className="title">간편 입력</p>
          <Display isMobile={isMobile}>
            <TagBox tag={"일정"}>
              {myPageList &&
                myPageList.map((data) => (
                  <Tag tag={data.schduleName} detail={data.detail} />
                ))}
            </TagBox>

            <TagBox tag={"근무"}>
              {myPageList &&
                myPageList.map((data) => (
                  <Tag tag={data.workName} detail={data.detail} />
                ))}
            </TagBox>
          </Display>
        </Box>
      </Container>
    </>
  );
};

export default Mypage;

const Display = styled.div`
  display: ${(props) => (props.isMobile ? "block" : "flex")};
`;

const Tag = styled.button`
  height: 32px;
  border-radius: 15px;
  color: white;
  font-size: 8px;
  text-align: center;
  /* background: ${(props) => props.backgroundColor}; */
  margin: 1%;
  margin-top: 0px;
  box-shadow: 0px 2.04082px 4.08163px rgba(0, 0, 0, 0.05);
  border: none;
  outline: none;
`;
