import React from 'react'
import blogData from './../../configs/blog-data.json'
import PreviewPostCard from '../../components/PreviewPostCard/PreviewPostCard'
import './Post.css'

function Posts() {
  return (
    <div>
    <h1>Posts</h1>
    <div className='container'>
         {
          blogData.map((post,index)=>{
            return <PreviewPostCard key={index} id={post.id} title={post.title} description={post.description} content={post.content} image={post.image} date={post.date}/>
          })
         }

    </div>
       
     
      </div>
  )
}

export default Posts