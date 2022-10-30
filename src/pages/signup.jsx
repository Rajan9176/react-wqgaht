import React from 'react';
import '../css/signup.css';
function Signup() {
  function micky() {
    alert('rajan');
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: 'kannan',
        Password: '1234567',
      }),
    })
      .then((res) => res.json())
      .then((data) => consol.log(data));
  }
  return (
    <div className="div">
      <h1>Sign Up Now</h1>

      <form>
        <label>
          <i className="fa-solid fa-user"></i>{' '}
          <input type="User Name" className="micky" placeholder="User Name" />
          <br />
          <br />
          <i className="fa-solid fa-envelope"></i>{' '}
          <input type="Email" className="micky" placeholder="YouEmail" /> <br />
          <br />
          <i className="fa-solid fa-lock"></i>{' '}
          <input type="Password" className="micky" placeholder="Password" />
          <br /> <br />
          <i className="fa-solid fa-unlock"></i>{' '}
          <input type="Password" className="micky" placeholder="Re-Password" />
        </label>
        <br />
        <br />
        <button className="ra" onClick={() => micky()}>
          Sign
        </button>
      </form>
    </div>
  );
}
export default Signup;
