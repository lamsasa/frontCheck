import axios from 'axios';
const MPT_DOMAIN = 'https://localhost:8888';

const AxiosApi = {
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

    getMyBudget: async () => {
        return await axios.get(MPT_DOMAIN + '/mybudget', {
            withCredentials: true,
        });
    },
};

export default AxiosApi;

