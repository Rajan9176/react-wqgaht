import React from 'react';
import './style.css';
import Signup from './pages/signup';
import Login from './pages/login';
import Counter from './pages/counter';
import Chat from './pages/chat';
import EmployeeCard from './pages/employee';
import Navbar from './pages/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="counter" element={<Counter />} />
        <Route path="EmployeeCard" element={<EmployeeCard />} />
        <Route path="chat" element={<Chat/>} />
        

      </Routes>
      {/* <Login />
      <Signup /> */}
      {/* 
      <Chat />
      
      <EmployeeCard/>
      
      
        
        <Counter />  */}

      {/* <h1>Hellotttt StackBleeitz!</h1>
      <p>Start gfggfediting to see rajan some magic happen :)</p> */}
    </BrowserRouter>
  );
}
