import styled from "styled-components";
import logo from '../../images/Logo.png';
import AvatarButton from "./AvatarButton";
import {useContext} from "react";
import {ThemeContext} from "../../context/themeProvider";

const Logo = styled.img`
    width: 213px;
    height: 39px;
`

const Container = styled.div`
    width: 100%;
    height: 73px;
    padding: 0 22px 0 22px;
    background-color: ${( {theme}) => theme.bgColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  
    .headerRight {
      display: flex;
    }
`

const DarkModeButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${({theme}) => theme.bgColor};
`
const Header = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const handleDarkModeToggle = () => {
        setIsDark(!isDark);
    }
    return (
        <Container>
            <Logo src={logo} alt='#'></Logo>
            <div className="headerRight">
                {/* 다크모드 버튼*/}
                <DarkModeButton onClick={handleDarkModeToggle}>
                    {isDark ? "Light Mode" : "Dark Mode"}
                </DarkModeButton>
                <AvatarButton name="홍비"></AvatarButton>

            </div>
        </Container>
    )

}

export default Header;