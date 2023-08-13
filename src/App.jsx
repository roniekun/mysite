import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Gallery from './components/pages/Gallery';
import NotFound from './components/pages/NotFound';
import Policy from './components/pages/Policy';
import Menu from './components/pages/assets/icons/menu/Menu';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import PageModal from './assets/PageModal'
import { color } from 'framer-motion';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScroll, setIsScroll] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isMediumScreen, setIsMediumScreen] = useState (window.innerWidth <= 1024 && window.innerWidth > 600)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);
  const [showNavbar, setShowNavbar] = useState();

  const handleResize = useCallback(() => {

    const screenWidth = window.innerWidth;

    setIsDesktop(screenWidth > 600);
    setIsSmallScreen(screenWidth <= 600);
    setIsMediumScreen(screenWidth <= 1024 && screenWidth > 600)

    console.log(`Navigation bar triggerd at useCallback handleresize: ${showNavbar}`)

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
      console.log(`Navigation bar triggerd at useCallback handleScroll: ${showNavbar}`)

    }, [scrollPosition, isScroll]);

  

  useEffect(() => {
    const handleResizeEvent = () => {
      handleResize();
    };

    const handleScrollEvent = () => {
      handleScroll();
      setIsScroll(window.scrollY > window.innerWidth/2);
      console.log(`scroll is ${isScroll}`);
      console.log(`Navigation bar triggerd at useEffect: ${showNavbar}`)
    };

    window.addEventListener('resize', handleResizeEvent);
    if (isDesktop) {
      window.addEventListener('scroll', handleScrollEvent);
    }

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
              <div className='app_container' id={`component-${theme}`}>

               {isSmallScreen && <PageModal showNavbar={showNavbar}/>}

              {isScroll &&
              <div className='floating_menu'>
              <Menu
              showNavbar={showNavbar}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
              displayNames={false}
              AppMenuContainer={{position: 'relative',
                                backgroundColor:'transparent'
                                }}
              colorTheme={theme === "dark" ? 'white' : 'black'}
             />
            
            </div>} 

             { isSmallScreen &&  <Menu
              showNavbar={showNavbar}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
               />}
 
                
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
                  setShowNavbar={setShowNavbar} />} />
                  
                  <Route path='/about' 
                  element={<About 
                  isSmallScreen={isSmallScreen} 
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar} />} />
                  <Route path='/portfolio' 
                  element={<Portfolio 
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

