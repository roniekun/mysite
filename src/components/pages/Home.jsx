import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Footer';
import './styles/Home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import MagneticEffect from '../../assets/MagneticEffect/MagneticEffect';

const Home = ({ setShowNavbar, isSmallScreen }) => {
  
  const heroTexts = ' Transforming Visions into Digital Masterpiece-';
  const heroTextWords = heroTexts.split('-');

  const techRef = useRef(null);
  const techaH1Ref = useRef(null);
  const techbH1Ref = useRef(null);
  const techcH1Ref = useRef(null);
  const techdH1Ref = useRef(null);
  const techeH1Ref = useRef(null);
  const techfH1Ref = useRef(null);

  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);
  const dRef = useRef(null);
  const eRef = useRef(null);
  const fRef = useRef(null);
  const gRef = useRef(null);
  const hRef = useRef(null);
  const iRef = useRef(null);

  const aboutRef = useRef(null);
  const emailRef = useRef(null);
  const bgHeroRef = useRef(null);
  const heroContainerRef = useRef(null);
  const heroTextRefs = heroTextWords.map(() => useRef(null));
  const [fontSize, setFontSize] = useState();
  const sliderRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroTitleRefs = useRef(null);
  const firstText = useRef(null);
  const oneRef = useRef(null);
  const pContainerRef = useRef(null);
  const secondText = useRef(null);
  const spacerRef = useRef(null);
  const thirdText = useRef(null);
  const typingRef = useRef(null);
  const forthText = useRef(null);

  // SCROLL TRIGGER CONFIG
  const createScrollTriggerAnimation = (element) => {
    gsap.fromTo(element, {
      opacity: 0,
    },
    {opacity:1, x: 0,duration: 1,
      scrollTrigger: {
      trigger: element,
      start: '-100% center', // Adjust the trigger start point as needed
      end: 'center center',
      ease: 'linear', // Adjust the trigger end point as needed
    }, });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = heroContainerRef.current;
    const bg = bgHeroRef.current;
    const typing =typingRef.current;
    const one =oneRef.current;
    const p =pContainerRef.current;
    const tl = gsap.timeline();
    const title = heroTitleRefs.current;
    const slider = sliderRef.current;
    const about= aboutRef.current;

// ScrollTrigger for background image
    gsap.to(bg, {
      y: 100,
      scrollTrigger: {
        trigger: container,
        start: 'top top', // Adjust as needed
        end: 'bottom top', // Adjust as needed
        scrub: true,
      },
    });

// ONE ANIMATION // ONE ANIMATION // ONE ANIMATION // ONE ANIMATION // ONE ANIMATION

    gsap.to(typing, {
      x: '5%', opacity:1,

      scrollTrigger: {
        trigger: one,
        start: 'top center', // Adjust as needed
        end: 'bottom top', // Adjust as needed
      },
    });

    gsap.to(p, {
      opacity:1,
      duration: 1,
      scrollTrigger: {
        trigger:  one,
        start: 'top center', // Adjust as needed
        end: 'top top', // Adjust as needed
        scrub: true,
      },
    });


// HERO TIMELINE // HERO TIMELINE // HERO TIMELINE // HERO TIMELINE // HERO TIMELINE

    gsap.set(slider,{ y: 300 })
    gsap.set(about,{ y:  -220  })

    tl.fromTo(bg, {scale: 1.1}, {scale: 1},);
 
    tl.fromTo(
        title,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
  
    tl.to(slider, { opacity: 1 });

   
    heroTextRefs.forEach((heroTextRef) => {
      tl.fromTo(
        heroTextRef.current,
        {
          y: 10,
        },
        {
          y: 0,
          opacity: 1,
        })
    });

        tl.fromTo(emailRef.current, {
          opacity: 0,
        },
        {opacity: 1},'-=.7');
   
// TEXTSLIDER // TEXTSLIDER // TEXTSLIDER // TEXTSLIDER // TEXTSLIDER // TEXTSLIDER 

      let xPercent = 0;
      let xPercent2 = 0;
  
     const animate1 = () => {
      if (xPercent > 0) {
        xPercent = -100;
      }
  
      gsap.set(firstText.current, { x: xPercent });
      gsap.set(secondText.current, { x: xPercent });
      requestAnimationFrame(animate1);
      xPercent += 0.5;
    };
  
    const animate2 = () => {
      if (xPercent2 < -100) {
        xPercent2 = 0;
      }
  
      gsap.set(thirdText.current, { xPercent: xPercent2 });
      gsap.set(forthText.current, { xPercent: xPercent2 });
      requestAnimationFrame(animate2);
      xPercent2 -= 0.05;
    };
  
      gsap.set(secondText.current, { left: secondText.current.getBoundingClientRect().width });
      requestAnimationFrame(animate1);
      gsap.set(forthText.current, { left: forthText.current.getBoundingClientRect().width });
      requestAnimationFrame(animate2);


// TECH SLIDES ANIMATION // TECH SLIDES ANIMATION // TECH SLIDES ANIMATION // TECH SLIDES ANIMATION

      const elements = [
        aRef.current,
        bRef.current,
        cRef.current,
        dRef.current,
        eRef.current,
        fRef.current,
        gRef.current,
        hRef.current,
        iRef.current,
      ];
    
      elements.forEach((element) => {
          createScrollTriggerAnimation(element);
      });

  }, []);
    
  // DYNAMIC FONT SIZE   // DYNAMIC FONT SIZE   // DYNAMIC FONT SIZE   // DYNAMIC FONT SIZE

   const calculateFontSize = () => {
    const newFontSize = isSmallScreen ? '17' : window.innerWidth / 32;
    setFontSize(newFontSize);
  };

  useEffect(() => {
    calculateFontSize();
    window.addEventListener('resize', calculateFontSize);

    return () => {
      window.removeEventListener('resize', calculateFontSize);
    };
  }, [window.innerWidth]);

  // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG

  const email = 'roniebenitez01@gmail.com';
  const subject = 'Project Request';

  const handleClick = () => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="home_container">
      <div className="content">
        <div ref={heroContainerRef} className="hero_container">
          
          {/* <img ref={bgHeroRef} className="hero_image" src="images/bg-container.webp" /> */}
        
          <div ref={heroContentRef} className="hero_content">
            <div style={{ overflow: 'hidden' }}>
              <h1 ref={heroTitleRefs} className="hero_title">
              Elevate Your Visual Journey
              </h1>
            </div>
            <div style={{overflow: 'hidden'}} className="herotext_container">
              {heroTextWords.map((word, index) => (
                <div style={{overflow: 'hidden'}} key={index} ref={heroTextRefs[index]} className="hero_text">
                  {word}</div>
              ))}
            </div>
            <div className='hero_nav' ref={emailRef}> 
            <button onClick={handleClick} className="hero_email">
              Start a project request
            </button>
           </div>
           <div className='hero_image_container'>
           <img src=""className='hero_image' />
           </div>
           
          </div>
          <div ref={sliderRef} className="textslider_wrapper">
            <div ref={sliderRef} className="textslider_container">
              <h1 className="bg_text" ref={firstText} style={{ fontSize: `${fontSize}px` }}>

              </h1>
              <h1 className="bg_text" ref={secondText} style={{ fontSize: `${fontSize}px` }}>
                
              </h1>
            </div>
            <div className="textslider_container">
              <h1 className="bg_text2" ref={thirdText} style={{ fontSize: `${fontSize}px` }}>
              - rk - Web Development & Photography - rk - Web Development & Photography - rk - Web Development & Photography
              </h1>
              <h1 className="bg_text2" ref={forthText} style={{ fontSize: `${fontSize}px` }}>
              - rk - Web Development & Photography - rk - Web Development & Photography - rk - Web Development & Photography
              </h1>
            </div>
          </div>
        </div>

        <div ref={oneRef} className="one">
        <div  className='one_title_wrapper'><h2>Web Development</h2> </div>

          <div ref={pContainerRef} className='p_container'>
          <p>
            Specialize in creating stunning website landing pages and portfolios that showcase your 
            <strong> unique brand </strong> and captivate your audience. 
          </p>
          </div>
          <img ref={typingRef} className='gif_typing'src="images/typing.gif" alt="GIF" />
          <p>With my expertise in web development and content creation, I help businesses and
            individuals establish a strong online presence that leaves a lasting impression.</p>
        </div>

        {/* <div className="two">
          <h2>Services</h2>
          <div className='slides_services'>
            <div className='p_container2'>
            <h3>Website Landing Pages</h3>
           <p>Crafts visually appealing and user-friendly landing pages that effectively communicate your message and drive conversions. 
            Whether you're launching a new product, promoting a service, or running a campaign, our landing pages will capture your audience's attention and generate measurable results.</p>
            </div>
          <div className='p_container2'>  
          <h3>Portfolio Creation</h3>
          <p>Stand out from the competition with a professionally designed portfolio that showcases your skills, 
            projects, and accomplishments. Tailor each portfolio to reflect your personal brand or company image,
            ensuring it leaves a memorable impact on potential clients and employers.</p>
          </div>
          </div>
        </div> */}
         <div className='three'></div>
         <div className='four'>

         <div ref={aRef}><h1>Visual Studio</h1></div>
         <div ref={bRef}><h1>Npm</h1></div>
         <div ref={cRef}><h1>Git</h1></div>
          <div ref={dRef}><h1>css</h1></div>
          <div ref={eRef}><h1>html</h1></div>
          <div ref={fRef}><h1>react</h1></div>
          <div ref={gRef}><h1>tailwind</h1></div>
          <div ref={hRef}><h1>gsap</h1></div>

         </div>
      </div>

      <Footer isSmallScreen={isSmallScreen} setShowNavbar={setShowNavbar} />
    </div>
  );
};

export default Home;
