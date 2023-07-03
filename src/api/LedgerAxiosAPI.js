import axiosInstance from './axiosInstance';

const LedgerAxiosApi = {
    // 남은 돈 확인
    getDailyIncome: async () => {
        try {
            const response = await axiosInstance.get('/ledger/income/monthly');
            return response.data;
        } catch (error) {
            console.error('Request Error:', error);
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
