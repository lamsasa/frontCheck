import styled from "styled-components";
import {useContext} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {ThemeContext} from '../context/themeProvider';
import {ReactComponent as CreditCard} from '../images/CreditCard.svg'
import {ReactComponent as List} from '../images/List.svg'
import {ReactComponent as Stats} from '../images/Stats.svg'
import {ReactComponent as Person} from '../images/Person.svg'

const NavContainer = styled.div`
    width:220px;
    height:100vh;
    background-color: ${({theme}) => theme.bgColor};
    box-shadow: inset 8px 3px 36px rgba(0, 0, 0, 0.08);
    position:fixed;
    margin-top: 73px;
`

const LiContainer = styled.li`
    display:flex;
    align-items: center;
`

const LiText = styled.p`
    margin-left: 8px;
`

const CustomLink = styled(Link)`
      color:${({theme}) => theme.menuColor};
      font-size: 14px;
      font-weight:700;
      text-decoration:none;
      margin: 40px;
      display:block;
`



const Navbar = () => {
    const {isDark} = useContext(ThemeContext);
    return(
        <NavContainer> 
            <nav>
                <ul>
                    <CustomLink to={'/'}>
                        <LiContainer>
                            <CreditCard width="20" height="17"  fill={isDark ? "white" : "#575757"}/><LiText>나의 예산</LiText>
                        </LiContainer>
                    </CustomLink>

                    <CustomLink to={'/'}>
                         <LiContainer>
                            <List width="17" height="17"  fill={isDark ? "white" : "#575757"}/><LiText>소비 리스트</LiText>
                        </LiContainer>
                    </CustomLink>

                    <CustomLink to={'/'}>
                        <LiContainer>
                            <Stats width="17" height="17"  fill={isDark ? "white" : "#575757"}/><LiText>통계</LiText>
                        </LiContainer>
                    </CustomLink>

                    <CustomLink to={'/'}>
                        <LiContainer>
                            <Person width="17" height="17"  fill={isDark ? "white" : "#575757"}/><LiText>마이 페이지</LiText>
                        </LiContainer>
                    </CustomLink>
                     
                  
                </ul>
            </nav>
        </NavContainer>
    )
}

export default Navbar;