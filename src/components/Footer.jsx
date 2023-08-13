import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css'; 
import SocialLinks from './pages/assets/icons/SocialLinks';
import UsefulLinks from './pages/assets/links/UsefulLinks';
import RequestBtn from './pages/assets/buttons/RequestBtn';

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

      <>
       <h1 className='footer_cta' >Your website, your brand's canvas – 
       let's paint your online masterpiece today!</h1>
           <RequestBtn/>
      </>
          <UsefulLinks/>
       

    <> 
      <SocialLinks  
      isSmallScreen={isSmallScreen} 
      displayIcons={true}
      footerSocialLink={{color: '#6d6d6d', fill: '#6d6d6d',}}
      footerIconContainer={{margin:'5px'}}/>


      <p id={`component-${theme}`}  className='footer__text'>© 2023. All rights reserved. This site is a work in progress :)</p>  
    </>



</div>

)}
</ThemeContext.Consumer>
  );
}

export default Footer;


