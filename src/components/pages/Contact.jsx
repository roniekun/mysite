import React from 'react'
import './Contact.css'
import Footer from '../Footer'
import ContactContent from './content/ContactContent'
function Contact({isSmallScreen}) {
  
  return (
    <><div className='contact__container'>
      <ContactContent/>
      <Footer isSmallScreen={isSmallScreen}/>
    </div>
 
    </>
    
  )
}

export default Contact