import React, { useState, useEffect } from "react";
import ListContainer from "./ListContainer";
import AxiosApi from "../../api/ListAxiosAPI";

const ExpenseList = () => {
  // const listData = [
  //     { category: '식비', money: '60000', date: '2023-06', detail: '스타벅스', deal: '지출' },
  //     { category: '교통/차량', money: '90000', date: '2023-06', detail: '스타벅스', deal: '지출' },
  //     { category: '주유', money: '90000', date: '2023-06', detail: '스타벅스', deal: '지출' },
  //     { category: '문화/레저', money: '30000', date: '2023-06', detail: '스타벅스', deal: '지출' },
  //     { category: '마트/편의점', money: '20000', date: '2023-06', detail: '스타벅스', deal: '지출' },
  //     { category: '패션/미용', money: '10000', date: '2023-06', detail: '스타벅스', deal: '지출' },
  // ];
  const [listData, setListData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await AxiosApi.getListExpense();
              const transformedData = data.map(item => ({
                  money: item.expenseAmount,
                  date: item.expenseDate,
                  category: item.categoryName,
                  detail: item.expenseContent
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
export default ExpenseList;
