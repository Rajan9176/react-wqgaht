import React from 'react';
import './style.css';
import Navbar from './pages/navbar';
import Signup from './pages/signup';
import Login from './pages/login';
import Counter from './pages/counter';
import Chat from './pages/chat';
import EmployeeCard from './pages/employeecard';
import Calculator from './pages/calculator';
import Dummy from './pages/dummy';
import Timer from './pages/timer';
import ErrorPage from './pages/errorpage';
import EmployeeDetails from './pages/employeedetails';
import SimpleClass from './pages/simpleClass';
import EmployeeList from './pages/employeelist';
import Change from './pages/change';
import TitleCounter from './pages/titlecounter';
import TableClass from './pages/tableClass';
import Header from './pages/header';
import LabourList from './pages/labourList';
import ButtonAnimation from './pages/buttonanimation';
import Comments from './pages/comments';
import Counter2 from './pages/counter2';
import Calculator2 from './pages/calculator2';
import Calculator2 from './pages/calculator2';
import LabourDetails from './pages/labourdetails';
import Post from './pages/post';
import WebPage from './pages/webpage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="counter" element={<Counter />} />
        <Route path="chat" element={<Chat />} />
        <Route path="employeeCard" element={<EmployeeCard />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="dummy" element={<Dummy />} />
        <Route path="timer" element={<Timer />} />
        <Route path="errorpage" element={<ErrorPage />} />
        <Route path="employeedetails" element={<EmployeeDetails />} />
        <Route path="simpleClass" element={<SimpleClass />} />
        <Route path="employeelist" element={<EmployeeList />} />
        <Route path="change" element={<Change />} />
        <Route path="titlecounter" element={<TitleCounter />} />
        <Route path="tableClass" element={<TableClass />} />
        <Route path="header" element={<Header />} />
        <Route path="labourList" element={<LabourList />} />
        <Route path="buttonanimation" element={<ButtonAnimation />} />
        <Route path="comments" element={<Comments />} />
        <Route path="counter2" element={<Counter2 />} />
        <Route path="calculator2" element={<Calculator2 />} />
        <Route path="labourdetails" element={<LabourDetails />} />
        <Route path="post" element={<Post />} />
        <Route path="webpage" element={<WebPage />}/>
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
