import { ThemeContext } from '../context/ThemeContext';
import './Header.css';
import SiteLogo from './SiteLogo';



function Header({ showNavbar, isSmallScreen, isDesktop, setShowNavbar }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
          <div id={`component-${theme}`}  className='header_container'>
          {isSmallScreen && <SiteLogo 
          isSmallScreen={isSmallScreen} 
          headerContainer={{color: '#f5f5f5',
                            transform:'translateX(10%)',
                            fontFamily: 'Clash Display,sans serif',
                            fontSize: '18px'}}/> 
          
          }
            </div>

      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
