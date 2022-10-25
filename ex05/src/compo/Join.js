import {useState, useRef} from 'react'
// useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있게 끔 도와주는 기능이다!!
import {useNavigate} from 'react-router-dom'
//useNavigate : ==> 특정 주소값으로 화면을 전환 할 수 있는 역할

function Join() {

    const useId = useRef();

    const [id,setId] = useState();
    const [pw,setPw] = useState();
    const [nick,setNick] = useState();
    // ref.current -> ref가 적용된 태그를 의미
    // useId.current.focus();
   document.getElementById("test").focus();


    function tryJoin() {
       nav("/Login?id=" + id+ "&pw=")
    }


    return(
        <br>
            <h1>회원가입 페이지입니다</h1>
    
            ID: <input onChange={(e)=>setId(e.target.value)} value={id} ref={useId}></input>
            <br></br>
            PW: <input onChange={(e)=>setId(e.target.value)} value={pw}></input>
            <br></br>
            NICK: <input onChange={(e)=>setId(e.target.value)} value={nick}></input>
            <br></br>
           <button>Join</button>
           <button onClick={reset}>초기화</button>
        </br>
    );
}
export default Join;    