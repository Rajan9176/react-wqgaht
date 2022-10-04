import React from 'react';
function Login() {
  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <label htmlfor="username">
          <i class="fa-solid fa-user"></i>username
        </label>
        <input type="text" />
        <br />
        <br />
        <label htmlfor="password">password</label>
        <input type="password" />
        <br />
        <br /> <button>login</button>
      </div>
    </div>
  );
}
export default Login;
