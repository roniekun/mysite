import React from 'react';
import './Menu.css';
import { Cross as Hamburger } from 'hamburger-react'; //https://hamburger-react.netlify.app/
import { ThemeContext } from '../../../../../context/ThemeContext';

const Menu = ({ showNavbar,
               setShowNavbar,
                AppMenuContainer,
                  MenuContainer }) => {
  
  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log("menu is clicked");
  };
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div style={{...AppMenuContainer,...MenuContainer}} className='menu_container'>
              <Hamburger onClick={handleClick} toggled={showNavbar} toggle={setShowNavbar} 
              color= {showNavbar? '#fafafa': '#fafafa' } 
              hideOutline={false}
               distance='sm' duration={0.3} size={16} />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;
