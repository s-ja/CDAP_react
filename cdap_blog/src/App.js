/* eslint-disable */
import React from 'react';

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '코딩애플로 다시 시작하는 리액트';
  let [time, setTime] = useState('현재시간 10:42');
  // let [logo, setLogo] = useState('ReactBlog')
  let [title, setTitle] = useState(['JSX','typeScript','react'])

  let [likeNumber, setLikeNumber] = useState([0,0,0]);

  let[modal, setmodal] = useState(false);

  let [titleNumber, setTitleNumber] = useState(0);

  let [content,setContent] = useState('');


  function plusNumber(){
    console.log('number plused');
  }

  return (
    <div className="App">
     <div className="black-nav">
      <h4 style={{color:'antiquewhite', fontSize:'2rem'}}>
        ReactBlog
      </h4>
     </div>

     <button onClick={() => {
      let titleArr = [...title]
      titleArr.sort()
      
      setTitle(titleArr)
      }}>
      🔽
     </button>

     {/* <div class="list">
       <h4>{post} <span onClick={ () => {setLikeNumber(++likeNumber)}}>👍</span> {likeNumber}</h4>
       <p>23.02.22 시작</p>
       <p>{time}</p>
     </div>

     <div class="list">
       <h4>{title[0]}</h4>
       <button onClick={()=>{
        let titleCopy = [...title]
        titleCopy[0] = 'JSX in react'
        
        setTitle(titleCopy)
        }}>🔄️</button>
       <p>23.02.22 시작</p>
       <p>{time}</p>
     </div>

     <div class="list">
       <h4>{title[1]}</h4>
       <p>23.02.22 시작</p>
       <p>{time}</p>
     </div>

     <div class="list">
       <h4 onClick={()=>{setmodal(!modal)}} >{title[2]}</h4>
       <p>23.02.22 시작</p>
       <p>{time}</p>
     </div> */}

     {
      title.map(function(a, i){
        return(
          <div className="list" key={i}>
            <h4 onClick={()=>{setmodal(true); setTitleNumber(i)}} >
              {i}{a}
              <span onClick={ (e) => {

                e.stopPropagation();

                let copy = [...likeNumber]
                copy[i] = ++copy[i];

                setLikeNumber(copy)
              }}>👍</span>
              {likeNumber[i]}
            </h4>
            <p>23.02.22 시작</p>
            <p>{time}</p>
            <button onClick={()=>{
              // title.splice(i)
              let copy = [...title];
              copy.splice(i,1);
              setTitle(copy)
              }} >글 삭제</button>
          </div>
        )
      })
     }

     {/* <button onClick={()=>{ setTitleNumber(0)}}>title0</button>
     <button onClick={()=>{ setTitleNumber(1)}}>title1</button>
     <button onClick={()=>{ setTitleNumber(2)}}>title2</button> */}

     <input onChange={(e)=>{
      setContent(e.target.value);
      // return(content);
      }} />
      
     {/* <button onClick={()=>{title.unshift(content)}} >글 추가</button> */}

     <button onClick={()=>{
      let copy = [...title];
      copy.unshift(content);
      setTitle(copy)
     }} >
      글 추가
      </button>

     {/* <Modal></Modal> */}
     {/* <Modal/> */}
     {
      modal == true
      ? <Modal title={title} color={'antiquewhite'} setTitle={setTitle} titleNumber={titleNumber}/>
      : null
     }

     <Modal2></Modal2>

    </div>
  );
}

function Modal(props){
  return(
    <div className='modal' style={{background : props.color}}>
      <h4>{props.title[props.titleNumber]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let titleCopy = [...props.title]
        titleCopy[0] = 'JSX in react'
        props.setTitle(titleCopy)
        }}>🔄️</button>
    </div>
  )
}


class Modal2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : 'asj',
      age : 29
    }
  }
  render(){
    return(
      <div>
        Hello, {this.state.name}<br/>
        his age is {this.state.age}
        <button onClick={()=>{
          this.setState({age : 30})
        }}>2024</button>
        {/* <div>test{this.props}</div> */}
      </div>
    )
  }
}


export default App;
