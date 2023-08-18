import React from 'react';
import { ReactComponent as TrendingFlat } from './svg/trending_flat.svg';
import { ReactComponent as Mail } from './svg/mail.svg';
import './RequestBtn.css';

const RequestBtn = ({navbarButton, navbarSvg, isDesktop, style}) => {

  const email = 'roniebenitez01@gmail.com';
  const subject = 'Request Project';
  const handleClick = () => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div style={style} className='request_btn_container'>
           <b className='request_btn'
            style={navbarButton}
            data-copy-text='roniebenitez01@gmail.com'
             onClick={handleClick}>
          Request Project 
        
          <div className='svg_container'
          style={navbarSvg}> 
          <Mail className='mail_svg'/>
          <TrendingFlat className='trendingflat_svg'/></div>
        </b>
    </div>
  )
}

export default RequestBtn