import logo from './logo.svg';
import './App.css';

// layout
import Header from './layout/Header';
import Navbar from './layout/Navbar';

// page
import Main from './page/Main';
import Login from './page/Login';
import Join from './page/Join';

// 라우터
import {Routes, Route} from 'react-router-dom'


function App() {
  
  // 1. 고정되어있는 Header를 하나 제작하라
  // => JS(B) 이라는 내용의 h3 태그
  // => 클릭 시, 메인창으로 이동

  // 2. 고정되어있는 Navbar를 하나 제작하라
  // => 버튼 2개 (로그인, 회원가입)
  // => 각가 페이지로 이동

  
  
  return (
     <div>
      <Header></Header>
      <Navbar>  </Navbar>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/join' element={<Join/>}></Route>
      </Routes>

     </div>
  );
}

export default App;
