import React, { useState } from 'react'
import './AboutContent.css'
// import ReadMoreButton from '../../buttons/ReadMoreButton';
import { ThemeContext } from '../../../context/ThemeContext';

const AboutContent = () => {
  const [isClicked,setIsClicked]= useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  return (
    <ThemeContext.Consumer>
    {({ theme }) => (
    <div  id={`component-${theme}`} className='about__content__container'>
        <section className='about__first__section'>

        {/* <div className= {isClicked ? 'about__text__container__clicked' : 'about__text__container' }> */}

        <div className='about__text__container'>
                        <h1> About Me</h1>
                        <br />
                        <br />
                       
                       <p > A self-taught web developer with passion for creating stunning and functional websites. 
                        I enjoy crafting captivating webpage, strive to create visually appealing and intuitive interfaces that engage users and convey the essence of a brand or concept. 
                        Driven by a desire for constant growth, I challenge myself to learn and adapt to the ever-evolving world of web development.
                        Every day, I dedicate time to refine my coding abilities and explore new techniques, ensuring that I stay at the forefront of industry trends.
                        </p><br/>
                        <p>
                        As I continue to expand my expertise, my goal is to become a well-rounded full-stack developer.
                        I'm eager to explore back-end technologies, databases, and server management,
                        so I can create end-to-end solutions that provide seamless functionality and an exceptional user experience.
                        </p><br/>
                        <p>
                        I believe in the power of collaboration and actively seek opportunities to work with like-minded individuals and contribute to open-source projects.
                        Through collaboration and sharing knowledge, I aim to foster a supportive community that drives innovation and pushes the boundaries of what is possible.
                        I look forward to connecting with you and bringing your web development ideas to life.<br/>
                        Let's create something extraordinary together!
                        </p>
         


        </div>
        {/* <ReadMoreButton onClick={handleClick}
                       isClicked={isClicked}/> */}
        </section>

    </div>
      )}
      </ThemeContext.Consumer>
  )
}

export default AboutContent