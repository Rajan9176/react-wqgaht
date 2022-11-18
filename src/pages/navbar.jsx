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
          <Link to="/tableClass">
            <i class="fa-brands fa-facebook"></i> TableClass
          </Link>
          <Link to="/header">
            <i class="fa-brands fa-youtube"></i> Header
          </Link>
          <Link to="/LabourList">
            <i class="fa-brands fa-telegram"></i> LabourList
          </Link>
          <Link to="/Buttonanimation">
            <i class="fa-solid fa-play"></i> Buttonanimation
          </Link>
          <Link to="/comments">
            <i class="fa-brands fa-snapchat"></i> Comments
          </Link>
          <Link to="/counter2">
            <i class="fa-brands fa-tiktok"></i> Counter2
          </Link>
          <Link to="/calculator2">
            <i class="fa-solid fa-paperclip"></i> Calculator2
          </Link>
          <Link to="/labourdetails">
            <i class="fa-brands fa-google"></i> LabourDetails
          </Link>
          <Link to="/post">
            <i class="fa-solid fa-wifi"></i> Post
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
