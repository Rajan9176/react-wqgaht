import React from 'react';
import '../css/calculator.css';
function Calculator() {
  const req = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((Data) => console.log(Data));
  };
  return (
    <div className="rajan">
      <h1>Calculator</h1>
      <input type="text" />
      <br />
      <button className="button">7</button>
      <button className="button">8</button>
      <button className="button">9</button>
      <button className="button">c</button>
      <br />
      <button className="button">4</button>
      <button className="button">5</button>
      <button className="button">6</button>
      <button className="button">*</button>
      <br />
      <button className="button">1</button>
      <button className="button">2</button>
      <button className="button">3</button>
      <button className="button">-</button>
      <br />
      <button className="button">0</button>
      <button className="button">.</button>
      <button className="button">=</button>
      <button className="button">+</button>
    </div>
  );
}
export default Calculator;
