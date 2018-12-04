import React, { Component } from 'react';
import './App.css';
import CounterGroup from './CounterGroup.js'

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <CounterGroup size={3}/>
      </div>
    );
  }
}

export default App;
