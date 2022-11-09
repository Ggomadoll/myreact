import logo from './logo.svg';
import './App.css';
import './test.css';// 외부 css 파일 import 
import App2 from './App2';
import Ex01 from './compo/Ex01';
import Ex02 from './compo/Ex02';

function App() { // -->  App 이라는 사용자 정의 태그(컴포넌트)

    const name = "현지";
    const data = "ex02  ";
    const num = 10
    
    function chNum() {
      num = 30;
      console.log(num)
    };
     



  // return 안에 사용자 정의태그 구조를 작성할 수 있다!!
  return (
    //JSX 문법  -> Javascript 와 html을 같이 사용할 수 있는 문법!
    //규칙 1 : 꼭 html 구조는 한가지 태그로 묶여 있어야 한다!!
    //규칙 2 : 모든 태그는 여는 태그와 닫는 태그 둘다 존재하여야 한다
    //규칙 4 : class 를 지정해줄때에는 className 이라는 키워드를 사용한다
    

    <>
    <h1 className='first'>HELLO React</h1>
    <h1 style={{color:"red"}} id={"test"}>월요일 화리팅</h1>
    {/* 변수를 사용할땐 {변수명} 으로 사용한다!
      // 규칙 3. 
      //JSX 문법 안에서는 사용할 수 있는 Javascript 문법이 제안되어있다
      // 삼항 연산자는 가능하다
      // name에 있는 값이 "승환" -> 나의 이름은 승환
      // name에 있는 값이 다른 내용이라면 -> 나의 이름은 영표
    */}
     
    <h1>나의 이름은 {name == "승환" ? name : "영표"} </h1>
    <App2> </App2>
    {data == 'ex01' ? <Ex01> </Ex01> : <Ex02> </Ex02>}
    <h1>{num}</h1>
    <button onClick={chNum}>숫자 바꾸기</button>
    
    
    </>
    
  );
}

// 위에서 만들어놓은 사용자 정의 태그를 내보내겠습니다! 
export default App;
