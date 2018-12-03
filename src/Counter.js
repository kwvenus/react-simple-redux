import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(){
        super()
        this.state = {number: 0}
    }
    
  handleOnClickPlus = () => {
    this.props.onUpdate(1)
    this.setState({number: this.state.number + 1})
  }

  handleOnClickMinus = () => {
    this.props.onUpdate(-1)
    this.setState({number: this.state.number - 1})
  }


  render() {
    return (
      <div>
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
    )
  }
}
