import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import PropTypes from 'prop-types';

// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }



function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (username=="" && password==""){
      return (
        window.alert("Please Enter values")       
      )
    }
    else {
      return (
        navigate('/details')
      )
    }
  }

  return (
    <div>
      <div class="login">
  <div class="forms" onSubmit={onSubmit}>
    <form class="login-form">
      <input type="tel" placeholder="phone" required onChange={e => setUserName(e.target.value)}/>
      <input type="password" placeholder="password" required onChange={e => setPassword(e.target.value)}/>
      <button type='submit'>login</button><br/>
      <div class="sign"><a href='/signup'>Don't Have an Account?Signup</a></div>
      
    </form>  
  </div>
</div>
    </div>
  )
}

export default Login