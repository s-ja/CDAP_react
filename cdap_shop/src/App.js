// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';

import data from './data.js'

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import Detail from "./pages/Detail";

import axios from 'axios'

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      {/* <Button variant="primary">Primary</Button> */}

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CDAP <br/> React_Part 2</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Link to='/'>Home</Link> */}
            {/* <Link to='detail' >Detail</Link> */}
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate(-1)}}>Backward</Nav.Link>
            <Nav.Link onClick={()=>{navigate(+1)}}>Forward</Nav.Link>
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
                    <Product id={shoes[index].id} title={shoes[index].title} price={shoes[index].price} content={shoes[index].content}/>
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
            }}>버튼</button>
          </div>
        
        } />
        
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />

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

        <Route path='*' element={<div>ERROR : 404</div>}></Route>

      </Routes>
      
    </div>
  );
}

function Product(props){
  return(
    <Col sm key={props}>
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
