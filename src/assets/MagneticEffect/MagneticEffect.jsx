import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticEffect({ children }) {
  const magnetic = useRef(null);

  const xTo = (x) => gsap.to(magnetic.current, { x, duration: 0.3,  });
  const yTo = (y) => gsap.to(magnetic.current, { y, duration: 0.3,  });

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2 );
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      gsap.to(magnetic.current, { x: 0, y: 0, duration: .3 });
      xTo(0.5);
      yTo(0.5);
    };

    magnetic.current.addEventListener('mousemove', mouseMove);
    magnetic.current.addEventListener('mouseleave', mouseLeave);


    return () => {
        if (magnetic.current) {
      magnetic.current.removeEventListener('mousemove', mouseMove);
      magnetic.current.removeEventListener('mouseleave', mouseLeave);

          }
    gsap.killTweensOf(magnetic.current);
  };
    
  
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
