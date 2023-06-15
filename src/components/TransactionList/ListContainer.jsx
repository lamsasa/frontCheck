import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BudgetCalendar from '../MyBudget/BudgetCalendar';
import CategoryIcon from '../MyBudget/CategoryIcon';

const ListContainer = ({ listData }) => {
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        setShowList(true);
    }, []);

    return (
        <>
            <ListContainerStyled>
                <BudgetCalendar />
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header">날짜</th>
                            <th className="table-header">카테고리</th>
                            <th className="table-header">내용</th>
                            <th className="table-header">금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData &&
                            listData.map((data, index) => (
                                <ListRow key={index} show={showList} index={index} data={data} />
                            ))}
                    </tbody>
                </table>
            </ListContainerStyled>
        </>
    );
};

const ListRow = ({ show, index, data }) => {
    const [showRow, setShowRow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowRow(true);
        }, index * 100); // 각 항목을 200ms 간격으로 보여줍니다.

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <StyledRow show={show && showRow}>
            <td className="table-cell">{data.date}</td>
            <td className="table-cell category-cell">
                <div className="category-cell-content">
                    <CategoryIcon name={data.category} />
                    <p className="category">{data.category}</p>
                </div>
            </td>
            <td className="table-cell content-cell">{data.detail}</td>
            <td className={data.deal === '지출' ? 'table-cell red' : 'table-cell blue'}>￦{data.money}</td>
        </StyledRow>
    );
};

const StyledRow = styled.tr`
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${({ show }) => show && 'opacity: 1;'}
`;

const ListContainerStyled = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 40px;
    padding-top: 0px;

    .table {
        width: 100%;
        margin-top: 40px;
        text-align: center;
    }
    .table .table-header {
        padding: 10px;
        font-weight: bolder;
    }

    .table-cell {
        padding: 10px;
    }
    .red {
        color: #ff005c;
    }

    .blue {
        color: #00a3ff;
    }

    .category-cell {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .category-cell-content {
        display: flex;
        align-items: center;
    }
    .category {
        margin-left: 10px;
        width: 80px;
    }

    .content-cell {
        width: 40%;
    }
`;

export default ListContainer;
