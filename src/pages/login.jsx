import React from 'react';
import '../css/login.css';
function Login() {
  return (
    
      <div className="ram">
        <h1 className="mr">Login Page</h1>
        <label htmlfor="username">
          <i class="fa-solid fa-user"></i>username
        </label>
        <input type="text"className="input"/>
        <br />
        <br />
        <label htmlfor="password"><i class="fa-solid fa-lock"></i>password</label>
        <input type="password" className="input"/>
        <br />
        <br /> <button className="raj">login</button>
      </div>
    
  );
}
export default Login;
