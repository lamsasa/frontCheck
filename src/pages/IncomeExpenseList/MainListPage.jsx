import SlideButton from '../../common/ToggleButton/SlideButton';
import styled from 'styled-components';
import Header from '../../common/Header';
import Navbar from "../../common/Navbar";
import IncomeList from './IncomListPage';
import ExpenseList from './ExpenseListPage';
import TotalList from './TotalListPage';

const MainListContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;

    .slideContainer {
        width: 1049px;
        height: 725px;
        display: flex;
        flex-direction: column;
        align-content: center;
        background-color: #a1d3ff;
        position: fixed;
        top: 120px;
        left: 350px;
    }

    @media (max-width: 768px) {
    .slideContainer {
      width: 80%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-content: center;
      top: 80px;
      left: 10%;
    }
  }

`;

const MainList = () => {

    const handleSlideChange = (index) => {
        console.log('Current slide index:', index);
      };
    
      const slides = [
        <div><TotalList/></div>,
        <div><ExpenseList/></div>,
        <div><IncomeList/></div>
      ];

    return(
        <>
        <Header/>
        <Navbar/>

        <MainListContainer>
        <div className='slideContainer'><SlideButton slides={slides} onSlideChange={handleSlideChange} /></div>
        </MainListContainer>
        </>
    );
}
export default MainList