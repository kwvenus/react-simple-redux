import React, { Component } from 'react'

export default class inputRow extends Component {

    state = {groupSize: ''}
    constructor(prop){
        super(prop)
    }

    counterGroupSize = (input) => {
        this.setState({groupSize: input.target.value})
    }

    updateCounterGroupSize = () => {
        this.props.onAdd(this.state.groupSize)
        this.setState({groupSize: ''})
    }


  render() {
    return (
      <div>
        <input type='text' onChange={this.counterGroupSize} value={this.state.groupSize}/>
        <button onClick={this.updateCounterGroupSize}>
            Update Counter Group Size
        </button>
      </div>
    )
  }
}
