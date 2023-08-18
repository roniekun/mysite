import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './styles/Footer.css'; 
import SocialLinks from './pages/assets/icons/SocialLinks';
import UsefulLinks from './pages/assets/links/UsefulLinks';
import RequestBtn from './pages/assets/buttons/RequestBtn';
import MagneticEffect from '../assets/MagneticEffect/MagneticEffect';

function Footer({ showNavbar, isSmallScreen}) {
  const [showFooter, setShowFooter] = useState(window.innerWidth > 768);

  useEffect(() => {
    if (window.innerWidth <= 768 && showNavbar ){ 
      setShowFooter(false)
      }
      else{
        setShowFooter(true)
      }
  }, [showNavbar,showFooter]);

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (

    <div id={`component-${theme}`} className='footer_container'>

      <div className='footer_first_layer'>
       <h1 className='footer_cta' >Your website, your brand's canvas – 
       let's paint your online masterpiece today!</h1>
   
      <MagneticEffect>
       <div >
       <RequestBtn/>
       </div>
   
       </MagneticEffect>

      <SocialLinks  
      isSmallScreen={isSmallScreen} 
      displayIcons={true}
      text={'Connect'}
      footerSocialLink={{color: 'lightgray', fill: 'lightgray'}}
      footerIconContainer={{}}/>
 
       </div>

     
      <div className='footer_second_layer'> 
      <h3>Connect</h3>
      <br />
      <p>Email: roniebenitez01@gmail.com</p>
    
      <UsefulLinks/>
    </div>
    <p id={`component-${theme}`}  
      className='footer_text'>© 2023. All rights reserved. {isSmallScreen ? <br/> : ''}
     This site is a work in progress :)</p>  
</div>

)}
</ThemeContext.Consumer>
  );
}

export default Footer;


