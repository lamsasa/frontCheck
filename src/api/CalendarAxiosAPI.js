import axiosInstance from "./axiosInstance";

const CalendarAxiosApi = {
  createSchedule: async (isQuick, inputValues) => {
    const type = isQuick ? "mySchedule" : "schedule";
    try {
      const response = await axiosInstance.post(
        `/calendar/create/schedule/${type}`,
        inputValues
      );

      return response.data;
    } catch (error) {
      console.error("Request Error:", error);
      throw error;
    }
  },

  createWork: async (isQuick, inputValues) => {
    const type = isQuick ? "myWork" : "work";
    try {
      const response = await axiosInstance.post(
        `/calendar/create/work/${type}`,
        inputValues
      );
      return response.data;
    } catch (error) {
      console.error("Request Error:", error);
      throw error;
    }
  },

  getCalendarView: async () => {
    try {
      const response = await axiosInstance.get("/calendar");
      const {
        dailyExpenseList,
        dailyIncomeList,
        // getScheduleForCal,
        // getWorkForCal,
      } = response.data || {};
  
      // dailyExpenseList에서 date와 amount 값 가져오기
      const expenseDates = Object.keys(dailyExpenseList);
      const expenseAmounts = Object.values(dailyExpenseList);
  
      // dailyIncomeList에서 date와 amount 값 가져오기
      const incomeDates = Object.keys(dailyIncomeList);
      const incomeAmounts = Object.values(dailyIncomeList);
  
      console.log("지출 날짜: " + expenseDates); // 응답 데이터 출력
      console.log("수입 날짜: " + incomeDates); // 응답 데이터 출력
  
      //-------------------------------------------------------------------------
      // // getScheduleForCal에서 date와 myScName 값 가져오기
      // const scDates = getScheduleForCal.map(item => item.scDate);
      // const scNames = getScheduleForCal.map(item => item.scName);
  
      // // getWorkForCal에서 date와 myWorkName 값 가져오기
      // const workDates = getWorkForCal.map(item => item.workDate);
      // const workNames = getWorkForCal.map(item => item.workName);
  
      return {
        expenseDates,
        expenseAmounts,
        incomeDates,
        incomeAmounts,
        // scDates,
        // scNames,
        // workDates,
        // workNames,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  

  // 간편등록 전체 조회
  getMyPageList: async () => {
    try {
      return await axiosInstance.get("/mypage");
    } catch (error) {
      throw error;
    }
  },
};

export default CalendarAxiosApi;
