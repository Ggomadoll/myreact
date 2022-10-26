import {useSearchParams} from 'react-router-dom'
function Home () {
   
    const  [params, setParams] = useSearchParams();
    const nick = params.get("nick")
   
    return(
        <>
            <h1>Home</h1>
            <h1>{nick}</h1>
        </>
    )
}
export default Home;