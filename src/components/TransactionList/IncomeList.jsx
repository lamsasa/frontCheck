import ListContainer from './ListContainer';

const IncomeList = () => {
    const listData = [
        { category: '생활용품', money: '3000', date: '2023-06', detail: '스타벅스', deal: '수입' },
        { category: '여행/숙박', money: '10000', date: '2023-06', detail: '스타벅스', deal: '수입' },
        { category: '주거', money: '50000', date: '2023-06', detail: '스타벅스', deal: '수입' },
        { category: '의료비', money: '30000', date: '2023-06', detail: '스타벅스', deal: '수입' },
        { category: '교육', money: '60000', date: '2023-06', detail: '스타벅스', deal: '수입' },
        { category: '경조사/회비', money: '10000', date: '2023-06', detail: '스타벅스', deal: '수입' },
        { category: '반려동물', money: '3000', date: '2023-06', detail: '스타벅스', deal: '수입' },
        { category: '기타', money: '10000', date: '2023-06', detail: '스타벅스', deal: '수입' },
    ];
    return (
        <>
            <ListContainer listData={listData} />
        </>
    );
};
export default IncomeList;
