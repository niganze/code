
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Dash.css'
const Manage = ({blogs}) => {

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
    <div>
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
            <table border="0">
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
                <td>  
                <img src={blogs.image} alt="akain"/></td>             
                <td>
                  <div className='button3'>
                    <button className='delete' onClick={() => handleDelete(blogs._id)}>Delete</button>
                    <button className='edit' >Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
           
        </div>

    </section>
    </div> 
  )
}

export default Manage