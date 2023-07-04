import axiosInstance from './axiosInstance';

const LedgerAxiosApi = {
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

    createIncome: async (categoryIncomeId, IncomeAmount, IncomeDate, IncomeContent) => {
        const expenseData = [
            {
                IncomeAmount: IncomeAmount,
                IncomeDate: IncomeDate,
                IncomeContent: IncomeContent,
                categoryId: categoryIncomeId,
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

export default LedgerAxiosApi;
