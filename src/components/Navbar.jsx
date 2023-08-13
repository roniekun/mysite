import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './pages/assets/icons/SocialLinks';
import SiteLogo from './SiteLogo';
import RequestBtn from './pages/assets/buttons/RequestBtn';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { delay } from 'framer-motion';


const Navbar = ({ showNavbar, isSmallScreen, isMediumScreen, setShowNavbar, isDesktop, isScroll }) => {
  const location = useLocation();
  const navbarContainerRef = useRef(null);
  

  
  useEffect(() => {

    if (  showNavbar ) {
      gsap.to(navbarContainerRef.current, { y: '0%', 
                                            duration: 0.5, 
                                            opacity: 1, 
                                            ease: 'power2.out', 
                                          });
    } else {
      gsap.to(navbarContainerRef.current, { y: isSmallScreen?  '-100%' : '0', 
                                            duration: 0.3, 
                                            opacity:  1, 
                                            ease: 'power2.in',
                                            });
    }
  }, [showNavbar, isSmallScreen ]);

  const links = [
    { to: '/', text: 'home' },
    { to: '/about', text: 'about' },
    { to: '/portfolio', text: 'work' },
    { to: '/contact', text: 'contact' },
  ];

 const navbarlinkRefs = links.map(() => useRef(null));

 useEffect(() => {
  if (showNavbar && isSmallScreen ) {
    navbarlinkRefs.forEach((navbarlinkRef, index) => {
      gsap.fromTo(
        navbarlinkRef.current,
        { y: '100%', opacity: 0,},
        {
          y: '0',
          opacity: 1,
          duration: 0.7,
          delay: index * 0.1,
          skewY:0
          
        }
      );
    });
  }
}, [showNavbar,isSmallScreen, navbarlinkRefs]);


  const handleLinkClick = () => {

    window.scrollTo({ top: 0 })
    setShowNavbar(!isSmallScreen);
  };

  return (
    <>
      <ThemeContext.Consumer>
        {(themeContext) => (
          <nav 
          ref={navbarContainerRef} 
          className={`navbar_container ${isScroll ? 'bg-color' : ''}`}
          id={`component-${themeContext.theme}`}>
            <>
          { isSmallScreen && <div className='nav_row_title'> <h4 >Sections</h4> </div>} 
          
            <>
           {isDesktop && <SiteLogo showNavbar={showNavbar} 
                                    navbarContainer={{ color : '#3D3D3d',
                                     width: '15vw',
                                     fontSize: '16px',
                                     fontFamily: 'Rajdhani,sans serif'}} />}
            <div className="links_container">
              

              {links.map((link, index) => (
                <div
                  className="link_wrapper"
                  key={link.to}
                  
                >
                  <NavLink 
                     ref={navbarlinkRefs[index]}  
                    onClick={() => 
                    handleLinkClick(location.pathname === link.to)}
                    className={`navbar_link ${isScroll? 'scrolled_link': ''} ${location.pathname === link.to ? 'active_link' : ''}`}
                    to={link.to}
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </div></>
            </>
            {!isMediumScreen && !isSmallScreen && 
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
                                       }
            {isSmallScreen &&
            <>
          <div className='nav_row_title'><h4>Connect</h4></div>
          <br />
          <br />
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
           <br />
           <br />
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
