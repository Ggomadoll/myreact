import {useState, useRef} from 'react'
// useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있게 끔 도와주는 기능이다!!
import {useNavigate} from 'react-router-dom'
//useNavigate : ==> 특정 주소값으로 화면을 전환 할 수 있는 역할
import {useSelector, useDispatch} from 'react-redux';

function Join() {

    const test = useSelector((state) => state.id);
    const dispatch = useDispatch();
    
    const useId = useRef();

    const [id,setId] = useState();
    const [pw,setPw] = useState();
    const [nick,setNick] = useState();
    // ref.current -> ref가 적용된 태그를 의미
    // useId.current.focus();
//    document.getElementById("test").focus();

    const nav = useNavigate();
    // useNavigate: 주소값을 입력받아 해당하는 주소로 페이지를 전환할 수 있는 기능

    // function tryJoin() {
    //    nav("/Login?id=" + id+ "&pw="+ pw+"&nick=" + nick);
    // }
    // form 주소값으로 이동하면서 form 태그안에 있는 내용도 같이 전달
    function tryJoin() {
        dispatch({
            type : 'join',
            id : id,
            pw : pw,
            nick : nick
           })
           nav("/Login")
    }

    return(
        <br>
            <h1>회원가입 페이지입니다</h1>
            <form action='/Login' method='post'>
            ID: <input name='id' onChange={(e)=>setId(e.target.value)} value={id} ref={useId}></input>
            <br></br>
            PW: <input name="pw"onChange={(e)=>setId(e.target.value)} value={pw}></input>
            <br></br>
            NICK: <input name='nick' onChange={(e)=>setId(e.target.value)} value={nick}></input>
            <br></br>
           <button onClick={tryJoin} type="button">Join</button>
           <button type="button">초기화</button>
           </form>
        </br>
    );
}
export default Join;     