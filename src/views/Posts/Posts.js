import React from 'react'
import blogData from './../../configs/blog-data.json'
import PreviewPostCard from '../../components/PreviewPostCard/PreviewPostCard'

function Posts() {
  return (
    <div>
    <h1>Posts</h1>
         {
          blogData.map((post,index)=>{
            return <PreviewPostCard key={index} id={post.id} title={post.title} description={post.description} author={post.author} date={post.date}/>
          })
         }
       
     
      </div>
  )
}

export default Posts