import React from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import Navbar from '../components/Common/Navbar';
import Container from '../components/Common/Container';
import Box from '../components/Common/Box';
import TagBox from '../components/MyPage/TagBox';
import useViewport from '../hooks/viewportHook';
import Tag from '../components/MyPage/Tag';

const Mypage = () => {
    const { isMobile } = useViewport();

    // 데이터를 따로따로 불러오든 한꺼번에 불러서 tag를 기준으로 나눠서 데이터를 넣든 편한방식으로 하면 될거같아용
    const lifeData = [
        { tag: '일정', detail: '술도녀 모임' },
        { tag: '일정', detail: '백엔드 공부' },
        { tag: '일정', detail: '코딩테스트' },
        { tag: '일정', detail: '국취제 신청' },
        { tag: '일정', detail: '정처기 시험 접수' },
    ];
    const workData = [
        { tag: '근무', detail: '순댓국 알바' },
        { tag: '근무', detail: '수학 과외' },
        { tag: '근무', detail: '국어 과외' },
        { tag: '근무', detail: '볼링장 알바' },
    ];
    return (
        <>
            <Header />
            <Navbar />
            <Container>
                <Box titleMargin={'30px'}>
                    <p className="title">간편 입력</p>
                    <Display isMobile={isMobile}>
                        <TagBox tag={'일정'}>
                            {lifeData && lifeData.map((data) => <Tag tag={data.tag} detail={data.detail} />)}
                        </TagBox>

                        <TagBox tag={'근무'}>
                            {workData && workData.map((data) => <Tag tag={data.tag} detail={data.detail} />)}
                        </TagBox>
                    </Display>
                </Box>
            </Container>
        </>
    );
};

const Display = styled.div`
    display: ${(props) => (props.isMobile ? 'block' : 'flex')};
`;

export default Mypage;
