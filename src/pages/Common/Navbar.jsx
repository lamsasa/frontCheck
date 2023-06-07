import styled from "styled-components";
import {useContext} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const NavContainer = styled.div`
    width:220px;
    height:100vh;
    background-color: ${({theme}) => theme.bgColor};
    box-shadow: inset 8px 3px 36px rgba(0, 0, 0, 0.08);
    position:fixed;
    margin-top: 73px;
`
const navDefault = {
  color: '#575757',
  fontSize: '14px',
  fontWeight: '700',
  textDecoration: 'none',
  margin: '40px',
  display: 'block'

};

const navSelect = {
    color: '#575757',
    fontSize: '14px',
    fontWeight: '700',
    textDecoration: 'none',
    margin: '40px',
    display: 'block'
};

const Navbar = () => {

    return(
        <NavContainer>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'} style={({ isActive }) => {
                        return isActive ? navSelect : navDefault
                        }}>
                            나의 예산
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to={'/'} style={({ isActive }) => {
                        return isActive ? navSelect : navDefault
                        }}>
                            소비 리스트
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to={'/'} style={({ isActive }) => {
                        return isActive ? navSelect : navDefault
                        }}>
                            통계
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to={'/'} style={({ isActive }) => {
                        return isActive ? navSelect : navDefault
                        }}>
                            마이 페이지
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </NavContainer>
    )
}

export default Navbar;