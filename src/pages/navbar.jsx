import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">
            <i className="fa-solid fa-user"></i> Login
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <i className="fa-solid fa-user-plus"></i> Signup
          </Link>
        </li>
        <li>
          <Link to="/counter">
            <i className="fa-solid fa-earth-africa"></i> Counter
          </Link>
        </li>
        <li>
          <Link to="/employeecard">
            <i className="fa-solid fa-id-card"></i> EmployeeCard
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <i className="fa-solid fa-comment"></i> Chat
          </Link>
        </li>
        <li>
          <Link to="/calculator">
            <i className="fa-solid fa-calculator"></i> Calculator
          </Link>
        </li>
        <li>
          <Link to="/errorpage">
            <i className="fa-solid fa-circle-exclamation"></i> ErrorPage
          </Link>
        </li>
        <li>
          <Link to="/timer">
            <i className="fa-sharp fa-solid fa-clock"></i> Timer
          </Link>
        </li>
        <li>
          <Link to="/employeedetails">
            <i className="fa-sharp fa-solid fa-address-card"></i>
            EmployeeDetails
          </Link>
        </li>
        <li>
          <Link to="/simpleclass">
            <i className="fa-solid fa-landmark"></i> SimpleClass
          </Link>
        </li>
        <li>
          <Link to="/dummy">
            <i className="fa-solid fa-circle-xmark"></i> Dummy
          </Link>
        </li>
        <li>
          <Link to="/employeelist">
            <i className="fa-brands fa-instagram"></i> EmployeeList
          </Link>
        </li>
        <li>
          <Link to="/change">
            <i className="fa-brands fa-twitter"></i> Change
          </Link>
        </li>
        <li>
          <Link to="/titlecounter">
            <i className="fa-solid fa-face-smile"></i> TitleCounter
          </Link>
        </li>
        <li>
          <Link to="/tableClass">
            <i className="fa-brands fa-facebook"></i> TableClass
          </Link>
        </li>
        <li>
          <Link to="/header">
            <i className="fa-brands fa-youtube"></i> Header
          </Link>
        </li>

        <li>
          {' '}
          <Link to="/LabourList">
            <i className="fa-brands fa-telegram"></i> LabourList
          </Link>
        </li>
        <li>
          {' '}
          <Link to="/Buttonanimation">
            <i className="fa-solid fa-play"></i> Buttonanimation
          </Link>
        </li>

        <li>
          {' '}
          <Link to="/comments">
            <i className="fa-brands fa-snapchat"></i> Comments
          </Link>
        </li>

        <li>
          {' '}
          <Link to="/counter2">
            <i className="fa-brands fa-tiktok"></i> Counter2
          </Link>
        </li>

        <li>
          <Link to="/calculator2">
            <i className="fa-solid fa-paperclip"></i> Calculator2
          </Link>
        </li>

        <li>
          <Link to="/labourdetails">
            <i className="fa-brands fa-google"></i> LabourDetails
          </Link>
        </li>

        <li>
          <Link to="/post">
            <i className="fa-solid fa-wifi"></i> Post
          </Link>
        </li>
        <li>
          <Link to="/webpage">WebPage</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
