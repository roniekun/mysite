import React from 'react'
import './PortfolioContent.css';
import { ThemeContext } from '../../../context/ThemeContext';



const PortfolioContent = () => {
 
  

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <>
      <div id={`component-${theme}`} className='portfolio__first__section' >

      <div className='hero__text__container'>
      <h1 className='hero__text'>Design</h1>
      <h1 className='hero__text'>Build</h1>
      <h1 className='hero__text'>Deploy</h1>
      </div>
      <div className='features'>
        <div className='grid_item'>Responsive</div>
        <div className='grid_item'>Animation</div>
        <div className='grid_item'>Component-Based</div>
        <div className='grid_item'>Interactive</div>
        <div className='grid_item'>Fast Rendering</div>
   
      </div>

    <div className='card_container'>
        <p className='format_text'> Specialize in creating stunning website landing pages and portfolios 
                that showcase your unique brand and captivate your audience. <br />
                With my expertise in web design and content creation, I help businesses
                and individuals establish a strong online presence that leaves a lasting impression.</p>

                <div className='cards'>
                  
                <div className='card_item'>Showcase Your Expertise</div>
                <div className='card_item'>Reach Global Audience</div>
                <div className='card_item'>Stablish Your Brand Identity</div>
             
              

             </div>
    </div>
      </div>

      <div id={`component-${theme}`} className='portfolio__second__section'>


      
      <div className='services_container'>

      <h2 className='ptag_portfolio_title'>Website Landing Pages</h2>
      <p className='portfolio_ptag'>Crafts visually appealing and user-friendly landing pages that effectively communicate your message and drive conversions.
      Whether you're launching a new product, promoting a service, or running a campaign, our landing pages will capture your audience's attention and generate measurable results.
      </p>
      </div>


      <div className='services_container'>
      <h2 className='ptag_portfolio_title'>Portfolio Creation</h2>
      <p className='portfolio_ptag'> Stand out from the competition with a professionally designed portfolio that showcases your skills, projects, and accomplishments.
        Tailor each portfolio to reflect your personal brand or company image, ensuring it leaves a memorable impact on potential clients and employers.
      </p>
      </div>


  

        </div>
        
      </>
        )}
        </ThemeContext.Consumer>

  )
}

export default PortfolioContent