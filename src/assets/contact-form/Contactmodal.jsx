import React from 'react'
import styles from './Contactmodal.module.css';
 
const ContactModal = ({message}) => {
  return (
    <div className={styles.contactModal}>{message}</div>
  )
}

export default ContactModal