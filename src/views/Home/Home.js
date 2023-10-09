import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
    <div className="container bg-color">
      <div className="content">
        <Link to="/">Home</Link>
      </div>
      <div className="content">
        <Link to="/post">Post</Link>
      </div>
      <div className="content">
        <Link to="/readpost">Read Post</Link>
      </div>
    </div>
      </>
  );
}

export default Home;
