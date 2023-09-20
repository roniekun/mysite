import styles from './styles/Navbar.module.css';
import Socials from '../assets/icons/Socials';
import { ThemeContext } from '../context/ThemeContext';
import React, { useEffect, useRef } from 'react';
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
  

  useEffect(() => {
    const itemAnim = {
      y: showNavbar ? 0 : isSmallScreen ? 1000 : 0,
      x: showNavbar ? 0 : isSmallScreen ? '0' : '-1000',
      duration: .8,
    };
    const containerAnim = {
      y: showNavbar ? 0 : isSmallScreen ? '-200%' : '0%',
      x: showNavbar ? 0 : isSmallScreen ? '0%' : '200%',
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
            height: isDesktop || isMediumScreen ? '100vh' : ( isSmallScreen && window.innerHeight < 500 ? '100vh' : '75vh'),
            width: isSmallScreen || isMediumScreen ? '100vw' : '40vw',
            transform: isSmallScreen? 'translate(0%, -100%)': 'translate(100%, 0)',
          }}
          className={`${styles.navbarContainer} ${isScroll ? 'bg-color' : ''}`}
          id={`component-${themeContext.theme}`}>
            

          {/* <div className= 'navlogo_wrapper' ref={logoRef} style={{visibility: isScroll? ''  : 'collapse'}}>
           <SiteLogo setShowNavbar={setShowNavbar}
            showNavbar={showNavbar}
            navbarContainer={{color: 'gray',
                            fill: 'gray'}}/>
          </div> */}
        
          <div ref={navItemsRef}
              className={styles.navbarWrapper}>
          <NavbarLinks 
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          isScroll={isScroll}
          isSmallScreen={isSmallScreen}
          NavbarLinksContainer={{flexDirection: 'column', display: 'flex'}}
          NavbarLinksWrapper={{}}
          NavbarLinksLink={{textTransform: 'uppercase',
                            fontWeight: '500', fontSize: isSmallScreen ? '24px' : '32px'
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
