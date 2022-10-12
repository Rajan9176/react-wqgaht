import React from 'react';
import '../css/navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
  return(
<nav>
  <ul>
    <li> <Link to="/login">Login</Link></li>
    <li> <Link to="/signup">Signup</Link></li>
    <li> <Link to="/counter">Counter</Link></li>
    <li> <Link to="/employeecard">EmployeeCard</Link></li>
    <li> <Link to="/chat">Chat</Link></li>
    <li> <Link to="/calculator">Calculator</Link></li>


  </ul>
</nav>
  );
}
export default Navbar;
