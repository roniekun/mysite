import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles/Navlinks.module.css';
import { delay } from 'framer-motion';

const NavbarLinks = ({
  headerNavbarLink,
  headerNavbarWrapper,
  showNavbar,
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

  const links = [
    { to: '/', text: 'home ' },
    { to: '/about', text: 'about  ' },
    { to: '/contact', text: 'contact  ' },
    
  ];
  const containerRef = useRef(null);
  const navbarlinkRefs = links.map(() => useRef(null));
  const tl = gsap.timeline();
  useEffect(() => {
    if (showNavbar ) {
      tl.from(containerRef.current,{delay: .5, opacity: 0});
      navbarlinkRefs.forEach((navbarlinkRef, index) => {
        tl.fromTo(
          navbarlinkRef.current, 
          { 
            opacity: 0, yPercent: 100},
          {
            yPercent: 0,
            opacity: 1,
            delay: index * .1,
          }, "-=.5");
      });
    }
6  }, [showNavbar, navbarlinkRefs]);

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
          ref={containerRef}>
      
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


