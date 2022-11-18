import React from 'react';
import '../css/errorpage.css';
function ErrorPage() {
  function error() {
    alert('error');
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Contant-Type': 'aplication.json',
      },
      body: JSON.stringify({
        userName: 'ooo',
        Password: '53576',
      }),
    })
      .then((res) => res.json())
      .then((data) => consol.log(data));
  }
  return (
    <div className="errorPage">
      <h1 className="oops">Oops!</h1>
      <h2>
        <p className="para1"><i class="fa-solid fa-triangle-exclamation"></i> 404-PAGE NOT FOUND </p>
      </h2>
      <h3>
        <p className="paras">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </p>
      </h3>
      <button className="error" onClick={() => error()}>
        GO TO HOMEPAGE
      </button>
    </div>
  );
}
export default ErrorPage;
