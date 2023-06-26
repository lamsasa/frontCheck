import axios from 'axios';

const DOMAIN = 'http://localhost:8888';

const AuthAxiosAPI = {
    // login
    login: async (email, password) => {
        const loginUser = {
            email: email,
            password: password,
        };
        console.log(loginUser);
        return await axios.post(DOMAIN + '/api/auth/signin', loginUser, {
            withCredentials: true,
        });
    },
    signup: async (email, name, password, role) => {
        const SignupUser = {
            email,
            name,
            password,
            role: role !== undefined ? role : null,
        };
        return await axios.post(DOMAIN + '/api/auth/signup', SignupUser);
    },

    SignupAdmin: async (email, name, password) => {
        const SignupAdmin = {
            email,
            name,
            password,
            role: 'admin',
        };
        return await axios.post(DOMAIN + '/api/auth/signup', SignupAdmin);
    },

    // 구글 로그인 주소 리다이렉트
    GoogleLogin: async () => {
        try {
            const response = await axios.get(DOMAIN + 'auth/google');
            const googleUrl = response.data.url;
            window.location.href = googleUrl;
        } catch (error) {
            console.log(error);
        }
    },
};

export default AuthAxiosAPI;
