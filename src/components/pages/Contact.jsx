import React from 'react'
import Footer from '../Footer';
import styles from './styles/Contact.module.css';
import ContactForm from '../../assets/contact-form/Contactform';

const Contact = ({isSmallScreen, setShowNavbar}) => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contact}>
         <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Lets start a <br /> project together</h1>
         <ContactForm isSmallScreen={isSmallScreen}/>
         </div>
    </div>
    <Footer isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}/>
    </div>
  )
}

export default Contact