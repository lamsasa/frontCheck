import styled from 'styled-components';
import BudgetCalendar from './BudgetCalendar';
import CategoryIcon from './CategoryIcon';
import BlockLine from '../Common/BlockLine';
import ClickButton from '../Common/ClickButton';

const BudgetAdd = ({ categoryData }) => {
    return (
        <>
            <Block>
                <BudgetCalendar></BudgetCalendar>
            </Block>
            <BlockLine />
            <Block>
                <BudgetLabel categoryData={categoryData} />
            </Block>
            <Block>
                <ClickButton>예산 추가</ClickButton>
            </Block>
        </>
    );
};
export default BudgetAdd;

const BudgetLabel = ({ categoryData }) => {
    return (
        <>
            {categoryData &&
                categoryData.map((data) => (
                    <>
                        <Label>
                            <CategoryIcon name={data.Name} /> <p className="categoryName">{data.Name}</p>
                            <Input defaultValue={data.Money} type="text" />원
                        </Label>
                    </>
                ))}
        </>
    );
};

const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px;
`;

const Input = styled.input`
    margin: 10px;
    width: 40%;
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

const Label = styled.div`
    display: flex;
    margin: 10px;
    margin-left: 0px;
    align-items: center;
    justify-content: center;

    .categoryName {
        margin-left: 4px;
        width: 80px;
    }
`;
