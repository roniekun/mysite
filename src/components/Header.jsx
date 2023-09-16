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
               headerLogo={{fontSize: '14px'}} />
            </div> 
              {isSmallScreen &&
              <div className='menu_wrapper'>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
              MenuContainer={{}}/>
              </div>}
              {!isSmallScreen &&
               <div className='navlinks_wrapper'>
               <NavbarLinks 
               setShowNavbar={setShowNavbar}
               headerNavbarLink= {{textTransform: 'uppercase',
               fontSize: '14px', fontWeight: '500' }}/>
             </div>}
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Header;
