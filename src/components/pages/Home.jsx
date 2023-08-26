import React from 'react'
import Footer from '../Footer';
import './styles/Home.css';
import { gsap } from 'gsap';
import { useRef, useEffect, useState} from 'react';



const Home = ({setShowNavbar, isSmallScreen}) => {

  const [fontSize, setFontSize] = useState(); 
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

let xPercent = 0;

useEffect( () => {
  gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
  requestAnimationFrame(animate);
}, [])

const animate = () => {
  if(xPercent > 0){
    xPercent = -100;
  }
  gsap.set(firstText.current, {xPercent: xPercent})
  gsap.set(secondText.current, {xPercent: xPercent})
  requestAnimationFrame(animate);
  xPercent += 0.1;
}

const calculateFontSize = () => {

  const newFontSize = isSmallScreen ? '40' : window.innerWidth / 16;
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
    <div className='home_container'>
 
      <div className='content'>
      <div className='hero_container'>
        <div className='textslider_wrapper'>
        <div   ref={slider} className='textslider_container'>
          <h1   className='bg_text' ref={firstText}  style={{ fontSize: `${fontSize}px`}}  >
            pitik south cotabato </h1>
           <h1 className='bg_text' ref={secondText} style={{ fontSize: `${fontSize}px` }} >
            pitik south cotabato</h1>
        </div>
        </div>
        <div className='hero_content'>
        <h1>Hero</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aperiam dignissimos enim quod consequatur ad eius.</p>
          <button className='cta_button'>Call to action</button>
        </div>
   
 
      </div>

      <div className='one'>
      <h1 className='title'> *Website Content* </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus veniam quasi sequi!  
        </p>
       <img className='hero_img' src="" alt="image" />
       <img src="" alt="" />
      </div>
      <div className='two'>
      <h1></h1>
        <h1></h1>
        <h1>Pitik South Cotabato</h1>
        <h1>Pitik South Cotabato</h1>
        <h1>Pitik South Cotabato</h1>
        <h1>Pitik South Cotabato</h1>
        <h1></h1>
        <h1></h1>
      </div>
      <div className='three'>
        
      </div>
      </div>
  
      <Footer setShowNavbar={setShowNavbar}/>
      </div>
  )
}

export default Home