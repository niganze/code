import { Link, useParams } from "react-router-dom";
import "./Singlepost.css";
import React  from 'react'
export default function Singlepost({blogs}) {

  const { blogId } = useParams();
  console.log(blogId);
  const single = blogs.find((item) => item._id === blogId);
  const {title, image, description} = single;




  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={image} alt={title} />
        
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          {description}
        </p>
        <div className="singlePostEdit">
            <i className="singlepostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlepostIcon  fa-solid fa-trash"></i>
            </div>
            <div className="comments">
              <div className="form">
              <div className="coments">
            <div className="form">
                <div className="formGroup">
                    <label htmlFor="">UserName</label>
                    <input type="text" placeholder='UserName'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="">Drop Your Comment</label>
                    <textarea  placeholder='Description'/>
                </div>
                <div className="formGroup">
                    <input type="submit" value="comment" className='btn'/>
                </div>
            </div>
        </div>
              </div>
            </div>
      </div>
      
    </div>
  );
}