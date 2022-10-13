import React from 'react';
import '../css/signup.css';
function Signup() {
  return (
    <div className="div">
      <h1>Sign Up Now</h1>

      <form>
        <label>
        <i class="fa-solid fa-user"></i> <input type="User Name" placeholder="User Name" />
          <br />
          <br />
          <i class="fa-solid fa-envelope"></i> <input type="Email" placeholder="YouEmail" /> <br />
          <br />
          <i class="fa-solid fa-lock"></i> <input type="Password" placeholder="Password" />
          <br /> <br />
          <i class="fa-solid fa-unlock"></i> <input type="Password" placeholder="Re-Password" />
        </label>
        <br />
        <br />
        <button className="ra">Sign</button>
      </form>
    </div>
  );
}
export default Signup;
