import React from 'react'
import './Blog.css';
import Footer from '../Footer'

const Blog = ({isSmallScreen
}) => {
  return (
    
    <div  className='blog_container'>

        <div className='no_content'>
        <h1> No content! :) </h1>
        </div>
  

        <Footer isSmallScreen={isSmallScreen}/>
    </div>
   
  )
}

export default Blog