import React, { useState } from 'react'; // Import useState
import './Socials.css';
import { ReactComponent as FacebookIcon } from './svg/facebook.svg';
import { ReactComponent as InstagramIcon } from './svg/instagram.svg';
import { ReactComponent as TiktokIcon } from './svg/tiktok.svg';
import { ReactComponent as GithubIcon } from './svg/github.svg';
import { ReactComponent as LinkedinIcon } from './svg/linkedin.svg';
import { ThemeContext } from '../../context/ThemeContext';
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
                      footerSocialLink,
                      headerIconContainer,
                      headerSocialLink,

                }) => {

  const [hoveredLink, setHoveredLink] = useState(null); 

  const socialMediaLinks = [
    { name: 'Github', fill: '#E4405F', icon: <GithubIcon />, url: 'https://www.github.com/roniekun', userhandle: '' },
    { name: 'Facebook', fill: '#1877F2', icon: <FacebookIcon />, url: 'https://www.facebook.com/ronieuxjpg', userhandle: '' },
    { name: 'Instagram', fill: '#E4405F', icon: <InstagramIcon />, url: 'https://www.instagram.com/ronieuxjpg', userhandle: '' },
    { name: 'LinkedIn', fill: '#E4405F', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/roniebenitez', userhandle: '' },
  ];

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className='social_links_container' style={{...contactContainer,...footerContainer}}>
          {socialMediaLinks.map((link) => (
            <div         
              style={{ ...contactIconContainer,...footerIconContainer,...headerIconContainer}} 
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
                    ...headerSocialLink
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
