import React from 'react'
import Footer from '../Footer';
import './styles/Contact.css';

const Contact = ({setShowNavbar}) => {
  return (
    <div className='contact_container'>
      <div className='contact'>
      <h1>Contact us</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Obcaecati officia beatae quaerat dolore corrupti autem laboriosam animi.
        Enim provident itaque iure alias pariatur recusandae accusamus, maxime tempore
         accusantium ipsa harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Optio labore tenetur sunt iste.</p>
        <form action="">
          *contact info 
        </form>
    </div>
    <Footer setShowNavbar={setShowNavbar}/>
    </div>
  )
}

export default Contact