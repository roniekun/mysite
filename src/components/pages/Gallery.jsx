import React from 'react'
import './Gallery.css';
import Footer from '../Footer';

const Gallery = ({isSmallScreen}) => {
  return (
    <div className='gallery_container'>
        <div className='gallery_content'></div>
    <Footer isSmallScreen={isSmallScreen}/>
        </div>
  )
}

export default Gallery