import React from 'react';
import { useState } from 'react';
import "../styles/Loginclaim.css";
import { Link } from 'react-router-dom';

const LoginClaim = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const submit = () =>{
        console.log(username,password);
    }
    
    return (
        <div>
            <div class="container2">
    <div class="wrapper">
      <div class="title"><span>Login</span></div>
      <div class="input1">
        <div class="row">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="user name" value={username} onChange={(e)=>{setUsername(e.target.value)}} required />
        </div>
        <div class="row">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
        </div>
        
        <div class="row button">
        <Link to="/claims" style={{textDecoration: "none"}}><input type="submit"  onClick={submit} value="Login" /></Link>
        </div>
        {/* <div class="signup-link">Not a member? <button >Signup now</button></div> */}
    </div>
    </div>
  </div>
        </div>
    )
}

export default LoginClaim
