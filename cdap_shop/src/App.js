// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';

import data from './data.js'


function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CDAP <br/> React_Part 2</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Button variant="primary">Primary</Button> */}
      
      <div className='main-bg' style={{backgroundImage:`url(${bg})`}}></div>
      <div>
        <Container>
        <Row>
          
          {/* <Col sm>
            <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} alt='shoes1' width='80%'/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
            <p>{shoes[0].content}</p>
          </Col>
          <Col sm>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' alt='shoes2' width='80%'/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
            <p>{shoes[1].content}</p>
          </Col> */}

          {/* <Product title={shoes[0].title} price={shoes[0].price} content={shoes[0].content}/> */}
          
          {/* <ProductWithClass title={shoes[1].title} price={shoes[1].price} content={shoes[1].content}/> */}

          {shoes.map(function(content,index){
            return(
              <Product id={shoes[index].id} title={shoes[index].title} price={shoes[index].price} content={shoes[index].content}/>
            )
          })}
        </Row>
      </Container>
      </div>
      
    </div>
  );
}

function Product(props){
  return(
    <Col sm>
      <img src={process.env.PUBLIC_URL + `/shoes${props.id+1}.jpg`} alt='shoes1' width='80%'/>
      <h4>{props.title}</h4>
      <p>{props.price}</p>
      <p>{props.content}</p>
    </Col>
  )
}

class ProductWithClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : `${props}.title`
    }
  }
  render(){
    return(
      <Col sm>
      <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} alt='shoes1' width='80%'/>
      <h4>{this.state.title}</h4>
    </Col>
    )
  }
}

export default App;
