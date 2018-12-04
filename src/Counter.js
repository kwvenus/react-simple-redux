import React, { Component } from 'react'

export default class Counter extends Component {
    
  handleOnClickPlus = (id) => {
    this.props.onIncreased(1,id)
    this.props.onCounterValueChanged(1);
  }

  handleOnClickMinus = (id) => {
    this.props.onDecreased(1,id)
    this.props.onCounterValueChanged(-1);
  }


  render() {
    return (
      <div>
        <button onClick={ () => this.handleOnClickPlus(this.props.id)}>
          +
        </button>
        <span>
          {this.props.counterNum}
        </span>
        <button onClick={ () => this.handleOnClickMinus(this.props.id)}>
          -
        </button>
      </div>
    )
  }
}
