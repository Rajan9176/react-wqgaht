import React from 'react';
import '../css/employee.css';

function EmployeeCard() {
  function mani() {
    alert('mani');
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Contant-Type': 'aplication/json',
      },
      body: JSON.stringify({
        userName: 'mani',
        Password: '987654',
      }),
    })
      .then((res) => res.json())
      .then((data) => consol.log(data));
  }
  return (
    <div class="employee1">
      <h1>Employee Id</h1>
      <img src="bus.jpg" />
      <br />
      <span className="employee2">Rajan</span>
      <br />
      <br />
      <span>200</span>
      <div class="idcard">
        <button onClick={() => mani()}>view</button>
      </div>
    </div>
  );
}
export default EmployeeCard;
