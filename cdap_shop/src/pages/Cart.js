import { createElement } from 'react';
import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, plusAge } from './../store/userSlice';

function Cart(){

    let state = useSelector((state)=>state)
    // console.log(state);
    let dispatch = useDispatch()

    return(
        <div>
            <h2>{state.user.name}, ({state.user.age}살)의 장바구니</h2>
            <button onClick={()=>{dispatch(plusAge(100))}}>+</button>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {state.inCart.map((content,index)=>
                    <Product index={index} id={state.inCart[index].id} name={state.inCart[index].name} count={state.inCart[index].count} dispatch={dispatch}/>
                )}
            </tbody>
            </Table> 
        </div>
    )
}

function Product(props){
    return(
        <tr>
            <td>{props.index+1}</td>
            <td>{props.name}</td>
            <td>{props.count}</td>
            <td>
                <button onClick={()=>{
                    props.dispatch(changeName())
                    }}>
                    +
                </button>
                </td>
        </tr>
    )
}

export default Cart