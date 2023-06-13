import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // 브라우저 라우터 이름 변경
import {ThemeProvider} from "./components/themeProvider";
import Home from './pages/MainHome/HomePage';
import Calendar from './pages/MainHome/Calendar';
import Login from './pages/LoginPage';
import MainList from './pages/MainListPage';
import Mybudget from './pages/MybudgetPage';
import Chart from './pages/ChartPage';
import GlobalStyle from "./styles/GlobalStyle";
import Mypage from "./pages/MypagePage";

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
                        <Route path='/Chart' element={<Chart/>}/>
                        <Route path='/mybudget' element={<Mybudget/>}/>
                        <Route path='/mypage' element={<Mypage/>}/>



                    </Routes>
                </Router>
            </ThemeProvider>

        </>

    );
}

export default App;
