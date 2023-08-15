import React from 'react';
import './styles/About.css';
import Footer from '../Footer';
import AboutContent from './content/AboutContent';
import { ThemeContext } from '../../context/ThemeContext';
import NavbarLinks from './content/NavbarContent/NavbarLinks';



function About({isSmallScreen, setShowNavbar }) {

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <div id={`component-${theme}`} className='about_container'> 
      <AboutContent />
      <Footer isSmallScreen={isSmallScreen} /> 
    </div>

)}
</ThemeContext.Consumer>
  );
}

export default About;
