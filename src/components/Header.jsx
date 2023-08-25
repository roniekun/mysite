import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './styles/Header.css';
import SiteLogo from './SiteLogo';
import Menu from './pages/assets/icons/menu/Menu';


function Header({ isScroll, showNavbar, setShowNavbar, isSmallScreen }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        
          <div id={`component-${theme}`} className= {`header_container ${ isScroll ?'hide-header' : ''}`}>
            <div className='logo_wrapper'>
              <SiteLogo setShowNavbar={setShowNavbar}
              showNavbar={showNavbar} />
            </div>
            {isSmallScreen &&
            <div className='menu_wrapper'>
            <Menu showNavbar={showNavbar} setShowNavbar={setShowNavbar}
            MenuContainer={{backgroundColor: 'transparent'}}/>
            </div>
             }
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Header;
