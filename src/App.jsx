import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
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

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScroll, setIsScroll] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isMediumScreen, setIsMediumScreen] = useState (window.innerWidth <= 1024 && window.innerWidth > 600)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);
  const [showNavbar, setShowNavbar] = useState();



  const handleResize = useCallback(() => {

    const screenWidth = window.innerWidth;
    setShowNavbar(screenWidth > 600  && window.scrollY === 0);
    setIsDesktop(screenWidth > 600);
    setIsSmallScreen(screenWidth <= 600);
    setIsMediumScreen(screenWidth <= 1024 && screenWidth > 600)

  }, [isDesktop, isSmallScreen, showNavbar, isMediumScreen]);

    const handleScroll = useCallback(() => {

    const currentScroll = window.scrollY;

    if (isDesktop){ 
      setShowNavbar(  scrollPosition > currentScroll || currentScroll <= 200 ); 
      setScrollPosition(currentScroll);
    }
    setIsScroll(window.scrollY > 200);
     console.log(`scroll is ${isScroll}`);

    }, [scrollPosition, isScroll]);

  

  useEffect(() => {
    const handleResizeEvent = () => {
      handleResize();
    };

    const handleScrollEvent = () => {
      handleScroll();
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
              <div className='app__container' id={`component-${theme}`}>

               {isSmallScreen && <PageModal showNavbar={showNavbar}/>}
                <Header
                  showNavbar={showNavbar}
                  isDesktop={isDesktop}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                />
                
               { isSmallScreen &&
                <Menu
                  showNavbar={showNavbar}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                  displayNames={false}
                  position= {'fixed'}
                  colorTheme={theme === "dark" ? 'white' : 'black'}
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
                  <Route path='/' element={<Home isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen} showNavbar={showNavbar} />} />
                  <Route path='/about' element={<About isSmallScreen={isSmallScreen} showNavbar={showNavbar} />} />
                  <Route path='/portfolio' element={<Portfolio isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} />
                  {/* <Route path='/blog' element={<Blog isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} /> */}
                  <Route path='/gallery' element={<Gallery isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} />
                  <Route path='/contact' element={<Contact isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} />
                  <Route path='/policy' element={<Policy isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} />
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

