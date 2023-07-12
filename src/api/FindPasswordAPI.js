import axiosInstance from "./axiosInstance";

const FindPasswordAxiosApi = {
  // 
  getFindPassword: async () => {
    try {
        return await axiosInstance.get("");
      } catch (e) {
        throw e;
      }
  },
};

export default FindPasswordAxiosApi;