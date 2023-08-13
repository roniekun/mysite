import React, { useState, useEffect} from 'react';
import './AutoscrollButton.css';
import { ThemeContext } from "../../context/ThemeContext";


function AutoscrollButton({ isSmallScreen, showNavbar }) {
  const [isVisible, setIsVisible] = useState(false);

  //this handle the click event when button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  //applies the condition 
  const handleScroll = (setIsVisible, isSmallScreen, showNavbar) => {
    const scrollThreshold = 120;
    setIsVisible(window.pageYOffset > scrollThreshold && !(isSmallScreen && showNavbar)); //false
  };

  //this part will handle scroll event
  useEffect(() => {
    const handleScrollEvent = () => handleScroll(setIsVisible, isSmallScreen, showNavbar);

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [isSmallScreen, showNavbar]);



  useEffect(() => {
    handleScroll(setIsVisible, isSmallScreen, showNavbar); // setisVisible to true base on the value of the dependencies
  }, [showNavbar, isSmallScreen]);


  return (
    <ThemeContext.Consumer>
      {theme => (
        <div id={`component-${theme}`}>
          <button
            className={isVisible ? 'btn' : 'hidden'}
            onClick={handleScrollToTop}
          >
            <h3>Back to top</h3>
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default AutoscrollButton;