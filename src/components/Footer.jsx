import React from 'react';
import './styles/Footer.css';
import NavbarLinks from './pages/Navlinks';
import Socials from './pages/assets/icons/Socials';
import SiteLogo from './SiteLogo';

const Footer = ({setShowNavbar, isSmallScreen}) => {
  return (

    <div className='footer_container'>

      <div className='cta_container'>
        <h1 className='footer_cta'>Lorem ipsum dolor sit amet 
        exercitationem nesciunt. <span> Odit nihil assumenda ab modi itaque reiciendis veritatis!</span></h1>
        <button className='footer_cta_button'> Call to action</button>
      </div>
      
      <div className='footer_text_wrapper'>
      <Socials 
      displayNames={isSmallScreen? false : true} 
      displayIcons={isSmallScreen? true : false}
      footerIconContainer={{marginInline: '7px',
                            }}
      footerSocialLink={{fill: 'gray', textDecoration: 'none',
       textTransform: 'uppercase'}}
      footerContainer={{ }}/>
       <h3 style={{
                  fontSize: '16px'}}>All rights reserved 2023</h3>
       <h4>www.pitiksouthcotabato.com</h4>
       <SiteLogo 
       setShowNavbar={setShowNavbar}/>
       <h4>version 1.1</h4>
       <a style={{textDecoration: 'none', color: 'gray'}} href="#">developed by roniekun</a>
      </div>
    </div>
  )
}

export default Footer