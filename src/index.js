import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cards from './components/cards';
import Game from './components/game';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Player from './components/player';
import Navbar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <div className="App">
   <ul className="App-header">
    
   </ul>
  <Routes>
        <Route exact path='/' element={<Game/>}></Route>
        <Route exact path='/Player' element={< Player />}></Route>
     
 </Routes>
 </div>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
