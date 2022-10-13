import React from 'react';
import '../css/navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
  return(
<nav>
  <ul>
    <li> <Link to="/login"><i class="fa-solid fa-user"></i> Login</Link></li>
    <li> <Link to="/signup"><i class="fa-solid fa-user-plus"></i> Signup</Link></li>
    <li> <Link to="/counter"><i class="fa-solid fa-earth-africa"></i> Counter</Link></li>
    <li> <Link to="/employeecard"><i class="fa-solid fa-id-card"></i>EmployeeCard</Link></li>
    <li> <Link to="/chat"><i class="fa-solid fa-comment"></i> Chat</Link></li>
    <li> <Link to="/calculator"><i class="fa-solid fa-calculator"></i>Calculator</Link></li>


  </ul>
</nav>
  );
}
export default Navbar;
