import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles/Navlinks.module.css';

const NavbarLinks = ({
  headerNavbarLink,
  headerNavbarWrapper,
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

           className={styles.linksContainer}
          ref={navbarContainerRef}>
      
          {links.map((link, index) => (
          <div style={{...NavbarLinksWrapper,...footerNavbarWrapper,...headerNavbarWrapper}} 
          className={styles.linkWrapper}key={link.to}>
          <NavLink
            style={{...NavbarLinksLink,
                    ...footerNavbarLink,
                   ...headerNavbarLink}}
            ref={navbarlinkRefs[index]}
            onClick={() => handleLinkClick()}
            className={`${styles.navbarLink} ${location.pathname === link.to ? styles.activeLink : ''}`}
            to={link.to}>
            {link.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavbarLinks;


