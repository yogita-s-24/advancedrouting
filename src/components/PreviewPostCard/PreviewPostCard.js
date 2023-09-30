import React from 'react'
import './PreviewPostCard.css'
import {Link} from 'react-router-dom'

export default function PreviewPostCard({id,title, description, author,date}) {
  return (

    <div className='preview-post-card'>
        {/* <h3>{id}</h3> */}
        <h2>{title}</h2>
        <span>By {author}</span>
        <p>{description}</p>
        <p>{date}</p>
        <Link to={`/post/readpost/${id}`}>Read More</Link>
    </div>
  )
}

