import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // 브라우저 라우터 이름 변경
import {ThemeProvider} from "./context/themeProvider";
import Home from './pages/MainHome/HomePage';
import Calendar from './pages/MainHome/Calendar';

import Login from './pages/LoginPage';
import TotalList from './pages/IncomeExpenseList/TotalListPage';
import GlobalStyle from "./styles/StyledComponent";

//테스트용 페이지입니다. 테스트 완료 후 삭제할게요!
// import Test from './pages/IncomeExpenseList/Test';

function App() {
    return (
        <>
            <ThemeProvider>
            <GlobalStyle/>
                <Router>
                    <Routes>

                        <Route path='/' element={<Home/>}/>
                        <Route path='/Calendar' element={<Calendar/>}/>
                        <Route path='/Login' element={<Login/>}/>
                        <Route path='/TotalList' element={<TotalList/>}/>


                        
                        {/* <Route path='/Test' element={<Test/>}/> */}

                    </Routes>
                </Router>
            </ThemeProvider>

        </>

    );
}

export default App;
