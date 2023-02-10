import React, { useEffect, useRef, useState,useContext } from 'react'
import  AuthContext  from '../context/AuthProvider';
import { Link } from "react-router-dom"
import axios from 'axios';
const LOGIN_URL = "https://blogapi-wm30.onrender.com/api/v1/signin";

function Login() {
  const {setAuth} = useContext(AuthContext);
  //  const  userRef = useRef();
  //  const  errRef = useRef ()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] =useState (false)
    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])
    
    useEffect(() => {
      setErrorMessage ('')
    }, [email, password])



  const handleSubmit = async (event) => {
    event.preventDefault();
     
    try {

      const response = await axios.post(LOGIN_URL, JSON.stringify({email, password}),{
      
      headers:{'content-type': 'application/json'},
      }
      );
      console.log(JSON.stringify(response?.data));
      
      const accessToken = response?.data?.token;
      localStorage.setItem("token", accessToken);
      
        setAuth ({email, password ,accessToken});

      setEmail ("");
      setPassword ("");
      setSuccess(true);
    }catch(error){
   
       if (!error?.rresponse){
        setErrorMessage('No server response');
       }else if (error.response?.status === 400){
        setErrorMessage('Missing username or password');
       }else if (error.response?.status===401){
        setErrorMessage ('unauthenticated');
       } else if (!email || !password) {
        setErrorMessage("Email and password are required fields")
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setErrorMessage("Email is not in a valid format") 
      }
       else{
        setErrorMessage('Login failed')
       }
       
    }


    
    console.log (email, password);
      setEmail('');
      setPassword('');
      
  }

  return (
       <> {
        success? (
          <section>
            <h1> you are logged in!</h1>
            <br/>
            <p className='wellcome'><Link to ="/dashboard">go to home</Link></p>
               
          </section>
        ) : (

    <form className='login' onSubmit={handleSubmit} autoComplete="off">
      <h1>Login Here</h1> 
      <p style={{color: "red"}}>{errorMessage}</p>
      <label>Email:</label>  
      <input type="text" id="email"  autoComplete="off" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} 
      />
      <label>password:</label> 
      <input type="password" id="password"placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} 
      />
      
      <button onClick={handleSubmit}>Login</button>
       {/* <button><Link to ="/dashboard" style={{color: 'inherit', textDecoration: 'inherit'}}>Login</Link></button>  */}
       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} 
      <p>Don't have an account? <Link to="/register"style={{color: 'inherit', textDecoration: 'inherit'}}>REGISTER</Link></p>
    </form>
  )}
  </>
)
}

export default Login
