import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './styles/SiteLogo.module.css';

// import { ReactComponent as MyLogo } from './sitelogo.svg' ;

const SiteLogo = ({
  headerContainer,
  headerLogo, 
  showNavbar , 
  isSmallScreen, 
  navbarContainer,
  setShowNavbar}) => {

  
    const handleClick = () => {
      window.scrollTo({ top: 0 });
      setShowNavbar(false);
    };
  return (
    <NavLink to='/' 
    onClick={handleClick}
    style={{textDecoration: 'none',...headerContainer}} 
    className={styles.logoContainer}>
      <p style={{...navbarContainer,...headerLogo}} className={styles.logo}>RKCODEBASE</p>
    </NavLink> 
  )
}

export default SiteLogo