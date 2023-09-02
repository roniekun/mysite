import {useEffect, useRef} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './styles/Header.css';
import SiteLogo from './SiteLogo';
import Menu from './pages/assets/buttons/Menu';
import { gsap } from 'gsap';
import NavbarLinks from './pages/Navlinks';

function Header({ isScroll, showNavbar, setShowNavbar, isSmallScreen }) {
  
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current,
      {opacity:1,
      duration:.3});
    
    gsap.to(containerRef.current,
      {y: isScroll ? -100 : 0,
          duration: .3 })
  }, [isScroll])
  
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
          <div ref={containerRef} id={`component-${theme}`} className='header_container'>
            <div className='logo_wrapper'>
              <SiteLogo setShowNavbar={setShowNavbar}
              showNavbar={showNavbar}
               headerLogo={{color: 'gray'}} />
            </div>

            <div className='navlinks_wrapper'>
            {!isSmallScreen && <NavbarLinks HomeNavbarLinks={{}}
                  HomeNavbarLink={{
                    textTransform: 'uppercase',
                    fontSize: '16px',
                    fontWeight:'500'
                  }}
                  setShowNavbar={setShowNavbar}
                  isSmallScreen={isSmallScreen}/>}
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
