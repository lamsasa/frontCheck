import axiosInstance from "./axiosInstance";
const AxiosApi = {
  createSchedule: async (inputValues) => {
    try {
      const response = await axiosInstance.post("/calendar/create/schedule", inputValues);

      return response.data;
    } catch (error) {
      console.error("Request Error:", error);
      throw error;
    }
  },

  createWork: async (inputValues) => {
    try {
      const response = await axiosInstance.post("/calendar/create/work", inputValues);
      return response.data;
    } catch (error) {
      console.error("Request Error:", error);
      throw error;
    }
  },

  getCalendarView: async () => {
    try {
      return await axiosInstance.get("/calendar");
    } catch (e) {
      console.log(e)
    }
  }

};

export default AxiosApi;
