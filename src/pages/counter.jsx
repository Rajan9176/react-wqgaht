import React from 'react';
function Counter() {
  const [count, setCount] = React.useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>
        <h1>Counter</h1>
        <button>-</button>0<button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
}
export default Counter;
