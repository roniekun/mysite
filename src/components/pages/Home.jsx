import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Footer';
import './styles/Home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = ({ setShowNavbar, isSmallScreen }) => {
  const heroTexts = ' Transforming Visions into- Digital Masterpiece';
  const heroTextWords = heroTexts.split('-');

  const bgHeroRef = useRef(null);
  const heroContainerRef = useRef(null);
  const heroTextRefs = heroTextWords.map(() => useRef(null));
  const [fontSize, setFontSize] = useState();
  const sliderRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroTitleRefs = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const forthText = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = heroContainerRef.current;
    const slider = sliderRef.current;
    const bg = bgHeroRef.current;

    gsap.to(slider, {
      y: 10,
      scrollTrigger: {
        trigger: container,
        start: 'top top', // Adjust as needed
        end: 'bottom top', // Adjust as needed
        scrub: true,
      },
    });

    gsap.to(bg, {
      y: 100,
      scrollTrigger: {
        trigger: container,
        start: 'top top', // Adjust as needed
        end: 'bottom top', // Adjust as needed
        scrub: true,
      },
    });
  }, []);

  let xPercent = 0;
  let xPercent2 = 0;

  useEffect(() => {
    const tl = gsap.timeline();
    const title = heroTitleRefs.current;
    const slider = sliderRef.current;
    const bg = bgHeroRef.current;

    tl.fromTo(bg, {scale: 1.1}, {scale: 1});
    tl.to(slider, { opacity: 1 });

    tl.fromTo(
      title,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );

    heroTextRefs.forEach((heroTextRef) => {
      tl.fromTo(
        heroTextRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        '-=0.5'
      );
    });

    gsap.set(secondText.current, { left: secondText.current.getBoundingClientRect().width });
    requestAnimationFrame(animate1);
    gsap.set(forthText.current, { left: forthText.current.getBoundingClientRect().width });
    requestAnimationFrame(animate2);
  }, []);

  const animate1 = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate1);
    xPercent += 0.01;
  };

  const animate2 = () => {
    if (xPercent2 < -100) {
      xPercent2 = 0;
    }

    gsap.set(thirdText.current, { xPercent: xPercent2 });
    gsap.set(forthText.current, { xPercent: xPercent2 });
    requestAnimationFrame(animate2);
    xPercent2 -= 0.1;
  };

  const calculateFontSize = () => {
    const newFontSize = isSmallScreen ? '126' : window.innerWidth / 32;
    setFontSize(newFontSize);
  };

  useEffect(() => {
    calculateFontSize();
    window.addEventListener('resize', calculateFontSize);

    return () => {
      window.removeEventListener('resize', calculateFontSize);
    };
  }, [window.innerWidth]);

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
          <img ref={bgHeroRef} className="hero_image" src="images/bg-container.webp" />
          <div ref={heroContentRef} className="hero_content">
            <div style={{ overflow: 'hidden' }}>
              <h1 ref={heroTitleRefs} className="hero_title">
                UNLOCK YOUR <br /> <span>VISUAL STORY</span>
              </h1>
            </div>
            <div className="herotext_container">
              {heroTextWords.map((word, index) => (
                <div key={index} ref={heroTextRefs[index]} className="hero_text">
                  {word}
                </div>
              ))}
            </div>
            <a onClick={handleClick} className="email">
              Start a project request
            </a>
          </div>
          <div ref={sliderRef} className="textslider_wrapper">
            <div ref={sliderRef} className="textslider_container">
              <h1 className="bg_text" ref={firstText} style={{ fontSize: `${fontSize}px` }}>
                - Freelance Web Development & Photography - Freelance Web Development & Photography
              </h1>
              <h1 className="bg_text" ref={secondText} style={{ fontSize: `${fontSize}px` }}>
                - Freelance Web Development & Photography - Freelance Web Development & Photography
              </h1>
            </div>
            <div className="textslider_container">
              <h1 className="bg_text2" ref={thirdText} style={{ fontSize: `${fontSize}px` }}>
                - Freelance Web Developer - Freelance Web Developer - Freelance Web Developer
              </h1>
              <h1 className="bg_text2" ref={forthText} style={{ fontSize: `${fontSize}px` }}></h1>
            </div>
          </div>
        </div>

        <div className="one">
          <p>
            Specialize in creating stunning website landing pages and portfolios that showcase your unique brand and
            captivate your audience. With my expertise in web design and content creation, I help businesses and
            individuals establish a strong online presence that leaves a lasting impression.
          </p>
        </div>

        <div className="two"></div>
      </div>

      <Footer isSmallScreen={isSmallScreen} setShowNavbar={setShowNavbar} />
    </div>
  );
};

export default Home;
