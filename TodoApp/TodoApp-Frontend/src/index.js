import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from "./TodoList.js";
var getHtml=document.querySelector('.positionContainer');
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
  // <div>
  //   <h1>wd</h1>

  //   <TodoList/>
  // </div>,
  // getHtml
);

