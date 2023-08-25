import React, { useState } from 'react'; // Import useState
import './Socials.css';
import { ReactComponent as FacebookIcon } from './svg/facebook.svg';
import { ReactComponent as InstagramIcon } from './svg/instagram.svg';
import { ReactComponent as TiktokIcon } from './svg/tiktok.svg';
// import { ReactComponent as GithubIcon } from './svg/github.svg';
// import { ReactComponent as LinkedinIcon } from './svg/linkedin.svg';
import { ThemeContext } from '../../../../context/ThemeContext';

const Socials = ({ 
                      displayNames, 
                      displayHandles, 
                      displayIcons, 
                      navSocialLink,
                      contactContainer,
                      contactSocialLink,
                      contactIconContainer,
                      footerIconContainer,
                      footerContainer,
                      footerSocialLink

                }) => {

  const [hoveredLink, setHoveredLink] = useState(null); 

  const socialMediaLinks = [
    
    { name: 'Facebook', fill: '#1877F2', icon: <FacebookIcon />, url: 'https://www.facebook.com/', userhandle: '' },
    { name: 'Tiktok', fill: '#000000', icon: <TiktokIcon/>, url: 'https://www.tiktok.com/', userhandle: '' },
    { name: 'Instagram', fill: '#E4405F', icon: <InstagramIcon />, url: 'https://www.instagram.com/', userhandle: '' },
  ];

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className='social_links_container' style={{...contactContainer,...footerContainer}}>
          {socialMediaLinks.map((link) => (
            <div         
              style={{ ...contactIconContainer,...footerIconContainer}} 
              key={link.name}
              className='icon_container'>  
                <a
                  id={`component-${theme}`}
                  href={link.url}
                  key={link.name}
                  target="_blank"
                  style={{
                    ...footerSocialLink,
                    ...navSocialLink,
                    ...contactSocialLink,
                  }}
                  // onMouseEnter={() => setHoveredLink(link.name)} 
                  // onMouseLeave={() => setHoveredLink(null)}
                  className='social_link'
                  rel="noopener noreferrer">
                   {displayNames &&link.name}
                  {displayIcons && link.icon}
                  {displayHandles && link.userhandle}
                </a>
            </div>
          ))}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Socials;
