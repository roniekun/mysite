import './styles/Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './pages/assets/icons/Socials';
import React, { useEffect, useRef } from 'react';
import NavbarLinks from './pages/Navlinks';
import SiteLogo from './SiteLogo';
import { gsap } from 'gsap';

const Navbar = ({ showNavbar,
                isSmallScreen, 
                isMediumScreen, 
                setShowNavbar,  
                isScroll, 
                isDesktop }) => {

  const navbarContainerRef = useRef(null);
  const navItemsRef = useRef(null);
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  

  useEffect(() => {
    const itemAnim = {
      y: showNavbar ? 0 : isSmallScreen ? 1000 : 0,
      x: showNavbar ? 0 : isSmallScreen ? '0' : '-1000',
      duration: 1,
    };
    const containerAnim = {
      y: showNavbar ? 0 : isSmallScreen ? '-200%' : '0%',
      x: showNavbar ? 0 : isSmallScreen ? '0%' : '200%',
      duration: 1,
    };
  
    gsap.to(navbarContainerRef.current, containerAnim);
    gsap.to(navItemsRef.current,itemAnim);
    gsap.to(footerRef.current, itemAnim);
    gsap.to(logoRef.current, itemAnim);
  }, [showNavbar, isSmallScreen]);
  

  return (
    <>
      <ThemeContext.Consumer>
        {(themeContext) => (
          <nav 
          ref={navbarContainerRef}
          style={{
            height: isDesktop || isMediumScreen ? '100vh' : ( isSmallScreen && window.innerHeight < 500 ? '100vh' : '75vh'),
            width: isSmallScreen || isMediumScreen ? '100vw' : '50vw',
            transform: isSmallScreen? 'translate(0%, -100%)': 'translate(100%, 0)',
          }}
          className={`navbar_container ${isScroll ? 'bg-color' : ''}`}
          id={`component-${themeContext.theme}`}>
            

          <div ref={logoRef} style={{visibility: isScroll? ''  : 'collapse'}}>
           <SiteLogo setShowNavbar={setShowNavbar}
            showNavbar={showNavbar}
            navbarContainer={{color: 'gray',
                            fill: 'gray'}}/>
          </div>
        
          <div ref={navItemsRef}>
          <NavbarLinks 
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          isScroll={isScroll}
          isSmallScreen={isSmallScreen}
          NavbarLinksContainer={{flexDirection: 'column',
         }}
          NavbarLinksWrapper={{}}
          NavbarLinksLink={{textTransform: 'uppercase',
                            }}/>
          </div >
         <div ref={footerRef} 
         style={{ position: isSmallScreen ? 'absolute' : 'relative', 
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                          bottom: '0',
                          marginBottom: '10%',
                           }}>
             <h3 className='nav_footer' style={{textTransform: 'uppercase',
                                              fontWeight: '700',
                                             }}>Socials</h3>
            <div style={{marginBlock: '10px'}}>
            <SocialLinks 
             navSocialLink={{
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '20px',
              fill: isSmallScreen  ? 'lightgray' :'gray',
              margin: '7px',
              width: 'fit-content',
             }}
              displayIcons={true}
              showNavbar={showNavbar}/>
            </div>
           
            <h3 className='nav_footer'>pitiksouthcotabato.com</h3>
            </div>
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};
export default Navbar;
