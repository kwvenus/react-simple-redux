const initialState = { 
    counterSum: 0
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "COUNTERSUM":
      console.log(payload)
      console.log(state.counterSum)
        return { counterSum: state.counterSum + payload };
        //counterSum: var name to be used in reducer
        //counterSum = counterSum + payload , and update state
      default:
        return state;
    }
  };
  