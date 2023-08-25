import React from 'react';
import './styles/Footer.css';
import NavbarLinks from './pages/Navlinks';
import Socials from './pages/assets/icons/Socials';
import SiteLogo from './SiteLogo';

const Footer = ({setShowNavbar}) => {
  return (

    <div className='footer_container'>
       <SiteLogo 
       setShowNavbar={setShowNavbar}/>
      <h1>Footer</h1>
      <Socials displayNames={true} 
      footerIconContainer={{marginInline: '7px'}}
      FooterContainer={{fill: '', }}/>
      <div className='footer_text_wrapper'>
      <h4>pitiksouthcotabato.com</h4>
      <h3>All rights reserved 2013</h3>
      </div>
    </div>
  )
}

export default Footer