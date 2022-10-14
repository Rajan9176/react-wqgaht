import React from 'react';
import '../css/employeedetails.css';
import image from './bus.jpg';
function EmployeeDetails() {
  return (
    <div className="employee1">
      <h1>Employee Id</h1>
      {/* <img src="bus.jpg" /> */}
      <img src={image} />
      <br />
      <span className="span">Rajan</span>
      <br />
      <br />
      <span>200</span>
      <button className="emp">view</button>

      <table className="align">
        <tr className="tr">
          <td>NAME</td>
          <td>Rajan</td>
        </tr>
        <tr>
          <td className="td">AGE</td>
          <td>20</td>
        </tr>
        <tr>
          <td>BLOOD GROUP</td>
          <td>'B' Positive</td>
        </tr>
        <tr>
          <td>SEX</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>ADDRESS</td>
          <td>2/156,Mariyamman Kovil Street Kannappadi </td>
        </tr>
        <tr>
          <td>CITY</td>
          <td>Perambalur</td>
        </tr>
        <tr>
          <td>PINCODE</td>
          <td>621114</td>
        </tr>
      </table>
    </div>
  );
}
export default EmployeeDetails;
