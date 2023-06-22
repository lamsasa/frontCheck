import React, { useState } from 'react';
import Header from '../components/Common/Header';
import Navbar from '../components/Common/Navbar';
import ClickButton from '../components/Common/ClickButton';
import Container from '../components/Common/Container';
import Box from '../components/Common/Box';
import BudgetChart from '../components/MyBudget/BudgetChart';
import CategoryTotalBar from '../components/MyBudget/CategoryTotalBar';
import BudgetCalendar from '../components/MyBudget/BudgetCalendar';
import Modal from '../components/Common/Modal';
import BudgetAdd from '../components/MyBudget/BudgetAdd';

const MybudgetPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    // 임시 데이터
    const categoryData = [
        { Name: '식비', Money: '60000', date: '2023-06' },
        { Name: '교통/차량', Money: '90000', date: '2023-06' },
        { Name: '주유', Money: '90000', date: '2023-06' },
        { Name: '문화/레저', Money: '30000', date: '2023-06' },
        { Name: '마트/편의점', Money: '20000', date: '2023-06' },
        { Name: '패션/미용', Money: '10000', date: '2023-06' },
        { Name: '생활용품', Money: '0', date: '2023-06' },
    ];
    const totalData = [{ Money: '476000', date: '2023-06' }];

    return (
        <>
            <Header />
            <Navbar />
            <Container flex="column">
                <Box>
                    <div className="content">
                        <p className="title">나의 예산</p>
                        <ClickButton width={'90px'} onClick={openModal}>
                            예산 추가
                        </ClickButton>
                    </div>
                    <div className="content">
                        <BudgetCalendar></BudgetCalendar>
                        <div className="total">
                            <p>총 예산</p>
                            <p className="totalMoney">{totalData[0].Money ? totalData[0].Money : '0'}원</p>
                        </div>
                    </div>
                    <div className="content">
                        <CategoryTotalBar categoryData={categoryData} totalData={totalData} />
                    </div>
                </Box>
                <Box>
                    <div className="center">
                        {categoryData.map((data) => {
                            if (data.Money === '0') return null; // 돈이 0인 경우 null 리턴
                            return (
                                <BudgetChart
                                    key={data.Name}
                                    name={data.Name}
                                    money={data.Money}
                                    totalMoney={totalData[0].Money ? totalData[0].Money : '0'}
                                />
                            );
                        })}
                    </div>
                </Box>
                {modalOpen && (
                    <Modal open={modalOpen} close={closeModal}>
                        <BudgetAdd categoryData={categoryData}></BudgetAdd>
                    </Modal>
                )}
            </Container>
        </>
    );
};
export default MybudgetPage;
