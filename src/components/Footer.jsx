import React from 'react';
import './styles/Footer.css';
import NavbarLinks from './pages/Navlinks';
import Socials from './pages/assets/icons/Socials';
// import SiteLogo from './SiteLogo';

const Footer = ({setShowNavbar, isSmallScreen}) => {
  return (

    <div className='footer_container'>
      <div  className='footer_cta_container'>
      <h2>Your website, your brand's canvas – Let's paint your online masterpiece today!</h2>
      </div>
      <div className='footer_links_wrapper'>
 
      <div className='tools_container'>
        <h3> USEFUL TOOLS</h3>
        <li className='link' >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li className='link' >
          <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>
        </li>
        <li className='link' >
          <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">Google Fonts</a>
        </li>
        <li className='link' >
          <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a>
        </li>
        <li className='link' >
          <a href="https://realtimecolors.com" target="_blank" rel="noopener noreferrer">Realtime Colors</a>
        </li>
        <li className='link' >
          <a href=" https://www.typewolf.com/" target="_blank" rel="noopener noreferrer">Typewolf</a>
        </li>
    </div>

      <div className='footer_nav_container'>
        <h2>menu</h2>
        <NavbarLinks 
        setShowNavbar={setShowNavbar}
        footerContainer={{flexDirection: 'column',
                        paddingInline: '0',
                        rowGap: '0'
                        }}
        footerNavbarLink={{fontSize: '18px', 
                        fontWeight: '400',
                        textTransform: 'capitalize',
                        }}
        footerNavbarWrapper={{paddingBlock: '0', padding:'0', marginInline: '0' }}/>
      </div>

      <div className= 'footer_social_container'>
      <h2>Connect</h2>
      <Socials 
      displayNames={true} 
      // displayIcons={isSmallScreen? true : false}
      footerIconContainer={{
                            }}
      footerSocialLink={{fill: 'gray',
                          textTransform: 'capitalize'
                          }}
      footerContainer={{ flexDirection: 'column', 
                          alignItems: 'flex-end',
                         }}/></div>
       <div className='footer_text_wrapper'>
      
      <h3 style={{
                 fontSize: '16px'}}>All rights reserved 2023</h3>
      <h4>www.buildbyrk.com</h4>
      {/* <SiteLogo 
      setShowNavbar={setShowNavbar}/> */}
      <h4>version 1.1</h4>
      <a style={{textDecoration: 'none', color: 'gray'}} href="#">developed by roniekun</a>
     </div>
      </div>
     
    </div>
  )
}

export default Footer