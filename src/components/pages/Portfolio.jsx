import React from 'react';
import './Portfolio.css';
import PortfolioContent from './content/PortfolioContent';
import Footer from '../Footer';
import NavbarLinks from './content/NavbarContent/NavbarLinks';

function Portfolio({showNavbar, isSmallScreen, setShowNavbar}) {
  return (
    <>
        <div className='portfolio__container'>
        {!isSmallScreen && <NavbarLinks PortfolioNavbarLinks={{position:'absolute',
                                            top:'0', 
                                            zIndex: '9999',
                                            color: '#181818'}}
           PortfolioNavbarLink={{color: '#181818'}}                                   
          setShowNavbar={setShowNavbar}
          isSmallScreen={isSmallScreen}/>}
        <PortfolioContent/>
       </div>
      <Footer  isSmallScreen={isSmallScreen}/>
    </>
  );
}

export default Portfolio;
