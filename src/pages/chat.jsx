import React from 'react';
import '../css/chat.css';
import { useState } from 'react';
function Chat() {
  const [message, setMessage] = useState('0');
  return (
    <div className="message">
      <h1 className="hh">Chat Messages</h1>
      <button onClick={() => setMessage('hi welcome')}>1</button>
      <lable>{message}</lable>
      <button onClick={() => setMessage('i am good boy')}>2</button>
    </div>
  );
}
export default Chat;
