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
        ease: 'power2.out',
      });
    } else {
      gsap.to(navbarContainerRef.current, {
        y:isSmallScreen ? '-100%' : '0%',
        x: isSmallScreen ? '0%' : '100%',
        duration: 0.3,
        opacity: 1,
        ease: 'power2.in',
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
            width: isSmallScreen || isMediumScreen ? '100vw' : '50vw',
            transform: isSmallScreen? 'translate(0%, -100%)': 'translate(100%, 0)'
          }}
          className={`navbar_container ${isScroll ? 'bg-color' : ''}`}
          id={`component-${themeContext.theme}`}>
         <div>
          <SiteLogo setShowNavbar={setShowNavbar}/>
          </div>
          <NavbarLinks 
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          isScroll={isScroll}
          isSmallScreen={isSmallScreen}
          NavbarLinksContainer={{flexDirection: 'column',
         }}
          NavbarLinksWrapper={{}}
          NavbarLinksLink={{fontSize: isSmallScreen? '14px' : '34px',
                            textTransform: 'capitalize'}}/>

            <> 
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
            </>
            <div>
            <h3 className='nav_footer'>pitiksouthcotabato.com</h3>
            </div>
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default Navbar;
