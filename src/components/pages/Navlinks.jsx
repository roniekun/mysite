import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NavLink, useLocation } from 'react-router-dom';
import './styles/Navlinks.css';

const NavbarLinks = ({
  headerNavbarLink,
  showNavbar,
  isSmallScreen,
  setShowNavbar,
  footerContainer,
  footerNavbarLink,
  footerNavbarWrapper,
  ContactNavbarLinks,
  NavbarLinksContainer,
  NavbarLinksWrapper,
  NavbarLinksLink,
  }) => {

  const location = useLocation();
  const navbarContainerRef = useRef(null);

  const links = [
    { to: '/', text: 'home ' },
    { to: '/about', text: 'about  ' },
    { to: '/contact', text: 'contact  ' },
    
  ];

  const navbarlinkRefs = links.map(() => useRef(null));

  useEffect(() => {
    if (showNavbar ) {
      navbarlinkRefs.forEach((navbarlinkRef, index) => {
        gsap.fromTo(
          navbarlinkRef.current,
          { y: '100',},
          {
            x: '0',
            y: '0',
            opacity: 1,
            duration: .9,
            delay: index * .1 ,
          }
        );
      });
    }
  }, [showNavbar, isSmallScreen, navbarlinkRefs]);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0 });
    setShowNavbar(false);
  };
  return (
    <div style={{
                ...ContactNavbarLinks,
                ...NavbarLinksContainer,
                ...footerContainer
                }}

           className='links_container'
          ref={navbarContainerRef}>
      
          {links.map((link, index) => (
          <div style={{...NavbarLinksWrapper,...footerNavbarWrapper}} 
          className="link_wrapper" key={link.to}>
          <NavLink
            style={{...NavbarLinksLink,
                    ...footerNavbarLink,
                   ...headerNavbarLink}}
            ref={navbarlinkRefs[index]}
            onClick={() => handleLinkClick()}
            className={`navbar_link ${
              location.pathname === link.to ? 'active_link' : ''
            }`}
            to={link.to}>
            {link.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavbarLinks;


