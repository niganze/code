import './App.css';
import Header from './Header';
import Post from "./Post"
import {Route,Routes} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';
import Dashboard from './pages/dshborad/Dashboard';
import SinglePost from './pages/singlepost/Singlepost';
// import About from './pages/about/About';
function App() {
  return (
   <Routes>
    {/* <Header/> */}
    <Route path="/"element={<Layout/>}>
      <Route index element ={<IndexPage />} />
      <Route path={"/login"}element={<Login/>} />
      <Route path={"/register"}element={<Register/>} />
      <Route path={"/create"}element={<Create/>} />
      <Route path={"/dashboard"}element={<Dashboard/>} />
      <Route path={"/singlepost"}element={<SinglePost/>} />
      {/* <Route path={"/about"}element={About} /> */}
    </Route>
   </Routes>
   ); 
}

export default App;
