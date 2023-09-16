import React from 'react'
import Footer from '../Footer';
import './styles/Contact.css';
import ContactForm from '../../assets/contact-form/Contactform';

const Contact = ({isSmallScreen, setShowNavbar}) => {
  return (
    <div className='contact_container'>
      <div className='contact'>
         <div className='form_container'>
          <h1 className='form_title'>Lets start a <br /> project together</h1>
         <ContactForm isSmallScreen={isSmallScreen}/>
         </div>
    </div>
    <Footer isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}/>
    </div>
  )
}

export default Contact