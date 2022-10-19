import React from 'react';
import '../css/employee.css';

function EmployeeCard() {
  return (
    <div class="employee1">
    <h1>Employee Id</h1>
    <img src="bus.jpg"/><br/>
    <span className="employee2">Rajan</span><br/><br/>
    <span>200</span>
    <div class="idcard">
        <button>view</button>
    </div>

  </div>
  );
}
export default EmployeeCard;
