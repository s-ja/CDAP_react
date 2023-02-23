/* eslint-disable */

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
          <div class="list" key={i}>
            <h4 onClick={()=>{setmodal(!modal)}} >
              {i}{a}
              <span onClick={ () => {

                let copy = [...likeNumber]
                copy[i] = ++copy[i];

                setLikeNumber(copy)
              }}>👍</span>
              {likeNumber[i]}
            </h4>
            <p>23.02.22 시작</p>
            <p>{time}</p>
          </div>
        )
      })
     }

     
     {/* <Modal></Modal> */}
     {/* <Modal/> */}
     {
      modal == true ? <Modal/> : null
     }
     
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
