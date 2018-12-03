import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './CounterGroup.js'

class App extends Component {

  state = {number: 0}

  render() {
    
    return (
      <div className="App">
        <CounterGroup size={3}/>
      </div>
    );
  }
}

export default App;
