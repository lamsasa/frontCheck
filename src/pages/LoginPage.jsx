import axios from 'axios';

const handleGoogleLogin = () => {

    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = 'http://localhost:8888/auth/login';
    const scopes = ['openid', 'email', 'profile', 'https://www.googleapis.com/auth/calendar.events'];
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`;


    window.location.href = authUrl;
    // 로그인하면 OAuth에서 리다이렉션 주소로 보내는데
    // 리다이렉션 주소를 callback으로 설정해놓고
    // 백엔드 서버에서 access token의 정보를 받을 수 있다 getMapping (/callback)으로 받으면 될듯

    // 구글로그인 하면 다시 메인 홈으로 돌아가야 한다 지금은 리다이렉션 주소로 가고있다 이것도 고쳐야함
};

const Login = () => {
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Login;
