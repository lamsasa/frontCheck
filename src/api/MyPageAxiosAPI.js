import axios from "axios";
const MPT_DOMAIN = "https://localhost:8888";

const AxiosApi = {
  createMySchedule: async (inputValues) => {
    try {
      const response = await axios.post(
        MPT_DOMAIN + "/mypage/create/schedule",
        inputValues,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Request Error:", error);
      throw error;
    }
  },

  createMyWork: async (inputValues) => {
    try {
      const response = await axios.post(
        MPT_DOMAIN + "/mypage/create/work",
        inputValues,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Request Error:", error);
      throw error;
    }
  },

  getMyPageList: async () => {
    return await axios.get(MPT_DOMAIN + "/mypage", {
      withCredentials: true,
    });
  },
};

export default AxiosApi;
