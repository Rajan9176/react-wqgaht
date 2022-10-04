import React from 'react';
import {useState} from 'react';
function Chat()
 {
   const[message,setMessage]=useState('message')
return (
  <div>
    <div>
      <h1>Chat Messages</h1>
      <button onclick={()=>setMessage('hi welcome')}>1</button>
      Rajan
      <button onclick={()=>setMessage('i am good boy')}>2</button>
    </div>
  </div>
);
 }
export default Chat;
