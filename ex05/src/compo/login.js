function Login () {

    return(
        <>
        <h1>로그인 페이지</h1>
        ID: <input onChange={(e)=>setId(e.target.value)} value={id} ref={useId}></input>
            <br></br>
            PW: <input onChange={(e)=>setId(e.target.value)} value={pw}></input>
            <br></br>
           <button>로그인 시도</button>
           <button onClick={reset}>초기화</button>

        </>

    )

}
export default Login;