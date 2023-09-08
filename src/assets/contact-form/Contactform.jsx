import React, { useState, useRef, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './Contactform.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticEffect from '../MagneticEffect/MagneticEffect';


const firebaseConfig = {
  apiKey: "AIzaSyDCbfEVWBnQQ0LtWmWQdomUifl8QOncSDM",
  authDomain: "netlify-project-contact-form.firebaseapp.com",
  projectId: "netlify-project-contact-form",
  storageBucket: "netlify-project-contact-form.appspot.com",
  messagingSenderId: "1062242217772",
  appId: "1:1062242217772:web:29e9de0bf9c2f49f5d4689"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ContactForm = ({isSmallScreen}) => {
  const formBtnRef =useRef(null);
  const formRef =useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const form = formRef.current;
    const btn = formBtnRef.current;
  
    gsap.to(btn, {
      x: isSmallScreen ? 125 : 200, duration: 1,
      scrollTrigger: {
        trigger: form,
        start: 'top top', // Adjust as needed
        end: 'center top', // Adjust as needed
      },
    },
    );
  }, []);
 
  const initialFormData = {
    name: '',
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {

    e.preventDefault();
    const { name, value } = e.target;
  
    // Update the formData state with the new value
    setFormData({ ...formData, [name]: value });

  };
  

  const handleSubmit = async e => {
    e.preventDefault();

    

    if (formData.firstname && formData.lastname && formData.email && formData.message) {
      formData.name = formData.firstname + ' ' + formData.lastname;
      setIsSubmitting(true);


      try {
        const submissionData = {
          ...formData,
          date: firebase.firestore.Timestamp.fromDate(new Date())
        };
        await db.collection('contact-form').add(submissionData);
        // Save the form data to Firebase
        setIsSuccess(true);
        setModalMessage('Form submitted successfully!');
        setIsSubmitting(false);
      } catch (error) {
        setIsSuccess(false);
        setModalMessage('Failed to submit the form. Please try again later.');
        console.error('Error submitting form:', error);
      } finally {
        setShowModal(true);
        setFormData(initialFormData);
      }
    } else {
      setIsSuccess(false);
      setModalMessage('Failed to submit the form. Please fill in all fields.');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };



  return (
    
      <form ref={formRef} className='form' onSubmit={handleSubmit}>
        
            <label htmlFor="firstname"
            className='form_firstname'>
             What is your name?
            <br/>
            </label>

            <input
              className='text_input'
              type="text"
              placeholder='ex. Ronie Benitez'
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required/>

          <label htmlFor="email"  
            className='form_email'>
              What is your email?
              <br/> 
              </label>

            <input
              className='email_input'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='example@gmail.com'
              required
            />

          <label htmlFor="message" 
            className='form_message'> 
            Type your message
            <br/> 
            </label>

          <textarea
            className='text_area'
            id="message"
            placeholder='Hi, Good day, Mapahimo ko sang ano...'
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        <div ref={formBtnRef}>
        <MagneticEffect>
        <div>
        <button 
        className={`form_submit_button ${isSubmitting ? 'loading' : ''}`} 
        type="submit">
        {isSubmitting? 'Sending' : 'Send it!' }</button>
        </div>
        </MagneticEffect>
        </div>
           {/* {showModal && (
        <ContactModal
          isSuccess={isSuccess}
          message={modalMessage}
          closeModal={closeModal}
        />
      )} */}
      </form>
  );
};

export default ContactForm;