import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from './../../configs/blog-data.json'

function ReadPost() {
  //read id
  const { id } = useParams();

  const [post, setPost] = useState({})

  // find particular id from blogData
  useEffect(()=>{
    blogData.forEach((postObj) =>{
      if(postObj.id == id){
        setPost(postObj)
      }
  })
  },[id])

  return (
    <div>
      <h1>{post.title}</h1>
       <span>By {post.author}</span>
      <p>{post.description}</p>
      <p>{post.content}</p>
      <p>Published On {post.date}</p>  
    </div>
  );
}

export default ReadPost;
