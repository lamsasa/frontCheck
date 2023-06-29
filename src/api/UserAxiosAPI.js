import axiosInstance from "./axiosInstance";

const UserAxiosAPI = {
    getUserInfo : async() => {
        return await axiosInstance.get("/user/me");
    }
}

export default UserAxiosAPI;