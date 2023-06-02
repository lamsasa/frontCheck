import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 브라우저 라우터 이름 변경
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          
        </Routes>
      </Router >

    </>

  );
}

export default App;
