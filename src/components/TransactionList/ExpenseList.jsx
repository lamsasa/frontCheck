import ListContainer from './ListContainer';

const ExpenseList = () => {
    const listData = [
        { category: '식비', money: '60000', date: '2023-06', detail: '스타벅스', deal: '지출' },
        { category: '교통/차량', money: '90000', date: '2023-06', detail: '스타벅스', deal: '지출' },
        { category: '주유', money: '90000', date: '2023-06', detail: '스타벅스', deal: '지출' },
        { category: '문화/레저', money: '30000', date: '2023-06', detail: '스타벅스', deal: '지출' },
        { category: '마트/편의점', money: '20000', date: '2023-06', detail: '스타벅스', deal: '지출' },
        { category: '패션/미용', money: '10000', date: '2023-06', detail: '스타벅스', deal: '지출' },
    ];
    return (
        <>
            <ListContainer listData={listData} />
        </>
    );
};
export default ExpenseList;
