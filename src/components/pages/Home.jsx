import React from 'react'
import Footer from '../Footer';
import './styles/Home.css';
import { gsap } from 'gsap';
import { useRef, useEffect, useState} from 'react';



const Home = ({setShowNavbar, isSmallScreen}) => {

  const [fontSize, setFontSize] = useState(); 
  const firstText = useRef();
  const secondText = useRef();
  const thirdText = useRef();
  const forthText = useRef();

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


const calculateFontSize = () => {

  const newFontSize = isSmallScreen ? '45' : window.innerWidth / 32;
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

        <div  className='textslider_container'>
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
        <div className='hero_content'>
        <h1>PSC HERO*</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aperiam dignissimos enim quod consequatur ad eius.</p>
          <button className='cta_button'>*cta</button>
        </div>
 
      </div>

      <div className='one'>
        
      <h1 className='title'> *Website Content* </h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus veniam quasi sequi!  
        </p >
       <img className='hero_img' src="" alt="image" />
       <img src="" alt="" />
       <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nihil corrupti, ut impedit expedita at, dolore doloremque quia molestiae, ipsam iure perspiciatis! Dolorem, omnis placeat similique vel nam eum autem.</p>
      </div>
      <div className='two'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum, libero vel tincidunt fringilla, justo felis tempus libero, ut vulputate neque risus ut velit. Vivamus scelerisque semper nisi, at lacinia erat lobortis in. Cras interdum ante vel dolor fringilla, at commodo ligula laoreet. Nulla facilisi. Nullam non justo vitae lorem fringilla suscipit.
          Suspendisse potenti. Sed at ultricies nibh, at hendrerit justo. Ut ultrices neque eget metus rhoncus, ut pharetra risus egestas. Suspendisse vel purus eu neque dictum gravida. Sed auctor diam sed lectus tristique, ut interdum eros auctor. Fusce malesuada aliquet tincidunt. Sed vel cursus odio. Integer in diam at purus sollicitudin feugiat. Duis ac ante lacinia, laoreet turpis eu, blandit mauris.
          Pellentesque a arcu a erat tristique malesuada. Nam eu quam ut orci hendrerit euismod. Curabitur non libero a tellus cursus tristique. Aenean vel nibh odio. Fusce ut mi euismod, sagittis ante in, laoreet quam. Sed id justo nulla. Nullam non sapien nec nulla hendrerit imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat.</p>
      </div>
      </div>
  
      <Footer setShowNavbar={setShowNavbar}/>
      </div>
  )
}

export default Home