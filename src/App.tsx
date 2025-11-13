import React from 'react';
import logo from './logo.svg';
import './App.css';


{/*
  작성자 : 김재우
  작성일 : 11/12
  내용 : 기능 설명 
*/}

function App() {
  let name = "리액트";
  
  return (
    <div className="container">
      <h1 className = "test">Hello,
        {
          name === '리액트' ? (<h1>yes</h1>): null
        } !!</h1>
      <p>반갑습니다.</p>
    </div>
  );
  //const port = undefined;

  // return (
  //   <div>
  //     {
  //       port || '포트를 설정하지 않았습니다.'
  //     }
  //   </div>
  // );

}

export default App;
