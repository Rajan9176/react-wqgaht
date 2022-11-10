import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/reducers/counter.reducer';
function counter2() {
  // alert('warning');/
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <p>counter</p> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
export default counter2;
