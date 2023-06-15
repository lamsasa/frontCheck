import styled from 'styled-components';
import BudgetCalendar from '../MyBudget/BudgetCalendar';
import CategoryIcon from '../MyBudget/CategoryIcon';

const ListContainer = ({ listData }) => {
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
                            listData.map((data) => (
                                <tr>
                                    <td className="table-cell">{data.date}</td>
                                    <td className="table-cell category-cell">
                                        <div className="category-cell-content">
                                            <CategoryIcon name={data.category} />
                                            <p className="categroy">{data.category}</p>
                                        </div>
                                    </td>
                                    <td className="table-cell content-cell">{data.detail}</td>
                                    <td className={data.deal === '지출' ? 'table-cell red' : 'table-cell blue'}>
                                        ￦{data.money}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </ListContainerStyled>
        </>
    );
};

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
    .categroy {
        margin-left: 10px;
        width: 80px;
    }
    .content-cell {
        width: 40%;
    }
`;

export default ListContainer;
