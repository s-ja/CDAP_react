import { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

import {Context1} from './../App'

import { addItem } from './../store.js';

import { useDispatch } from 'react-redux';

let BtnReset = styled.button`
  background: inherit ;
  border:none;
  box-shadow:none;
  border-radius:0;
  padding:0;
  overflow:visible;
  cursor:pointer;
`

let Btn = styled.button`
  background : ${props => props.bg};
  color : ${ props => props.bg === 'black' ? 'white' : 'black'};
  padding : 10px;
`


function Detail(props){

  let {stock} = useContext(Context1)

  // let [shoes] = useState();

  let {id} = useParams();

  // let [item, setItem] = useState(props.shoes[id])
  let item = props.shoes.find(function(x){
    return x.id == id
  });

  let [alert, setAlert] = useState(true)

  let dispatch = useDispatch()

  useEffect(()=>{
    let out = localStorage.getItem('watched')
    out = JSON.parse(out)
    out.push(item.id)
    out = new Set(out)
    out = Array.from(out)
    localStorage.setItem('watched', JSON.stringify(out))
  },[]);

  useEffect(()=>{
    let timer = setTimeout(()=>{setAlert(false)},2000)
    // console.log('test2');
    return ()=>{
      // console.log('test1');
      clearTimeout(timer);
    }
  },[]);

  let [num, setNum] = useState('');
  
  useEffect(()=>{
    if (isNaN(num) == true){
      console.log('숫자만 입력 가능합니다.');
    }
  },[num])

  let [tab, setTab] = useState(0);

  let [fade2, setFade2] = useState('')
  useEffect(()=>{
    setFade2('end')
    return ()=>{
      setFade2('')
    }
  },[]);

  // let [disapear, setDisapear] = useState((x = 'block')=>{
  //     return(
  //       <div className='alert alert-warning' style={{display : {x}}}>
  //         2초 안에 사라집니다.
  //       </div>
  //     )
  //   }
  // )

  // useEffect(()=>{
  //   setTimeout(()=>{setDisapear('none')},2000)
  // })

  return(
    <Container className={`start ${fade2}`}>
      {/* <Btn bg='black'>test</Btn> */}
      {/* {disapear} */}

      {
        alert == true ? <div className='alert alert-warning'>2초 안에 사라집니다.</div> : null
      }

      <Row>
        <Col md={6}>
          <img src={process.env.PUBLIC_URL + `https://codingapple1.github.io/shop/shoes${item.id+1}.jpg`} width="100%" alt={`shoes${item.id+1}`}/>
        </Col>
        <Col md={6}>

          {/* <input onChange={(e)=>{ setNum(e.target.value); }}/> */}
          
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          {/* <button className="btn btn-danger">주문하기</button> */}
          <Button variant="danger" onClick={()=>{dispatch(addItem( {id : item.id, name : item.title, count : 1} ))}}>주문하기</Button>
        </Col>
      </Row>


      
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* { tab == 0 ? <div>내용0</div> : null } { tab == 1 ? <div>내용1</div> : null } { tab == 2 ? <div>내용2</div> : null } */}
      <TabContent tab={tab} shoes={props.shoes} />
      
    </Container>
  )
}

  // function TabContent(props){
  //   if(props.tab==0){
  //     return <div>내용0</div>
  //   }else if (props.tab==1){
  //     return <div>내용1</div>
  //   }else if (props.tab==2){
  //     return <div>내용2</div>
  //   }
  // }
  function TabContent({tab}){

    let {stock} = useContext(Context1)

    let [fade, setFade] = useState('')
    
    useEffect(()=>{
      let timer = setTimeout(()=>{
        setFade('end')
      },100)
      return ()=>{
        clearTimeout(timer)
        setFade('')
      }
    },[tab])

    return(
      <div className={`start ${fade}`}>
        {[<div>재고{stock[0]}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
      </div>
    )
  }

  export default Detail;