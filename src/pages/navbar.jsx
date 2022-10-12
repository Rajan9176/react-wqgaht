import React from 'react';
import '../css/navbar.css'
function Navbar() {
  return(
<nav>
  <ul>
    <li> <a href="/login">Login</a></li>
    <li> <a href="/signup">Signup</a></li>
    <li> <a href="/counter">Counter</a></li>
    <li> <a href="/employeecard">EmployeeCard</a></li>
    <li> <a href="/chat">Chat</a></li>
    <li> <a href="/calculator">Calculator</a></li>


  </ul>
</nav>
  );
}
export default Navbar;
