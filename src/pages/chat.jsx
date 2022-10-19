import React from 'react';
import { useState } from 'react';
function Chat() {
  const [message, setMessage] = useState('0');
  return (
    <div>
      <div>
        <h1>Chat Messages</h1>
        <button onClick={() => setMessage('hi welcome')}>1</button>
        <lable>{message}</lable>
        <button onClick={() => setMessage('i am good boy')}>2</button>
      </div>
    </div>
  );
}
export default Chat;
