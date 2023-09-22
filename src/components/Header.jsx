import {useEffect, useRef} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './styles/Header.module.css';
import SiteLogo from './SiteLogo';
import { gsap } from 'gsap';
import Menu from '../assets/buttons/Menu';
import NavbarLinks from './pages/Navlinks';
import Socials from '../assets/icons/Socials';

function Header({ isScroll, showNavbar, setShowNavbar, isSmallScreen, isMediumScreen, isDesktop, setColor}) {
  
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
               headerLogo={{fontSize: '16px',
                            fontWeight: '400',
                            color: setColor}} />
            </div> 
            { isSmallScreen &&
              <div className={styles.menuWrapper}>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
              setColor={setColor}
              MenuContainer={{}}/>
              </div>}
              { isMediumScreen &&
              <div className={styles.menuWrapper}>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
              setColor={setColor}
              MenuContainer={{}}/>
              </div>}
              {isDesktop &&
               <div className={styles.navLinksWrapper}>
               <NavbarLinks 
               setShowNavbar={setShowNavbar}
               headerNavbarWrapper={{ padding: '.3em', 
                                      borderRadius: '30px'}}
               headerNavbarLink= {{textTransform: 'uppercase',
               fontSize: '14px', fontWeight: '400', color: setColor}}/>
             </div>}
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Header;


    {/* {!isSmallScreen &&
             <div className='socials_wrapper'>
               <Socials displayIcons={true}
                headerIconContainer={{margin: '5px'}}
                headerSocialLink={{fill: 'lightgray'}}/>
             </div>
             } */}