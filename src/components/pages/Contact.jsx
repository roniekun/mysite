import React from 'react'
import './Contact.css'
import Footer from '../Footer'
import ContactContent from './content/ContactContent'
import NavbarLinks from './content/NavbarContent/NavbarLinks'

function Contact({isSmallScreen, setShowNavbar}) {
  
  return (
    <><div className='contact_container'>
          {!isSmallScreen &&<NavbarLinks  ContactNavbarLinks={{position:'absolute',
                                            top:'0', 
                                            right: '0',
                                            zIndex: '9999'}}
            setShowNavbar={setShowNavbar}
            isSmallScreen={isSmallScreen}/>}
      <ContactContent/>
      <Footer isSmallScreen={isSmallScreen}/>
    </div>
 
    </>
    
  )
}

export default Contact