import React from 'react';
import '../css/navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
  return(
<nav>
  <ul>
    <li> <Link to="/login"><i className="fa-solid fa-user"></i> Login</Link></li>
    <li> <Link to="/signup"><i className="fa-solid fa-user-plus"></i> Signup</Link></li>
    <li> <Link to="/counter"><i className="fa-solid fa-earth-africa"></i> Counter</Link></li>
    <li> <Link to="/employeecard"><i className="fa-solid fa-id-card"></i>EmployeeCard</Link></li>
    <li> <Link to="/chat"><i className="fa-solid fa-comment"></i> Chat</Link></li>
    <li> <Link to="/calculator"><i className="fa-solid fa-calculator"></i> Calculator</Link></li>
    <li> <Link to="/errorpage"><i className="fa-solid fa-circle-exclamation"></i> ErrorPage</Link></li>
    <li> <Link to="/timer"><i className="fa-sharp fa-solid fa-clock"></i>Timer</Link></li>
    <li> <Link to="/employeedetails"><i className="fa-sharp fa-solid fa-address-card"></i> EmployeeDetails</Link></li>


  </ul>
</nav>
  );
}
export default Navbar;
