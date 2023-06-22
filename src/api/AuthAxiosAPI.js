import axios from "axios";

const DOMAIN = "http://localhost:8888";

const AuthAxiosAPI = {
    // login
    login : async(email, password) => {
        const loginUser = {
            email: email,
            password: password,
        };
        console.log(loginUser);
        return await axios.post(DOMAIN + "/api/auth/signin", loginUser)
    }
}

export default AuthAxiosAPI;