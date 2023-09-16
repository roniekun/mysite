import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './styles/SiteLogo.css';

// import { ReactComponent as MyLogo } from './sitelogo.svg' ;

const SiteLogo = ({
  headerContainer,
  headerLogo, 
  showNavbar , 
  isSmallScreen, 
  navbarContainer,
  setShowNavbar}) => {

  const [color, setColor] = useState('#6d6d6d');
  const handleHover = () => {
    setColor('gray');}

  const handleMouseLeave = () => {
  
    setColor(showNavbar ? '#6d6d6d' : color);
    }
  
    const handleClick = () => {
      window.scrollTo({ top: 0 });
      setShowNavbar(false);
    };
  return (
    <NavLink to='/' 
    onClick={handleClick}
    onMouseEnter={handleHover} // Set color to black on hover
    onMouseLeave={handleMouseLeave}
    style={{textDecoration: 'none', color: isSmallScreen ? '#fafafa' : color,...headerContainer}} 
    className='site_logo_container'>
      <p style={{...navbarContainer,...headerLogo}} className='logo'>RK</p>
    </NavLink> 
  )
}

export default SiteLogo