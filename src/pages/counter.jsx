import React from 'react';
import '../css/counter.css';
import { useState } from 'react';
function Counter() {
  let test = 1;
  const updateTest = (testVal) => {
    console.log(testVal);
    test = testval;
  };
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1 className="seet">Counter</h1>

      <button className="set" onClick={() => setCount(count - 1)}> - </button>
     <label>{count}</label>
  <button className="set" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default Counter;
