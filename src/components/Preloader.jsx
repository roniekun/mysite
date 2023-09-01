import React, { useEffect, useRef } from 'react';
import './styles/Preloader.css';
import { gsap } from 'gsap';

const Preloader = () => {
  const containerRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;

    const initialPosition = container.getBoundingClientRect();
  
      gsap.fromTo(logo,
        {opacity:0},
        {opacity: 1}
        );

      gsap.to(container, {
        y: -initialPosition.height,
        delay: 2,
        opacity: 1,
        duration: 1,

        onComplete: () => { 
        },
      });
   
  }, []);

  return (
    <div ref={containerRef} className='preloader_container'>
      <h1 ref={logoRef}>PSCLOGO</h1>
    </div>
  );
};

export default Preloader;
