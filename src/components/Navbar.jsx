import './styles/Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './pages/assets/icons/SocialLinks';
import React, { useEffect, useRef } from 'react';
import NavbarLinks from './pages/content/NavbarContent/NavbarLinks';
import { gsap } from 'gsap';

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
        y: '0%',
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out',
      });
    } else {
      gsap.to(navbarContainerRef.current, {
        y:'-100%',
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
            width: isSmallScreen || isMediumScreen ? '100vw' : '50vw'
          }}
          className={`navbar_container ${isScroll ? 'bg-color' : ''}`}
          id={`component-${themeContext.theme}`}>
          
          <NavbarLinks 
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          isScroll={isScroll}
          isSmallScreen={isSmallScreen}
          NavbarLinksContainer={{flexDirection: 'column',
         }}
          NavbarLinksWrapper={{}}
          NavbarLinksLink={{}}/>
         
   
            <> {window.innerHeight > 800 &&
          <div className='nav_row_title'><h4>Connect</h4></div>}
         
          <SocialLinks 
          navSocialLink={{
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '20px',
              margin: '5px',
              width: 'fit-content',}}
              displayIcons={true}
              showNavbar={showNavbar}/>
            </>
            {isDesktop && (<div className='nav_email'>  <h4>Email </h4>
            <h3>roniebenitez01@gmail.com</h3></div>
           ) }
        
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default Navbar;
