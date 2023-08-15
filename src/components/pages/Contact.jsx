import React from 'react'
import './styles/Contact.css'
import Footer from '../Footer'
import ContactContent from './content/ContactContent'
import NavbarLinks from './content/NavbarContent/NavbarLinks'

function Contact({isSmallScreen, setShowNavbar}) {
  
  return (
    <><div className='contact_container'>
      <ContactContent/>
      <Footer isSmallScreen={isSmallScreen}/>
    </div>
 
    </>
    
  )
}

export default Contact