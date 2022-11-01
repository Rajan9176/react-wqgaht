import React from 'react';
import '../css/chat.css';
import { useState } from 'react';
import Labourcard from './component/labourcard';
function Chat() {
  const [message, setMessage] = useState('0');
  return (
    <div className="message">
      <h1 className="hh">
        <i class="fa-sharp fa-solid fa-comment"></i> Chat Messages
      </h1>
      <button className="click" onClick={() => setMessage('hi welcome')}>
        1
      </button>
      <lable>{message}</lable>
      <button onClick={() => setMessage('i am good boy')}>2</button>
      <Labourcard name="Rajendran" id="100" />
    </div>
  );
}
export default Chat;
