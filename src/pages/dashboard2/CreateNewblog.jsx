import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
const Updateblog = () => {
const { register, handleSubmit, reset } = useForm({});
const onSubmit = async (data) => {

    console.log(data.description);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    console.log(formData.get("title"));
    try {
       await axios.post("https://blogapi-wm30.onrender.com/api/v1/blog", formData,{
        headers:{
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${localStorage.getItem("token")}`
      }
      });
       reset();
      alert ("Successfully");
    
      
    } catch (err) {
      console.error(err.response);
    }
  };


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
            <Link to="/logout"><li>logout</li></Link>
        </ul>
      </div>

      <div className="blogContent">
        <h2>Create New Blog</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" 
        {...register("title")}
        placeholder={"Enter Title"}
      />
      <textarea
        {...register("description")}
        id=""
        cols="30"
        rows="10"
      >
        
      </textarea>
      <label htmlFor="">Image</label>
      <input
        type="file"
        name=""
        id="file"
        {...register("image")}
      />
      <button type="submit" style={{ marginTop: "80px" }}>
        Create post
      </button>
    </form>
        
       
      </div>
    </div>

</section>
   
    </>

  )
}

export default Updateblog