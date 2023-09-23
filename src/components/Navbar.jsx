import styles from './styles/Navbar.module.css';
import Socials from '../assets/icons/Socials';
import { ThemeContext } from '../context/ThemeContext';
import React, { useLayoutEffect, useRef } from 'react';
import NavbarLinks from './pages/Navlinks';
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
  

  useLayoutEffect(() => {
    const itemAnim = {
      y: showNavbar ? 0 : 760,
      // x: showNavbar ? 0 : isSmallScreen ? '0' : '-1000',
      duration: .8,
    };
    const containerAnim = {
      y: showNavbar ? '0%' : '-100%',
      // x: showNavbar ? 0 : isSmallScreen ? '0%' : '200%',
      duration:.8,
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
            height: '100vh',
            width: '100vw', padding: '5%',
            transform: 'translateY(-100%)',
          }}
          className={`${styles.navbarContainer} ${isScroll ? 'bg-color' : ''}`}
          id={`component-${themeContext.theme}`}>
            
          <div ref={navItemsRef}
              className={styles.navbarWrapper}>
          <NavbarLinks 
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          isScroll={isScroll}
          isSmallScreen={isSmallScreen}
          NavbarLinksContainer={{flexDirection: 'column', display: 'flex', alignItems: 'flex-end', width: '100%'}}
          NavbarLinksWrapper={{ backgroundColor: 'transparent'}}
          NavbarLinksLink={{textTransform: 'uppercase',
                            fontWeight: '900', fontSize: isSmallScreen ? '40px' : isMediumScreen ? '60px' : '80px'}}/>
        </div >
         <div ref={footerRef} 
         style={{ position: isSmallScreen ? 'absolute' : 'relative', 
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                          bottom: '0',
                          paddingBlock: '5%',
                          width: '100%',
                          marginBottom: isSmallScreen ?'20%' : '0',
                           }}>
            <h3 className={styles.navFooter} style={{textTransform: 'uppercase',
                                              fontWeight: '700',
                                             }}>Socials</h3>
            <div style={{marginBlock: '10px'}}>
            <Socials
             navSocialLink={{
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '20px',
              fill: isSmallScreen  ? 'lightgray' :'gray',
              margin: '7px',
              width: 'fit-content',
             }}
              displayIcons={isSmallScreen ? true : false}
              displayNames={isSmallScreen ? false : true}
              showNavbar={showNavbar}/>
            </div>
           
            <h3 className={styles.navFooter}>www.buildbyrk.com</h3>
            </div>
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};
export default Navbar;
