import axios from 'axios';
const MPT_DOMAIN = 'http://localhost:8888';

const AxiosApi = {
    // 나의 예산 생성
    createMyBudget: async (inputValues) => {
        return await axios.post(MPT_DOMAIN + '/mybudget', inputValues, {
            withCredentials: true,
        });
    },

    getMyBudget: async () => {
        return await axios.get(MPT_DOMAIN + '/mybudget', {
            withCredentials: true,
        });
    },
};

export default AxiosApi;
