import axios from 'axios';
const MPT_DOMAIN = 'https://localhost:8888';

const AxiosApi = {
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
};

export default AxiosApi;

