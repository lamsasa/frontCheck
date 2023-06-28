import axios from 'axios';
const MPT_DOMAIN = 'https://localhost:8888';

const AxiosApi = {
    
    // ListPage
    getList: async () => {
        try {
            const response = await axios.get(MPT_DOMAIN + '/', {});
        return response.data;
        } catch(error) {
            console.error ('');
            throw error;
        }
    },
    
    // ChartPage
    getSVGChart: async () => {
        try {
            const response = await axios.get(MPT_DOMAIN + '/', {});
        return response.data;
        } catch(error) {
            console.error ('');
            throw error;
        }
    },

    getPieChart: async () => {
        try {
            const response = await axios.get(MPT_DOMAIN + '/', {});
        return response.data;
        } catch(error) {
            console.error ('');
            throw error;
        }
    },

};


export default AxiosApi;