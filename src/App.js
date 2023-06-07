import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // 브라우저 라우터 이름 변경
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from "./styles/StyledComponent";
import {ThemeProvider} from "./context/themeProvider";

function App() {
    return (
        <>
            <ThemeProvider>
            <GlobalStyle/>
                <Router>
                    <Routes>

                        <Route path='/' element={<Home/>}/>
                        <Route path='/Login' element={<Login/>}/>

                    </Routes>
                </Router>
            </ThemeProvider>

        </>

    );
}

export default App;
