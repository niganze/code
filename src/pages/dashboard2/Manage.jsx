import { Link } from 'react-router-dom'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import {useState, useEffect} from "react";



const Manage = ({blogs}) => {
const [modal, setModal] = useState(false);
const [selected, setSelected]= useState(null)
const { register, handleSubmit, reset } = useForm({

  defaultValues:{
    title:selected?.title,
    decription:selected?.decription,
  },
});
const onSubmit = async ({image, title,description}) => {

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image[0]);
  
  try {
     await axios.patch(`https://blogapi-wm30.onrender.com/api/v1/blog/${selected._id}` , formData,{
      headers:{
        "Content-Type": "multipart/form-data",
        Authorization:`Bearer ${localStorage.getItem("token")}`
    }
    });
     reset();
    alert ("Successfully");
  
    
  } 
  catch (err) {
    console.error(err.response);
    reset()
  }

};
const getSingle = async (id) =>{
  const selectedBlog =blogs.find((blog)=> blog._id === id);
  setSelected(selectedBlog);
  reset();
  console.log(selectedBlog);
}
  useEffect(() => {
    reset (selected);
  
  }, [selected])  ;




 const handleDelete = async(id) =>{

  try{
    await axios({
      method: 'DELETE',
      url: `https://blogapi-wm30.onrender.com/api/v1/blog/${id}`,
      headers: {
        "content-Type": "multipart/form-data",
        Authorisation: `Bearer ${localStorage.getItem("token")}`,
      }
    });
    window.location.reload(true);
  } catch(error){
    console.log(error.response);
  }
 }
  return (
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
            <table border={0} >
            <tr>
              <th>Title</th>
              <th className='image2'>IMAGE</th>
              <th>Actions</th>
            </tr>
          <tbody>
            {blogs.map(blogs => (
              <tr className='title' key={blogs.id}>
                <td className='titlee'>
                  {blogs.title}
                </td>
                <td className='bbb'>  
                <img src={blogs.image} alt="akain"/>
                </td>             
                <td>
                  <div className='button3'>
                    <button className='delete' onClick={() => handleDelete(blogs._id)}>Delete</button>
                    <button className='edit' onClick={() => {setModal(true);getSingle(blogs._id);}}> Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
      <div  className="editblog"  style={ {display: !modal? "none" : "flex" }}>
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
      <div className=''> 
        <button type="submit" style={{ marginTop: "80px" }}>
        Create post
      </button>
      <button className='cancel' onClick={() => setModal(false)}>cancel</button>
      </div>
    </form>
      </div>
      </div>


        </div>
    </section>
    
  )
}

export default Manage