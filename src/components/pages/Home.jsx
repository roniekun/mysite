import React from 'react'
import Footer from '../Footer';
import './styles/Home.css';
import SiteLogo from '../SiteLogo';

const Home = () => {
  return (
    <div className='home_container'>
 
      <div className='content'>
      <div className='hero_container'>
        <h1>Hero</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dignissimos enim quod consequatur ad eius, rerum similique impedit, voluptatibus aliquam,
           a tempore ipsam voluptas magni alias voluptatum perferendis iusto obcaecati.</p>
      </div>

      <div className='one'>
      <h1 className='title'> *Website Content* </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus veniam quasi sequi! Reiciendis omnis explicabo eius nemo numquam dolores vitae repudiandae exercitationem facere accusantium. 
          Ut nemo praesentium quae temporibus iste.</p>
       <img className='hero_img' src="" alt="hero image" />
       <img src="" alt="" />
      </div>
      <div className='two'>
      <h1>Pitik South Cotabato</h1>
        <h1>Pitik South Cotabato</h1>
        <h1>Pitik South Cotabato</h1>
        <h1>Pitik South Cotabato</h1>
      </div>
      <div className='three'>
        <h1>Pitik South Cotabato</h1>
        <h1>Pitik South Cotabato</h1>
        <h1>Pitik South Cotabato</h1>
        <h1>Pitik South Cotabato</h1>
      </div>
      </div>
  
      <Footer/>
      </div>
  )
}

export default Home