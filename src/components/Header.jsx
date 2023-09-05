import {useEffect, useState, useRef} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './styles/Header.css';
import SiteLogo from './SiteLogo';
import Menu from './pages/assets/buttons/Menu';
import { gsap } from 'gsap';
import NavbarLinks from './pages/Navlinks';
import { Cross as Hamburger } from 'hamburger-react'; //https://hamburger-react.netlify.app/


function Header({ isScroll, showNavbar, setShowNavbar, isSmallScreen }) {
  
  const containerRef = useRef(null);
  const linksRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = () => {

      setIsOpen(!isOpen);
      console.log(isOpen);
  }


  useEffect(() => {
 
    gsap.fromTo(linksRef.current, {
      visibility: 'none', 
      opacity: 0,         
    }, {
      visibility: isOpen ? 'visible' : 'hidden', 
      opacity: isOpen ? 1 : 0,                   
      duration: 0.5,
    });

    gsap.to(containerRef.current, {
      y: isScroll ? -100 : 0,
      duration: 0.5,
      opacity: 1,
    });
  }, [isScroll, isOpen]);
  
 
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
          <div ref={containerRef} id={`component-${theme}`} className='header_container'>
            <div className='logo_wrapper'>
              <SiteLogo setShowNavbar={setShowNavbar}
              showNavbar={showNavbar}
               headerLogo={{color: isSmallScreen ? 'whitesmoke' : 'gray'}} />
            </div> 

            <div ref= {linksRef} className='navlinks_wrapper'>
            {!isSmallScreen && <NavbarLinks HomeNavbarLinks={{}}
                  HomeNavbarLink={{
                    textTransform: 'capitalize',
                    fontSize: '18px',
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
            {!isSmallScreen && <div className='toggle_wrapper' onClick={handleClick}> 
            <Hamburger hideOutline={false}
              distance='sm' duration={0.3} 
              color='gray'
              size={16}/> </div>}
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Header;
