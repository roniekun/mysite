import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";
import './ToggleTheme.css';

const ToggleTheme = ({ isSmallScreen, fontColor, position,height,width }) => {
  const { toggleTheme,theme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div style={{ position: position, height: height, width: width}} className='toggle__component'>
      {isSmallScreen && <h3  style={{ color: fontColor, padding: '20px' }}>Toggle theme</h3>}
      <input
        type="checkbox"
        id="checkboxInput"
        onChange={handleToggleTheme}
        checked={theme==='dark'}
      />
      <label  htmlFor="checkboxInput" className="toggleSwitch" />
    </div>
  );
};

export default ToggleTheme;
