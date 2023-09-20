import React, { useEffect, useRef } from 'react';
import styles from './styles/Preloader.module.css';
import { gsap } from 'gsap';

const Preloader = () => {
  const containerRef = useRef(null);
  const coverRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    const cover = coverRef.current;
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
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1 }
    );

    tl.to(cover,{y:0, delay: 1, ease: 'linear'});

    tl.to(container, {
      y: -initialPosition.height,
      duration: 1,
    });

    gsap.to(logo, { y: initialPosition.height, duration: 1, scale: 1.1 }, '-=1');

        return () => {
      // Enable scroll in case the component is unmounted before the animation completes
      document.body.style.overflow = 'auto';

    };
  }, []);

  return (
    <div ref={containerRef} className={styles.preloaderContainer}>

      <div className={styles.logoContainer}>
      <div ref={coverRef} className={styles.cover}></div>
      <h1 className={styles.preloaderLogo} ref={logoRef}>
        R<span>k</span>
      </h1>
      </div>
    </div>
  );
};

export default Preloader;
