import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.fromTo(
      container,
      { opacity: 0,},
      {
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
          // Animation complete, you can add any additional logic here.
        },
      }
    );
  }, []);

  return <div className='page_transition' ref={containerRef}>{children}</div>;
};

export default PageTransition;
