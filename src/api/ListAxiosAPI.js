import axios from "axios";
const MPT_DOMAIN = "https://localhost:8888";

const AxiosApi = {
  // ListPage
  getListIncome: async () => {
    try {
      const response = await axios.get(MPT_DOMAIN + "/income/category", {});
      const data = response.data.map((item) => ({
        incomeAmount: item.incomeAmount,
        date: item.incomeDate,
        category: item.categoryName,
        detail: item.incomeContent,
      }));
      return data;
    } catch (error) {
      console.error("Income List 조회가 불가능합니다.");
      throw error;
    }
  },

  getListExpense: async () => {
    try {
      const response = await axios.get(MPT_DOMAIN + "/expense/category", {});
      const data = response.data.map((item) => ({
        money: item.expenseAmount,
        date: item.expenseDate,
        category: item.categoryName,
        detail: item.expenseContent,
      }));
      return data;
    } catch (error) {
      console.error("Expense List 조회가 불가능합니다.");
      throw error;
    }
  },

  // ChartPage
  getSVGChart: async () => {
    try {
      const response = await axios.get(MPT_DOMAIN + "/chart", {});
      return response.data;
    } catch (error) {
      console.error("");
      throw error;
    }
  },

  getPieChart: async () => {
    try {
      const response = await axios.get(MPT_DOMAIN + "/expense/category", {});
      const data = response.data.map((item) => ({
        value: item.expenseAmount,
        label: item.categoryName,
        id: item.categoryName,
        category: item.categoryName,
      }));
      return data;
    } catch (error) {
      console.error("pieChart 조회가 불가능합니다.");
      throw error;
    }
  },
};

export default AxiosApi;
