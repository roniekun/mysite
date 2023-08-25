import React from 'react'
import Footer from '../Footer';
import './styles/About.css';

const About = ({setShowNavbar}) => {
  return (
    <div className='about_container'>

      <div className='content'>
        <div className='about-us'>
        <img src="" alt="" />
        <h1>About us</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magni suscipit assumenda pariatur perferendis, culpa, minima quos eaque facere vero non animi consequuntur quasi commodi sunt aliquam ad? Quasi, veniam molestias.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium explicabo dolore nihil et ut ipsa adipisci atque, quia tempore eaque officia minus aspernatur ullam dolor,
        recusandae necessitatibus illum vero eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod repellat minus impedit quia aut ducimus doloremque pariatur deserunt sunt dignissimos,
         odit magnam rerum atque voluptas labore quo amet accusantium!
        </p>
        </div>
        </div>
      <Footer setShowNavbar={setShowNavbar}/>
    </div>
  )
}

export default About