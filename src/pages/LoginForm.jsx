import React, { useState } from "react";
import {TextField, InputAdornment, Box, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AuthAxiosAPI from "../api/AuthAxiosAPI";

// google login button 추가예정

const LoginForm = () => {
    const navigate = useNavigate();
    // 키보드 입력 받기
    const [inputEmail, setInputEmail] = useState("");
    const [inputPwd, setInputPwd] = useState("");
    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
    };

    const onChangePwd = (e) => {
        setInputPwd(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthAxiosAPI.login(inputEmail, inputPwd);
            const userInfo = JSON.stringify(response, null, 2);
            const userInfoParse = JSON.parse(userInfo);

            if (response.status === 200) {
                console.log(userInfoParse);
                localStorage.setItem("name", userInfoParse.data.name);
                console.log(userInfoParse.data.name);
                localStorage.setItem("email", userInfoParse.data.email);
                console.log(userInfoParse.data.email);
                navigate("/");
            }
        } catch (error) {
            console.log("Login error:", error.message);
        }
    };
    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
                mt: 3,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Grid container spacing={2} sx={{width: '360px'}}>
                <Grid item xs={12} mb={2}>
                    <TextField
                        autoComplete="email"
                        autoFocus
                        value={inputEmail}
                        onChange={onChangeEmail}
                        fullWidth
                        name="email"
                        placeholder="Email"
                        InputProps={{
                            style: { fontSize: '1.8rem' },
                            startAdornment: (
                                <InputAdornment position="start" sx={{ fontSize: '2.4rem'}}>
                                    <MailOutlineIcon sx={{ fontSize: '2.8rem' }}/>
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                    borderColor: "#87EEC5",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#8BD4D3",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                "&.Mui-focused": {
                                    color: "#8BD4D3",
                                },
                            },
                            height: '50px',
                            margin: '0 auto'
                        }}

                    ></TextField>
                </Grid>
                <Grid item xs={12} mb={3}>
                    <TextField
                        value={inputPwd}
                        onChange={onChangePwd}
                        fullWidth
                        name="email"
                        placeholder="Password"
                        type="password"
                        InputProps={{
                            style: { fontSize: '1.8rem' },
                            startAdornment: (
                                <InputAdornment position="start" sx={{ fontSize: '2.4rem'}}>
                                    <LockOutlinedIcon sx={{ fontSize: '2.8rem' }}/>
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                    borderColor: "#87EEC5",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#8BD4D3",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                "&.Mui-focused": {
                                    color: "#8BD4D3",
                                },
                            },
                            height: '50px'
                        }}
                    ></TextField>
                </Grid>
                <Typography
                    align="right"
                    style={{ cursor: "pointer" }}
                    sx={{
                        marginLeft: '250px',
                        cursor: 'pointer',
                        fontSize: '1.3rem',
                        color: 'gray',
                        '&:hover': {
                            color: '#8BD4D3'
                        },
                    }}
                >
                    Forget Password?
                </Typography>
                <Grid item xs={12} mb={1}>
                {inputEmail && inputPwd ?
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: '#8BD4D3',
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            height: "50px",
                            '&:hover': {
                                backgroundColor: "#87EEC5"
                            },
                        }}
                        >Sign In
                    </Button>:
                    <Button
                        variant='contained'
                        disabled
                        fullWidth
                        sx={{
                            color: '#FFFFFF',
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            height: "50px",
                            "&.Mui-disabled": {
                                color: "white"
                            }
                        }}
                        >Sign In
                    </Button>
                }
                </Grid>
                <Typography
                    sx={{
                        fontSize: '1.3rem',
                        paddingTop: '5px',
                        margin: '0 auto',
                    }}
                    color="textSecondary"
                >
                    or continue with
                </Typography>
            </Grid>
        </Box>

    );
};

export default LoginForm;