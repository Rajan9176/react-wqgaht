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
      <h1 className="seet"><i class="fa-solid fa-globe"></i> Counter</h1>

      <button className="set" onClick={() => setCount(count - 1)}> <i class="fa-solid fa-minus"></i> </button>
     <label>{count}</label>
  <button className="set" onClick={() => setCount(count + 1)}><i class="fa-solid fa-plus"></i></button>
    </div>
  );
}
export default Counter;
