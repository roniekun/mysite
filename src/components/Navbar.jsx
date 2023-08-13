import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './pages/assets/icons/SocialLinks';
import SiteLogo from './SiteLogo';
import RequestBtn from './pages/assets/buttons/RequestBtn';
import React, { useEffect, useRef } from 'react';
import NavbarLinks from './pages/content/NavbarContent/NavbarLinks';
import { gsap } from 'gsap';



const Navbar = ({ showNavbar, isSmallScreen, isMediumScreen, setShowNavbar, isDesktop, isScroll }) => {
  const navbarContainerRef = useRef(null);

  useEffect(() => {
    if (showNavbar) {
      gsap.to(navbarContainerRef.current, {
        x: '0%',
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out',
      });
    } else {
      gsap.to(navbarContainerRef.current, {
        x:'100%',
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
          className={`navbar_container ${isScroll ? 'bg-color' : ''}`}
          id={`component-${themeContext.theme}`}>
          
          <NavbarLinks 
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          isScroll={isScroll}
          isSmallScreen={isSmallScreen}
          NavbarLinksContainer={{width: '80%', 
                                height:'fit-content',
                                flexDirection: 'column',
                                justifyContent:'space-evenly',
                              alignItems:'center'}}
          NavbarLinksWrapper={{}}
          NavbarLinksLink={{fontSize:window.innerWidth < 500 ? '18px' :'34px'}}/>
         
{/*        

           {isDesktop && <SiteLogo showNavbar={showNavbar} 
                                    navbarContainer={{ color : '#3D3D3d',
                                     width: '15vw',
                                     fontSize: '16px',
                                     fontFamily: 'Rajdhani,sans serif'}} />} */}
         
            
            {/* {!isMediumScreen && !isSmallScreen && 
            <RequestBtn isDesktop={isDesktop}
                       navbarButton={{border:'none',
                                       background: 'transparent',
                                       color:'black',
                                       fill: 'black',
                                       boxShadow: 'none', 
                                       width: '15vw',
                                       fontSize: '16px',
                                       textTransform:'uppercase',
                                        color : '#3D3D3d',
                                        fontFamily: 'Rajdhani,sans serif'}}
                        navbarSvg={{border: 'black solid 1px'}}/>
                                       } */}
            {isSmallScreen &&
            <> {window.innerHeight > 800 &&
          <div className='nav_row_title'><h4>Connect</h4></div>}
         
          <SocialLinks 
          navSocialLink={{
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '20px',
              fontSize: '12px',
              textTransform: 'capitalize',
              width: 'fit-content',
              fontFamily: 'Rajdhani,sans serif',
              fontWeight: '500'
            
          }}
              displayNames={true}
              showNavbar={showNavbar}/>
            </>
           }
       
            {isSmallScreen && (<div className='nav_email'>  <h4>Email </h4>
            <h3>roniebenitez01@gmail.com</h3></div>
           ) }
        
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default Navbar;
