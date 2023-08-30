const firstText = useRef(null);
const secondText = useRef(null);


let xPercent = 0;
let xPercent2 = 0;

useEffect( () => {
    gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
    requestAnimationFrame(animate1);
      gsap.set(forthText.current, {left: forthText.current.getBoundingClientRect().width})
    requestAnimationFrame(animate2);
  }, [])

  const animate1 = () => {
    if(xPercent > 0){
      xPercent = -100;
    }
  
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate1);
    xPercent += 0.1;
  }
  
  const animate2 = () => {
    if(xPercent2 < -100){
      xPercent2 = 0;
    }
  
    gsap.set(thirdText.current, {xPercent: xPercent2})
    gsap.set(forthText.current, {xPercent: xPercent2})
    requestAnimationFrame(animate2);
    xPercent2 -= 0.1;
  }
  
  