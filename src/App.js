import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // 브라우저 라우터 이름 변경
import {ThemeProvider} from "./context/themeProvider";
import Home from './pages/MainHome/Home';
import Calendar from './pages/MainHome/Calendar';

import Login from './pages/Login';
import TotalList from './pages/IncomeExpenseList/TotalList';
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
                        <Route path='/TotalList' element={<TotalList/>}/>

                    </Routes>
                </Router>
            </ThemeProvider>

        </>

    );
}

export default App;
