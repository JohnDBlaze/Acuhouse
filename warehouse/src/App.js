import React, { useState } from 'react';
import Register from './Employee/Registration';
import Admin from './Admin/Admin';
import Update from './Employee/Update';
import Login from './Employee/Login';
import Display from './Admin/EmployeeList';
import Card from './Admin/Card';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Details from './Employee/Details';


function App() {
  // const [tokens, setTokens] = useState();
  // const { token, setToken } = Token();

  // if(!token) {
  //   return <Card setToken={setToken} />
  // }

  return (
    <div className="App">
     <Routes>
      <Route path="/" element = {<Card/>}/>
      <Route path= "/admin" element = {<Admin/>}/>
      <Route path= "/login" element = {<Login/>}/>
      <Route path= "/edit/:id" element = {<Update/>}/>
      <Route path= "/employees" element = {<Display/>}/>
      <Route path= "/signup" element = {<Register/>}/>
      <Route path= "/details" element = {<Details/>}/>
    </Routes>
    </div>
  );
}

export default App;
