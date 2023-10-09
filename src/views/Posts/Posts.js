import React from 'react'
import blogData from './../../configs/blog-data.json'
import PreviewPostCard from '../../components/PreviewPostCard/PreviewPostCard'
import './Post.css'
import Navbar from '../../components/Navbar/Navbar'

function Posts() {
  return (
    <div>
<Navbar/>
    {/* <h1>Posts</h1> */}
    <div className='container  m-auto'>
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