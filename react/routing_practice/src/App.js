import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Hello from './components/Hello'
import Number from './components/Number'
import Home from './components/Home'
import Color from './components/Color'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path = '/home' />
        <Number path ='/number/:id' />
        <Hello path = '/word/:word' />
        <Color path = '/word/:word/:textColor/:bgColor' />
      </Router>
    </div>
  );
}

export default App;
