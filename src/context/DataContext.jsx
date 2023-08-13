
import React, { createContext, useState,  useEffect, useCallback} from "react";

const DataContext = createContext();

const DataProviderProvider = ({ children }) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [showNavbar, setShowNavbar] = useState(window.innerWidth > 768);
  
    const handleResize = useCallback(() => {
      const screenWidth = window.innerWidth;
      setIsDesktop(screenWidth > 768);
      setShowNavbar(screenWidth > 768);
      setIsSmallScreen(screenWidth <= 768);
    }, []);
  
    const handleScroll = useCallback(() => {
      const currentScroll = window.scrollY;
      setShowNavbar(scrollPosition > currentScroll || currentScroll === 0);
      setScrollPosition(currentScroll);
    }, [scrollPosition]);
  
    useEffect(() => {
      const handleResizeEvent = () => {
        handleResize(isDesktop);
      };
  
      const handleScrollEvent = () => {
        handleScroll(scrollPosition);
      };
  
      window.addEventListener('resize', handleResizeEvent);
      if (isDesktop) {
        window.addEventListener('scroll', handleScrollEvent);
      }
  
      return () => {
        window.removeEventListener('resize', handleResizeEvent);
        window.removeEventListener('scroll', handleScrollEvent);
      };
    }, [handleResize, handleScroll, isDesktop, scrollPosition]);
  
  return (
    <DataContext.Provider value={{ theme, toggleTheme }}> 
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

