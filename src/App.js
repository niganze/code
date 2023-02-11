import './App.css';
import {Route,Routes} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBord from './pages/dashboard2/Dashbord';
import SinglePost from './pages/singlepost/Singlepost';
import { useEffect, useState } from 'react';
import Manage from './pages/dashboard2/Manage'
import CreateNewuser from './pages/dashboard2/CreateNewuser'
import Logout from './pages/dashboard2/Logout'
import axios from 'axios';
import CreateNewblog from './pages/dashboard2/CreateNewblog';
function App() {
  const[blogs, setBlogs] =useState([]);
  const fetchBlog = async ()=>{
  try{
      const response = await axios.get ('https://blogapi-wm30.onrender.com/api/v1/blog')
      setBlogs(response.data.blogs);
      }catch(error){
        console.log(error.response)
      }
    }
    useEffect (()=>{
      fetchBlog();
    },[])
    console.log (blogs)
  return (
   <Routes>
    <Route path="/"element={<Layout/>}>
      <Route index element ={<IndexPage blogs={blogs}/>} />
      <Route path={"/login"}element={<Login/>} />
      <Route path={"/register"}element={<Register/>} />
      <Route path={"/dashBoard"}element={<DashBord blogs={blogs}/>} />
      <Route path={"/:blogId"}element={<SinglePost  blogs={blogs}/>} />
      <Route path="/manage" element={<Manage blogs={blogs}/>} />
      <Route path="/Create" element={<CreateNewblog />} />
      <Route path="/CreateNewuser" element={<CreateNewuser />} />
      <Route path="/logout" element={<Logout />} />
    </Route>
   </Routes>
   ); 
}

export default App;
