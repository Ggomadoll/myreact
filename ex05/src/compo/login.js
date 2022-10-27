import {useSearchParams,useNavigate} from 'react-router-dom';
// useSearchParams: 주소값에 있는 쿼리스트링 데이터를 꺼내올수 있게 만들어줌
import {useSelector} from 'react-redux';

import {useState} from 'react';

function Login () {
    // params : 이전 컴포넌트 에서 보낸 쿼리스트링 데이터를 객체로 가지고있음
 
 
    const joinId = useSelector((state)=> state.id);
    const joinPw = useSelector((state)=> state.pw);
    const joinNick = useSelector((state)=> state.nick);
 
    const nav = useNavigate();
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
   
    const [params, setParams] = useSearchParams();
    const id = params.get("id");
    const pw = params.get("pw");
    const nick = params.get("nick");
    function tryLogin(){
        if(joinId == inputId && joinPw == inputPw) {
            // 로그인 성공
            console.log("성공")
            nav("/Home")
        }
        else {
            // 로그인 실패
            console.log("실패 ")
        }
    }

    return(
        <>
        <h1>로그인 페이지</h1>
        {/* 로그인 무조건 성공 */}
        <form action='.-/Home' method='post'>
        ID: <input onChange={(e)=>setInputId} value={id} ></input>
            <br></br>
            PW: <input onChange={(e)=>setInputPw} value={pw}></input>
            <br></br>
           <input value={nick} style={{display:'none'}}></input>
           <button type='button' onClick={tryLogin}>로그인시도</button>
           </form>

        </>

    )

}
export default Login;