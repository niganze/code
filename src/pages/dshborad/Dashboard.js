import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function BlogDashboard({blogs}) {
  const [blogss, setblogss] = useState([
    { id: 1, title: 'blogs 1', summary: 'Summary 1' },
    { id: 2, title: 'blogs 2', summary: 'Summary 2' },
    { id: 3, title: 'blogs 3', summary: 'Summary 3' }
  ]);
  

  function handleDelete(id) {
    
  }
  
  function handleEdit(id) {
    
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul className='Dashboardf'>
          <button>Manage</button>
          <button><Link to ='/create'>Create blogs</Link></button>
          <button>Log Out</button>
        </ul>
      </div>
      <div className="main-content">
          <h1 className='one'>Blog blogs Management Dashboard</h1>
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
                <img src={blogs.image} alt="gfgfgf"/></td>             
                <td>
                  <div className='button3'>
                    <button className='delete' onClick={() => handleDelete(blogs.id)}>Delete</button>
                    <button className='edit' onClick={() => handleEdit(blogs.id)}>Edit</button>
                  </div>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogDashboard;

