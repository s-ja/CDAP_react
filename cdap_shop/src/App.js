// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState, useEffect } from 'react';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';

import data from './data.js'

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import Detail from "./pages/Detail";

import axios from 'axios'

import Cart from './pages/Cart'

import {useQuery} from '@tanstack/react-query'

export let Context1 = createContext()

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  let [stock, setStock] = useState([10,11,100])

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify( [] ))
  },[])

  // let obj = {name : 'asj'};
  // localStorage.setItem('data', JSON.stringify(obj))
  // let out = localStorage.getItem('data')
  // console.log(JSON.parse(out).name);

  let result = useQuery(['name'],()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
    return a.data
    }),
    // {staleTime : 2000}
  )

  // console.log(result.data, result.isLoading, result.error);
  // console.log(result.isLoading ? '로딩중입니다.' : result.data.name);
  
  return (
    <div className="App">
      {/* <Button variant="primary">Primary</Button> */}

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">CDAP : React_Part 2</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link> */}
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            안녕하세요,
            {/* { result.isLoading ? '로딩중입니다.' : result.data.name } */}
            { result.isLoading && '로딩중입니다.' }
            { result.error && '에러입니다.' }
            { result.data && result.data.name }
          </Nav>
        </Container>
      </Navbar>

      
      <Routes>
        <Route path='/' element={

          <div>
            <div className='main-bg' style={{backgroundImage:`url(${bg})`}}></div>
            <Container>
              <Row>
                {shoes.map(function(content,index){
                  return(
                    <Product id={shoes[index].id} title={shoes[index].title} price={shoes[index].price} content={shoes[index].content} key={index}/>
                  )
                })}
              </Row>
            </Container>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                console.log(result.data)
                let copy = [...shoes, ...result.data];
                setShoes(copy);
              }).catch(()=>{
                console.log('Error : 404');
              })

              // Promise.all([axios.get(''), axios.get('')])
              // .then(()={})
              
              // axios.post('',{writen : 'byASJ'})
              
            }}>버튼</button>
          </div>
        
        } />
        
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ stock }}>
            <Detail shoes={shoes} />
          </Context1.Provider>

        } />

        <Route path='/about' element={ <div> <About/> </div> } >

          <Route path='member' element={<div>Member</div>}>
            <Route path='ceo' element={<div>CEO</div>}>
          </Route>

          </Route>
            <Route path='location' element={<div>location</div>}>
          </Route>
          
        </Route>

        <Route path='event' element={<div> <Event/> </div>}>
          <Route path='event-1' element={<p>오늘의 이벤트1</p>}></Route>
          <Route path='event-2' element={<p>오늘의 이벤트2</p>}></Route>
        </Route>

        <Route path='/cart' element={<Cart></Cart>}></Route>

        <Route path='*' element={<div>ERROR : 404</div>}></Route>

      </Routes>
      
    </div>
  );
}

function Product(props){
  return(
    <Col sm>
      {/* <img src={process.env.PUBLIC_URL + `/shoes${props.id+1}.jpg`} alt={`shoes${1+props.id}`} width='80%'/> */}
      <img src={process.env.PUBLIC_URL + `https://codingapple1.github.io/shop/shoes${props.id+1}.jpg`} alt={`shoes${1+props.id}`} width='80%'/>
      <h4>{props.title}</h4>
      <p>{props.price}</p>
      <p>{props.content}</p>
    </Col>
  )
}

function About(){
  return(
    <div>
      <h4>About Us</h4>
      <Outlet>
        <Outlet></Outlet>
      </Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>EVENT</h4>
      <Outlet>
      </Outlet>
    </div>
  )
}


export default App;
