import React from 'react';
function Signup() {
  return (
    <div className="mani">
      
        <h1 className="raj">Sign Up Now</h1>
        <form>
          <label className="rajan">
          <input type="User Name"className="input-box"placeholder="User Name"/><br/><br/>
          <input type="Email" className="input-box" placeholder="YouEmail" /> <br/><br/>
          <input type="Password" className="input-box" placeholder="Password" /><br/> <br/>
           <input type="Password"className="Re-Password"placeholder="Re-Password"/></label>
          <br />
          <br />
          <button className="ra">Sign</button>
        </form>
      
    </div>
  );
}
export default Signup;
