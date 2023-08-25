import React from 'react'
import Footer from '../Footer';
import './styles/Home.css';
import SiteLogo from '../SiteLogo';

const Home = ({setShowNavbar}) => {
  return (
    <div className='home_container'>
 
      <div className='content'>
      <div className='hero_container'>
        <h1>Hero</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aperiam dignissimos enim quod consequatur ad eius.</p>
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