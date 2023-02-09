import './App.css';
import {Route,Routes} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';
import Dashboard from './pages/dshborad/Dashboard';
import SinglePost from './pages/singlepost/Singlepost';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
      <Route path={"/create"}element={<Create/>} />
      <Route path={"/dashboard"}element={<Dashboard/>} />
      <Route path={"/:blogId"}element={<SinglePost  blogs={blogs}/>} />
    </Route>
   </Routes>
   ); 
}

export default App;
