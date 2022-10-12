import React from 'react';
import '../css/signup.css';
function Signup() {
  return (
    <div className="div">
      <h1>Sign Up Now</h1>

      <form>
        <label>
          <input type="User Name" placeholder="User Name" />
          <br />
          <br />
          <input type="Email" placeholder="YouEmail" /> <br />
          <br />
          <input type="Password" placeholder="Password" />
          <br /> <br />
          <input type="Password" placeholder="Re-Password" />
        </label>
        <br />
        <br />
        <button className="ra">Sign</button>
      </form>
    </div>
  );
}
export default Signup;
