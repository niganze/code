import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import './Register.css'


function Register() {

  const  navigate  =  useNavigate();
const [fullname, setFullname]= useState('');
const [username, setUsername]= useState('');
const [password, setPassword]= useState('');
const [veriftPassword, setVeriftPassword]= useState('');
const [email, setEmail]= useState('');
const handleSubmit = (event) => {
const  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  event.preventDefault();
  if (!fullname || !username || !password ||!veriftPassword ||!email ){
    alert("your failed registration")
  } 
  if (!emailRegex.test (email)){
alert(" email is not a valid email")
return;
  } 
  if  (password.length < 8 ){
    alert("should have eight characters")
    return;
  }
  if  (password!== veriftPassword){
    alert("password and verfiy password should be same")
    return;
  }
  alert("your successful registered ")
navigate("/login");

}

  return (
   
        <form className='register' onSubmit={handleSubmit}>
          <h1>REGISTER HERE</h1> 
           <input type="text" placeholder="fullname" 
           value ={fullname}
           onChange ={ev => setFullname(ev.target.value)}/>
        
           <input type="text" placeholder="Username" 
           value ={username}
           onChange ={ev => setUsername(ev.target.value)}/>
         
           <input type="text" placeholder="email" 
           value ={email}
           onChange ={ev => setEmail(ev.target.value)}/>
        
           <input type="password" placeholder="Password" 
            value ={password}
            onChange ={ev => setPassword(ev.target.value)}/>
         
            <input type="password" placeholder="verfiy password" 
            value ={veriftPassword}
            onChange ={ev => setVeriftPassword(ev.target.value)}/>
            <button >REGISTER</button>
           {/* <button ><Link to ="/login" style={{color: 'inherit', textDecoration: 'inherit'}}>REGISTER</Link></button> */}
        </form>
   
  )
}

export default Register