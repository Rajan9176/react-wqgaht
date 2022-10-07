import React from 'react';
function Login() {
  return (
    <div className="div">
      <div className="rajan">
        <h1 className="mr">Login Page</h1>
        <label htmlfor="username">
          <i className="fa-solid fa-user"></i>username
        </label>
        <input type="text"className="input" />
        <br />
        <br />
        <label htmlfor="password">password</label>
        <input type="password" className="input"/>
        <br />
        <br /> <button className="raj">login</button>
      </div>
    </div>
  );
}
export default Login;
