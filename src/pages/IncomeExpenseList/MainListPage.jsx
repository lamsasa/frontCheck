import SlideButton from '../../components/ToggleButton/SlideButton';
import styled from 'styled-components';
import Header from '../../components/Header';
import IncomeList from './IncomListPage';
import ExpenseList from './ExpenseListPage';
import TotalList from './TotalListPage';

const Back = styled.div`
  background-color: #ffffff;
  display: flex;
  
  width: 500px;
  height: 800px;
  cursor: pointer;
`;

const MainList = () => {

    const handleSlideChange = (index) => {
        console.log('Current slide index:', index);
      };
    
      const slides = [
        <div><TotalList/></div>,
        <div><IncomeList/></div>,
        <div><ExpenseList/></div>
      ];

    return(
        <>
        <Header/>
        <Back><SlideButton slides={slides} onSlideChange={handleSlideChange} /></Back>
        </>
    );
}
export default MainList