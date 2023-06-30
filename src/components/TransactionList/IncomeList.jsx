import React, { useState, useEffect } from "react";
import ListContainer from './ListContainer';
import ListAxiosAPI from "../../api/ListAxiosAPI";

const IncomeList = () => {
    // const listData = [
    //     { category: '생활용품', money: '3000', date: '2023-06', detail: '스타벅스', deal: '수입' },
    //     { category: '여행/숙박', money: '10000', date: '2023-06', detail: '스타벅스', deal: '수입' },
    //     { category: '주거', money: '50000', date: '2023-06', detail: '스타벅스', deal: '수입' },
    //     { category: '의료비', money: '30000', date: '2023-06', detail: '스타벅스', deal: '수입' },
    //     { category: '교육', money: '60000', date: '2023-06', detail: '스타벅스', deal: '수입' },
    //     { category: '경조사/회비', money: '10000', date: '2023-06', detail: '스타벅스', deal: '수입' },
    //     { category: '반려동물', money: '3000', date: '2023-06', detail: '스타벅스', deal: '수입' },
    //     { category: '기타', money: '10000', date: '2023-06', detail: '스타벅스', deal: '수입' },
    // ];
    const [listData, setListData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ListAxiosAPI.getListIncome();
                console.log(data);
                const transformedData = data.map(item => ({
                    money: item.incomeAmount,
                    date: item.incomeDate,
                    category: item.categoryName,
                    detail: item.incomeContent,
                    deal: "수입"
                }));
                setListData(transformedData);
            } catch (error) {
                console.error('조회 실패', error);
            }
        };
    
        fetchData();
    }, []);
    
    return (
        <>
            <ListContainer listData={listData} />
        </>
    );
};
export default IncomeList;
