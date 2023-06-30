import styled from 'styled-components';
import BlockLine from '../Common/BlockLine';
import ClickButton from '../Common/ClickButton';
import CategoryInput from '../Common/CategoryInput';

const SMSAdd = () => {
    return (
        <>
            <Title>문자 입력</Title>
            <BlockLine />
            <CategoryInput />
            <Input></Input>
            <ClickButton>지출 추가</ClickButton>
        </>
    );
};
export default SMSAdd;

const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
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
