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
    getDailyIncome: async () => {
        try {
            return await axiosInstance.get('/ledger/income/monthly');
        } catch (e) {
            throw e;
        }
    },
    getDailyExpense: async () => {
        try {
            return await axiosInstance.get('/ledger/expense/monthly');
        } catch (e) {
            throw e;
        }
    },
};

export default LedgerAxiosApi;
