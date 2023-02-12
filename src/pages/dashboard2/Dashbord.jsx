

import { Link } from 'react-router-dom'
import './Dash.css'

const DashBord = () => {
  return (
    <>
    <section id='Dashbord'>
    <div className='panel'>
      <h2>Blog Management Dashboard</h2>
      <h2>ADMIN PANEL </h2>
    </div>
        

        <div className="container blogContainer">

          <div className="blogMenu">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/Manage"><li>Manage</li></Link>
                <Link to="/Create"><li>CreateNewBlog</li></Link>
                <Link to="/"><li>logout</li></Link>
            </ul>
          </div>

          <div className="blogContent">
            <div className="CardsContainer">
            <div className="cards">
              <h5>client</h5>
              <small>10</small>
            </div>
            <div className="cards">
              <h5>Blogs</h5>
              <small>200</small>
            </div>
            <div className="cards">
              <h5>Admins</h5>
              <small>20</small>
            </div>
            <div className="cards">
              <h5>Projects</h5>
              <small>300</small>
            </div>
            <div className="cards">
              <h5>Others&history</h5>
              <small>500</small>
            </div>
            </div>
          </div>
        </div>

    </section>
       
    </>
  )
}

export default DashBord