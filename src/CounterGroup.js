import React, { Component } from 'react'
import Counter from './Counter.js'
import InputRow from './inputRow.js'

export default class CounterGroup extends Component{

    constructor(prop){
      super(prop)
        this.state = {
            count: 0,
            counters: new Array(parseInt(this.props.size)).fill(0).map(() => {
              return {
                number: 0,
                id: new Date().getTime + Math.random()
              };
            }),
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
              counters: new Array(parseInt(newSize)).fill(0)
            }
          )
    }

    counterUpdateCallback = changeNum => {
      this.setState({ sum: this.state.sum + changeNum})
    }

    increaseUpdate = (changeNum, id) => {
      const counters = this.state.counters.map
      (counterItem => {
          if(counterItem.id === id){
            return {
              number: counterItem.number + changeNum,
              id: id
            };
          } else {
            return counterItem;
          }
      });
      this.setState({counters: counters})
    }
  

    decreaseUpdate = (changeNum, id) => {
      const counters = this.state.counters.map(counterItem => {
        if(counterItem.id === id){
          return {
            number: counterItem.number - changeNum,
            id: id
          };
        } else {
          return counterItem;
        }
    });
    this.setState({ counters: counters})
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counterItem => <Counter id = {counterItem.id} counterNum={counterItem.number} onCounterValueChanged={this.counterUpdateCallback} onIncreased={this.increaseUpdate} onDecreased={this.decreaseUpdate} onUpdate={this.updateSum}/>)}
        <span>sum: {this.state.sum}</span>
        <hr/>
        <InputRow onAdd={this.updateCounterGroupSize}/>
      </div>
    )
  }
}
