import React from 'react'
import Footer from '../Footer';
import './styles/Home.css';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState} from 'react';

const Home = ({setShowNavbar, isSmallScreen}) => {

    const heroTexts = "Lorem ipsum dolor sit amet consectetur.-Aperiam dignissimos enim quod consequatur ad eius."
    const heroTextWords = heroTexts.split('-');
    const heroTextRefs = heroTextWords.map(() => useRef(null)); 
    const [fontSize, setFontSize] = useState();
    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const heroContainer = useRef(null);
    const heroContent = useRef(null);
    const ctaBtnRef = useRef(null);
    const heroTitleRefs = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const forthText = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const container = homeContainer.current;
  //   const text = heroText.current;

  //   gsap.to(text, {
  //     opacity: 1,
  //     x: 100,
  //     scrollTrigger: {
  //       trigger: container,
  //       start: 'top center', // Adjust as needed
  //       end: 'bottom center', // Adjust as needed
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  // }, []);


let xPercent = 0;
let xPercent2 = 0;

useEffect( () => {
  const tl = gsap.timeline();
  const title = heroTitleRefs.current;
  const container = containerRef.current;
  const slider = sliderRef.current;
  const initialPosition = container.getBoundingClientRect();

  tl.to(container,
    {
      opacity:1,
    }
  );

  tl.to(slider, 
    {opacity:1,
  }
    )

  tl.fromTo(
    title,
    {
      opacity: 0,
      y: 100,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );
  
  heroTextRefs.forEach((heroTextRef) => {
    tl.fromTo(
      heroTextRef.current,
      {
        y:20,
        opacity: 0,
        
      },
      {
        y:0,
        opacity:1,
        duration: .7,
      },"-=0.5"
    );
  });

  tl.fromTo
     (ctaBtnRef.current,
    {opacity:0},
     {visibility:'visible',
      opacity: 1} 
     );
  
  gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
  requestAnimationFrame(animate1);
  gsap.set(forthText.current, {left: forthText.current.getBoundingClientRect().width})
  requestAnimationFrame(animate2);

}, [])

const animate1 = () => {
  if(xPercent > 0){
    xPercent = -100;
  }

  gsap.set(firstText.current, {xPercent: xPercent})
  gsap.set(secondText.current, {xPercent: xPercent})
  requestAnimationFrame(animate1);
  xPercent += 0.1;
}

const animate2 = () => {
  if(xPercent2 < -100){
    xPercent2 = 0;
  }

  gsap.set(thirdText.current, {xPercent: xPercent2})
  gsap.set(forthText.current, {xPercent: xPercent2})
  requestAnimationFrame(animate2);
  xPercent2 -= 0.1;
}


const calculateFontSize = () => {

  const newFontSize = isSmallScreen ? '40' : window.innerWidth / 28;
  setFontSize(newFontSize);

};
useEffect(() => {
  calculateFontSize();
  window.addEventListener('resize', calculateFontSize);

  return () => {
    window.removeEventListener('resize', calculateFontSize);
  };
}, [window.innerWidth]);
 
  return (

    <div ref= {containerRef} className='home_container'>

 
      <div className='content'>
      <div ref={heroContainer} className='hero_container'>
        <div ref={sliderRef}  className='textslider_wrapper'>

        <div className='textslider_container'>
          <h1   className='bg_text' ref={firstText}  style={{ fontSize: `${fontSize}px`}}  >
            pitik south cotabato  pitik south cotabato  pitik south cotabato </h1>
           <h1 className='bg_text' ref={secondText} style={{ fontSize: `${fontSize}px` }} >
            pitik south cotabato  pitik south cotabato  pitik south cotabato </h1>
        </div>
          <div className='textslider_container'>
          <h1   className='bg_text2' ref={thirdText}  style={{ fontSize: `${fontSize}px`}}  >
            pitik south cotabato  pitik south cotabato  pitik south cotabato </h1>
           <h1 className='bg_text2' ref={forthText} style={{ fontSize: `${fontSize}px` }} >
            pitik south cotabato  pitik south cotabato  pitik south cotabato </h1>
        </div>
  
        </div>
        <div ref={heroContent} className='hero_content'>
        <div style={{overflow: 'hidden'}}>
        <h1 ref={heroTitleRefs} className='hero_title'> Hero Text*</h1>
        </div>
        <div className='herotext_container'>
        {heroTextWords.map((word, index) => (
         <div key={index} ref={heroTextRefs[index]} className="hero_text">
          {word}
         </div>
      ))}
    
        </div>

        <button ref={ctaBtnRef}className='cta_button'>Get in touch</button>
    
        </div>
 
      </div>

      <div className='one'>
          
      </div>

      <div className='two'>
       
      </div>
      </div>
  
      <Footer setShowNavbar={setShowNavbar}/>
      </div>
  )
}

export default Home