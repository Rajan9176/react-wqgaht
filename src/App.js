import React from 'react';
import './style.css';
import Signup from './pages/signup';
import Login from './pages/login';
import Counter from './pages/counter';
import Chat from './pages/chat';
import EmployeeCard from './pages/employee';
import Calcultor from './pages/calculator';
import Navbar from './pages/navbar';
import Dummy from './pages/dummy';
import Timer from './pages/timer';
import ErrorPage from './pages/errorpage';
import EmployeeDetails from './pages/employeedetails';
import SimpleClass from './pages/simpleClass';
import EmployeeList from './pages/employeelist';
import Change from './pages/change';

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
        <Route path="chat" element={<Chat />} />
        <Route path="calculator" element={<Calcultor />} />
        <Route path="dummy" element={<Dummy />} />
        <Route path="errorpage" element={<ErrorPage />} />
        <Route path="employeedetails" element={<EmployeeDetails />} />
        <Route path="simpleclass" element={<SimpleClass />} />
        <Route path="timer" element={<Timer />} />
        <Route path="employeelist" element={<EmployeeList />} />
        <Route path="change" element={<Change />} />




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
