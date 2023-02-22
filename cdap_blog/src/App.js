import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '코딩애플로 다시 시작하는 리액트';
  let [time,b] = useState('현재시간 10:42');
  // let [logo, setLogo] = useState('ReactBlog')
  let [title, setTitle] = useState(['JSX','typeScript','react'])

  return (
    <div className="App">
     <div className="black-nav">
      <h4 style={{color:'antiquewhite', fontSize:'2rem'}}>
        ReactBlog
      </h4>
     </div>
     <div class="list">
       <h4>{post}</h4>
       <p>23.02.22 시작</p>
       <p>{time}</p>
     </div>
     <div class="list">
       <h4>{title[0]}</h4>
       <p>23.02.22 시작</p>
       <p>{time}</p>
     </div>
     <div class="list">
       <h4>{title[1]}</h4>
       <p>23.02.22 시작</p>
       <p>{time}</p>
     </div>
     <div class="list">
       <h4>{title[2]}</h4>
       <p>23.02.22 시작</p>
       <p>{time}</p>
     </div>
    </div>
  );
}

export default App;
