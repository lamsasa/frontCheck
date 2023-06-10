import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // 브라우저 라우터 이름 변경
import {ThemeProvider} from "./constants/theme/themeProvider";
import Home from './pages/MainHome/HomePage';
import Calendar from './pages/MainHome/Calendar';
import Login from './pages/LoginPage';
import MainList from './pages/IncomeExpenseList/MainListPage';
import MybudgetPage from './pages/MybudgetPage';

import GlobalStyle from "./styles/StyledComponent";

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
                        <Route path='/MainList' element={<MainList/>}/>
                        <Route path='/mybudget' element={<MybudgetPage/>}/>


                    </Routes>
                </Router>
            </ThemeProvider>

        </>

    );
}

export default App;
