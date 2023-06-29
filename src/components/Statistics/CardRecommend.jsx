import BlockLine from '../Common/BlockLine';
import styled from 'styled-components';
import ClickButton from '../Common/ClickButton';
import { useEffect, useState } from 'react';

const CardRecommend = () => {
    const [cardsVisible, setCardsVisible] = useState(false);

    useEffect(() => {
        setCardsVisible(true);
    }, []);

    return (
        <>
            <Title>
                <p>카드 추천</p>
            </Title>
            <BlockLine />
            <Month>
                <p>6월</p>
                <p className="title">가장 많이 지출한 카테고리를 참고했습니다. 이런 카드는 어떠세요?</p>
            </Month>
            <CategoryCard>
                <FadeInCard visible={cardsVisible}>
                    <div className="categoryCard">
                        식비
                        <div className="cardImg"></div>
                        <p>카드 이름</p>
                    </div>
                </FadeInCard>
                <FadeInCard visible={cardsVisible} delay={500}>
                    <div className="categoryCard">
                        식비
                        <div className="cardImg"></div>
                        <p>카드 이름</p>
                    </div>
                </FadeInCard>
                <FadeInCard visible={cardsVisible} delay={800}>
                    <div className="categoryCard">
                        식비
                        <div className="cardImg"></div>
                        <p>카드 이름</p>
                    </div>
                </FadeInCard>
            </CategoryCard>
            <CardList>
                <div className="cardlist">
                    <div className="cardImg" />
                    <div>
                        <div className="cardName">카드이름</div>
                        <div className="cardAnnualFee">카드연회비</div>
                        <div className="cardDesc">
                            카드설명
                            <br />
                            설명
                            <br />
                            설명
                        </div>
                    </div>
                </div>
                <ButtonContainer>
                    <ClickButton>카드 정보 보기</ClickButton>
                </ButtonContainer>
            </CardList>

            <CardList>
                <div className="cardlist">
                    <div className="cardImg" />
                    <div>
                        <div className="cardName">카드이름</div>
                        <div className="cardAnnualFee">카드연회비</div>
                        <div className="cardDesc">카드설명</div>
                    </div>
                </div>
                <ButtonContainer>
                    <ClickButton>카드 정보 보기</ClickButton>
                </ButtonContainer>
            </CardList>
            <CardList>
                <div className="cardlist">
                    <div className="cardImg" />
                    <div>
                        <div className="cardName">카드이름</div>
                        <div className="cardAnnualFee">카드연회비</div>
                        <div className="cardDesc">카드설명</div>
                    </div>
                </div>
                <ButtonContainer>
                    <ClickButton>카드 정보 보기</ClickButton>
                </ButtonContainer>
            </CardList>
        </>
    );
};
export default CardRecommend;
const Title = styled.div`
    margin: 30px;
    font-size: 19px;
    margin-top: 0px;
    display: block;
`;
const Month = styled.div`
    margin: 30px;
    font-size: 17px;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    .title {
        font-size: 12px;
        margin-top: 10px;
    }
`;
const CategoryCard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    padding: 10%;
    padding-top: 10px;
    padding-bottom: 0px;

    .categoryCard {
        font-size: 17px;
        display: block;
        margin-top: 20px;
    }

    .cardImg {
        width: 90px;
        height: 110px;
        transform: rotate(13.636deg);
        flex-shrink: 0;
        background: #d9d9d9;
        box-shadow: 0px 20px 30px -10px #26394d;
        margin: 30px;
        margin-left: 0px;
    }
`;

const FadeInCard = styled.div`
    opacity: 0;
    animation: ${({ visible, delay }) => (visible ? 'fade-in 1.0s ease-in-out forwards' : 'none')};
    animation-delay: ${({ delay }) => (delay ? `${delay}ms` : '0ms')};

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const CardList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px;
    padding-bottom: 0px;
    margin-top: 30px;

    .cardlist {
        display: flex;
        align-items: center;
    }

    .cardImg {
        width: 65px;
        height: 80px;
        background: #d9d9d9;
        margin-right: 30px;
    }

    .cardName {
        font-size: 15px;
        font-weight: bolder;
    }

    .cardDesc {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .cardAnnualFee {
        font-size: 12px;
        margin: 7px;
        margin-top: 12px;
        margin-left: 0px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 30px;
`;
