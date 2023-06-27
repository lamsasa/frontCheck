import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AuthAxiosAPI from "../api/AuthAxiosAPI";
import {useNavigate} from "react-router-dom";



// 색상 랜덤하게 바꿔줌
const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        const adjustedValue = Math.max(value, 50); // Minimum threshold (adjust as needed)
        color += `00${adjustedValue.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
};


// 배경색을 바꿔줌
const stringAvatar = (name) => {
    if (!name || typeof name !== 'string') {
        return null
    }

    const initials = name
        .split('')
        .map((char) => char.charCodeAt(0))
        .join('')

    return {
        sx: {
            bgcolor: stringToColor(initials),
            fontWeight: 'bold',
            fontSize: 13,
            width: 50,
            height: 50,
            margin: 11/8 // 1당 8px
        },
        children: name,
    };
};



const AvatarButton = ({name}) => {
    const navigate = useNavigate();

    const onClickLogOut = async(e) => {
        e.preventDefault();
        try {
            const response = await AuthAxiosAPI.logout();
            if(response.status === 200) {
                console.log("로그아웃 성공")
                navigate("/")
            }
        }catch (e) {
            console.log(e);
        }

    }
    return (
        <Avatar {...stringAvatar(name)} onClick={onClickLogOut} />
    );
}
export default AvatarButton;