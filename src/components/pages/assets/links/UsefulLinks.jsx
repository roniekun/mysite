import React from 'react';
import './UsefulLinks.css';

const UsefulLinks = () => {
  return (
    <div className='link__container' >
      <h4 style={{ paddingBottom: '17px' }}>Useful links:</h4>
      <ul className='links '>
        <li className='link' >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li className='link' >
          <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>
        </li>
        <li className='link' >
          <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">Google Fonts</a>
        </li>
        <li className='link' >
          <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a>
        </li>
        <li className='link' >
          <a href="https://realtimecolors.com" target="_blank" rel="noopener noreferrer">Realtime Colors</a>
        </li>
        <li className='link' >
          <a href=" https://www.typewolf.com/" target="_blank" rel="noopener noreferrer">Typewolf</a>
        </li>
       
 
      
      </ul>
    </div>
  )
}

export default UsefulLinks;
