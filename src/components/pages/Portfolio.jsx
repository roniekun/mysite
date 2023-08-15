import React from 'react';
import './styles/Portfolio.css';
import PortfolioContent from './content/PortfolioContent';
import Footer from '../Footer';
import NavbarLinks from './content/NavbarContent/NavbarLinks';

function Portfolio({showNavbar, isSmallScreen, setShowNavbar}) {
  return (
    <>
        <div className='portfolio__container'>
        <PortfolioContent/>
       </div>
      <Footer  isSmallScreen={isSmallScreen}/>
    </>
  );
}

export default Portfolio;
