import React from 'react'
import Footer from '../Footer';
import './styles/Home.css';
import { gsap } from 'gsap';
import { useRef, useEffect, useState} from 'react';



const Home = ({setShowNavbar}) => {

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

  const newFontSize = window.innerWidth /15;
  setFontSize(newFontSize);

};
useEffect(() => {
  calculateFontSize();

  window.addEventListener('resize', calculateFontSize);

  return () => {
    window.removeEventListener('resize', calculateFontSize);
  };
}, []);

  return (
    <div className='home_container'>
 
      <div className='content'>
      <div className='hero_container'>
        <div   ref={slider} className='textslider_container'>
          <div className='bg_text' ref={firstText}>
          <h1  style={{ fontSize: `${fontSize}px` }}  >
            pitik south cotabato </h1>
          </div>
          <div className='bg_text' ref={secondText} >
          <h1 style={{ fontSize: `${fontSize}px` }} >
            pitik south cotabato</h1>
          </div>
        </div>
        <h1>Hero</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aperiam dignissimos enim quod consequatur ad eius.</p>
          <button className='cta_button'>Call to action</button>
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