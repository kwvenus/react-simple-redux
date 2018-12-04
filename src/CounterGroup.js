import React, { Component } from 'react'
import Counter from './Counter.js'
import InputRow from './inputRow.js'

export default class CounterGroup extends Component{

    constructor(prop){
      super(prop)
        this.state = {
            sum: 0,
            counter: new Array(prop.size).fill(0),
        }
    }

    updateSum=(delta) => {
        this.setState({sum: this.state.sum + delta})
    }

    updateCounterGroupSize = (newSize) => {
        this.setState(
            {
              sum: 0,
              counter: new Array(parseInt(newSize)).fill(0)
            }
          )
    }

  render() {
    return (
      <div>
        {this.state.counter.map((_, i) => <Counter onUpdate={this.updateSum} key = {i}/>)}
        <span>sum: {this.state.sum}</span>
        <hr/>
        <InputRow onAdd={this.updateCounterGroupSize}/>
      </div>
    )
  }
}
