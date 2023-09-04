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
      <div className='cta_container'>
        <h1 className='footer_cta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        exercitationem nesciunt. Odit nihil assumenda ab modi itaque reiciendis veritatis!</h1>
        <button className='footer_cta_button'> Call to action</button>
      </div>
      
      <div className='footer_text_wrapper'>
      <Socials 
      displayNames={true} 
      footerIconContainer={{marginInline: '7px',
                            }}
      footerSocialLink={{fill: 'gray', textDecoration: 'none'}}
      footerContainer={{ }}/>
      <h3 style={{textTransform: 'uppercase',
                  fontSize: '16px'}}>All rights reserved 2023</h3>
       <h4>Version 1.1</h4>
       <a href="#">developed by roniekun</a>
       <h4>www.pitiksouthcotabato.com</h4>

      </div>
    </div>
  )
}

export default Footer