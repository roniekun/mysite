import React from 'react'
import { gsap } from 'gsap';
import './styles/InfiniteSlider.css';

const InfiniteSlider = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const forthText = useRef(null);

    let xPercent = 0;
    let xPercent2 = 0;

useEffect( () => {

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

  return (

    <div ref={sliderRef}  className='textslider_wrapper'>

    <div className='textslider_container'>
      <h1   className='bg_text' ref={firstText}  style={{ fontSize: `${fontSize}px`}}  >
        pitik south cotabato  pitik south cotabato  pitik south cotabato </h1>
      <h1 className='bg_text' ref={secondText} style={{ fontSize: `${fontSize}px` }} >
        pitik south cotabato  pitik south cotabato  pitik south cotabato </h1>
    </div >
      <div className='textslider_container'>
      <h1   className='bg_text2' ref={thirdText}  style={{ fontSize: `${fontSize}px`}}  >
        pitik south cotabato  pitik south cotabato  pitik south cotabato </h1>
      <h1 className='bg_text2' ref={forthText} style={{ fontSize: `${fontSize}px` }} >
        pitik south cotabato  pitik south cotabato  pitik south cotabato </h1>
    </div>
    </div>
 
  )
}

export default InfiniteSlider