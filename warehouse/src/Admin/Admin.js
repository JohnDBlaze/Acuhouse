import React, {useState} from 'react';
import './Admin.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import PropTypes from 'prop-types';


function Admin() {
  // const { tokens, setTokens } = Token();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
      
  const navigate = useNavigate();
  
  const onSubmit = () => {
    if (username=="acuhouse@gmail.com" && password=="acu123"){
      return (
        navigate('/employees')
      )
    }
    else {
      return (
        window.alert("Please Enter Correct Details")
      )
    }
  }
  
  return (
    <div>
      <div class="login">
  <div class="forms">
    <form class="login-form" onSubmit={onSubmit}>
      <img class="imss" src='https://cdn5.f-cdn.com/contestentries/1733723/43055135/5e49ec7ad607a_thumb900.jpg'/>
      <input type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={e => setUserName(e.target.value)}/>
      <input type="password" placeholder="password" required onChange={e => setPassword(e.target.value)}/>
      {/* <Link to="/employees"> */}
        <button type="submit">login</button>
        {/* </Link> */}
    </form>  
  </div>
</div>
    </div>
  )
}


export default Admin