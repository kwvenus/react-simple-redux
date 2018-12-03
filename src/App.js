import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {number: 0}

  handleOnClickPlus = () => {
    this.setState({number: this.state.number + 1})
  }

  handleOnClickMinus = () => {
    this.setState({number: this.state.number - 1})
  }

  render() {
    
    return (
      <div className="App">
        <button onClick={this.handleOnClickPlus}>
          +
        </button>
        <span>
          {this.state.number}
        </span>
        <button onClick={this.handleOnClickMinus}>
          -
        </button>

      </div>
    );
  }
}

export default App;
