import React from 'react'
import './Gallery.css';
import Footer from '../Footer';
import NavbarLinks from './content/NavbarContent/NavbarLinks';

const Gallery = ({isSmallScreen,setShowNavbar}) => {
  return (
    <div className='gallery_container'>
        {!isSmallScreen &&  <NavbarLinks 
          setShowNavbar={setShowNavbar}
          isSmallScreen={isSmallScreen}/>}
        <div className='gallery_content'></div>
    <Footer isSmallScreen={isSmallScreen}/>
        </div>
  )
}

export default Gallery