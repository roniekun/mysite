import {useEffect, useRef} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './styles/Header.css';
import SiteLogo from './SiteLogo';
import Menu from './pages/assets/buttons/Menu';
import { gsap } from 'gsap';

function Header({ isScroll, showNavbar, setShowNavbar, isSmallScreen }) {
  
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current,
      {opacity:1,
      duration:.3});
  }, [])
  
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
          <div ref={containerRef} id={`component-${theme}`} className= {`header_container ${ isScroll ?'hide-header' : ''}`}>
            <div className='logo_wrapper'>
              <SiteLogo setShowNavbar={setShowNavbar}
              showNavbar={showNavbar} />
            </div>
            {isSmallScreen &&
            <div className='menu_wrapper'>
            <Menu showNavbar={showNavbar} 
            setShowNavbar={setShowNavbar}
            displayText={true}
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
