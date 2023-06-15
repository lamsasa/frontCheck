import SlideButton from '../components/Common/SlideButton';
import Header from '../components/Common/Header';
import Navbar from '../components/Common/Navbar';
import IncomeList from '../components/TransactionList/IncomeList';
import ExpenseList from '../components/TransactionList/ExpenseList';
import TotalList from '../components/TransactionList/TotalList';
import Box from '../components/Common/Box';
import Container from '../components/Common/Container';

const MainList = () => {
    const handleSlideChange = (index) => {
        console.log('Current slide index:', index);
    };

    const slides = [
        <div>
            <TotalList />
        </div>,
        <div>
            <ExpenseList />
        </div>,
        <div>
            <IncomeList />
        </div>,
    ];

    return (
        <>
            <Header />
            <Navbar />
            <Container>
                <Box>
                    <SlideButton slides={slides} onSlideChange={handleSlideChange} />
                </Box>
            </Container>
        </>
    );
};
export default MainList;
