import React from 'react';
import '../css/errorpage.css';
function ErrorPage() {
  return (
    <div>
      <h1 className="oops">Oops!</h1>
      <h2>
        <p className="para1">404-PAGE NOT FOUND </p>
      </h2>
      <h3>
        <p className="paras">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable{' '}
        </p>
      </h3>
      <button className="error">GO TO HOMEPAGE</button>
    </div>
  );
}
export default ErrorPage;
