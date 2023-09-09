import React, { useState } from 'react';
import './StringCharacterMapper.css';
import { ThemeContext } from '../../../../context/ThemeContext';

function StringCharacterMapper({colorTheme,customString,onClick}) {


  const [hoveredIndex, setHoveredIndex] = useState();
  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <ThemeContext.Consumer>
    {({ theme }) => (
    <div id={`component-${theme}`} className="custom__string__container">
      <span className="custom__string">
        {customString.split('').map((char, index) => {
          const isHovered = hoveredIndex === index;
          const isAdjacent = hoveredIndex === index - 1 || hoveredIndex === index + 1;
          const leftAdjacent = hoveredIndex === index - 2;
          const rightAdjacent = hoveredIndex === index + 2;
          return (
            <span
              key={index}
              className={`char__item ${isHovered ? 'hovered' : ''}
              ${isAdjacent ? 'adjacent' : ''}
              ${rightAdjacent ? 'far__adjacent' : ''}
              ${leftAdjacent ? 'far__adjacent' : ''}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              onClick={onClick}
              color={colorTheme}
            >
              { char}
            </span>
          );
        })}
      </span>
      </div>
      )}
      </ThemeContext.Consumer>

  );
}

export default StringCharacterMapper;
