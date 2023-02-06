import "./Dashboard.css"
 import {Link, Outlet} from 'react-router-dom'
 import {FaUserAlt} from 'react-icons/fa';
 import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
const Dashboard = () => {
  return (
    <>
    <div className="manage">
      <div className="container1">
        <ul className="header">
          <li><h1>Dashboard</h1></li>
          <li className='user'>
            <FaUserAlt id='user-img'/> Admin</li>
        </ul>
        <ul className='menu'>
          <li><Link to ="/mamage" style={{color: 'inherit', textDecoration: 'inherit'}}>Manage</Link></li>
          <button className="menu"><Link to ="/write" style={{color: 'inherit', textDecoration: 'inherit'}}>NEW POST</Link>
          </button>
        </ul>
        <Outlet/>
      </div>
      <div>
        {/* <ul className="manage">
          <li>Title</li>
          <li>Actions</li> */}
        {/* </ul> */}
      </div>
      </div>
    </>
  )
}

export default Dashboard

