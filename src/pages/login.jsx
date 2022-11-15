import React from 'react';
import Swal from 'sweetalert2';
import '../css/login.css';
function Login() {
  function rajan() {
    // alert('2');
    Swal.fire('rajan');
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="ram">
      <h1 className="mr">Login Page</h1>
      <label htmlfor="username">
        <i className="fa-solid fa-user"></i>username
      </label>
      <input type="text" className="input" />
      <br />
      <br />
      <label htmlfor="password">
        <i className="fa-solid fa-lock"></i>password
      </label>
      <input type="password" className="input" />
      <br />
      <br />{' '}
      <button onClick={() => rajan()} className="raj">
        login
      </button>
    </div>
  );
}
export default Login;
