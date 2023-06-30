import axios from 'axios';
const MPT_DOMAIN = 'https://localhost:8888';

const BudgetAxiosApi = {
    // 나의 예산 생성
    createMyBudget: async (inputValues) => {
        try {
            const response = await axios.post(MPT_DOMAIN + '/mybudget', inputValues, {
                withCredentials: true,
            });

            return response.data;
        } catch (error) {
            console.error('Request Error:', error);
            throw error;
        }
    },

    // 나의 예산 리스트
    getMyBudget: async () => {
        return await axios.get(MPT_DOMAIN + '/mybudget', {
            withCredentials: true,
        });
    },
};

export default BudgetAxiosApi;
