import React from 'react';
function Signup() {
  return (
    <div>
      <div className="Sign-Up-Form">
        <h1>Sign Up Now</h1>
        <form>
          <input
            type="User Name"
            className="input-box"
            placeholder="User Name"
          />
          <br />
          <br />
          <input type="Email" className="input-box" placeholder="Your Email" />
          <br />
          <br />
          <input type="Password" className="input-box" placeholder="Password" />
          <br />
          <br />
          <input
            type="Password"
            className="Re-Password"
            placeholder="Re-Password"
          />
          <br />
          <br />
          <button>Sign</button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
