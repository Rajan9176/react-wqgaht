import React from 'react';
import { useState } from 'react';
function Counter() {
  let test = 1;
  const updateTest = (testVal) => {
    console.log(testVal);
    test = testval;
  };
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>

      <button onClick={() => setCount(count - 1)}> - </button>
      <label>{count}</label>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default Counter;
