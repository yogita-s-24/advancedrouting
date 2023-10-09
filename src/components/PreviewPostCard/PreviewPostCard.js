import React from "react";
import "./PreviewPostCard.css";
import { Link } from "react-router-dom";

export default function PreviewPostCard({
  id,
  title,
  description,
  content,
  image,
  date,
}) {
  return (
    <div className="preview-post-card my-5 py-3 border">
      <h3 className="text-center">{title}</h3>
      <img src={image} className="img shadow " />
      <p className="m-2 text-center">{description}</p>
      <hr className="horizontal"/>
      <div>
        <Link className="button" to={`/post/readpost/${id}`}>Read More</Link>
      </div>
     
      {/* <p>{content}</p> */}
      {/* <p>Developed On {date}</p> */}
    </div>
  );
}
