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
    const tl = gsap.timeline();
  
      tl.fromTo(logo,
        {opacity:0,
         y:20},
        {opacity: 1,
         y:0}
        );

      tl.to(container, {
        y: -initialPosition.height,
        delay: 1.5,
        duration: .8,

      });
        gsap.to (logo, 
        {y:initialPosition.height,
         duration: .8},"-=.8");

  }, []);

  return (
    <div ref={containerRef} className='preloader_container'>
      <h1 className='preloader_logo' ref={logoRef}><span>PSC</span>LOGO</h1>
    </div>
  );
};

export default Preloader;
