import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='position-sticky top-0 nav-index'>
      <nav className="navbar navbar-expand-lg bg-info ">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Developer Blog</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/post">Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/readpost">ReadPost</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
