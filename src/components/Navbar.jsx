import './styles/Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './pages/assets/icons/Socials';
import React, { useEffect, useRef } from 'react';
import NavbarLinks from './pages/Navlinks';
import SiteLogo from './SiteLogo';
import { gsap } from 'gsap';
import { transform } from 'framer-motion';

const Navbar = ({ showNavbar,
                isSmallScreen, 
                isMediumScreen, 
                setShowNavbar,  
                isScroll, 
                isDesktop }) => {
  const navbarContainerRef = useRef(null);

  useEffect(() => {
    if (showNavbar) {
      gsap.to(navbarContainerRef.current, {
        y:'0%',
        x: '0%',
        duration: 0.5,
        opacity: 1,
        ease: 'Power1.easeOut', 
      });
    } else {
      gsap.to(navbarContainerRef.current, {
        y:isSmallScreen ? '-200%' : '0%',
        x: isSmallScreen ? '0%' : '200%',
        duration: 0.5,
        opacity: 0,
        ease: 'Bounce.easeOut',
      });
    }
  }, [showNavbar, isSmallScreen]);

  return (
    <>
      <ThemeContext.Consumer>
        {(themeContext) => (
          <nav 
          ref={navbarContainerRef}
          style={{
            height: isDesktop || isMediumScreen ? '100vh' : ( isSmallScreen && window.innerHeight < 500 ? '100vh' : '70vh'),
            width: isSmallScreen || isMediumScreen ? '100vw' : '50vw',
            transform: isSmallScreen? 'translate(0%, -100%)': 'translate(100%, 0)',
            backgroundColor: 'whitesmoke'
          }}
          className={`navbar_container ${isScroll ? 'bg-color' : ''}`}
          id={`component-${themeContext.theme}`}>
          <div style={{visibility: isScroll? ''  : 'collapse'}}>
           <SiteLogo setShowNavbar={setShowNavbar} showNavbar={showNavbar}/>
          </div>
        
          <div style={{   
                       }}>
          <NavbarLinks 
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          isScroll={isScroll}
          isSmallScreen={isSmallScreen}
          NavbarLinksContainer={{flexDirection: 'column',
         }}
          NavbarLinksWrapper={{}}
          NavbarLinksLink={{textTransform: 'capitalize'}}/>
          </div >
            <div style={{ position: isSmallScreen ? 'absolute' : 'relative', 
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                          bottom: '0',
                          marginBottom: '5%',
                           }}>
             <h3 className='nav_footer' style={{textTransform: 'uppercase',
                                              fontWeight: '700',
                                              fontSize: '10px',
                                              marginBottom: '10px'}}>Socials</h3>
            <SocialLinks 
             navSocialLink={{
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '20px',
              fill: 'gray',
              margin: '7px',
              width: 'fit-content',}}
              displayIcons={true}
              showNavbar={showNavbar}/>
            <h3 className='nav_footer'>pitiksouthcotabato.com</h3>
            </div>
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};
export default Navbar;
