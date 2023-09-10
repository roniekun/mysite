import {useEffect, useRef} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './styles/Header.css';
import SiteLogo from './SiteLogo';
import { gsap } from 'gsap';
import Menu from '../assets/buttons/Menu';
import NavbarLinks from './pages/Navlinks';

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
               headerLogo={{fontSize: '12px'}} />
            </div> 
              {isSmallScreen &&
              <div style={{backgroundColor: showNavbar ? 'black': 'transparent'}} className='menu_wrapper'>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
              MenuContainer={{backgroundColor: showNavbar? 'black' : 'transparent'}}/>
              </div>}
              {!isSmallScreen &&
               <div className='navlinks_wrapper'>
               <NavbarLinks 
               setShowNavbar={setShowNavbar}
               headerNavbarLink= {{textTransform: 'uppercase',
               fontSize: '12px' }}/>
             </div>}
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Header;
