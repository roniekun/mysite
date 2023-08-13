import React from 'react';
import './About.css';
import Footer from '../Footer';
import AboutContent from './content/AboutContent';
import { ThemeContext } from '../../context/ThemeContext';
import NavbarLinks from './content/NavbarContent/NavbarLinks';



function About({isSmallScreen, setShowNavbar }) {

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <div id={`component-${theme}`} className='about_container'> 
        {!isSmallScreen &&<NavbarLinks AboutNavbarLinks={{position:'absolute',
                                            top:'0', 
                                            right: '0',
                                            zIndex: '9999'}}
        setShowNavbar={setShowNavbar}
        isSmallScreen={isSmallScreen}/>}
      <AboutContent />
      <Footer isSmallScreen={isSmallScreen} /> 
    </div>

)}
</ThemeContext.Consumer>
  );
}

export default About;
