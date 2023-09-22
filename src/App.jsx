import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import About from './components/pages/About';
import Community from './components/pages/Community';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import { gsap } from 'gsap';
import Home from './components/pages/Home';
import MagneticEffect from './assets/MagneticEffect/MagneticEffect';
import Menu from './assets/buttons/Menu';
import Navbar from './components/Navbar';
import NotFound from './components/pages/NotFound';
import PageModal from './assets/Page-modal';
import Policy from './components/pages/Policy';
import Portfolio from './components/pages/Portfolio';
import Preloader from './components/Preloader';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import Lenis from '@studio-freight/lenis'

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScroll, setIsScroll] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isMediumScreen, setIsMediumScreen] = useState (window.innerWidth <= 1024 && window.innerWidth > 600)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [showNavbar, setShowNavbar] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const menuRef = useRef(null);

  useEffect(() => {
    const delay = 2900; // 2 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const lenis = new Lenis()
  //smooth scroll
  lenis.on('scroll', (e) => {
    console.log(e)
  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  
  const handleResize = useCallback(() => {

    const screenWidth = window.innerWidth;

    setIsDesktop(screenWidth > 1024);
    setIsSmallScreen(screenWidth <= 600);
    setIsMediumScreen(screenWidth <= 1024 && screenWidth > 600)

  }, [isDesktop, isSmallScreen, showNavbar, isMediumScreen]);

    const handleScroll = useCallback(() => {

    const currentScroll = window.scrollY;

    // if (isDesktop){ 
    //   setShowNavbar(  scrollPosition > currentScroll || currentScroll <= 200 ); 
    //   setScrollPosition(currentScroll);
    // }

      if (currentScroll<=700){
        setShowNavbar(false);
      }
    }, [scrollPosition, isScroll]);

  useEffect(() => {
    const handleResizeEvent = () => {
      handleResize();
    };

    const handleScrollEvent = () => {
      handleScroll();
      setIsScroll(window.scrollY > window.innerWidth/2);
    };

    window.addEventListener('resize', handleResizeEvent);
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleResize, handleScroll]);


  useEffect(() => {

    if (isScroll) {
      gsap.to(menuRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(menuRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [isScroll]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeContext.Consumer>
          {({ theme }) => {
            return (
              
              <div className={styles.appContainer} id={`component-${theme}`}>
               {isLoading && <Preloader/> }
              <PageModal showNavbar={showNavbar}/>

              <div ref={menuRef}  className={styles.floatingMenuWrapper}>
              <MagneticEffect>
              <div>
              <div className={styles.floatingMenu}>
              { isDesktop ? (
              <MagneticEffect>
                <div>
                  <Menu
                    displayIcon={true}
                    showNavbar={showNavbar}
                    isSmallScreen={isSmallScreen}
                    setShowNavbar={setShowNavbar}
                    displayNames={false}
                    setIsScroll={setIsScroll}
                    isScroll={isScroll}
                    setColor={'white'}
                    AppMenuContainer={{
                    position: 'relative',
                    backgroundColor: 'transparent',
                    }}
                  />
                </div>
              </MagneticEffect>
            ) : (
              <div>
                <Menu
                  displayIcon={true}
                  showNavbar={showNavbar}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                  displayNames={false}
                  setIsScroll={setIsScroll}
                  setColor={'white'}
                  isScroll={isScroll}
                  AppMenuContainer={{
                  position: 'relative',
                  backgroundColor: 'transparent',
                  }}
                />
              </div>
            )}
                      
            </div>
            </div>
            </MagneticEffect>
            </div>

                
                <Navbar
                  showNavbar={showNavbar}
                  isDesktop={isDesktop}
                  isMediumScreen={isMediumScreen}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                  isScroll={isScroll}
                />
  
                <Routes>
                  <Route path='/' 
                  element={<Home 
                  isDesktop={isDesktop}
                  isSmallScreen={isSmallScreen} 
                  isMediumScreen={isMediumScreen} 
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                  isScroll={isScroll} />}
                  />
                  
                  <Route path='/about' 
                  element={<About 
                  isSmallScreen={isSmallScreen} 
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                  isDesktop={isDesktop}
                  isScroll={isScroll}
                  isMediumScreen={isMediumScreen} />}
                  />

                  <Route path='/community' 
                  element={<Community
                  isSmallScreen={isSmallScreen}  
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar} />} />

                  {/* <Route path='/blog' element={<Blog isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} /> */}
                 
                  <Route path='/gallery' 
                  element={<Gallery 
                  isSmallScreen={isSmallScreen}  
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar} />} />

                  <Route path='/contact'
                   element={<Contact 
                   isDesktop={isDesktop}
                   isScroll={isScroll}
                   isMediumScreen={isMediumScreen}
                   isSmallScreen={isSmallScreen}  
                   showNavbar={showNavbar}
                   setShowNavbar={setShowNavbar} />} />

                  <Route path='/policy' 
                  element={<Policy 
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}  
                  showNavbar={showNavbar} />} />
                  <Route component={NotFound} />
                </Routes>
                {/* <AutoscrollButton
                  isSmallScreen={isSmallScreen}
                  isDesktop={isDesktop}
                  showNavbar={showNavbar}
                /> */}
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

