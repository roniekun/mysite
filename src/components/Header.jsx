import {useEffect, useRef} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './styles/Header.module.css';
import SiteLogo from './SiteLogo';
import { gsap } from 'gsap';
import Menu from '../assets/buttons/Menu';
import NavbarLinks from './pages/Navlinks';
import Socials from '../assets/icons/Socials';

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
          <div ref={containerRef} id={`component-${theme}`} className={styles.headerContainer}>
            <div className={styles.logoWrapper}>
              <SiteLogo setShowNavbar={setShowNavbar}
              showNavbar={showNavbar}
               headerLogo={{fontSize: '14px',
                            fontWeight: '600'}} />
            </div> 
              {isSmallScreen &&
              <div className={styles.menuWrapper}>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
              MenuContainer={{}}/>
              </div>}
              {!isSmallScreen &&
               <div className={styles.navLinksWrapper}>
               <NavbarLinks 
               setShowNavbar={setShowNavbar}
               headerNavbarWrapper={{ border: '1px solid white',
                                      padding: '.5em', 
                                      borderRadius: '30px', 
                                      paddingInline: '1.6em'}}
               headerNavbarLink= {{textTransform: 'capitalize',
               fontSize: '14px', fontWeight: '600',}}/>
             </div>}
             {/* {!isSmallScreen &&
             <div className='socials_wrapper'>
               <Socials displayIcons={true}
                headerIconContainer={{margin: '5px'}}
                headerSocialLink={{fill: 'lightgray'}}/>
             </div>
             } */}
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Header;
