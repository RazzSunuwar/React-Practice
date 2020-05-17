import React, { useReducer } from 'react';

const intialState = {
    firstCounter : 0
};
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + 1}
        case 'decrement':
            return {firstCounter: state.firstCounter -1}
        case 'reset':
            return intialState
        default:
            return state 
    };
};

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <button onClick = {() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick = {() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick = {() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
};

export default CounterTwo;
