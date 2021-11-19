import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { ImArrowRight } from 'react-icons/im'

ReactDOM.render(
  <React.StrictMode>
    <div className="legend"><IoChatbubbleEllipsesOutline className="title-icon"/><span id="title">使い方</span>
      <dl>
        <dt>作成</dt><dd>Click Open Space</dd>
        <dt>移動</dt><dd>Select Node <ImArrowRight className="arrow-icon"/> Ctrl key + DRUG</dd>
        <dt>繋ぐ</dt><dd>Select Node <ImArrowRight className="arrow-icon"/> DRUG &amp; DROP</dd>
        <dt>変更</dt><dd>Select Edge <ImArrowRight className="arrow-icon"/> R or L or B key</dd>
        <dt>削除</dt><dd>Select Node or Edge <ImArrowRight className="arrow-icon"/> Del key</dd>
      </dl>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
