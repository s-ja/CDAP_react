import { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

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

    // let [shoes] = useState();

    let {id} = useParams();

    // let [item, setItem] = useState(props.shoes[id])
    let item = props.shoes.find(function(x){
      return x.id == id
    });

    let [alert, setAlert] = useState(true)

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
      <Container>
        {/* <Btn bg='black'>test</Btn> */}
        {/* {disapear} */}

        {
          alert == true ? <div className='alert alert-warning'>2초 안에 사라집니다.</div> : null
        }

        <Row>
          <Col md={6}>
            <img src={process.env.PUBLIC_URL + `https://codingapple1.github.io/shop/shoes${item.id+1}.jpg`} width="100%" alt={`shoes${props.id+1}`}/>
          </Col>
          <Col md={6}>

            <input onChange={(e)=>{ setNum(e.target.value); }}/>
            
            <h4 className="pt-5">{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}</p>
            {/* <button className="btn btn-danger">주문하기</button> */}
            <Button variant="danger">주문하기</Button>
          </Col>
        </Row>
      </Container> 
    )
  }

  export default Detail;