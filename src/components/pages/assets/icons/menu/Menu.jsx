import React from 'react';
import './Menu.css';
import { Twirl as Hamburger } from 'hamburger-react';
import { ThemeContext } from '../../../../../context/ThemeContext';

const Menu = ({ position, showNavbar, isSmallScreen, setShowNavbar }) => {
  
  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log("menu is clicked");
  };
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div style={{position:position}} className='menu_container'>
          {isSmallScreen  &&
              <Hamburger onClick={handleClick} toggled={showNavbar} toggle={setShowNavbar} 
              color= {showNavbar? '#fafafa': '#fafafa' } 
              hideOutline={false}
               distance='sm' duration={0.3} size={28} />}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;
