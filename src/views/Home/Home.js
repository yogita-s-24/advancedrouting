import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-container">
        {/* <div className="home-container">
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
    </div> */}

        <h1 className="text-center text-light dev-blog">Developer Blog</h1>
        <p
          className="text-center text-light welcome-blog"
          style={{ fontSize: "30px" }}>
          <b>Welcome to the developer blog.</b>
        </p>
        <br />
        <Link to="/post">
          <button className="btn btn-primary d-block m-auto">
            Know More About Technology
          </button>
        </Link>
        <hr width="5%" color="#e67300" size={4} align="left" />
        <br />
        <br />
      </div>
    </>
  );
}

export default Home;
