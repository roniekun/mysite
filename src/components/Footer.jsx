import React from 'react';
import './styles/Footer.css';
import NavbarLinks from './pages/Navlinks';
import Socials from './pages/assets/icons/Socials';

const Footer = () => {
  return (

    <div className='footer_container'>
       
      <h1>Footer</h1>
      <Socials displayNames={true} 
      footerIconContainer={{marginInline: '7px'}}
      FooterContainer={{fill: '', }}/>
    </div>
  )
}

export default Footer