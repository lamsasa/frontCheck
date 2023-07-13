import axios from "axios";
const DOMAIN = "https://localhost:8888";

const UserAxiosAPI = {
  getUserInfo: async () => {
    try {
      return await axios.get(DOMAIN + "/user/me", { withCredentials: true });
    } catch (e) {
      console.log("getUserInfo : " + e);
    }
  },

  // 비밀번호 변경 이메일 보내기
  postEmailSend: async (inputEmail) => {
    try {
      const response = await axios.post(
        DOMAIN + "/mail/sendmail",
        {
          type: "findPw",
          email: inputEmail,
        },
        { withCredentials: true }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("postEmailSend: " + error);
      throw error;
    }
  },

  // 비밀번호 수정
  postNewPassword: async ({inputValues}) => {
    try {
      const response = await axios.post(
        DOMAIN + "/password/update",
        inputValues,
        { withCredentials: true }
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      throw e;
    }
  },
};

export default UserAxiosAPI;
