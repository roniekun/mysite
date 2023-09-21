import React from 'react';
import styles from './styles/Footer.module.css';
import NavbarLinks from './pages/Navlinks';
import Socials from '../assets/icons/Socials';
// import SiteLogo from './SiteLogo';

const Footer = ({setShowNavbar, isSmallScreen}) => {
  return (

    <div className={styles.footerContainer}>
      <div  className={styles.footerCtaContainer}>
      <h2>Your website, your brand's canvas – Let's paint your online masterpiece today!</h2>
      <a href="">roniebenitez01@gmail.com</a>
      </div>
      <div className={styles.footerLinksWrapper}>
 
      <div className={styles.toolsContainer}>
        <h3> USEFUL TOOLS</h3>
        <li className={styles.link} >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li className={styles.link}>
          <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>
        </li>
        <li className={styles.link} >
          <a href=" https://www.typewolf.com/" target="_blank" rel="noopener noreferrer">Typewolf</a>
        </li>
        <li className={styles.link}>
          <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">Google Fonts</a>
        </li>
        <li className={styles.link} >
          <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a>
        </li>
        <li className={styles.link} >
          <a href="https://realtimecolors.com" target="_blank" rel="noopener noreferrer">Realtime Colors</a>
        </li>
       
    </div>

      <div className={styles.footerNavContainer}>
        <h2>menu</h2>
        <NavbarLinks 
        setShowNavbar={setShowNavbar}
        footerContainer={{flexDirection: 'column',
                        display: 'flex',
                        paddingInline: '0',
                        alignItems: 'flex-start',
                        rowGap: '0'
                        }}
        footerNavbarLink={{fontSize: '16px', 
                        fontWeight: '400',
                        textTransform: 'capitalize',
                        lineHeight: '1.5em'
                        }}
        footerNavbarWrapper={{paddingBlock: '0', padding:'0', marginInline: '0' }}/>
      </div>

      <div className={styles.footerSocialContainer}>
      <h2>Connect</h2>
      <Socials 
      displayNames={true} 
      // displayIcons={isSmallScreen? true : false}
      footerIconContainer={{
                            }}
      footerSocialLink={{fill: 'gray',
                          fontSize: '16px',
                          textTransform: 'capitalize',
                          
                          }}
      footerContainer={{ flexDirection: 'column', 
                          alignItems: 'flex-end',
                         }}/></div>
      <div className={styles.footerTextWrapper}>
      <h2 style={{fontWeight: '700', textAlign: 'center'}}>ALL RIGHTS RESERVED 2023</h2>
      <h4>www.buildbyrk.com</h4>
      {/* <SiteLogo 
      setShowNavbar={setShowNavbar}/> */}
      <h4>version 1.1</h4>
      <a style={{textDecoration: 'none', color: 'black'}} href="#">developed by roniekun </a>
     </div>
      </div>
     
    </div>
  )
}

export default Footer