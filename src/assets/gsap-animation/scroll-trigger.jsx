
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollTriggerComponent = () => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const item = itemRef.current;

    gsap.from(item, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: container,
        start: 'top center', // Adjust as needed
        end: 'bottom center', // Adjust as needed
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="item" ref={itemRef}>
        ScrollTrigger Animation Content
      </div>
    </div>
  );
};

export default ScrollTriggerComponent;
