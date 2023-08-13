import React from 'react'
import './Blog.css';
import Footer from '../Footer'
import NavbarLinks from './content/NavbarContent/NavbarLinks';

const Blog = ({isSmallScreen, setShowNavbar}) => {
  return (
    
    <div  className='blog_container'>
          {!isSmallScreen &&<NavbarLinks 
          setShowNavbar={setShowNavbar}
            isSmallScreen={isSmallScreen}/>}

        <div className='no_content'>
        <h1> No content! :) </h1>
        </div>
  

        <Footer isSmallScreen={isSmallScreen}/>
    </div>
   
  )
}

export default Blog