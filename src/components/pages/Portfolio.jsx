import React from 'react';
import './Portfolio.css';
import PortfolioContent from './content/PortfolioContent';
import Footer from '../Footer';

function Portfolio({showNavbar, isSmallScreen}) {
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
