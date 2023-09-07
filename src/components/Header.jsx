import {useEffect, useRef} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './styles/Header.css';
import SiteLogo from './SiteLogo';
import { gsap } from 'gsap';
import Menu from './pages/assets/buttons/Menu';

function Header({ isScroll, showNavbar, setShowNavbar, isSmallScreen }) {
  
  const containerRef = useRef(null);

  useEffect(() => {
 
    gsap.to(containerRef.current, {
      y: isScroll ? -100 : 0,
      duration: 0.5,
      opacity: 1,
    });
  }, [isScroll]);
  
 
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
          <div ref={containerRef} id={`component-${theme}`} className='header_container'>
            <div className='logo_wrapper'>
              <SiteLogo setShowNavbar={setShowNavbar}
              showNavbar={showNavbar}
               headerLogo={{color: isSmallScreen ? 'whitesmoke' : 'gray', fontSize: '12px'}} />
            </div> 
              {isSmallScreen &&
              <div className='menu_wrapper'>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
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
