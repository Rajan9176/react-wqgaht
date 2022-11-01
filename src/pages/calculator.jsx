import React from 'react';
import '../css/calculator.css';
function Calculator() {
  const req = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((Data) => console.log(Data));

    function alert() {
      // alert();
    }
  };
  return (
    <div className="rajan">
      <h1>Calculator</h1>
      <input type="text" />
      <br />
      <button className="button" onClick={() => alert(7)}>
        7
      </button>
      <button className="button" onClick={() => alert(8)}>
        8
      </button>
      <button className="button" onClick={() => alert(9)}>
        9
      </button>
      <button className="button" onClick={() => alert('c')}>
        c
      </button>
      <br />
      <button className="button" onClick={() => alert(4)}>
        4
      </button>
      <button className="button" onClick={() => alert(5)}>
        5
      </button>
      <button className="button" onClick={() => alert(6)}>
        6
      </button>
      <button className="button" onClick={() => alert('*')}>
        *
      </button>
      <br />
      <button className="button" onClick={() => alert(1)}>
        1
      </button>
      <button className="button" onClick={() => alert(2)}>
        2
      </button>
      <button className="button" onClick={() => alert(3)}>
        3
      </button>
      <button className="button" onClick={() => alert('-')}>
        -
      </button>
      <br />
      <button className="button" onClick={() => alert(0)}>
        0
      </button>
      <button className="button" onClick={() => alert('.')}>
        .
      </button>
      <button className="button" onClick={() => alert('=')}>
        =
      </button>
      <button className="button" onClick={() => alert('+')}>
        +
      </button>
    </div>
  );
}
export default Calculator;
