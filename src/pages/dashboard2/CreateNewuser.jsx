import React from 'react'
import { Link } from 'react-router-dom'
// import Footer from '../Footer/Footer'
const CreateNewuser = () => {
  return (
    <>
    <section id='Dashbord'>
    <h2>ADMIN/BlOG CONTROL PANEL</h2>

    <div className="container blogContainer">

      <div className="blogMenu">
        <ul>
            <Link to="/DashBoard"><li>Home</li></Link>
            <Link to="/Manage"><li>Manage</li></Link>
            <Link to="/Create"><li>CreateNewBlog</li></Link>
            <Link to="/CreateNewuser"><li>CreateUser</li></Link>
            <Link to="/logout"><li>logout</li></Link>
        </ul>
      </div>

      <div className="blogContent">
        <h2>Create New User</h2>
      <form action="">
          <div className="formGroup">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='FullName'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">Username</label>
            <input type="text" placeholder='UserName'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">PassWord</label>
            <input type="password" placeholder='PassWord'/>
          </div>
          <div className="formGroup">
          
            <input type="submit" value="Create User"/>
          </div>
        </form>
        
       
      </div>
    </div>




</section>
    {/* <Footer/> */}
    </>

  )
}

export default CreateNewuser