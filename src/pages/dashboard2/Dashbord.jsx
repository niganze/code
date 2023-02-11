
// import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'
import './Dash.css'

const DashBord = () => {
  return (
    <>
    <section id='Dashbord'>
        <h2>Blog blogs Management Dashboard</h2>

        <div className="container blogContainer">

          <div className="blogMenu">
            <ul>
                <Link to="/dashBoard"><li>Home</li></Link>
                <Link to="/Manage"><li>Manage</li></Link>
                <Link to="/Create"><li>CreateNewBlog</li></Link>
                <Link to="/CreateNewuser"><li>CreateUser</li></Link>
                <Link to="/logout"><li>logout</li></Link>
            </ul>
          </div>

          <div className="blogContent">
            <div className="CardsContainer">
            <div className="cards">
              <h5>Users</h5>
              <small>40</small>
            </div>
            <div className="cards">
              <h5>Blogs</h5>
              <small>200</small>
            </div>
            <div className="cards">
              <h5>Admins</h5>
              <small>200</small>
            </div>
            <div className="cards">
              <h5>Projects</h5>
              <small>300</small>
            </div>
            <div className="cards">
              <h5>Others</h5>
              <small>5000</small>
            </div>
            </div>
          </div>
        </div>




    </section>
        {/* <Footer/> */}
    </>
  )
}

export default DashBord