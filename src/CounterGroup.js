import React, { Component } from 'react'
import Counter from './Counter.js'
import InputRow from './inputRow.js'
import { connect } from "react-redux";
 
class CounterGroup extends Component{

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
            //sum: 0,
            //move this state to ./reducer which can do the data logic and return the new state to mapStateToProps
            counter: new Array(prop.size).fill(0),
        }
    }

    // updateSum=(delta) => {
    //     this.setState({sum: this.state.sum + delta})
    // }

    updateCounterGroupSize = (newSize) => {
        this.setState(
            {
              sum: 0,
              counters: new Array(parseInt(newSize)).fill(0)
            }
          )
    }

    counterUpdateCallback = changeNum => {
      //this.setState({ sum: this.state.sum + changeNum})
      this.props.dispatch({ //this dispatch will wuto inject by connect() method
        type: "COUNTERSUM",
        payload: changeNum
      }); //{type: "", payload: xxx} named action, it will bo translated to ./reducer
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

  // In render, change "<span>sum: {this.state.sum}</span>" to "<span>sum: {this.props.sum}</span>" because sum has been extracted and managed by redux
  render() {
    return (
      <div>
        {this.state.counters.map(counterItem => <Counter id = {counterItem.id} counterNum={counterItem.number} onCounterValueChanged={this.counterUpdateCallback} onIncreased={this.increaseUpdate} onDecreased={this.decreaseUpdate} onUpdate={this.updateSum}/>)}
        <span>sum: {this.props.sum}</span>
        <hr/>
        <InputRow onAdd={this.updateCounterGroupSize}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sum: state.counterSum
  //sum: name is using in CounterGroup
  //state.counterSum: var in props in CounterGroup, which is sent from reducer
}); 
// counterSum is a prop in CounterGroup, it will give counterSum a new value of state.counterSum whitch come from ./reducer switch return
// you try to imagine counterSum will be passed to this.props.counterSum in CounterGroup like the result of <CounterGroup counterSum={state.counterSum}/>

connect(mapStateToProps)(CounterGroup)

export default connect(mapStateToProps)(CounterGroup);//let CounterGroup and Redux know each other
