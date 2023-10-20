import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import './custom-bootstrap.css'; 

const Counter = () => {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          +2
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
      </div>
      <h2>Value: {value}</h2>
    </div>
  );
};

export default Counter;
