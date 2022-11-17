import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/labourdetails.css';
import React from 'react';

function LabourDetails() {
  const navigate = useNavigate();
  const back = () => {
    navigate('/labourList');
  };
  const labour = useSelector((state) => state.labour.value);
  return (
    <div className="table">
      <div className="img">
        <img
          src="data:image/png;base64,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"
          alt="message"
          width="200"
          hight="200"
        />

        <div className="emp">
          <p>{labour.Name}</p>
          <p>{labour.EmployeeID}</p>
          <button className="lock" onClick={() => back()}>
            back
          </button>
        </div>
      </div>
      <table className="info">
        <tr className="tr">
          <td className="td">NAME</td>
          <td>{labour.Name}</td>
        </tr>
        <tr className="tr">
          <td>AGE</td>
          <td>{labour.Age}</td>
        </tr>
        <tr className="tr">
          <td>EMAIL</td>
          <td>{labour.Email}</td>
        </tr>
        <tr className="tr">
          <td>DATE OF JOINING</td>
          <td>{labour['Date of joining']}</td>
        </tr>
        <tr className="tr">
          <td>PHONE NUMBER</td>
          <td>{labour['Phone number']}</td>
        </tr>
        <tr className="tr">
          <td>STREET</td>
          <td>{labour.Street}</td>
        </tr>
        <tr className="tr">
          <td>CITY</td>
          <td>{labour.City}</td>
        </tr>
        <tr className="tr">
          <td>ZIP</td>
          <td>{labour.Zip}</td>
        </tr>
        <tr className="tr">
          <td>REGION</td>
          <td>{labour.Region}</td>
        </tr>
        <tr className="tr">
          <td>COUNTRY</td>
          <td>{labour.Country}</td>
        </tr>
        <tr className="tr">
          <td>INFO</td>
          <td>{labour.Info}</td>
        </tr>
      </table>
    </div>
  );
}

export default LabourDetails;
