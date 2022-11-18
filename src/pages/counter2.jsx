import React from 'react';
import '../css/counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/reducers/counter.reducer';
function counter2() {
  // alert('warning');/
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h1 className="seet">counter2</h1>
      <button className="set" onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button className="set" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
export default counter2;
