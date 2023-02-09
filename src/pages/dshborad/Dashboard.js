import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function BlogDashboard() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', summary: 'Summary 1' },
    { id: 2, title: 'Post 2', summary: 'Summary 2' },
    { id: 3, title: 'Post 3', summary: 'Summary 3' }
  ]);
  const [error, setError] = useState({});

  function handleDelete(id) {
    setPosts(posts.filter(post => post.id !== id));
  }
  
  function handleEdit(id) {
    const newPost = { ...posts.find(post => post.id === id) };
    if (!newPost.title) {
      setError({ title: 'Title is required' });
      return;
    }
    if (!newPost.summary) {
      setError({ summary: 'Summary is required' });
      return;
    }
    setPosts(posts.map(post => (post.id === id ? newPost : post)));
    setError({});
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul className='Dashboardf'>
          <button>Manage</button>
          <button><Link to ='/create'>Create post</Link></button>
          <button>Log Out</button>
        </ul>
      </div>
      <div className="main-content">
        <center><h1 className='one'>Blog Post Management Dashboard</h1></center>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Summary</th>
              <th>IMAGE</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>
                  {post.title}
                  {error.title && <div className="error">{error.title}</div>}
                </td>
                <td>
                  {post.summary}
                  {error.summary && <div className="error">{error.summary}</div>}
                </td>
                <td> {post.image}</td>
                <td>
                  <div className='button3'>
                    <button className='delete' onClick={() => handleDelete(post.id)}>Delete</button>
                    <button className='edit' onClick={() => handleEdit(post.id)}>Edit</button>
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

