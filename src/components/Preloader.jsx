import React, { useEffect, useRef } from 'react';
import './styles/Preloader.css';
import { gsap } from 'gsap';

const Preloader = () => {
  const containerRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    document.body.style.overflow = 'hidden';

    const initialPosition = container.getBoundingClientRect();
    const tl = gsap.timeline({
     
      onComplete: () => {
        // Scroll to the top when the animation completes
        document.body.style.overflow = 'auto';

      // Kill the animation to prevent any lingering effects
      tl.kill();
      },
    });

    tl.fromTo(
      logo,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 }
    );

    tl.to(container, {
      y: -initialPosition.height,
      delay: 1,
      duration: 1,
    });

    gsap.to(logo, { y: initialPosition.height, duration: 1 }, '-=1');

        return () => {
      // Enable scroll in case the component is unmounted before the animation completes
      document.body.style.overflow = 'auto';

    };
  }, []);

  return (
    <div ref={containerRef} className='preloader_container'>
      <h1 className='preloader_logo' ref={logoRef}>
        <span>PSC</span>LOGO
      </h1>
    </div>
  );
};

export default Preloader;
