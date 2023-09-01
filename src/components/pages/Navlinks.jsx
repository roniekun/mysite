import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NavLink, useLocation } from 'react-router-dom';
import './styles/Navlinks.css';

const NavbarLinks = ({
  showNavbar,
  isSmallScreen,
  setShowNavbar,
  PortfolioNavbarLinks,
  HomeNavbarLinks,
  ContactNavbarLinks,
  AboutNavbarLinks,
  NavbarLinksContainer,
  NavbarLinksWrapper,
  NavbarLinksLink,
  HomeNavbarLink,
  PortfolioNavbarLink,
  ContactNavbarLink,
  AboutNavbarLink,
  GalleryNavbarLink,
  PolicyNavbarLink}) => {

  const location = useLocation();
  const navbarContainerRef = useRef(null);

  const links = [
    { to: '/', text: 'home ' },
    { to: '/about', text: 'about  ' },
    { to: '/community', text: 'community  ' },
    { to: '/contact', text: 'contact  ' },
    
  ];

  const navbarlinkRefs = links.map(() => useRef(null));

  useEffect(() => {
    if (showNavbar ) {
      navbarlinkRefs.forEach((navbarlinkRef, index) => {
        gsap.fromTo(
          navbarlinkRef.current,
          { x: '50%', opacity: 0 },
          {
            x: '0',
            y: '0',
            opacity: 1,
            duration: 0.7,
            delay: index * 0.1,
            skewY: 0,
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
    <div style={{...HomeNavbarLinks,
                ...PortfolioNavbarLinks,
                ...ContactNavbarLinks,
                ...AboutNavbarLinks,
                ...NavbarLinksContainer}}

        className='links_container'
          ref={navbarContainerRef}>
      
      {links.map((link, index) => (
        <div style={NavbarLinksWrapper} className="link_wrapper" key={link.to}>
          <NavLink
            style={{...NavbarLinksLink,...HomeNavbarLink,...PortfolioNavbarLink,
            ...ContactNavbarLink,...AboutNavbarLink,...GalleryNavbarLink,...PolicyNavbarLink}}
            ref={navbarlinkRefs[index]}
            onClick={() => handleLinkClick()}
            className={`navbar_link ${
              location.pathname === link.to ? 'active_link' : ''
            }`}
            to={link.to}
          >
            {link.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavbarLinks;


