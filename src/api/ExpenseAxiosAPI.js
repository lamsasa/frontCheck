import axiosInstance from './axiosInstance';

const ExpenseAxiosApi = {
    createExpense: async (categoryId, expenseAmount, expenseDate, expenseContent) => {
        const expenseData = [
            {
                expenseAmount: expenseAmount,
                expenseDate: expenseDate,
                expenseContent: expenseContent,
                categoryId: categoryId,
            },
        ];
        try {
            const response = await axiosInstance.post('/ledger/expense', expenseData);
            return response.data;
        } catch (error) {
            console.error('Request Error:', error);
        }
    },
};

export default ExpenseAxiosApi;
