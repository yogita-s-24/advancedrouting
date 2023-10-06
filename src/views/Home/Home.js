import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    
    <div className="container">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/post">Post</Link>
      </div>
      <div>
        <Link to="/readpost">Read Post</Link>
      </div>
    </div>
  );
}

export default Home;
