import React from 'react'
import Footer from '../Footer'
import './styles/Community.css'

const Community = ({isSmallScreen, setShowNavbar}) => {
  return (
    <div className='community_container'>
    <div className='community_content'>
      <h1 className='title'>
        Blank Page
      </h1>
    </div>
    <Footer isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}/>
    </div>
  )
}

export default Community