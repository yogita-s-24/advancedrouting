import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from "./../../configs/blog-data.json";
import Navbar from "../../components/Navbar/Navbar";
import "./ReadPost.css"
import { Link } from "react-router-dom";

function ReadPost() {
  //read id
  const { id } = useParams();

  const [post, setPost] = useState({});

  // find particular id from blogData
  useEffect(() => {
    blogData.forEach((postObj) => {
      if (postObj.id == id) {
        setPost(postObj);
      }
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container p-5 content-card d-block m-auto">
      <div className="container p-3 card-conatiner shadow">
        <h1 className="text-center">{post.title}</h1>
        <img src={post.image} className="d-block m-auto" />
        <p className="text-center">{post.description}</p>
        <p className="text-center">{post.content}</p>
        <p className="text-center"><b><u>Published On</u> </b>{post.date}</p>
      </div>
      </div>
      <Link to="/">
      <p className="d-block m-auto bg-light shadow home" >🏠</p>
      </Link>
    </>
  );
}

export default ReadPost;
