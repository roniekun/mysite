import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './styles/Header.css';
import SiteLogo from './SiteLogo';

function Header({ isScroll }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        
          <div id={`component-${theme}`} className= {`header_container ${ isScroll ?'hide-header' : ''}`}>
            <div className='logo_container'>
              <SiteLogo />
            </div>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Header;
