import React from 'react';
import './About.css';
import Footer from '../Footer';
import AboutContent from './content/AboutContent';
import { ThemeContext } from '../../context/ThemeContext';


function About({isSmallScreen }) {

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <div id={`component-${theme}`} className='about__container'> 
      <AboutContent />
      <Footer isSmallScreen={isSmallScreen} /> 
    </div>

)}
</ThemeContext.Consumer>
  );
}

export default About;
