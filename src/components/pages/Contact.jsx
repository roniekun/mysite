import React from 'react'
import Footer from '../Footer';
import './styles/Contact.css';
import ContactForm from '../../assets/contact-form/Contactform';

const Contact = ({isSmallScreen, setShowNavbar}) => {
  return (
    <div className='contact_container'>
      <div className='contact'>

        <div className='contact_title_wrapper'>
        <h1>Let's Talk</h1>
        </div>

        <div className='contact_text_wrapper'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Obcaecati officia beatae quaerat dolore corrupti autem laboriosam animi.
        Enim provident itaque iure alias pariatur recusandae accusamus, maxime tempore
         accusantium ipsa harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Optio labore tenetur sunt iste.</p>
        </div>
     
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