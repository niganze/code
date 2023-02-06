import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
const [username, setUsername]= ('');
const [password, setPassword]= ('');

function Register() {
  return (
   
        <form className='register'onSubmit={Register}>
          <h1>welcome again </h1> 
           <h4>Register Here</h4> 
           <input type="text" placeholder="fullname" 
           value ={username}
           onChange ={ev => setUsername(ev.target.value)}/>
           <input type="text" placeholder="Username" 
           value ={username}
           onChange ={ev => setUsername(ev.target.value)}/>
           <input type="email" placeholder="email" 
           value ={username}
           onChange ={ev => setUsername(ev.target.value)}/>
           <input type="password" placeholder="Password" 
            value ={password}
            onChange ={ev => setPassword(ev.target.value)}/>
           
           <button ><Link to ="/login" style={{color: 'inherit', textDecoration: 'inherit'}}>REGISTER</Link></button>
        </form>
   
  )
}

export default Register