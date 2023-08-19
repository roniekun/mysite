import React from 'react'
import './Logo.css';

const Logo = () => {
  return (
    <div className='logo__container noise'>
 
     <div className='logo__section' style={{display:'flex', flexDirection: 'column',
                     justifyContent: 'center', alignItems:'center'}}>
      <div className='red__circle noise'></div>
        <div className='large__green__circle noise'></div>
      </div>
      <div className='logo__section' style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <div className='orange__circle noise'></div>
        <div className='yellow__rectangle noise'></div>
       
      </div>
      <div className='logo__section' style={{display:'flex', flexDirection:'column', 
                  justifyContent: 'space-between', alignItems: 'center'}}>
      <div className='small__green__circle noise'></div>
      <div className='orange__circle noise'></div>
      </div>
 
      <div className='logo__section' style={{display:'flex', flexDirection: 'column',
                     justifyContent: 'flex-start', alignItems:'center'}}>
        <div className='yellow_quarter__circle noise'></div>
        <div className='half__red__circle noise'></div>
        </div>

        
        </div>
  )
}

export default Logo