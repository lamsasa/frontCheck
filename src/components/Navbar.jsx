import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import {ReactComponent as CreditCard} from '../assets/CreditCard.svg'
import {ReactComponent as List} from '../assets/List.svg'
import {ReactComponent as Stats} from '../assets/Stats.svg'
import {ReactComponent as Person} from '../assets/Person.svg'
import {ReactComponent as Calendar} from '../assets/Calendar.svg'
import {ReactComponent as Logout} from '../assets/Logout.svg'
import useViewport from "../context/viewportHook";

const NavContainer = styled.div`
    width:${(props) => (props.isMobile ? '100%' : '180px')};
    height:${(props) => (props.isMobile ? '50px' : '100vh')};
    bottom : ${(props) => (props.isMobile ? '0' : '')};
    display:${(props) => (props.isMobile ? 'flex' : 'block')};
    background-color: ${({theme}) => theme.bgColor};
    justify-content:${(props) => (props.isMobile ? 'space-evenly' : 'none')};
    box-shadow: inset 8px 3px 36px rgba(0, 0, 0, 0.08);
    position:fixed;
    margin-top: 73px;
`


const CustomLink = styled(NavLink)`
      color:${({theme}) => theme.menuColor};
      >svg{
        fill:${({theme}) => theme.menuColor};
      }
      font-size: 12px;
      font-weight:700;
      text-decoration:none;
      display:flex;
      margin:${(props) => (props.isMobile ? '0px' : '30px')};
      flex-direction: ${(props) => (props.isMobile ? 'column' : 'none')};
      justify-content: ${(props) => (props.isMobile ? 'center' : 'none')};
      align-items: center;
      
        .navText{
            margin-left: 8px;   
        }

        .logoutDiv{
            position: fixed;
            bottom: 30px;
            display:flex;
            align-items:center;
            >svg{
             fill:${({theme}) => theme.menuColor};
      }
        }

      
      // 텍스트에 그라이언트 주기
      &.active{
        background: linear-gradient(100deg, rgba(66, 230, 149, 0.7) 3.56%, rgba(59, 178, 184, 0.7) 96.4%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        > svg {
         fill: url(#paint0_linear_273_162);
        }

       
      }
`



const Navbar = () => {
    const { isMobile } = useViewport();
    return(
        <NavContainer isMobile={isMobile}> 
                    {isMobile && ( 
                        <CustomLink to={"/test"} isMobile={isMobile}>
                            <Calendar width="20" height="20"/><p className="navText">달력</p>
                        </CustomLink>
                    )}

                    <CustomLink to={'/'} isMobile={isMobile}>
                            <CreditCard width="20" height="17"/><p className="navText">나의 예산</p>
                    </CustomLink>

                    <CustomLink to={'/'} isMobile={isMobile}>
                            <List width="17" height="17"/><p className="navText">소비 리스트</p>
                    </CustomLink>

                    <CustomLink to={'/test'} isMobile={isMobile}>
                            <Stats width="17" height="17"/><p className="navText">통계</p>
                    </CustomLink>

                    <CustomLink to={'/test'} isMobile={isMobile}>
                            <Person width="17" height="17"/><p className="navText">마이 페이지</p>
                    </CustomLink>

                    {!isMobile && ( 
                        <CustomLink to={'/logout'}>
                            <div className="logoutDiv">
                                <Logout width="17" height="" fill="#575757"/><p className="navText">로그아웃</p>
                            </div>
                            
                        </CustomLink>
                    )}
                    

        </NavContainer>
    )
}

export default Navbar;