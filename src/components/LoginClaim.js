import React from 'react';
import { useState } from 'react';
import "../styles/Loginclaim.css";
// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const LoginClaim = () => {
    let history = useHistory();
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    // const [usersList,setU]
    const usernames=[{
      id:1,
      name:'munna_lal',password:'Bi2i@1234'
    },{
      id:2,
      name:'aditya',password:'@dity@'

    }]
    // const passwords=["Bi2i@1234","@dity@"]

    const submit = () =>{
      const data = usernames.filter((obj)=>obj.name===username && obj.password===password)
      if(data.length==1){
        history.push('/claims')
      }
        console.log(data, 'nnnn');
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
        <input type="submit"  onClick={submit} value="Login" />
        </div>
        {/* <div class="signup-link">Not a member? <button >Signup now</button></div> */}
    </div>
    </div>
  </div>
        </div>
    )
}

export default LoginClaim
