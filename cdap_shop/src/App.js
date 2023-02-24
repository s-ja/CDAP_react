// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
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
          <Col sm>
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
          </Col>
        </Row>
      </Container>
      </div>
      
    </div>
  );
}

export default App;
