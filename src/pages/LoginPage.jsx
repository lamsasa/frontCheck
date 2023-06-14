import { Box, Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      console.log(userInfo);
    },
    flow: "auth-code",
  });

  return (
    <Box>
      <Box>
        <Button onClick={googleLogin}>Google Button</Button>
      </Box>
    </Box>
  );
};

export default Login;
