import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

 

 const Counter=() =>{
    const counter = useSelector(state => state.myCounter.counter);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT_COUNT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_COUNT' })}>-</button>
        <button onClick={() => dispatch({ type: 'DOUBLE_COUNT' })}>x2</button>
        <button onClick={() => dispatch({ type: 'RESET_COUNT' })}>Reset</button>
    </div>
  )
}

export default Counter
