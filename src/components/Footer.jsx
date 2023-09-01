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
      <h2 style={{color: 'gray'}}>Footer Section</h2>
      <Socials displayNames={true} 
      footerIconContainer={{marginInline: '7px'}}
      FooterContainer={{fill: '', }}/>
      <div className='footer_text_wrapper'>
      <h3 style={{textTransform: 'uppercase',
                  fontSize: '16px'}}>All rights reserved 2023</h3>
       <h4>Version 1.1</h4>
       <a href="#">developed by roniekun</a>
       <h4>pitiksouthcotabato.com</h4>

      </div>
    </div>
  )
}

export default Footer