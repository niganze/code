import React from 'react'
import { Link } from "react-router-dom"
// import './Register.css'
function Login() {
  return (
   
        <form className='login'>
           <h1>Login Here</h1> 
           <input type="text" placeholder="Username" />
           <input type="password" placeholder="Password" />
           <button ><Link to ="/dashboard" style={{color: 'inherit', textDecoration: 'inherit'}}>Login</Link></button>
           <p>Don't have an account? <Link to="/register"style={{color: 'inherit', textDecoration: 'inherit'}}>REGISTER</Link></p>
        </form>

   
  )
}

export default Login