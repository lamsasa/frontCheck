import axios from 'axios';
const MPT_DOMAIN = 'http://localhost:8888';

const AxiosApi = {
    createMyBudget: async (inputValues) => {
        return await axios.post(MPT_DOMAIN + '/mybudget', inputValues);
    },
};

export default AxiosApi;
