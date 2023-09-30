import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Home</div>
    <Link to= "/post">Post</Link>
    <br/>
    <Link to= "/readpost">Read Post</Link>
    </>
  )
}

export default Home