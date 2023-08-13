import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import data from './ImageData';
import './ObjectParallax.css';

const ObjectParallax = () => {
  return (
    <ParallaxProvider>
      <div className="parallax-container">
        {data.map((item) => (
          <Parallax key={item.id} className="parallax-item" y={[20, -20]}>
            <div className="image-container">
              <img src={item.imageUrl} alt={item.caption} />
              <div className="caption">{item.caption}</div>
            </div>
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
  );
};

export default ObjectParallax;
