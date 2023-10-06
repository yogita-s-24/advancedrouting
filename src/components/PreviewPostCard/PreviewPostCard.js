import React from 'react'
import './PreviewPostCard.css'
import {Link} from 'react-router-dom'

export default function PreviewPostCard({id,title, description, content, image, date}) {
  return (

    <div className='preview-post-card'>
        <h2>{title}</h2>
        <img src={image} className='img'/>
        <p>{description}</p>
        <p>{content}</p>
        <p>{date}</p>
        
        <Link to={`/post/readpost/${id}`}>Read More</Link>
    </div>
  )
}

