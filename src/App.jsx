import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Community from './components/pages/Community';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Header from './components/Header';
import Home from './components/pages/Home';
import MagneticEffect from './assets/MagneticEffect/MagneticEffect';
import Menu from './components/pages/assets/buttons/Menu';
import Navbar from './components/Navbar';
import NavbarLinks from './components/pages/Navlinks';
import NotFound from './components/pages/NotFound';
import PageModal from './assets/Page-modal';
import Policy from './components/pages/Policy';
import Portfolio from './components/pages/Portfolio';
import Preloader from './components/Preloader';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
// import Lenis from '@studio-freight/lenis'

const App = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScroll, setIsScroll] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isMediumScreen, setIsMediumScreen] = useState (window.innerWidth <= 1024 && window.innerWidth > 600)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);
  const [showNavbar, setShowNavbar] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2900); 

  }, []);

        // const lenis = new Lenis()

        // lenis.on('scroll', (e) => {
        //   console.log(e)
        // })

        // function raf(time) {
        //   lenis.raf(time)
        //   requestAnimationFrame(raf)
        // }

        // requestAnimationFrame(raf)

  
  const handleResize = useCallback(() => {

    const screenWidth = window.innerWidth;

    setIsDesktop(screenWidth > 600);
    setIsSmallScreen(screenWidth <= 600);
    setIsMediumScreen(screenWidth <= 1024 && screenWidth > 600)

  }, [isDesktop, isSmallScreen, showNavbar, isMediumScreen]);

    const handleScroll = useCallback(() => {

    const currentScroll = window.scrollY;

    // if (isDesktop){ 
    //   setShowNavbar(  scrollPosition > currentScroll || currentScroll <= 200 ); 
    //   setScrollPosition(currentScroll);
    // }

      if (currentScroll<=600){
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

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeContext.Consumer>
          {({ theme }) => {
            return (
              isloading ?  <Preloader/> :
              <div className='app_container' id={`component-${theme}`}>
              <Header 
              isScroll={isScroll}
                        showNavbar={showNavbar}
                        setShowNavbar={setShowNavbar}
                        isSmallScreen={isSmallScreen}/>
              <PageModal showNavbar={showNavbar}/>
             
             {isScroll && 
              <MagneticEffect>
              <div className='floating_menu'>
              <Menu
              displayIcon={true}
              showNavbar={showNavbar}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
              displayNames={false}
              setIsScroll={setIsScroll}
              isScroll={isScroll}
              AppMenuContainer={{position: 'relative',
                                backgroundColor:'transparent',
                                }}
              />
            
            </div>
            </MagneticEffect>} 

                {!isSmallScreen && <NavbarLinks HomeNavbarLinks={{
                  top:'0', 
                  zIndex: '9999',
                  backgroundColor: isScroll ? 'transparent' : 'rgba(255,255,255,.9)',
                  position: 'fixed',
                  transition: '.5s',
                  transform:  isScroll ? 'translateY(-100%)': '',
                  width: '100%',
                  height: '50px',
                  paddingInline: '10%',
                  paddingBlock: '0%',
                  justifyContent: 'center'}}
                  
                  HomeNavbarLink={{textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: '14px',
                                  fontFamily: 'sans-serif'}}

                  setShowNavbar={setShowNavbar}
                  isSmallScreen={isSmallScreen}/>}
                
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
                  setShowNavbar={setShowNavbar} />}
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

