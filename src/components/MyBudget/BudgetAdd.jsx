import styled from 'styled-components';
import BudgetCalendar from './BudgetCalendar';
import CategoryIcon from './CategoryIcon';
import BlockLine from '../Common/BlockLine';
import ClickButton from '../Common/ClickButton';
import categoryList from '../../styles/categoryColor';
import { useState } from 'react';
import AxiosApi from '../../api/AxiosAPI';

const BudgetAdd = ({ categoryData }) => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const BudgetLabel = () => {
        const [inputValues, setInputValues] = useState([]);

        const onCreateBudget = async () => {
            console.log(inputValues);
            try {
                const createMyBudget = await AxiosApi.createMyBudget(inputValues);
                if (createMyBudget.data.result === 'OK') {
                    console.log('입력 성공');
                } else {
                    console.log('입력 실패');
                }
            } catch (error) {
                console.log('에러:', error);
            }
        };

        const onChangeInputMoney = (e) => {
            const { name, value } = e.target;
            const existingValueIndex = inputValues.findIndex((item) => item.categoryId === name);

            if (existingValueIndex !== -1) {
                const updatedValues = [...inputValues];
                updatedValues[existingValueIndex] = {
                    ...updatedValues[existingValueIndex],
                    budgetMoney: value,
                };
                setInputValues(updatedValues);
            } else {
                const newValue = {
                    budgetMoney: value,
                    budgetMonth: selectedDate,
                    categoryId: name,
                };
                setInputValues((prevValues) => [...prevValues, newValue]);
            }
        };

        return (
            <>
                {categoryList.map((category) => {
                    const data = categoryData.find((item) => item.Name === category.Name);
                    const defaultValue = data ? data.Money : 0;

                    return (
                        <Label key={category.categoryId}>
                            <CategoryIcon name={category.Name} /> <p className="categoryName">{category.Name}</p>
                            <Input
                                defaultValue={defaultValue}
                                type="text"
                                name={category.categoryId}
                                onChange={onChangeInputMoney}
                            />
                            원
                        </Label>
                    );
                })}
                <ClickButtonWrapper>
                    <ClickButton onClick={onCreateBudget}>예산 추가</ClickButton>
                </ClickButtonWrapper>
            </>
        );
    };

    return (
        <>
            <Block>
                <BudgetCalendar onChangeDate={handleDateChange} />
            </Block>
            <BlockLine />
            <Block>
                <BudgetLabel />
            </Block>
        </>
    );
};

export default BudgetAdd;

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
const ClickButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;
