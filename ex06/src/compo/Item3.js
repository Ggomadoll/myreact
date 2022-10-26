import {useSelector} from 'react-redux';
// useSelector : 공유되고있는 store에 접근해서 state값을 가져올 수 있는 역할

function Item3(props) {
    const number = useSelector((state)=> state.number);
    
    return(
        <div>
            <h1>Item3 : </h1>
        </div>
    )
}
export default Item3;