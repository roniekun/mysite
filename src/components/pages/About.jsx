import React from 'react'
import Footer from '../Footer';
import styles from './styles/About.module.css';

const About = ({setShowNavbar, isSmallScreen}) => {
  return (
    <div className={styles.aboutContainer}>

        <div className={styles.aboutUs}>
        <img src="images/bg-container.webp" />
        <h1>About me</h1>
      
        <p>A self-taught web developer with passion for creating stunning and functional websites. I enjoy crafting captivating webpage, strive to create visually appealing and intuitive interfaces that engage users and convey the essence of a brand or concept. Driven by a desire for constant growth, I challenge myself to learn and adapt to the ever-evolving world of web development. Every day, I dedicate time to refine my coding abilities and explore new techniques, ensuring that I stay at the forefront of industry trends.
          As I continue to expand my expertise, my goal is to become a well-rounded full-stack developer. I'm eager to explore back-end technologies, databases, and server management, so I can create end-to-end solutions that provide seamless functionality and an exceptional user experience.
          I believe in the power of collaboration and actively seek opportunities to work with like-minded individuals and contribute to open-source projects. Through collaboration and sharing knowledge, I aim to foster a supportive community that drives innovation and pushes the boundaries of what is possible. I look forward to connecting with you and bringing your web development ideas to life.
          Let's create something extraordinary together!
        </p>
        
        </div>
        <Footer isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}/>
    </div>
  )
}

export default About