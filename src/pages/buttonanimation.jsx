import React from 'react';
import '../css/buttonanimation.css';

import Swal from 'sweetalert2';

function Buttonanimation() {
  Swal.fire('rajan');
  return (
    <div className="buttonss">
      <button className="button1" onClick={() => Buttonanimation()}>
        button1
      </button>
      <button className="button2">button2</button>
      <button className="button3">button3</button>
      <button className="button4">button4</button>
    </div>
  );
}
export default Buttonanimation;
